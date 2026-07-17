import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getToolPage } from "@/demo/data/toolPages";
import { tools } from "@/demo/data/toolsList";
import { getSeoOverride } from "@/lib/seo/service";
import { getCmsPageContent } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";

const ORIGIN = "https://lazykiwi.ai";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dbPage = await getCmsPageContent("tool", slug);
  const rich = (dbPage?.doc || getToolPage(slug)) as
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
  const image = rich?.hero?.image_after || rich?.hero?.image_before || tool?.image;

  const override = await getSeoOverride(`tool:${slug}`);
  return buildMetadata(override, {
    title,
    description,
    canonical: url,
    image,
  });
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dbPage = await getCmsPageContent("tool", slug);
  return <DemoSitePage kind="tool" slug={slug} dbData={dbPage?.doc ?? undefined} />;
}
