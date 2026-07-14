import { apiRequest } from "../api/client";

export type SubscriptionInfo = {
  planId: string | null;
  interval: string | null;
  status: string;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  currentPoints: number;
  planCredits: number | null;
  planName: string | null;
};

const PLAN_NAMES: Record<string, string> = {
  starter: "Starter",
  basic: "Basic",
  pro: "Pro",
  ultimate: "Ultimate",
};

function normalizeSubscription(data: Partial<SubscriptionInfo> | null): SubscriptionInfo {
  return {
    planId: data?.planId ?? null,
    interval: data?.interval ?? null,
    status: data?.status ?? "none",
    currentPeriodEnd: data?.currentPeriodEnd ?? null,
    cancelAtPeriodEnd: data?.cancelAtPeriodEnd ?? false,
    currentPoints: data?.currentPoints ?? 0,
    planCredits: data?.planCredits ?? null,
    planName: data?.planId ? PLAN_NAMES[data.planId] ?? data.planId : null,
  };
}

export type BillingStatus = {
  checkoutEnabled: boolean;
  devSimulateEnabled: boolean;
};

export type CatalogPlan = {
  code: string;
  name: string;
  badge: string | null;
  positioning: string | null;
  monthlyCredits: number | null;
  yearlyCredits: number | null;
  priceMonthlyAmount: number | null;
  priceYearlyAmount: number | null;
  currency: string | null;
  features: string[];
  parallelTasks: number | null;
  buttonText: string | null;
  sort: number | null;
};

export type CatalogCreditPack = {
  code: string;
  name: string;
  positioning: string | null;
  credits: number | null;
  priceOnetimeAmount: number | null;
  currency: string | null;
  features: string[];
  buttonText: string | null;
  sort: number | null;
};

export const billingService = {
  async getBillingStatus() {
    try {
      const data = await apiRequest<Partial<BillingStatus>>("/member/billing/status", { auth: false });
      return {
        checkoutEnabled: Boolean(data?.checkoutEnabled),
        devSimulateEnabled: Boolean(data?.devSimulateEnabled),
      };
    } catch {
      return {
        checkoutEnabled: false,
        devSimulateEnabled: false,
      };
    }
  },

  async startCheckout({ planId, interval, returnPath }: { planId: string; interval: "monthly" | "yearly"; returnPath?: string }) {
    const data = await apiRequest<{ redirectUrl: string }>("/member/billing/checkout", {
      method: "POST",
      body: {
        planId,
        interval,
        returnPath: returnPath ?? (typeof window !== "undefined"
          ? `${window.location.pathname}${window.location.search}`
          : "/pricing"),
      },
    });
    if (!data?.redirectUrl) {
      throw new Error("Checkout did not return a redirect URL.");
    }
    return { redirectUrl: data.redirectUrl };
  },

  async confirmCheckout(sessionId: string) {
    const data = await apiRequest<Partial<SubscriptionInfo>>("/member/billing/confirm-checkout", {
      method: "POST",
      body: { sessionId },
    });
    return normalizeSubscription(data);
  },

  async syncBilling() {
    const data = await apiRequest<Partial<SubscriptionInfo>>("/member/billing/sync", {
      method: "POST",
    });
    return normalizeSubscription(data);
  },

  async getCurrentSubscription() {
    try {
      const data = await apiRequest<Partial<SubscriptionInfo>>("/member/billing/subscription");
      return normalizeSubscription(data);
    } catch {
      return normalizeSubscription(null);
    }
  },

  async cancelRenewal() {
    await apiRequest("/member/billing/cancel-renewal", { method: "POST" });
  },

  async openCustomerPortal() {
    const data = await apiRequest<{ redirectUrl: string }>("/member/billing/portal", {
      method: "POST",
    });
    if (!data?.redirectUrl) {
      throw new Error("Customer portal did not return a redirect URL.");
    }
    return { redirectUrl: data.redirectUrl };
  },

  async simulatePaid({ planId, interval }: { planId: string; interval: "monthly" | "yearly" }) {
    const data = await apiRequest<Partial<SubscriptionInfo>>("/member/billing/dev/simulate-paid", {
      method: "POST",
      body: { planId, interval },
    });
    return normalizeSubscription(data);
  },

  async getPlans(): Promise<CatalogPlan[]> {
    try {
      const data = await apiRequest<CatalogPlan[]>("/ai/lazykiwi/catalog/plans", { auth: false });
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  },

  async getCreditPacks(): Promise<CatalogCreditPack[]> {
    try {
      const data = await apiRequest<CatalogCreditPack[]>("/ai/lazykiwi/catalog/credit-packs", { auth: false });
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  },
};
