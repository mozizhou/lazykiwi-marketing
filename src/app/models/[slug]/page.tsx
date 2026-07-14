import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getModelData } from "@/demo/data/modelPages";
import { getSeoOverride } from "@/lib/seo/service";
import { buildMetadata } from "@/lib/seo/buildMetadata";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getModelData(slug) as { seo?: { title?: string; description?: string }; hero?: { name?: string; tagline?: string } } | null;
  const title = data?.seo?.title || (data?.hero?.name ? `${data.hero.name} | LazyKiwi` : "AI Models | LazyKiwi");
  const description = data?.seo?.description || data?.hero?.tagline ||
    "Explore the AI video and image models available on LazyKiwi.";
  const override = await getSeoOverride(`model:${slug}`);
  return buildMetadata(override, {
    title,
    description,
    canonical: `https://lazykiwi.ai/models/${slug}`,
  });
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { slug } = await params;
  return <DemoSitePage kind="model" slug={slug} />;
}
