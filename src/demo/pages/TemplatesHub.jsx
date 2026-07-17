import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Image as ImageIcon, Sparkles, Video } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { templates } from "../data/templatesList";

const ORIGIN = "https://lazykiwi.ai";

function mapDbCard(card) {
  const type = card.templateType === "image" ? "Image" : "Video";
  return {
    slug: card.slug,
    name: card.name || card.slug,
    type,
    category: type === "Image" ? "Image" : "Video",
    image: card.image || "",
    blurb: card.blurb || "",
    href: `/templates/${card.slug}`,
  };
}

export default function TemplatesHub(props) {
  const extraTemplates = props?.extraTemplates;
  const [filter, setFilter] = useState("All");
  // DB-published pages take priority over the static list when slugs collide,
  // but keep static cover art when the CMS card has no image yet.
  const merged = useMemo(() => {
    const bySlug = new Map();
    templates.forEach((item) => bySlug.set(item.slug, item));
    (extraTemplates || []).forEach((card) => {
      const prev = bySlug.get(card.slug);
      const mapped = mapDbCard(card);
      if (!mapped.image && prev?.image) mapped.image = prev.image;
      if (!mapped.blurb && prev?.blurb) mapped.blurb = prev.blurb;
      bySlug.set(card.slug, mapped);
    });
    return Array.from(bySlug.values());
  }, [extraTemplates]);
  const filtered = useMemo(() => (filter === "All" ? merged : merged.filter((item) => item.type === filter)), [filter, merged]);

  useEffect(() => {
    document.title = "AI Templates: Video & Image Templates | LazyKiwi";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Browse LazyKiwi video and image templates. Pick a ready-made motion or image template, upload your asset, and generate in one workbench.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Templates | LazyKiwi",
    url: `${ORIGIN}/templates`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: merged.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${ORIGIN}${item.href}`,
      })),
    },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 lg:pt-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">Templates</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            Ready-made AI templates, <span className="text-kiwi-green-dark">one click away</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">Browse video motion templates and image transformation templates from the LazyKiwi workbench.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Open templates <ArrowRight size={18} />
            </a>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600">
              <Sparkles size={15} className="text-kiwi-green-dark" /> {merged.length} templates
            </span>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
          {["All", "Video", "Image"].map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-t-xl px-5 py-3 text-sm font-bold transition ${filter === item ? "bg-gray-950 text-white" : "text-gray-500 hover:text-gray-900"}`}>
              {item}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const TypeIcon = item.type === "Video" ? Video : ImageIcon;
            return (
              <a key={item.slug} href={item.href} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  {item.image ? (
                    <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <TypeIcon size={32} className="text-gray-300" />
                    </div>
                  )}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    <TypeIcon size={12} /> {item.type}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">{item.category}</p>
                  <h3 className="mt-1.5 text-xl font-black text-gray-950">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{item.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-kiwi-green-dark">
                    Open template <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
