import BlogHeader from "../components/blog/BlogHeader";
import BlogArticle from "../components/blog/BlogArticle";
import BlogKeyTakeaways from "../components/blog/BlogKeyTakeaways";
import BlogAuthorBio from "../components/blog/BlogAuthorBio";
import BlogRelated from "../components/blog/BlogRelated";
import LandingFAQ from "../components/landing/LandingFAQ";
import LandingCTA from "../components/landing/LandingCTA";
import { getBlogData } from "../data/blogPosts";
import BlogBlockRenderer from "@/components/blogBlocks/BlogBlockRenderer";

export default function BlogLandingPage({ slug, dbData }) {
  const data = dbData || getBlogData(slug);

  if (!data) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Article Not Found</h1>
      </div>
    );
  }

  if (dbData && Array.isArray(dbData.blocks)) {
    return <BlogBlockRenderer blocks={dbData.blocks} meta={dbData} slug={slug} />;
  }

  return (
    <article className="min-h-full bg-white">
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
