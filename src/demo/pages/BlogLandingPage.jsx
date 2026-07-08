import { useEffect } from "react";
import BlogHeader from "../components/blog/BlogHeader";
import BlogArticle from "../components/blog/BlogArticle";
import BlogKeyTakeaways from "../components/blog/BlogKeyTakeaways";
import BlogAuthorBio from "../components/blog/BlogAuthorBio";
import BlogRelated from "../components/blog/BlogRelated";
import LandingFAQ from "../components/landing/LandingFAQ";
import LandingCTA from "../components/landing/LandingCTA";
import JsonLd from "../components/common/JsonLd";
import { getBlogData } from "../data/blogPosts";

const ORIGIN = "https://lazykiwi.ai";

function buildJsonLd(data) {
  const url = `${ORIGIN}/blog/${data.slug}`;
  const graph = [
    {
      "@type": "BlogPosting",
      headline: data.header.title,
      description: data.seo.description,
      image: `${ORIGIN}${data.header.cover}`,
      datePublished: data.header.date,
      author: { "@type": "Organization", name: data.header.author?.name || "LazyKiwi" },
      publisher: { "@type": "Organization", name: "LazyKiwi" },
      mainEntityOfPage: url,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: (data.header.breadcrumb || []).map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
      })),
    },
  ];
  if (data.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export default function BlogLandingPage({ slug }) {
  const data = getBlogData(slug);

  useEffect(() => {
    if (data && data.seo) {
      document.title = data.seo.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", data.seo.description);
      else {
        const m = document.createElement("meta");
        m.name = "description";
        m.content = data.seo.description;
        document.head.appendChild(m);
      }
    }
  }, [data]);

  if (!data) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Article Not Found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={buildJsonLd(data)} />
      <BlogHeader data={data.header} />
      <BlogArticle intro={data.intro} toc={data.toc} sections={data.sections} />
      <BlogKeyTakeaways data={data.keyTakeaways} />
      <BlogAuthorBio data={data.authorBio} />
      <div className="pt-10">
        <LandingFAQ data={data.faq} />
      </div>
      <LandingCTA data={data.bottomCta} />
      <BlogRelated data={data.related} />
    </article>
  );
}
