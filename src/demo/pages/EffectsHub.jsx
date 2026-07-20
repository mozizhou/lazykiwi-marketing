import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Video, Image as ImageIcon } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { effectPremiumPages } from "../data/effectPremiumPages";
import { effectPages } from "../data/landingPages";

const ORIGIN = "https://lazykiwi.ai";

function typeOf(parentFeature) {
  return parentFeature === "photo-effects" ? "Photo" : "Video";
}

export default function EffectsHub() {
  const [filter, setFilter] = useState("All");

  const items = useMemo(() => {
    const premium = Object.entries(effectPremiumPages).map(([slug, d]) => ({
      slug,
      name: d.hero.name,
      blurb: d.hero.tagline,
      type: typeOf(d.parentFeature),
      image: d.showcase?.items?.[0]?.image || d.hero.media.wide,
      href: `/effects/${slug}`,
      featured: true,
    }));
    const legacy = Object.entries(effectPages).map(([slug, d]) => {
      const name = d.creationModule?.title || d.hero?.title || slug.replace(/-/g, " ");
      const blurb = d.creationModule?.description || d.introduction?.description || "";
      const image = d.creationModule?.preview?.image || `https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/effects/${slug}/hero-poster.png`;
      return { slug, name, blurb: blurb.slice(0, 110), type: typeOf(d.parentFeature), image, href: `/effects/${slug}` };
    });
    // de-dupe by slug (premium wins)
    const seen = new Set(premium.map((p) => p.slug));
    return [...premium, ...legacy.filter((l) => !seen.has(l.slug))];
  }, []);

  const filtered = filter === "All" ? items : items.filter((i) => i.type === filter);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Effects | LazyKiwi",
    url: `${ORIGIN}/effects`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${ORIGIN}${it.href}` })),
    },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-10 lg:pt-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">Effects</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            One-click AI <span className="text-kiwi-green-dark">effects</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Give a photo or a prompt a moment people stop on: hugs, headshots, explosions, bullet time and more. Pick an effect, upload, and generate.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Open the workbench <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
          {["All", "Video", "Photo"].map((t) => (
            <button key={t} type="button" onClick={() => setFilter(t)} className={`rounded-t-xl px-5 py-3 text-sm font-bold transition ${filter === t ? "bg-gray-950 text-white" : "text-gray-500 hover:text-gray-900"}`}>
              {t}{t !== "All" && <span className="ml-1.5 text-xs opacity-60">{items.filter((i) => i.type === t).length}</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => {
            const TypeIcon = it.type === "Photo" ? ImageIcon : Video;
            return (
              <a key={it.slug} href={it.href} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={it.image} alt={it.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    <TypeIcon size={12} /> {it.type}
                  </div>
                  {it.featured && <div className="absolute right-3 top-3 rounded-full bg-kiwi-green px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-gray-950">New</div>}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-black text-gray-950">{it.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{it.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-kiwi-green-dark">
                    Try this effect <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gray-950 px-8 py-12 text-center text-white sm:px-12">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Find your hook in one click.</h2>
          <p className="max-w-xl text-sm leading-6 text-white/70">Every effect runs in the LazyKiwi workbench. Upload once and generate.</p>
          <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 transition hover:bg-white">
            Open the workbench <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
