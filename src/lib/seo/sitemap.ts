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

/** Revalidate sitemap on the same cadence as CMS hub lists (5 min). */
export const SITEMAP_REVALIDATE_SECONDS = 300;

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
  if (noIndex.has(pageKey)) return;
  entries.push({ url: absoluteUrl(path), ...options });
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

  const toolSlugs = mergeSlugs(
    tools.map((item) => item.slug),
    Object.keys(toolPages),
    toolCms.map((card) => card.slug),
  );
  const modelSlugs = mergeSlugs(
    modelCatalog.map((item) => item.slug),
    Object.keys(modelPages),
    modelCms.map((card) => card.slug),
  );
  const blogSlugs = mergeSlugs(Object.keys(blogPosts), blogCms.map((card) => card.slug));
  const templateSlugs = mergeSlugs(
    templates.map((item) => item.slug),
    templateCms.map((card) => card.slug),
  );
  const effectSlugs = mergeSlugs(Object.keys(effectPages), Object.keys(effectPremiumPages));

  const hubPages: HubPage[] = [
    { path: "/", pageKey: "home", changeFrequency: "daily", priority: 1 },
    { path: "/tools", pageKey: "tools", changeFrequency: "weekly", priority: 0.9 },
    { path: "/models", pageKey: "models", changeFrequency: "weekly", priority: 0.9 },
    { path: "/templates", pageKey: "templates", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", pageKey: "blog", changeFrequency: "weekly", priority: 0.9 },
    { path: "/effects", pageKey: "effects", changeFrequency: "weekly", priority: 0.8 },
    { path: "/pricing", pageKey: "pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/image-generator", pageKey: "image-generator", changeFrequency: "weekly", priority: 0.8 },
    { path: "/video-generator", pageKey: "video-generator", changeFrequency: "weekly", priority: 0.8 },
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
