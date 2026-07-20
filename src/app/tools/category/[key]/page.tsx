import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { toolCategories } from "@/demo/data/toolsList";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

type ToolCategoryPageProps = {
  params: Promise<{ key: string }>;
};

export async function generateMetadata({ params }: ToolCategoryPageProps): Promise<Metadata> {
  const { key } = await params;
  const category = toolCategories.find((item) => item.key === key);
  if (!category) {
    return { title: "Page Not Found | LazyKiwi", robots: { index: false, follow: false } };
  }

  const override = await getSeoOverride(`tools-category:${key}`);
  return buildMetadata(override, {
    title: `${category.label} AI Photo Tools | LazyKiwi`,
    description: `Browse LazyKiwi ${category.label.toLowerCase()} tools — upload one photo and get fast AI results online.`,
    canonical: `https://lazykiwi.ai/tools/category/${key}`,
  });
}

export default async function ToolCategoryPage({ params }: ToolCategoryPageProps) {
  const { key } = await params;
  const category = toolCategories.find((item) => item.key === key);
  if (!category) notFound();

  return <DemoSitePage kind="tools-category" categoryKey={key} />;
}
