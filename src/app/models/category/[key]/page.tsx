import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

const MODEL_CATEGORIES = [
  { key: "video", label: "Video Models" },
  { key: "image", label: "Image Models" },
] as const;

type ModelCategoryPageProps = {
  params: Promise<{ key: string }>;
};

export async function generateMetadata({ params }: ModelCategoryPageProps): Promise<Metadata> {
  const { key } = await params;
  const category = MODEL_CATEGORIES.find((item) => item.key === key);
  if (!category) {
    return { title: "Page Not Found | LazyKiwi", robots: { index: false, follow: false } };
  }

  const override = await getSeoOverride(`models-category:${key}`);
  return buildMetadata(override, {
    title: `${category.label} | LazyKiwi`,
    description: `Explore LazyKiwi ${category.label.toLowerCase()} and run them in one workbench.`,
    canonical: `https://lazykiwi.ai/models/category/${key}`,
  });
}

export default async function ModelCategoryPage({ params }: ModelCategoryPageProps) {
  const { key } = await params;
  const category = MODEL_CATEGORIES.find((item) => item.key === key);
  if (!category) notFound();

  return <DemoSitePage kind="models-category" categoryKey={key} />;
}
