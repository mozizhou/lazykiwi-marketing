import type { Metadata } from "next";
import { DemoLanding } from "@/components/demo/DemoLanding";
import { getSeoOverride } from "@/lib/seo/service";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("home");
  return buildMetadata(override, {
    title: "LazyKiwi - AI Image & Video Creation Workspace",
    description:
      "Create studio-quality AI images and videos in minutes. Text-to-video, image-to-video, 300+ templates and effects.",
    canonical: "https://lazykiwi.ai/",
  });
}

export default function HomePage() {
  return <DemoLanding />;
}
