import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { getModelData } from "@/demo/data/modelPages";
import { getSeoOverride } from "@/lib/seo/service";
import { getCmsPageContent } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { pageExists } from "@/lib/seo/pageExists";
import { resolveModelPageJsonLd } from "@/lib/seo/resolvePageJsonLd";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!(await pageExists("model", slug))) {
    return { title: "Page Not Found | LazyKiwi", robots: { index: false, follow: false } };
  }

  const dbPage = await getCmsPageContent("model", slug);
  const data = (dbPage?.doc || getModelData(slug)) as { seo?: { title?: string; description?: string }; hero?: { name?: string; tagline?: string } } | null;
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
  if (!(await pageExists("model", slug))) notFound();

  const dbPage = await getCmsPageContent("model", slug);
  const jsonLd = resolveModelPageJsonLd(slug, dbPage?.doc ?? null);

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <DemoSitePage kind="model" slug={slug} dbData={dbPage?.doc ?? undefined} />
    </>
  );
}
