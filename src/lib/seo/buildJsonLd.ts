const ORIGIN = "https://lazykiwi.ai";

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

export function buildModelJsonLd(data: {
  slug: string;
  seo?: { title?: string; description?: string };
  hero?: { name?: string; breadcrumb?: string[] };
  faq?: Array<{ question: string; answer: string }>;
}) {
  const url = `${ORIGIN}/models/${data.slug}`;
  const graph: JsonLdValue[] = [
    {
      "@type": "SoftwareApplication",
      name: `${data.hero?.name || data.slug} — LazyKiwi`,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url,
      description: data.seo?.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ];

  if (data.hero?.breadcrumb?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: data.hero.breadcrumb.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
      })),
    });
  }

  if (data.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function buildModelCatalogJsonLd(slug: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${name} | LazyKiwi`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${ORIGIN}/models/${slug}`,
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function buildToolJsonLd(input: {
  slug: string;
  title: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.title,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${ORIGIN}/tools/${input.slug}`,
    description: input.description || "",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function buildBlogJsonLd(data: {
  slug: string;
  seo?: { title?: string; description?: string };
  header?: {
    title?: string;
    excerpt?: string;
    date?: string;
    author?: { name?: string } | string;
    breadcrumb?: string[];
    cover?: string;
  };
  faq?: Array<{ question: string; answer: string }>;
}) {
  const url = `${ORIGIN}/blog/${data.slug}`;
  const authorName =
    typeof data.header?.author === "string"
      ? data.header.author
      : data.header?.author?.name || "LazyKiwi";
  const cover = data.header?.cover;
  const image = cover
    ? cover.startsWith("http")
      ? cover
      : `${ORIGIN}${cover.startsWith("/") ? cover : `/${cover}`}`
    : undefined;

  const graph: JsonLdValue[] = [
    {
      "@type": "BlogPosting",
      headline: data.seo?.title || data.header?.title,
      description: data.seo?.description || data.header?.excerpt,
      image,
      datePublished: data.header?.date,
      author: { "@type": "Organization", name: authorName },
      publisher: { "@type": "Organization", name: "LazyKiwi" },
      mainEntityOfPage: url,
    },
  ];

  if (data.header?.breadcrumb?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: data.header.breadcrumb.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
      })),
    });
  }

  if (data.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function buildTemplateJsonLd(input: {
  slug: string;
  name: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${input.name} Template`,
    url: `${ORIGIN}/templates/${input.slug}`,
    description: input.description || "",
  };
}

export function buildOrganizationJsonLd(sameAs: string[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LazyKiwi",
    url: ORIGIN,
    logo: `${ORIGIN}/kiwi-logo.svg`,
    email: "hello@lazykiwi.ai",
    sameAs,
  };
}
