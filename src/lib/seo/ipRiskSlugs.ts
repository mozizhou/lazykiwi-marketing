/** Slugs that may reference third-party IP — show a lightweight disclaimer. */
export const IP_RISK_SLUGS = new Set([
  "ghibli-art-ai",
  "simpsons-ai",
  "one-piece-group-photo",
  "minecraft-filter",
  "pixar-ai-generator-free",
  "ai-gta",
  "selfies-with-celebrities",
  "vinyl-record-cover",
]);

export function isIpRiskSlug(slug: string | undefined | null): boolean {
  if (!slug) return false;
  return IP_RISK_SLUGS.has(slug);
}
