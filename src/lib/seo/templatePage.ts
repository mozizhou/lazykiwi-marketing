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
  templateType: string;
  image: string | null;
  blurb: string | null;
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
  try {
    const url = `${apiBase()}/ai/lazykiwi/template-page/list`;
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
