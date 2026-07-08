import { DemoSitePage } from "@/components/demo/DemoSitePage";

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DemoSitePage kind="template" slug={slug} />;
}
