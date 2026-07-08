import { useEffect } from "react";
import ModelHero from "../components/models/ModelHero";
import ModelSteps from "../components/models/ModelSteps";
import ModelCapabilities from "../components/models/ModelCapabilities";
import ModelShowcase from "../components/models/ModelShowcase";
import ModelSpecs from "../components/models/ModelSpecs";
import ModelComparison from "../components/models/ModelComparison";
import ModelScenarios from "../components/models/ModelScenarios";
import ModelTestimonials from "../components/models/ModelTestimonials";
import ModelCTA from "../components/models/ModelCTA";
import ModelRelated from "../components/models/ModelRelated";
import ModelRelatedPosts from "../components/models/ModelRelatedPosts";
import LandingFAQ from "../components/landing/LandingFAQ";
import JsonLd from "../components/common/JsonLd";
import { getModelData } from "../data/modelPages";
import { getModelCatalogItem } from "../data/modelCatalog";
import { getModelGeneratorHref } from "../utils/modelGeneratorLink";

const ORIGIN = "https://lazykiwi.ai";

function buildJsonLd(data) {
  const url = `${ORIGIN}/models/${data.slug}`;
  const graph = [
    {
      "@type": "SoftwareApplication",
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

export default function ModelLandingPage({ slug }) {
  const data = getModelData(slug);
  const catalogItem = getModelCatalogItem(slug);

  useEffect(() => {
    if (data && data.seo) {
      document.title = data.seo.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", data.seo.description);
      else {
        const m = document.createElement("meta");
        m.name = "description";
        m.content = data.seo.description;
        document.head.appendChild(m);
      }
    } else if (catalogItem) {
      document.title = `${catalogItem.name} AI Model | LazyKiwi`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", catalogItem.blurb);
    }
  }, [data, catalogItem]);

  if (!data && !catalogItem) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Model Not Found</h1>
      </div>
    );
  }

  if (!data && catalogItem) {
    return (
      <article className="min-h-full bg-white">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: `${catalogItem.name} | LazyKiwi`,
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web",
          url: `${ORIGIN}/models/${catalogItem.slug}`,
          description: catalogItem.blurb,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }} />
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{catalogItem.type} Model</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">{catalogItem.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{catalogItem.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={getModelGeneratorHref(catalogItem.slug, catalogItem.type)} className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
                Open the workbench
              </a>
              <a href="/models" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
                All models
              </a>
            </div>
          </div>
        </section>
      </article>
    );
  }

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={buildJsonLd(data)} />
      <ModelHero data={data.hero} />
      <ModelSteps data={data.steps} resolveCtaHref={getModelGeneratorHref} />
      <ModelCapabilities data={data.capabilities} />
      <ModelShowcase data={data.showcase} />
      <ModelSpecs data={data.specs} />
      <ModelComparison data={data.comparison} />
      <ModelScenarios data={data.scenarios} />
      <ModelTestimonials data={data.testimonials} />
      <LandingFAQ data={data.faq} />
      <ModelCTA data={data.bottomCta} />
      <ModelRelated data={data.related} />
      <ModelRelatedPosts data={data.relatedPosts} />
    </article>
  );
}
