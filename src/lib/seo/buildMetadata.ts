import type { Metadata } from "next";
import type { SeoOverride } from "./service";

export type SeoFallback = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  keywords?: string;
  siteName?: string;
};

/**
 * Build Next.js Metadata by merging an optional DB override on top of a static
 * fallback. Any override field that is blank falls back to the static value.
 */
export function buildMetadata(override: SeoOverride | null, fallback: SeoFallback): Metadata {
  const pick = (a: string | null | undefined, b: string | undefined) => {
    const v = a && a.trim() ? a.trim() : b;
    return v && v.trim() ? v : undefined;
  };

  const title = pick(override?.title, fallback.title) ?? fallback.title;
  const description = pick(override?.description, fallback.description) ?? fallback.description;
  const canonical = pick(override?.canonical, fallback.canonical);
  const keywords = pick(override?.keywords, fallback.keywords);
  const image = pick(override?.ogImage, fallback.image);
  const ogTitle = pick(override?.ogTitle, title) ?? title;
  const ogDescription = pick(override?.ogDescription, description) ?? description;
  const noIndex = override?.noIndex === 1;
  const siteName = fallback.siteName ?? "LazyKiwi";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      siteName,
      url: canonical,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: image ? [image] : undefined,
    },
  };

  if (keywords) {
    metadata.keywords = keywords;
  }
  if (canonical) {
    metadata.alternates = { canonical };
  }
  if (noIndex) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}
