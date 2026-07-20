import { ArrowRight, ArrowUpRight } from "lucide-react";
import RelatedTemplates from "../components/templates/RelatedTemplates";
import IpDisclaimer from "../components/common/IpDisclaimer";
import { isIpRiskSlug } from "@/lib/seo/ipRiskSlugs";
import { getTemplateData } from "../data/templatesList";
import { getTemplatePage } from "../data/templatePages";
import TemplateRichLanding from "./TemplateRichLanding";
import EffectLandingPage from "./EffectLandingPage";
import EffectPremiumPage from "./EffectPremiumPage";
import { getEffectData } from "../data/landingPages";
import { getEffectPremiumData } from "../data/effectPremiumPages";
import BlockRenderer from "@/components/templateBlocks/BlockRenderer";

export default function TemplateLandingPage({ slug, dbBlocks, dbName, dbTemplateType }) {
  const hasDbBlocks = Array.isArray(dbBlocks) && dbBlocks.length > 0;
  const richData = getTemplatePage(slug);
  const template = getTemplateData(slug);
  const effectSlug = template?.legacyEffectSlug;
  const premiumEffect = effectSlug ? getEffectPremiumData(effectSlug) : null;
  const legacyEffect = effectSlug ? getEffectData(effectSlug) : null;

  // Published DB page takes highest priority so admin edits render without a redeploy.
  if (hasDbBlocks) {
    return (
      <BlockRenderer
        blocks={dbBlocks}
        slug={slug}
        name={dbName}
        templateType={dbTemplateType || (template?.type === "Image" ? "image" : "video")}
      />
    );
  }

  // Rich template data (issue #39) takes priority so every template renders full content.
  if (richData) return <TemplateRichLanding data={richData} slug={slug} />;
  if (premiumEffect) return <EffectPremiumPage slug={effectSlug} />;
  if (legacyEffect) return <EffectLandingPage slug={effectSlug} />;

  if (!template) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Template Not Found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-full bg-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{template.type} Template</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">{template.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{template.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${template.type === "Video" ? "/video-generator" : "/image-generator"}?mode=template&template=${encodeURIComponent(template.slug)}`} className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Use this template <ArrowRight size={18} />
            </a>
            <a href="/templates" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
              All templates <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
          <img src={template.image} alt={template.name} className="h-full min-h-[320px] w-full object-cover" />
        </div>
      </section>
      <RelatedTemplates currentSlug={template.slug} />
      {isIpRiskSlug(slug) && <IpDisclaimer />}
    </article>
  );
}
