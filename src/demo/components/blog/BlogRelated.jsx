import { ArrowUpRight } from "lucide-react";
import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

export default function BlogRelated({ data }) {
  if (!data || !data.posts || data.posts.length === 0) return null;

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <h2 className="mb-8 text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
          {data.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-kiwi-green-dark">
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg font-black leading-tight text-gray-950">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{renderInlineLinks(post.excerpt)}</p>
                <span className="mt-4 flex items-center justify-between text-xs font-bold text-gray-400">
                  {post.readTime}
                  <ArrowUpRight
                    size={16}
                    className="text-gray-300 transition group-hover:text-kiwi-green-dark"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
