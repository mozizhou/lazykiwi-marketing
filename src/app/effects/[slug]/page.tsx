import { DemoEffect } from "@/components/demo/DemoEffect";
import { effects } from "@/data/effects";

type EffectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return effects.map((effect) => ({ slug: effect.slug }));
}

export default async function EffectPage({ params }: EffectPageProps) {
  const { slug } = await params;

  return <DemoEffect slug={slug} />;
}
