import type { Metadata } from "next";
import { DemoEffect } from "@/components/demo/DemoEffect";
import { effects } from "@/data/effects";
import { getSeoOverride } from "@/lib/seo/service";
import { buildMetadata } from "@/lib/seo/buildMetadata";

type EffectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return effects.map((effect) => ({ slug: effect.slug }));
}

export async function generateMetadata({ params }: EffectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const effect = effects.find((item) => item.slug === slug) as
    | { title?: string; description?: string }
    | undefined;
  const title = effect?.title ? `${effect.title} AI Effect | LazyKiwi` : "AI Effects | LazyKiwi";
  const description = effect?.description ||
    "Browse viral AI video effects. Turn your photos into cinematic clips with one click.";
  const override = await getSeoOverride(`effect:${slug}`);
  return buildMetadata(override, {
    title,
    description,
    canonical: `https://lazykiwi.ai/effects/${slug}`,
  });
}

export default async function EffectPage({ params }: EffectPageProps) {
  const { slug } = await params;

  return <DemoEffect slug={slug} />;
}
