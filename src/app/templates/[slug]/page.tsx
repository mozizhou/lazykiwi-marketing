import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getTemplatePage } from "@/demo/data/templatePages";
import { getSeoOverride } from "@/lib/seo/service";
import { getTemplatePageContent } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { templateCountLabel } from "@/lib/seo/siteStats";
import { pageExists } from "@/lib/seo/pageExists";

type TemplatePageProps = {
  params: Promise<{ slug: string }>;
};

function heroBlockData(blocks: { type: string; data?: Record<string, unknown> }[]) {
  const hero = blocks.find((b) => b.type === "hero");
  return (hero?.data || {}) as { title?: string; description?: string; image?: string; image_after?: string };
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!(await pageExists("template", slug))) {
    return { title: "Page Not Found | LazyKiwi", robots: { index: false, follow: false } };
  }

  const dbPage = await getTemplatePageContent(slug);
  const staticData = getTemplatePage(slug) as
    | { template_name?: string; hero?: { title?: string; description?: string; image_after?: string } }
    | null;

  const hero = dbPage ? heroBlockData(dbPage.blocks) : null;
  const name = hero?.title || dbPage?.name || staticData?.template_name || staticData?.hero?.title;
  const title = name ? `${name} Template | LazyKiwi` : "Templates | LazyKiwi";
  const description =
    hero?.description ||
    staticData?.hero?.description ||
    `Start from ${templateCountLabel} ready-made AI video and image templates and customize them in seconds.`;
  const image = hero?.image || hero?.image_after || staticData?.hero?.image_after;

  const override = await getSeoOverride(`template:${slug}`);
  return buildMetadata(override, {
    title,
    description,
    canonical: `https://lazykiwi.ai/templates/${slug}`,
    image,
  });
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  if (!(await pageExists("template", slug))) notFound();

  const dbPage = await getTemplatePageContent(slug);
  return (
    <DemoSitePage
      kind="template"
      slug={slug}
      blocks={dbPage?.blocks ?? null}
      name={dbPage?.name}
      templateType={dbPage?.templateType}
    />
  );
}
