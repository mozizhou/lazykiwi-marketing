import { DemoSitePage } from "@/components/demo/DemoSitePage";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  return <DemoSitePage kind="blog" slug={slug} />;
}
