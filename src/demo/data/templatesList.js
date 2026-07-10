import { TEMPLATES } from "../components/workbench/videoGeneratorData";
import { IMAGE_TEMPLATES_VISIBLE } from "../components/workbench/imageGeneratorData";
import { effectPages } from "./landingPages";
import { effectPremiumPages } from "./effectPremiumPages";
import { templatePages } from "./templatePages";

const titleCase = (value) => value.replace(/\b\w/g, (char) => char.toUpperCase());

const effectTemplateSlugs = new Set([
  ...Object.keys(effectPages),
  ...Object.keys(effectPremiumPages),
]);

export const videoTemplates = TEMPLATES.map((template) => {
  const slug = template.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return {
    slug,
    name: template.name,
    type: "Video",
    category: template.category,
    blurb: template.desc,
    image: template.img,
    href: `/templates/${slug}`,
    legacyEffectSlug: effectTemplateSlugs.has(slug) ? slug : null,
  };
});

export const imageTemplates = IMAGE_TEMPLATES_VISIBLE.map((template) => ({
  slug: template.id,
  name: titleCase(template.name),
  type: "Image",
  category: "Image Template",
  blurb: template.desc,
  image: template.img,
  href: `/templates/${template.id}`,
  legacyEffectSlug: effectTemplateSlugs.has(template.id) ? template.id : null,
}));

const extraEffectTemplates = Object.entries({ ...effectPages, ...effectPremiumPages })
  .filter(([slug]) => !videoTemplates.some((template) => template.slug === slug) && !imageTemplates.some((template) => template.slug === slug))
  .map(([slug, data]) => ({
    slug,
    name: data.hero?.name || data.creationModule?.title || titleCase(slug.replace(/-/g, " ")),
    type: data.parentFeature === "photo-effects" ? "Image" : "Video",
    category: "Effect Template",
    blurb: data.hero?.tagline || data.creationModule?.description || data.seo?.description || "",
    image: data.showcase?.items?.[0]?.image || data.hero?.media?.wide || data.creationModule?.preview?.image || `https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/effects/${slug}/hero-poster.png`,
    href: `/templates/${slug}`,
    legacyEffectSlug: slug,
  }));

// Rich template pages (issue #39) — full-content landings driven by template-json.
const richTemplates = Object.entries(templatePages).map(([slug, data]) => {
  const isImage = data.template_type === "image";
  return {
    slug,
    name: titleCase(data.hero?.title || data.template_name || slug.replace(/-/g, " ")),
    type: isImage ? "Image" : "Video",
    category: isImage ? "Image Template" : "Video Template",
    blurb: data.hero?.description || "",
    image:
      data.hero?.image ||
      data.hero?.image_after ||
      data.images?.hero ||
      data.images?.hero_after ||
      data.images?.scenarios?.[0] ||
      "",
    href: `/templates/${slug}`,
    legacyEffectSlug: null,
  };
});

const baseTemplates = [...videoTemplates, ...imageTemplates, ...extraEffectTemplates];
const baseSlugs = new Set(baseTemplates.map((template) => template.slug));
const richOnlyTemplates = richTemplates.filter((template) => !baseSlugs.has(template.slug));

export const templates = [...baseTemplates, ...richOnlyTemplates];

export const getTemplateData = (slug) => templates.find((template) => template.slug === slug) || null;
