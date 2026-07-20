import ModelHero from "../components/models/ModelHero";
import ModelSteps from "../components/models/ModelSteps";
import ModelCapabilities from "../components/models/ModelCapabilities";
import ModelShowcase from "../components/models/ModelShowcase";
import ModelSpecs from "../components/models/ModelSpecs";
import ModelComparison from "../components/models/ModelComparison";
import ModelScenarios from "../components/models/ModelScenarios";
import ModelCTA from "../components/models/ModelCTA";
import { getModelData, normalizeModelPage } from "../data/modelPages";
import { getModelCatalogItem } from "../data/modelCatalog";
import { getModelGeneratorHref } from "../utils/modelGeneratorLink";
import { ExploreMoreModels, FromTheBlog, ModelFaqSection } from "../components/models/ModelPageModules";
import { getSpecValue } from "../utils/modelSpecsSoT";
import ModelBlockRenderer from "@/components/modelBlocks/ModelBlockRenderer";

function heroDescription(data) {
  const maxDuration = getSpecValue(data.specs, "Max duration");
  const resolution = getSpecValue(data.specs, "Resolution");
  if (!maxDuration && !resolution) return data.hero.description;
  const specBits = [maxDuration && `up to ${maxDuration}`, resolution && `up to ${resolution}`].filter(Boolean).join(", ");
  return specBits ? `${data.hero.description} Specs: ${specBits}.` : data.hero.description;
}

export default function ModelLandingPage({ slug, dbData }) {
  const data = dbData ? normalizeModelPage(dbData) : getModelData(slug);
  const catalogItem = getModelCatalogItem(slug);

  if (dbData && Array.isArray(dbData.blocks)) {
    return <ModelBlockRenderer blocks={dbData.blocks} meta={dbData} slug={slug} />;
  }

  if (!data && catalogItem) {
    return (
      <article className="min-h-full bg-white">
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

  if (!data) return null;

  const hero = { ...data.hero, description: heroDescription(data) };

  return (
    <article className="min-h-full bg-white">
      <ModelHero data={hero} />
      <ModelSteps data={data.steps} resolveCtaHref={getModelGeneratorHref} />
      <ModelCapabilities data={data.capabilities} />
      <ModelShowcase data={data.showcase} />
      <ModelSpecs data={data.specs} />
      <ModelComparison data={data.comparison} />
      <ModelScenarios data={data.scenarios} />
      <ModelFaqSection data={data.faq} />
      <ModelCTA data={data.bottomCta} />
      <ExploreMoreModels data={data.related} />
      <FromTheBlog data={data.relatedPosts} />
    </article>
  );
}
