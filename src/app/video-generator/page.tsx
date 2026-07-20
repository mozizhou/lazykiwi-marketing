import type { Metadata } from "next";
import { DemoGeneratorPage } from "@/components/demo/DemoGeneratorPage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

type GeneratorPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("video-generator");
  return buildMetadata(override, {
    title: "AI Video Generator — Text & Image to Video | LazyKiwi",
    description:
      "Create AI videos from text or a single image with Sora 2, Veo 3, Kling, and more — all in the LazyKiwi workbench.",
    canonical: "https://lazykiwi.ai/video-generator",
  });
}

export default async function VideoGeneratorPage({ searchParams }: GeneratorPageProps) {
  const params = (await searchParams) || {};
  const mode = typeof params.mode === "string" ? params.mode : undefined;
  return <DemoGeneratorPage kind="video" mode={mode} />;
}
