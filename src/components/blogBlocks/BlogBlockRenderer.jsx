import BlogHeader from "@/demo/components/blog/BlogHeader";
import BlogArticle from "@/demo/components/blog/BlogArticle";
import BlogKeyTakeaways from "@/demo/components/blog/BlogKeyTakeaways";
import BlogAuthorBio from "@/demo/components/blog/BlogAuthorBio";
import BlogRelated from "@/demo/components/blog/BlogRelated";
import LandingFAQ from "@/demo/components/landing/LandingFAQ";
import LandingCTA from "@/demo/components/landing/LandingCTA";
import JsonLd from "@/demo/components/common/JsonLd";

const ORIGIN = "https://lazykiwi.ai";

/**
 * Converts a legacy structured blog doc into an ordered block list. Kept in sync
 * with the admin editor's converter.
 */
export function blogToBlocks(doc) {
  if (!doc) return [];
  if (Array.isArray(doc.blocks)) return doc.blocks;
  const b = [];
  if (doc.header) b.push({ type: "header", data: doc.header });
  if (doc.intro || doc.toc?.length || doc.sections?.length) {
    b.push({ type: "article", data: { intro: doc.intro || "", toc: doc.toc || [], sections: doc.sections || [] } });
  }
  if (doc.keyTakeaways?.points?.length) b.push({ type: "keyTakeaways", data: doc.keyTakeaways });
  if (doc.authorBio?.name) b.push({ type: "authorBio", data: doc.authorBio });
  if (doc.faq?.length) b.push({ type: "faq", data: doc.faq });
  if (doc.bottomCta && (doc.bottomCta.title || doc.bottomCta.description)) b.push({ type: "cta", data: doc.bottomCta });
  if (doc.related?.posts?.length) b.push({ type: "related", data: doc.related });
  return b;
}

export default function BlogBlockRenderer({ blocks, meta, slug }) {
  const list = Array.isArray(blocks) ? blocks : [];
  const headerData = list.find((b) => b?.type === "header")?.data || {};
  const faqData = list.find((b) => b?.type === "faq")?.data;

  const graph = [
    {
      "@type": "BlogPosting",
      headline: headerData.title,
      description: meta?.seo?.description || "",
      image: headerData.cover ? `${ORIGIN}${headerData.cover}` : undefined,
      datePublished: headerData.date,
      author: { "@type": "Organization", name: headerData.author?.name || "LazyKiwi" },
      publisher: { "@type": "Organization", name: "LazyKiwi" },
      mainEntityOfPage: `${ORIGIN}/blog/${slug}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: (headerData.breadcrumb || []).map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
      })),
    },
  ];
  if (faqData?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
      {list.map((block, i) => {
        const data = block?.data;
        const key = block?.id || `${block?.type}-${i}`;
        switch (block?.type) {
          case "header":
            return <BlogHeader key={key} data={data} />;
          case "article":
            return <BlogArticle key={key} intro={data?.intro} toc={data?.toc} sections={data?.sections} />;
          case "keyTakeaways":
            return <BlogKeyTakeaways key={key} data={data} />;
          case "authorBio":
            return <BlogAuthorBio key={key} data={data} />;
          case "faq":
            return (
              <div key={key} className="pt-10">
                <LandingFAQ data={data} />
              </div>
            );
          case "cta":
            return <LandingCTA key={key} data={data} />;
          case "related":
            return <BlogRelated key={key} data={data} />;
          default:
            return null;
        }
      })}
    </article>
  );
}
