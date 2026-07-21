import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getSeoOverride } from "@/lib/seo/service";
import { listCmsPages } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("tools");
  return buildMetadata(override, {
    title: "Free AI Photo Tools | LazyKiwi",
    description:
      "Explore LazyKiwi's free online AI photo tools — hairstyle changer, hair color, photo restoration, upscaler, passport photo maker, face shape detector, and more. Upload one photo, get results in seconds.",
    canonical: "https://lazykiwi.ai/tools",
  });
}

export default async function ToolsHubPage() {
  const extra = await listCmsPages("tool");
  return <DemoSitePage kind="tools-hub" extra={extra} />;
}
