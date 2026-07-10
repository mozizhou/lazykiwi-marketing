import React, { useEffect, useState } from 'react';
import { ArrowLeft, Check, Minus, X } from 'lucide-react';
import clsx from 'clsx';
import { PRICING_PLANS, PRICING_FAQS } from '../data/pricingData';
import { billingService } from '@/lib/billing/service';
import { notifyBillingUpdated } from '@/lib/billing/events';
import { authService } from '@/lib/auth/service';
import { userService } from '@/lib/user/service';

function sanitizeReturnPath(path) {
  if (!path || !path.startsWith('/') || path.startsWith('//') || path.includes('://')) {
    return '/pricing';
  }
  return path;
}

export default function Pricing({ navigateToPage, onRequireAuth }) {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [renewalCanceled, setRenewalCanceled] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [checkoutLoadingPlanId, setCheckoutLoadingPlanId] = useState(null);
  const [checkoutError, setCheckoutError] = useState('');
  const [billingStatus, setBillingStatus] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState('');

  const refreshBillingState = async () => {
    const [subscriptionData, profile] = await Promise.all([
      billingService.getCurrentSubscription().catch(() => null),
      authService.isAuthenticated() ? userService.getProfile().catch(() => null) : Promise.resolve(null),
    ]);
    if (subscriptionData) setSubscription(subscriptionData);
    if (profile?.point != null) setUserPoints(profile.point);
    else if (subscriptionData?.currentPoints != null) setUserPoints(subscriptionData.currentPoints);
    notifyBillingUpdated();
  };

  const getActionErrorMessage = (error, fallback) => {
    if (error?.code === 401 || error?.status === 401) {
      return 'Your session expired. Please log in again.';
    }
    return error?.message ?? fallback;
  };

  const handleAuthError = (error) => {
    if (error?.code === 401 || error?.status === 401) {
      onRequireAuth?.();
    }
  };

  useEffect(() => {
    billingService.getBillingStatus().then(setBillingStatus);
    billingService.getCurrentSubscription().then(setSubscription).catch(() => setSubscription(null));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const params = new URLSearchParams(window.location.search);
    const isSuccess = params.get('success') === 'true';
    const sessionId = params.get('session_id');
    const returnPath = sanitizeReturnPath(params.get('return'));
    if (!isSuccess || !authService.isAuthenticated()) return undefined;

    let cancelled = false;

    const finalizeCheckout = async () => {
      setCheckoutError('');
      try {
        if (sessionId) {
          const updated = await billingService.confirmCheckout(sessionId);
          if (!cancelled) setSubscription(updated);
        } else {
          const updated = await billingService.syncBilling();
          if (!cancelled) setSubscription(updated);
        }
        await refreshBillingState();
        if (!cancelled) {
          setCheckoutSuccess('Payment successful. Your credits have been updated.');
        }
      } catch (error) {
        if (!cancelled) {
          handleAuthError(error);
          setCheckoutError(getActionErrorMessage(error, 'Unable to confirm your payment.'));
        }
      } finally {
        if (returnPath === '/pricing') {
          window.history.replaceState({}, '', '/pricing');
        } else {
          window.location.replace(returnPath);
        }
      }
    };

    finalizeCheckout();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      setUserPoints(0);
      return;
    }
    userService.getProfile()
      .then((profile) => setUserPoints(profile?.point ?? 0))
      .catch(() => setUserPoints(0));
  }, []);

  useEffect(() => {
    if (!authService.isAuthenticated()) return undefined;
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') return undefined;
    if (sessionStorage.getItem('lazykiwi:billing-recovery') === '1') return undefined;

    let cancelled = false;
    billingService.syncBilling()
      .then(async (updated) => {
        if (cancelled) return;
        if (updated?.planId || (updated?.currentPoints ?? 0) > 0) {
          setSubscription(updated);
          await refreshBillingState();
          setCheckoutSuccess('Your subscription and credits have been synced.');
          sessionStorage.setItem('lazykiwi:billing-recovery', '1');
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (subscription?.cancelAtPeriodEnd) {
      setRenewalCanceled(true);
    }
  }, [subscription]);

  const currentPlanId = subscription?.planId ?? null;
  const interval = isYearly ? 'yearly' : 'monthly';
  const creditsRemaining = userPoints || subscription?.currentPoints || 0;
  const useDevSimulate = billingStatus?.devSimulateEnabled && !billingStatus?.checkoutEnabled;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCancelRenewal = async () => {
    try {
      await billingService.cancelRenewal();
      setRenewalCanceled(true);
      setShowCancelModal(false);
      const updated = await billingService.getCurrentSubscription();
      setSubscription(updated);
    } catch (error) {
      setCheckoutError(error?.message ?? 'Unable to cancel renewal.');
      setShowCancelModal(false);
    }
  };

  const handleDevSimulate = async (planId) => {
    if (!authService.isAuthenticated()) {
      onRequireAuth?.();
      return;
    }
    setCheckoutError('');
    setCheckoutLoadingPlanId(planId);
    try {
      const updated = await billingService.simulatePaid({ planId, interval });
      setSubscription(updated);
      await refreshBillingState();
      setCheckoutSuccess('Plan activated. Your credits have been updated.');
    } catch (error) {
      handleAuthError(error);
      setCheckoutError(getActionErrorMessage(error, 'Simulation failed.'));
    } finally {
      setCheckoutLoadingPlanId(null);
    }
  };

  const handleCheckout = async (planId) => {
    setCheckoutError('');
    if (!authService.isAuthenticated()) {
      onRequireAuth?.();
      return;
    }
    if (useDevSimulate) {
      await handleDevSimulate(planId);
      return;
    }
    setCheckoutLoadingPlanId(planId);
    try {
      const returnPath = `${window.location.pathname}${window.location.search}`;
      const { redirectUrl } = await billingService.startCheckout({ planId, interval, returnPath });
      window.location.href = redirectUrl;
    } catch (error) {
      handleAuthError(error);
      setCheckoutError(getActionErrorMessage(error, 'Unable to start checkout.'));
    } finally {
      setCheckoutLoadingPlanId(null);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    navigateToPage?.('landing', '/');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans text-gray-900">
      <div className="mx-auto flex max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-600 shadow-sm transition hover:border-gray-300 hover:text-gray-950"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Plans & Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto mb-10">
            Create faster with more credits, higher limits, priority access, and no-watermark exports.
          </p>
          <div className="mx-auto mb-8 w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm">
            Credits remaining: <span className="text-kiwi-green-dark">{creditsRemaining.toLocaleString()} Cr</span>
          </div>
          {useDevSimulate && (
            <p className="mx-auto mb-4 max-w-2xl text-sm text-amber-700">
              Local dev mode: Stripe is not configured, so Buy Now simulates payment and grants plan credits.
            </p>
          )}
          {checkoutSuccess && (
            <p className="mb-4 text-sm font-medium text-kiwi-green-dark">{checkoutSuccess}</p>
          )}
          {checkoutError && (
            <p className="mb-4 text-sm font-medium text-red-600">{checkoutError}</p>
          )}
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={clsx("text-sm font-bold", !isYearly ? "text-gray-900" : "text-gray-500")}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className={clsx(
                "relative w-14 h-8 rounded-full p-1 transition-colors focus:outline-none",
                isYearly ? "bg-kiwi-green-dark" : "bg-gray-200"
              )}
            >
              <div className={clsx(
                "w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-200",
                isYearly ? "translate-x-6" : "translate-x-0"
              )} />
            </button>
            <div className="flex items-center gap-3">
              <span className={clsx("text-sm font-bold", isYearly ? "text-gray-900" : "text-gray-500")}>Yearly</span>
              <span className="bg-kiwi-light-green text-kiwi-green-dark text-xs font-bold px-2.5 py-1 rounded-full border border-kiwi-green/20">
                Save up to 25%
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {PRICING_PLANS.map((plan) => {
              const isCurrentPlan = plan.id === currentPlanId;

              return (
                <div 
                  key={plan.id}
                  className={clsx(
                    "rounded-2xl border p-6 flex flex-col transition-transform hover:-translate-y-1 relative bg-white shadow-sm",
                    isCurrentPlan ? "border-kiwi-green-dark ring-2 ring-kiwi-green/30" :
                    plan.accentColor === 'purple' ? "border-kiwi-yellow ring-2 ring-kiwi-yellow/50" : 
                    plan.accentColor === 'orange' ? "border-amber-400 shadow-[0_4px_20px_rgba(251,191,36,0.15)]" : 
                    "border-gray-200"
                  )}
                >
                {isCurrentPlan && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-kiwi-green-dark px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white whitespace-nowrap">
                    Current Plan
                  </div>
                )}
                {plan.badge && (
                  <div className={clsx(
                    "absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap",
                    plan.badgeColor === 'purple' ? "bg-kiwi-yellow text-black" : 
                    plan.badgeColor === 'orange' ? "bg-amber-400 text-black" : ""
                  )}>
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1 mt-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-6 min-h-[32px]">{plan.positioning}</p>
                
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 font-medium">/mo</span>
                  {plan.price.originalMonthly && !isYearly && (
                    <span className="ml-2 text-sm text-gray-400 line-through">${plan.price.originalMonthly}</span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mb-6 font-medium">
                  {plan.credits}
                </div>
                
                <button
                  disabled={isCurrentPlan || checkoutLoadingPlanId === plan.id}
                  onClick={() => handleCheckout(plan.id)}
                  onContextMenu={(event) => {
                    if (!event.shiftKey) return;
                    event.preventDefault();
                    handleDevSimulate(plan.id);
                  }}
                  className={clsx(
                    "w-full py-2.5 px-4 rounded-xl font-bold transition-all mb-8 text-center text-sm",
                    isCurrentPlan && "cursor-default border border-kiwi-green/30 bg-kiwi-light-green text-kiwi-green-dark",
                    plan.buttonVariant === 'purple' && !isCurrentPlan && "bg-kiwi-yellow hover:bg-yellow-400 text-black",
                    plan.buttonVariant === 'orange' && !isCurrentPlan && "bg-amber-400 hover:bg-amber-500 text-black",
                    plan.buttonVariant === 'neutral' && !isCurrentPlan && "bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900"
                  )}
                >
                  {checkoutLoadingPlanId === plan.id
                    ? 'Processing...'
                    : isCurrentPlan
                      ? 'Current Plan'
                      : useDevSimulate
                        ? 'Simulate purchase'
                        : plan.buttonText}
                </button>
                
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check size={16} className="text-kiwi-green-dark shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.bottomNote && (
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <p className="text-[10px] text-gray-400 text-center leading-tight">
                      {plan.bottomNote}
                    </p>
                  </div>
                )}

                {isCurrentPlan && (
                  <button
                    type="button"
                    disabled={renewalCanceled}
                    onClick={() => setShowCancelModal(true)}
                    className={clsx(
                      "mt-4 w-full rounded-xl border px-4 py-2.5 text-xs font-bold transition",
                      renewalCanceled
                        ? "cursor-default border-gray-200 bg-gray-50 text-gray-400"
                        : "border-red-200 bg-white text-red-600 hover:bg-red-50"
                    )}
                  >
                    {renewalCanceled ? 'Renewal canceled' : 'Cancel renewal'}
                  </button>
                )}
              </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Payment Trust Row */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-500">
            Pay safely and securely with
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((method) => (
              <span 
                key={method}
                className="px-5 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 shadow-sm hover:border-gray-300 hover:shadow-md transition-all cursor-default"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {PRICING_FAQS.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all shadow-sm">
              <button
                className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="text-gray-400 shrink-0 ml-4">
                  {openFaqIndex === index ? <Minus size={20} /> : <Check size={20} className="opacity-0" />}
                </span>
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-3xl p-10 text-center text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to elevate your creations?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join thousands of creators using LazyKiwi to bring their imagination to life with unparalleled quality.
            </p>
            <button 
              type="button"
              onClick={() => navigateToPage?.('video-generator', '/video-generator')}
              className="bg-kiwi-yellow text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-400 transition shadow-lg"
            >
              Get Started Now
            </button>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-kiwi-green rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-kiwi-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </section>

      {showCancelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">Cancel renewal?</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  You will keep access to your Lite Plan until June 5, 2026.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close cancel renewal dialog"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Keep Plan
              </button>
              <button
                type="button"
                onClick={handleCancelRenewal}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Cancel renewal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
