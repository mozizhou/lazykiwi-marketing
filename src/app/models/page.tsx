import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getSeoOverride } from "@/lib/seo/service";
import { listCmsPages } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("models");
  return buildMetadata(override, {
    title: "AI Models - LazyKiwi",
    description:
      "Explore the AI video and image models available on LazyKiwi, including Seedance, Veo, Kling and more.",
    canonical: "https://lazykiwi.ai/models",
  });
}

export default async function ModelsHubPage() {
  const extra = await listCmsPages("model");
  return <DemoSitePage kind="models-hub" extra={extra} />;
}
