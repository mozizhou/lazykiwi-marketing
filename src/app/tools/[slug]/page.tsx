import { DemoSitePage } from "@/components/demo/DemoSitePage";

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DemoSitePage kind="tool" slug={slug} />;
}
