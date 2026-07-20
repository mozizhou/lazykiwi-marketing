import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Wand2, Sparkles, Palette, Smile, Brush } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { tools, toolCategories } from "../data/toolsList";

const ORIGIN = "https://lazykiwi.ai";

// per-category gradient + icon (visual cards, no image files required)
const CAT_STYLE = {
  img2img: { grad: "from-lime-400 to-green-500", Icon: Wand2 },
  enhance: { grad: "from-sky-400 to-cyan-500", Icon: Sparkles },
  convert: { grad: "from-violet-400 to-indigo-500", Icon: Palette },
  filters: { grad: "from-orange-400 to-pink-500", Icon: Smile },
  edit: { grad: "from-rose-400 to-fuchsia-500", Icon: Brush },
};

export default function ToolsHub(props) {
  const extra = props?.extra;
  const [filter, setFilter] = useState("All");

  // DB-published tools take priority over the static list when slugs collide.
  const merged = useMemo(() => {
    const bySlug = new Map();
    tools.forEach((item) => bySlug.set(item.slug, item));
    (extra || []).forEach((card) => {
      const existing = bySlug.get(card.slug);
      bySlug.set(card.slug, {
        slug: card.slug,
        name: card.name || existing?.name || card.slug,
        blurb: card.blurb || existing?.blurb || "",
        image: card.image || existing?.image || "",
        category: existing?.category || "img2img",
        href: `/tools/${card.slug}`,
      });
    });
    return Array.from(bySlug.values());
  }, [extra]);

  const tabs = useMemo(() => ["All", ...toolCategories.map((c) => c.key)], []);
  const labelFor = (key) => toolCategories.find((c) => c.key === key)?.label || key;
  const filtered = filter === "All" ? merged : merged.filter((t) => t.category === filter);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Photo Tools | LazyKiwi",
    url: `${ORIGIN}/tools`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: merged.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        url: `${ORIGIN}${t.href || `/tools/${t.slug}`}`,
      })),
    },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-10 lg:pt-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">AI Tools</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            One-click AI photo tools, <span className="text-kiwi-green-dark">one upload</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Change your hairstyle or hair color, generate a studio headshot, restore an old photo, upscale, colorize, or try a fun face filter. Each one is free and takes a single upload.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#tools" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Browse all tools <ArrowRight size={18} />
            </a>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600">
              <Sparkles size={15} className="text-kiwi-green-dark" /> {merged.length} free tools
            </span>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section id="tools" className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`rounded-t-xl px-5 py-3 text-sm font-bold transition ${
                filter === t ? "bg-gray-950 text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {t === "All" ? "All" : labelFor(t)}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => {
            const style = CAT_STYLE[t.category] || CAT_STYLE.img2img;
            const Icon = style.Icon;
            return (
              <a key={t.slug} href={t.href} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className={`relative flex h-40 items-center justify-center overflow-hidden ${t.image ? "bg-gray-50" : `bg-gradient-to-br ${style.grad}`}`}>
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <Icon size={34} className="text-white drop-shadow" />
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                    {labelFor(t.category)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-black leading-tight text-gray-950">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{t.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-kiwi-green-dark">
                    Try it free <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gray-950 px-8 py-12 text-center text-white sm:px-12">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Need video and image generation too?</h2>
          <p className="max-w-xl text-sm leading-6 text-white/70">Every tool above lives next to the full LazyKiwi workbench, with models, effects and generators in one place.</p>
          <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 transition hover:bg-white">
            Open the workbench <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
