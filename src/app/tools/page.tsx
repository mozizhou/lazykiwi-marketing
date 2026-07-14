import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getSeoOverride } from "@/lib/seo/service";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("tools");
  return buildMetadata(override, {
    title: "Free AI Photo Tools | LazyKiwi",
    description:
      "Explore LazyKiwi's free online AI photo tools — gender swap, AI outfit generator, photo colorizer, photo to sketch, anime avatar and more. Upload one photo, get results in seconds.",
    canonical: "https://lazykiwi.ai/tools",
  });
}

export default function ToolsHubPage() {
  return <DemoSitePage kind="tools-hub" />;
}
