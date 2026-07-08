import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock, Calendar } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { blogPosts } from "../data/blogPosts";

const ORIGIN = "https://lazykiwi.ai";

export default function BlogHub() {
  const all = useMemo(
    () =>
      Object.entries(blogPosts).map(([slug, d]) => ({
        slug,
        title: d.header.title,
        excerpt: d.header.excerpt,
        category: d.header.category,
        author: d.header.author,
        date: d.header.date,
        readTime: d.header.readTime,
        cover: d.header.cover,
        href: `/blog/${slug}`,
      })),
    []
  );

  const categories = useMemo(() => ["All", ...Array.from(new Set(all.map((p) => p.category)))], [all]);
  const [cat, setCat] = useState("All");

  const featured = all[0];
  const rest = all.slice(1);
  const visible = cat === "All" ? rest : all.filter((p) => p.category === cat && p.slug !== featured.slug);

  useEffect(() => {
    document.title = "LazyKiwi Blog: The Creator Playbook for AI Video & Images";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Tips, tutorials and model breakdowns for making AI video and images that perform. The LazyKiwi creator playbook for TikTok, Reels and Shorts.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "LazyKiwi Blog",
    url: `${ORIGIN}/blog`,
    blogPost: all.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${ORIGIN}${p.href}`,
      datePublished: p.date,
    })),
  };

  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-10 lg:pt-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">Blog</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            The creator <span className="text-kiwi-green-dark">playbook</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Tips, tutorials and model breakdowns for making AI video and images that actually perform, written for people posting to TikTok, Reels and Shorts.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="mx-auto max-w-7xl px-6 sm:px-10">
          <a href={featured.href} className="group grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 lg:aspect-auto">
              <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-kiwi-green px-3 py-1 text-[11px] font-black uppercase tracking-wide text-gray-950">Featured</span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-kiwi-green-dark">{featured.category}</span>
              <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-gray-950 sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-base leading-7 text-gray-600">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={featured.author.avatar} alt={featured.author.name} className="h-9 w-9 rounded-full" />
                <span className="text-sm font-bold text-gray-950">{featured.author.name}</span>
                <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={12} /> {featured.readTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-black text-kiwi-green-dark">
                Read article <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        </section>
      )}

      {/* Category tabs */}
      <section className="mx-auto mt-12 max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-t-xl px-5 py-3 text-sm font-bold transition ${cat === c ? "bg-gray-950 text-white" : "text-gray-500 hover:text-gray-900"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <a key={p.slug} href={p.href} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img src={p.cover} alt={p.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-kiwi-green-dark">{p.category}</span>
                <h3 className="mt-2 text-lg font-black leading-tight text-gray-950">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs font-medium text-gray-400">
                  <img src={p.author.avatar} alt={p.author.name} className="h-6 w-6 rounded-full" />
                  <span className="text-gray-600">{p.author.name}</span>
                  <span className="ml-auto flex items-center gap-1"><Calendar size={11} /> {p.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gray-950 px-8 py-12 text-center text-white sm:px-12">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Turn what you just read into a real clip.</h2>
          <p className="max-w-xl text-sm leading-6 text-white/70">Open the workbench and turn what you just read into a finished short.</p>
          <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 transition hover:bg-white">
            Start creating free <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
