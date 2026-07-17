import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/api/config";

function siteOrigin(): string {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL || "https://lazykiwi.ai";
  return origin.replace(/\/$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/api/"],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
