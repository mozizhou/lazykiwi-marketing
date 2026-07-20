import ModelHero from "../components/models/ModelHero";
import ModelSteps from "../components/models/ModelSteps";
import ModelCapabilities from "../components/models/ModelCapabilities";
import ModelShowcase from "../components/models/ModelShowcase";
import ModelScenarios from "../components/models/ModelScenarios";
import ModelCTA from "../components/models/ModelCTA";
import ModelRelated from "../components/models/ModelRelated";
import ModelRelatedPosts from "../components/models/ModelRelatedPosts";
import LandingFAQ from "../components/landing/LandingFAQ";
import LandingAliases from "../components/landing/LandingAliases";
import JsonLd from "../components/common/JsonLd";
import { getEffectPremiumData } from "../data/effectPremiumPages";

const ORIGIN = "https://lazykiwi.ai";

function buildJsonLd(data) {
  const url = `${ORIGIN}/effects/${data.slug}`;
  const graph = [
    {
      "@type": "WebApplication",
      name: `${data.hero.name} — LazyKiwi`,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url,
      description: data.seo.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: (data.hero.breadcrumb || []).map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
      })),
    },
  ];
  if (data.steps?.items?.length) {
    graph.push({
      "@type": "HowTo",
      name: data.steps.title,
      step: data.steps.items.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.description,
      })),
    });
  }
  if (data.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export default function EffectPremiumPage({ slug }) {
  const data = getEffectPremiumData(slug);

  if (!data) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Effect Not Found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={buildJsonLd(data)} />
      <ModelHero data={data.hero} />
      <ModelSteps data={data.steps} />
      <ModelCapabilities data={data.capabilities} />
      <ModelShowcase data={data.showcase} />
      <ModelScenarios data={data.scenarios} />
      <LandingFAQ data={data.faq} />
      <ModelCTA data={data.bottomCta} />
      <ModelRelated data={data.related} />
      <ModelRelatedPosts data={data.relatedPosts} />
      <LandingAliases data={data.aliases} />
    </article>
  );
}
