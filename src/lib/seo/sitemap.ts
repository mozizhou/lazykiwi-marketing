import type { MetadataRoute } from "next";
import { tools } from "@/demo/data/toolsList";
import { toolPages } from "@/demo/data/toolPages";
import { templates } from "@/demo/data/templatesList";
import { modelCatalog } from "@/demo/data/modelCatalog";
import { modelPages } from "@/demo/data/modelPages";
import { blogPosts } from "@/demo/data/blogPosts";
import { effectPages } from "@/demo/data/landingPages";
import { effectPremiumPages } from "@/demo/data/effectPremiumPages";
import { SITE_URL } from "../api/config";
import { listCmsPages } from "./templatePage";
import { listSeoNoIndexKeys } from "./service";
import {
  blogExistsInRegistry,
  modelExistsInRegistry,
  templateExistsInRegistry,
  toolExistsInRegistry,
} from "./pageExists";

/** Revalidate sitemap on the same cadence as CMS hub lists (5 min). */
export const SITEMAP_REVALIDATE_SECONDS = 300;

/**
 * Marketing paths that redirect to app.lazykiwi.ai. Temporarily omitted from the
 * sitemap until the app subdomain should be indexed.
 */
/** Paths that should stay out of the sitemap (auth only; generators are marketing landings again). */
const APP_REDIRECT_PATH_PREFIXES = ["/auth"];

function isAppRedirectPath(path: string): boolean {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return APP_REDIRECT_PATH_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}

type HubPage = {
  path: string;
  pageKey: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

function siteOrigin(): string {
  const origin =
    process.env.SEO_API_ORIGIN || process.env.NEXT_PUBLIC_SITE_URL || SITE_URL || "https://lazykiwi.ai";
  return origin.replace(/\/$/, "");
}

function absoluteUrl(path: string): string {
  return `${siteOrigin()}${path.startsWith("/") ? path : `/${path}`}`;
}

type PublishablePageType = "tool" | "model" | "template" | "blog";

function isPublishableSlug(pageType: PublishablePageType, slug: string, cmsSlugs: Set<string>): boolean {
  if (!slug?.trim()) return false;
  if (cmsSlugs.has(slug)) return true;
  switch (pageType) {
    case "tool":
      return toolExistsInRegistry(slug);
    case "model":
      return modelExistsInRegistry(slug);
    case "template":
      return templateExistsInRegistry(slug);
    case "blog":
      return blogExistsInRegistry(slug);
    default:
      return false;
  }
}

function filterPublishableSlugs(
  pageType: PublishablePageType,
  slugs: string[],
  cmsSlugs: Set<string>,
): string[] {
  return slugs.filter((slug) => isPublishableSlug(pageType, slug, cmsSlugs));
}

function mergeSlugs(...groups: string[][]): string[] {
  const seen = new Set<string>();
  for (const group of groups) {
    for (const slug of group) {
      const value = slug?.trim();
      if (value) seen.add(value);
    }
  }
  return [...seen].sort();
}

function pushEntry(
  entries: MetadataRoute.Sitemap,
  noIndex: Set<string>,
  pageKey: string,
  path: string,
  options: Omit<MetadataRoute.Sitemap[number], "url">,
) {
  if (noIndex.has(pageKey) || isAppRedirectPath(path)) return;
  const url = absoluteUrl(path);
  if (url.includes("app.lazykiwi.ai")) return;
  entries.push({ url, ...options });
}

function pushDetailEntries(
  entries: MetadataRoute.Sitemap,
  noIndex: Set<string>,
  prefix: string,
  basePath: string,
  slugs: string[],
) {
  for (const slug of slugs) {
    pushEntry(entries, noIndex, `${prefix}:${slug}`, `${basePath}/${slug}`, {
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified: new Date(),
    });
  }
}

/**
 * Build the full marketing sitemap. CMS-published slugs are merged with static
 * fallbacks so new admin pages appear automatically and unpublished CMS-only
 * pages drop off on the next revalidation window.
 */
export async function buildSitemap(): Promise<MetadataRoute.Sitemap> {
  const [toolCms, modelCms, blogCms, templateCms, noIndex] = await Promise.all([
    listCmsPages("tool"),
    listCmsPages("model"),
    listCmsPages("blog"),
    listCmsPages("template"),
    listSeoNoIndexKeys(),
  ]);

  const toolCmsSlugs = new Set(toolCms.map((card) => card.slug));
  const modelCmsSlugs = new Set(modelCms.map((card) => card.slug));
  const blogCmsSlugs = new Set(blogCms.map((card) => card.slug));
  const templateCmsSlugs = new Set(templateCms.map((card) => card.slug));

  const toolSlugs = filterPublishableSlugs(
    "tool",
    mergeSlugs(tools.map((item) => item.slug), Object.keys(toolPages), toolCms.map((card) => card.slug)),
    toolCmsSlugs,
  );
  const modelSlugs = filterPublishableSlugs(
    "model",
    mergeSlugs(modelCatalog.map((item) => item.slug), Object.keys(modelPages), modelCms.map((card) => card.slug)),
    modelCmsSlugs,
  );
  const blogSlugs = filterPublishableSlugs(
    "blog",
    mergeSlugs(Object.keys(blogPosts), blogCms.map((card) => card.slug)),
    blogCmsSlugs,
  );
  const templateSlugs = filterPublishableSlugs(
    "template",
    mergeSlugs(templates.map((item) => item.slug), templateCms.map((card) => card.slug)),
    templateCmsSlugs,
  );
  const effectSlugs = mergeSlugs(Object.keys(effectPages), Object.keys(effectPremiumPages));

  const hubPages: HubPage[] = [
    { path: "/", pageKey: "home", changeFrequency: "daily", priority: 1 },
    { path: "/tools", pageKey: "tools", changeFrequency: "weekly", priority: 0.9 },
    { path: "/models", pageKey: "models", changeFrequency: "weekly", priority: 0.9 },
    { path: "/templates", pageKey: "templates", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", pageKey: "blog", changeFrequency: "weekly", priority: 0.9 },
    { path: "/effects", pageKey: "effects", changeFrequency: "weekly", priority: 0.8 },
    { path: "/video-generator", pageKey: "video-generator", changeFrequency: "weekly", priority: 0.9 },
    { path: "/image-generator", pageKey: "image-generator", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", pageKey: "pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", pageKey: "privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", pageKey: "terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/refund", pageKey: "refund", changeFrequency: "yearly", priority: 0.3 },
    { path: "/about", pageKey: "about", changeFrequency: "monthly", priority: 0.4 },
    { path: "/tools/category/img2img", pageKey: "tools-category:img2img", changeFrequency: "weekly", priority: 0.6 },
    { path: "/tools/category/enhance", pageKey: "tools-category:enhance", changeFrequency: "weekly", priority: 0.6 },
    { path: "/tools/category/convert", pageKey: "tools-category:convert", changeFrequency: "weekly", priority: 0.6 },
    { path: "/tools/category/filters", pageKey: "tools-category:filters", changeFrequency: "weekly", priority: 0.6 },
    { path: "/models/category/video", pageKey: "models-category:video", changeFrequency: "weekly", priority: 0.6 },
    { path: "/models/category/image", pageKey: "models-category:image", changeFrequency: "weekly", priority: 0.6 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const hub of hubPages) {
    pushEntry(entries, noIndex, hub.pageKey, hub.path, {
      changeFrequency: hub.changeFrequency,
      priority: hub.priority,
      lastModified: new Date(),
    });
  }

  pushDetailEntries(entries, noIndex, "tool", "/tools", toolSlugs);
  pushDetailEntries(entries, noIndex, "model", "/models", modelSlugs);
  pushDetailEntries(entries, noIndex, "blog", "/blog", blogSlugs);
  pushDetailEntries(entries, noIndex, "template", "/templates", templateSlugs);
  pushDetailEntries(entries, noIndex, "effect", "/effects", effectSlugs);

  return entries;
}
