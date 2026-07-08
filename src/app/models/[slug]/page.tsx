import { DemoSitePage } from "@/components/demo/DemoSitePage";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ModelPage({ params }: ModelPageProps) {
  const { slug } = await params;
  return <DemoSitePage kind="model" slug={slug} />;
}
