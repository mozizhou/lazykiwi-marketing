import type { Metadata } from "next";
import { DemoGeneratorPage } from "@/components/demo/DemoGeneratorPage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

type GeneratorPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("image-generator");
  return buildMetadata(override, {
    title: "AI Image Generator — Text to Image Online | LazyKiwi",
    description:
      "Generate AI images from text or templates with FLUX, Seedream, Nano Banana, and more in the LazyKiwi workbench.",
    canonical: "https://lazykiwi.ai/image-generator",
  });
}

export default async function ImageGeneratorPage({ searchParams }: GeneratorPageProps) {
  const params = (await searchParams) || {};
  const mode = typeof params.mode === "string" ? params.mode : undefined;
  return <DemoGeneratorPage kind="image" mode={mode} />;
}
