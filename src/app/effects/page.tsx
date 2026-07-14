import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getSeoOverride } from "@/lib/seo/service";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("effects");
  return buildMetadata(override, {
    title: "AI Effects - LazyKiwi",
    description:
      "Browse viral AI video effects. Turn your photos into cinematic clips with one click.",
    canonical: "https://lazykiwi.ai/effects",
  });
}

export default function EffectsHubPage() {
  return <DemoSitePage kind="effects-hub" />;
}
