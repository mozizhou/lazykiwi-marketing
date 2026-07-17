import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getBlogData } from "@/demo/data/blogPosts";
import { getSeoOverride } from "@/lib/seo/service";
import { getCmsPageContent } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dbPage = await getCmsPageContent("blog", slug);
  const data = (dbPage?.doc || getBlogData(slug)) as { seo?: { title?: string; description?: string }; header?: { title?: string; excerpt?: string } } | null;
  const title = data?.seo?.title || (data?.header?.title ? `${data.header.title} | LazyKiwi` : "Blog | LazyKiwi");
  const description = data?.seo?.description || data?.header?.excerpt ||
    "Tips, tutorials and product updates for AI image and video creation with LazyKiwi.";
  const override = await getSeoOverride(`blog:${slug}`);
  return buildMetadata(override, {
    title,
    description,
    canonical: `https://lazykiwi.ai/blog/${slug}`,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const dbPage = await getCmsPageContent("blog", slug);
  return <DemoSitePage kind="blog" slug={slug} dbData={dbPage?.doc ?? undefined} />;
}
