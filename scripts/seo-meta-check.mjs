#!/usr/bin/env node

const ORIGIN = process.env.SEO_CHECK_ORIGIN || "https://lazykiwi.ai";

const URLS = [
  "/",
  "/tools",
  "/tools/ai-hairstyle-changer",
  "/tools/gender-swap",
  "/models",
  "/models/sora-2",
  "/models/kling-1-6-turbo",
  "/templates",
  "/templates/bullet-time",
  "/blog",
  "/blog/sora-2-vs-veo-3",
  "/effects",
  "/pricing",
  "/video-generator",
  "/image-generator",
  "/privacy",
  "/terms",
  "/tools/category/img2img",
  "/models/category/video",
  "/robots.txt",
];

function extractTag(html, tag) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`, "i"));
  return match?.[1]?.trim() || "";
}

function extractCanonical(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return match?.[1]?.trim() || "";
}

function extractMetaDescription(html) {
  const match = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  return match?.[1]?.trim() || "";
}

async function checkPath(path) {
  const url = `${ORIGIN}${path}`;
  const response = await fetch(url, { redirect: "follow" });
  const html = await response.text();
  const isRobots = path.endsWith("robots.txt");

  if (isRobots) {
    if (!response.ok) throw new Error(`robots.txt HTTP ${response.status}`);
    if (!html.includes("Sitemap:")) throw new Error("robots.txt missing Sitemap directive");
    return;
  }

  const title = extractTag(html, "title");
  const canonical = extractCanonical(html);
  const description = extractMetaDescription(html);

  if (!title) throw new Error("missing <title>");
  if (!description) throw new Error('missing meta name="description"');
  if (!canonical && !path.includes("kling-1-6-turbo")) throw new Error("missing canonical link");

  if (path === "/models/kling-1-6-turbo" && response.status !== 404) {
    throw new Error(`expected HTTP 404, got ${response.status}`);
  }
}

async function main() {
  let failed = 0;
  for (const path of URLS) {
    try {
      await checkPath(path);
      console.log(`OK  ${path}`);
    } catch (error) {
      failed += 1;
      console.error(`FAIL ${path}: ${error.message}`);
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} check(s) failed`);
    process.exit(1);
  }

  console.log(`\nAll ${URLS.length} SEO checks passed for ${ORIGIN}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
