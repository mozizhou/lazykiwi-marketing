import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";
import { getSeoOverride } from "@/lib/seo/service";
import { listCmsPages } from "@/lib/seo/templatePage";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("blog");
  return buildMetadata(override, {
    title: "Blog - LazyKiwi",
    description:
      "Tips, tutorials and product updates for AI image and video creation with LazyKiwi.",
    canonical: "https://lazykiwi.ai/blog",
  });
}

export default async function BlogHubPage() {
  const extra = await listCmsPages("blog");
  return <DemoSitePage kind="blog-hub" extra={extra} />;
}
