import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Video, Image as ImageIcon } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { modelPages } from "../data/modelPages";
import { modelCatalog } from "../data/modelCatalog";

const ORIGIN = "https://lazykiwi.ai";

function toType(d) {
  return d.parentFeature === "image-generator" ? "Image" : "Video";
}

function isVideoSrc(src) {
  return /\.(mp4|webm|mov|m3u8)(\?|#|$)/i.test(src || "");
}

// Model covers can be either a still image or a video clip (many video models
// point at .mp4 showcase/hero media). Render <video> for video sources so the
// cover actually shows/plays instead of a broken <img>.
function CoverMedia({ src, alt, poster }) {
  if (isVideoSrc(src)) {
    return (
      <video
        src={encodeURI(src)}
        poster={poster ? encodeURI(poster) : undefined}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        aria-label={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  );
}

export default function ModelsHub(props) {
  const extra = props?.extra;
  const [filter, setFilter] = useState("All");

  const items = useMemo(
    () => {
      const FALLBACK = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/hero/hero-poster.png";
      const bySlug = new Map();
      modelCatalog.forEach((model) => {
        const d = modelPages[model.slug];
        bySlug.set(model.slug, {
          slug: model.slug,
          name: d?.hero.name || model.name,
          tagline: d?.hero.tagline || model.blurb,
          badge: d?.hero.badge || model.type,
          statusPill: d?.hero.statusPill,
          type: d ? toType(d) : model.type,
          image: d?.showcase?.items?.[0]?.image || d?.hero.media.wide || FALLBACK,
          poster: d?.hero?.media?.poster || d?.showcase?.items?.[0]?.poster || d?.steps?.items?.[0]?.image || FALLBACK,
          href: model.href,
        });
      });
      // DB-published models take priority over the static catalog on slug collision.
      (extra || []).forEach((card) => {
        const existing = bySlug.get(card.slug);
        bySlug.set(card.slug, {
          slug: card.slug,
          name: card.name || existing?.name || card.slug,
          tagline: card.blurb || existing?.tagline || "",
          badge: existing?.badge || (card.templateType === "image" ? "Image" : "Video"),
          statusPill: existing?.statusPill,
          type: existing?.type || (card.templateType === "image" ? "Image" : "Video"),
          image: card.image || existing?.image || FALLBACK,
          poster: existing?.poster || FALLBACK,
          href: `/models/${card.slug}`,
        });
      });
      return Array.from(bySlug.values());
    },
    [extra]
  );

  const filtered = filter === "All" ? items : items.filter((i) => i.type === filter);

  useEffect(() => {
    document.title = "AI Models: Sora 2, Veo 3, Kling, FLUX & More | LazyKiwi";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Browse every AI video and image model in LazyKiwi: Sora 2, Veo 3, Kling, Seedream, Nano Banana, FLUX and more. Compare their strengths and run any of them in one workbench.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Models | LazyKiwi",
    url: `${ORIGIN}/models`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: `${ORIGIN}${it.href}`,
      })),
    },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 lg:pt-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">Models</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            Every top AI model, <span className="text-kiwi-green-dark">one workbench</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Switch between the newest and most popular AI video and image models without switching tools. Compare strengths, then generate with any of them inside LazyKiwi.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Open the workbench <ArrowRight size={18} />
            </a>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600">
              {items.length} models · video & image
            </span>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
          {["All", "Video", "Image"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`rounded-t-xl px-5 py-3 text-sm font-bold transition ${
                filter === t ? "bg-gray-950 text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {t}
              {t !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">{items.filter((i) => i.type === t).length}</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => {
            const TypeIcon = it.type === "Video" ? Video : ImageIcon;
            return (
              <a key={it.slug} href={it.href} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <CoverMedia src={it.image} alt={it.name} poster={it.poster} />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    <TypeIcon size={12} /> {it.type}
                  </div>
                  {it.statusPill && (
                    <div className="absolute right-3 top-3 rounded-full bg-kiwi-green px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-gray-950">
                      {it.statusPill}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">{it.badge}</p>
                  <h3 className="mt-1.5 text-xl font-black text-gray-950">{it.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{it.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-kiwi-green-dark">
                    Explore model <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gray-950 px-8 py-12 text-center text-white sm:px-12">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Pick a model and start creating.</h2>
          <p className="max-w-xl text-sm leading-6 text-white/70">Every model above runs in the same workbench, with no extra tools and no waitlists.</p>
          <a href="/video-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 transition hover:bg-white">
            Open the workbench <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
