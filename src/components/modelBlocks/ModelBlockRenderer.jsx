import ModelHero from "@/demo/components/models/ModelHero";
import ModelSteps from "@/demo/components/models/ModelSteps";
import ModelCapabilities from "@/demo/components/models/ModelCapabilities";
import ModelShowcase from "@/demo/components/models/ModelShowcase";
import ModelSpecs from "@/demo/components/models/ModelSpecs";
import ModelComparison from "@/demo/components/models/ModelComparison";
import ModelScenarios from "@/demo/components/models/ModelScenarios";
import ModelCTA from "@/demo/components/models/ModelCTA";
import LandingFAQ from "@/demo/components/landing/LandingFAQ";
import JsonLd from "@/demo/components/common/JsonLd";
import { getModelGeneratorHref } from "@/demo/utils/modelGeneratorLink";

const ORIGIN = "https://lazykiwi.ai";

/**
 * Converts a legacy structured model doc into an ordered block list. Kept in sync
 * with the admin editor's converter.
 */
export function modelToBlocks(doc) {
  if (!doc) return [];
  if (Array.isArray(doc.blocks)) return doc.blocks;
  const b = [];
  if (doc.hero && (doc.hero.name || doc.hero.headline)) b.push({ type: "hero", data: doc.hero });
  if (doc.steps?.items?.length) b.push({ type: "steps", data: doc.steps });
  if (doc.capabilities?.items?.length) b.push({ type: "capabilities", data: doc.capabilities });
  if (doc.showcase?.items?.length) b.push({ type: "showcase", data: doc.showcase });
  if (doc.specs?.rows?.length) b.push({ type: "specs", data: doc.specs });
  if (doc.comparison?.rows?.length) b.push({ type: "comparison", data: doc.comparison });
  if (doc.scenarios?.items?.length) b.push({ type: "scenarios", data: doc.scenarios });
  if (doc.faq?.length) b.push({ type: "faq", data: doc.faq });
  if (doc.bottomCta && (doc.bottomCta.title || doc.bottomCta.description)) b.push({ type: "bottomCta", data: doc.bottomCta });
  return b;
}

export default function ModelBlockRenderer({ blocks, meta, slug }) {
  const list = Array.isArray(blocks) ? blocks : [];
  const type = meta?.parentFeature === "image-generator" ? "Image" : "Video";
  const generatorHref = getModelGeneratorHref(slug, type);

  const heroData = list.find((b) => b?.type === "hero")?.data || {};

  const stepsData = list.find((b) => b?.type === "steps")?.data;
  const showcaseData = list.find((b) => b?.type === "showcase")?.data;
  const faqData = list.find((b) => b?.type === "faq")?.data;

  const primaryCta = heroData.primaryCta || stepsData?.cta || showcaseData?.cta || {
    label: `Try ${heroData.name || slug} free`,
    link: generatorHref,
  };

  const enhanceHero = (data) => ({
    ...data,
    primaryCta,
    secondaryCta: data.secondaryCta || null,
    media: { ...(data.media || {}), meta: data.media?.meta || `${type} model` },
    trust: data.trust || null,
  });
  const enhanceBottomCta = (data) => ({
    ...data,
    buttonText: data.buttonText || primaryCta.label,
    buttonLink: data.buttonLink || primaryCta.link || generatorHref,
  });

  const graph = [
    {
      "@type": "SoftwareApplication",
      name: `${heroData.name || slug} — LazyKiwi`,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: `${ORIGIN}/models/${slug}`,
      description: meta?.seo?.description || "",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ];
  if (faqData?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
      {list.map((block, i) => {
        const data = block?.data;
        const key = block?.id || `${block?.type}-${i}`;
        switch (block?.type) {
          case "hero":
            return <ModelHero key={key} data={enhanceHero(data || {})} />;
          case "steps":
            return <ModelSteps key={key} data={data} resolveCtaHref={getModelGeneratorHref} />;
          case "capabilities":
            return <ModelCapabilities key={key} data={data} />;
          case "showcase":
            return <ModelShowcase key={key} data={data} />;
          case "specs":
            return <ModelSpecs key={key} data={data} />;
          case "comparison":
            return <ModelComparison key={key} data={data} />;
          case "scenarios":
            return <ModelScenarios key={key} data={data} />;
          case "faq":
            return <LandingFAQ key={key} data={data} />;
          case "bottomCta":
            return <ModelCTA key={key} data={enhanceBottomCta(data || {})} />;
          default:
            return null;
        }
      })}
    </article>
  );
}
