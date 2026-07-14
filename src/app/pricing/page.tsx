import type { Metadata } from "next";
import { DemoPricing } from "@/components/demo/DemoPricing";
import { getSeoOverride } from "@/lib/seo/service";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("pricing");
  return buildMetadata(override, {
    title: "Pricing - LazyKiwi",
    description:
      "Simple, credit-based pricing for AI image and video generation. Choose the plan that fits your creative workflow.",
    canonical: "https://lazykiwi.ai/pricing",
  });
}

export default function PricingPage() {
  return <DemoPricing />;
}
