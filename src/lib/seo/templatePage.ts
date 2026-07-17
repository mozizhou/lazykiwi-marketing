import { API_BASE_URL, TENANT_ID, SITE_URL } from "../api/config";

export type TemplateBlock = {
  id?: string;
  type: string;
  data?: Record<string, unknown>;
};

export type TemplatePageContent = {
  slug: string;
  name: string;
  templateType: string;
  blocks: TemplateBlock[];
};

export type TemplatePageCard = {
  slug: string;
  name: string;
  pageType?: string;
  templateType: string;
  image: string | null;
  blurb: string | null;
};

export type CmsPageType = "template" | "tool" | "model" | "blog";

/**
 * A resolved CMS page for tools/models/blog. `doc` is the full structured
 * document JSON (same shape the marketing renderer already consumes). For
 * templates use {@link getTemplatePageContent} instead (block-based).
 */
export type CmsPageContent = {
  slug: string;
  name: string;
  pageType: string;
  templateType: string;
  doc: Record<string, unknown> | null;
};

// Mirror of getSeoOverride's origin logic: API_BASE_URL is a browser-only proxy
// path, so prefix it with the public origin for server-side fetches.
function resolveOrigin(): string {
  const origin = process.env.SEO_API_ORIGIN || SITE_URL || "https://lazykiwi.ai";
  return origin.replace(/\/$/, "");
}

function apiBase(): string {
  return API_BASE_URL.startsWith("http") ? API_BASE_URL : `${resolveOrigin()}${API_BASE_URL}`;
}

function unwrap<T>(payload: unknown): T | null {
  if (payload && typeof payload === "object" && "code" in payload) {
    const envelope = payload as { code: number; data: T | null };
    if (envelope.code !== 0) return null;
    return envelope.data ?? null;
  }
  return (payload as T | null) ?? null;
}

/**
 * Fetch a published template page's block content by slug. Returns null on any
 * error or when the page is missing/unpublished, so callers fall back to the
 * existing static template data.
 */
export async function getTemplatePageContent(slug: string): Promise<TemplatePageContent | null> {
  if (!slug) return null;
  try {
    const url = `${apiBase()}/ai/lazykiwi/template-page/resolve?slug=${encodeURIComponent(slug)}`;
    const response = await fetch(url, {
      headers: { "tenant-id": TENANT_ID },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    const raw = unwrap<{ slug: string; name: string; templateType: string; contentJson: string | null }>(
      await response.json(),
    );
    if (!raw) return null;
    let blocks: TemplateBlock[] = [];
    if (raw.contentJson) {
      try {
        const parsed = JSON.parse(raw.contentJson);
        if (Array.isArray(parsed?.blocks)) blocks = parsed.blocks;
      } catch {
        blocks = [];
      }
    }
    return { slug: raw.slug, name: raw.name, templateType: raw.templateType, blocks };
  } catch {
    return null;
  }
}

/**
 * Fetch the list of published template page cards for the templates hub.
 * Returns an empty array on any error.
 */
export async function listTemplatePages(): Promise<TemplatePageCard[]> {
  return listCmsPages("template");
}

/**
 * Generic resolver for a published tool/model/blog page. Returns the parsed
 * structured document (`doc`) or null when missing/unpublished/on error, so
 * callers fall back to the existing static data.
 */
export async function getCmsPageContent(
  pageType: CmsPageType,
  slug: string,
): Promise<CmsPageContent | null> {
  if (!slug) return null;
  try {
    const url = `${apiBase()}/ai/lazykiwi/template-page/resolve?slug=${encodeURIComponent(slug)}&pageType=${encodeURIComponent(pageType)}`;
    const response = await fetch(url, {
      headers: { "tenant-id": TENANT_ID },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    const raw = unwrap<{
      slug: string;
      name: string;
      pageType: string;
      templateType: string;
      contentJson: string | null;
    }>(await response.json());
    if (!raw) return null;
    let doc: Record<string, unknown> | null = null;
    if (raw.contentJson) {
      try {
        const parsed = JSON.parse(raw.contentJson);
        if (parsed && typeof parsed === "object") doc = parsed as Record<string, unknown>;
      } catch {
        doc = null;
      }
    }
    return {
      slug: raw.slug,
      name: raw.name,
      pageType: raw.pageType || pageType,
      templateType: raw.templateType,
      doc,
    };
  } catch {
    return null;
  }
}

/**
 * Generic list of published page cards for a given page type (hub consumption).
 * Returns an empty array on any error.
 */
export async function listCmsPages(pageType: CmsPageType): Promise<TemplatePageCard[]> {
  try {
    const url = `${apiBase()}/ai/lazykiwi/template-page/list?pageType=${encodeURIComponent(pageType)}`;
    const response = await fetch(url, {
      headers: { "tenant-id": TENANT_ID },
      next: { revalidate: 300 },
    });
    if (!response.ok) return [];
    const list = unwrap<TemplatePageCard[]>(await response.json());
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}
