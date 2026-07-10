import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getToolPage } from "@/demo/data/toolPages";
import { tools } from "@/demo/data/toolsList";

const ORIGIN = "https://lazykiwi.ai";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rich = getToolPage(slug) as
    | { seo_title?: string; seo_description?: string; hero?: { title?: string; image_after?: string; image_before?: string } }
    | null;
  const tool = tools.find((item) => item.slug === slug);

  const title =
    rich?.seo_title ||
    (tool ? `${tool.name} Online | LazyKiwi` : "AI Tools | LazyKiwi");
  const description =
    rich?.seo_description ||
    tool?.blurb ||
    "Free online AI photo tools by LazyKiwi — upload one photo and get results in seconds.";
  const url = `${ORIGIN}/tools/${slug}`;
  const image = rich?.hero?.image_after || rich?.hero?.image_before;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "LazyKiwi",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DemoSitePage kind="tool" slug={slug} />;
}
