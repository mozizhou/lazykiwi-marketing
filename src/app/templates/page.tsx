import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getSeoOverride } from "@/lib/seo/service";
import { listTemplatePages } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { templateCountLabel } from "@/lib/seo/siteStats";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("templates");
  return buildMetadata(override, {
    title: "Templates - LazyKiwi",
    description:
      `Start from ${templateCountLabel} ready-made AI video and image templates and customize them in seconds.`,
    canonical: "https://lazykiwi.ai/templates",
  });
}

export default async function TemplatesPage() {
  const extraTemplates = await listTemplatePages();
  return <DemoSitePage kind="templates-hub" extraTemplates={extraTemplates} />;
}
