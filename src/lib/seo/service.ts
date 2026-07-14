import { API_BASE_URL, TENANT_ID, SITE_URL } from "../api/config";

export type SeoOverride = {
  pageKey: string;
  pageGroup: string | null;
  path: string | null;
  title: string | null;
  description: string | null;
  keywords: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  canonical: string | null;
  noIndex: number | null;
};

// Resolve an absolute origin for server-side (generateMetadata) fetches.
// API_BASE_URL is a relative proxy path (e.g. /api/backend) that only works in
// the browser, so we prefix it with the public site origin on the server.
function resolveOrigin(): string {
  const origin = process.env.SEO_API_ORIGIN || SITE_URL || "https://lazykiwi.ai";
  return origin.replace(/\/$/, "");
}

/**
 * Fetch a single page SEO override from the backend catalog.
 * Returns null on any error or when no override exists, so callers fall back
 * to their existing static metadata.
 */
export async function getSeoOverride(pageKey: string): Promise<SeoOverride | null> {
  if (!pageKey) return null;
  try {
    const base = API_BASE_URL.startsWith("http") ? API_BASE_URL : `${resolveOrigin()}${API_BASE_URL}`;
    const url = `${base}/ai/lazykiwi/seo/resolve?pageKey=${encodeURIComponent(pageKey)}`;
    const response = await fetch(url, {
      headers: { "tenant-id": TENANT_ID },
      // Cache overrides for a short window to avoid a DB hit per request.
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    const payload = await response.json();
    if (payload && typeof payload === "object" && "code" in payload) {
      if (payload.code !== 0) return null;
      return (payload.data as SeoOverride | null) ?? null;
    }
    return (payload as SeoOverride | null) ?? null;
  } catch {
    return null;
  }
}
