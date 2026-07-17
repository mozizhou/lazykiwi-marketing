import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  Upload,
  Wand2,
  Zap,
} from "lucide-react";
import JsonLd from "@/demo/components/common/JsonLd";
import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

const ORIGIN = "https://lazykiwi.ai";
const TRY_HREF = "/image-generator";
const WHY_ICONS = [Zap, ShieldCheck, Check, Heart, Sparkles, Wand2];

function StepNumber({ n }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-kiwi-green text-sm font-black text-gray-950 shadow-sm">
      {n}
    </span>
  );
}

function HeroBlock({ data, meta }) {
  const heroBefore = data.image_before;
  const heroAfter = data.image_after;
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-kiwi-green/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          {meta?.name && (
            <span className="inline-flex items-center gap-2 rounded-full border border-kiwi-green-dark/30 bg-kiwi-green/10 px-3 py-1.5 text-[13px] font-bold text-kiwi-green-dark">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-kiwi-green text-[11px] font-black text-gray-950">AI</span>
              {meta.name}
            </span>
          )}
          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">{renderInlineLinks(data.description)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={TRY_HREF} className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Upload your photo <Upload size={18} />
            </a>
            <a href="/tools" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
              All tools <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-7 flex items-center gap-2 text-sm text-gray-500">
            <span className="flex text-kiwi-green-dark">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </span>
            <span className="font-semibold text-gray-700">4.9</span>
            <span>· Loved by 120,000+ creators</span>
          </div>
        </div>

        {(heroBefore || heroAfter) && (
          <div className="grid grid-cols-2 gap-3">
            {[{ img: heroBefore, tag: "Before" }, { img: heroAfter, tag: "After" }]
              .filter((it) => it.img)
              .map((it) => (
                <div key={it.tag} className="relative overflow-hidden rounded-3xl border-[6px] border-white bg-gray-100 shadow-[0_24px_60px_-30px_rgba(20,46,5,0.35)]">
                  <img src={it.img} alt={`${meta?.name || ""} ${it.tag}`} className="aspect-[4/5] h-full w-full object-cover" loading="lazy" />
                  <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-black ${it.tag === "After" ? "bg-kiwi-green text-gray-950" : "bg-white/90 text-gray-500"}`}>
                    {it.tag === "After" ? "AFTER ✨" : "BEFORE"}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

function WhatItIsBlock({ data }) {
  if (!data || (!data.title && !data.intro && !(data.checks?.length))) return null;
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10 lg:py-24">
      <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">What it is</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
      {data.intro && <p className="mt-6 text-lg leading-8 text-gray-600">{renderInlineLinks(data.intro)}</p>}
      {data.checks?.length > 0 && (
        <div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[15px] font-semibold text-gray-950">
          {data.checks.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <Check size={16} className="text-kiwi-green-dark" /> {c}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

function HowItWorksBlock({ data }) {
  if (!(data?.steps?.length > 0)) return null;
  return (
    <section className="border-y border-gray-100 bg-[#FBFCF8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">How it works</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {data.steps.map((step, i) => (
            <div key={i} className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4"><StepNumber n={i + 1} /></div>
              <h3 className="text-xl font-black text-gray-950">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-gray-600">{renderInlineLinks(step.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesBlock({ data }) {
  const features = Array.isArray(data) ? data : [];
  if (features.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl space-y-20 px-6 py-16 sm:px-10 lg:space-y-28 lg:py-24">
      {features.map((feat, i) => (
        <div key={i} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <div className={`absolute -inset-3 rounded-[2.4rem] bg-kiwi-green/15 ${i % 2 === 1 ? "rotate-2" : "-rotate-2"}`} />
            {feat.image && (
              <img src={feat.image} alt={feat.title} className="relative aspect-[16/10] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-30px_rgba(20,46,5,0.35)]" loading="lazy" />
            )}
          </div>
          <div className={i % 2 === 1 ? "lg:order-1" : ""}>
            {feat.eyebrow && <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">{feat.eyebrow}</p>}
            <h3 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{feat.title}</h3>
            <p className="mt-5 text-[16.5px] leading-relaxed text-gray-600">{renderInlineLinks(feat.description)}</p>
            {feat.bullets?.length > 0 && (
              <ul className="mt-6 space-y-3 text-[15.5px] text-gray-950">
                {feat.bullets.map((b, k) => (
                  <li key={k} className="flex gap-3">
                    <Check size={18} className="shrink-0 text-kiwi-green-dark" /> {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

function ShowcaseBlock({ data }) {
  if (!(data?.items?.length > 0)) return null;
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green">Examples</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{data.title}</h2>
            {data.subtitle && <p className="mt-4 max-w-xl text-base text-white/60">{data.subtitle}</p>}
          </div>
          <a href={TRY_HREF} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-kiwi-green px-6 py-3 text-sm font-black text-gray-950 transition hover:bg-kiwi-green-dark">
            Upload your photo <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {data.items.map((it, i) => (
            <figure key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
              <img src={it.image} alt={it.caption || ""} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              {it.caption && (
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[13px] font-bold text-gray-950">
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBlock({ data }) {
  if (!(data?.cards?.length > 0)) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
      <div className="text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">Why LazyKiwi</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card, i) => {
          const Icon = WHY_ICONS[i % WHY_ICONS.length];
          return (
            <div key={i} className="rounded-3xl border border-gray-100 p-7 transition hover:border-kiwi-green-dark/30 hover:shadow-sm">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-kiwi-green/15 text-kiwi-green-dark">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-black text-gray-950">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{renderInlineLinks(card.description)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ReviewsBlock({ data }) {
  if (!(data?.quotes?.length > 0)) return null;
  return (
    <section className="border-y border-gray-100 bg-[#FBFCF8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">Loved by creators</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {data.quotes.map((q, i) => (
            <figure key={i} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex gap-0.5 text-kiwi-green-dark">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15.5px] leading-relaxed text-gray-800">“{renderInlineLinks(q.quote)}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {q.avatar && <img src={q.avatar} alt={q.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />}
                <span>
                  <span className="block text-[14.5px] font-black text-gray-950">{q.name}</span>
                  <span className="block text-[13px] text-gray-500">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqBlock({ data }) {
  if (!(data?.faqs?.length > 0)) return null;
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-24">
      <div className="text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">FAQ</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title || "Questions, answered"}</h2>
      </div>
      <div className="mt-12 divide-y divide-gray-100 border-y border-gray-100">
        {data.faqs.map((item, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="pr-6 text-[17px] font-bold text-gray-950">{item.question}</span>
              <span className="shrink-0 text-2xl leading-none text-kiwi-green-dark transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15.5px] leading-relaxed text-gray-600">{renderInlineLinks(item.answer)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ data }) {
  if (!data || (!data.title && !data.description)) return null;
  return (
    <section className="px-6 pb-24 sm:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-16 text-center text-white sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full bg-kiwi-green/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-kiwi-green/20 blur-[120px]" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">{data.title}</h2>
        {data.description && <p className="relative mx-auto mt-5 max-w-xl text-[17px] text-white/70">{renderInlineLinks(data.description)}</p>}
        <div className="relative mt-9 flex justify-center">
          <a href={TRY_HREF} className="inline-flex items-center gap-2 rounded-full bg-kiwi-green px-8 py-4 text-base font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
            Upload your photo <Upload size={18} />
          </a>
        </div>
        <p className="relative mt-5 text-[13px] text-white/45">No credit card · Free to try · Results in seconds</p>
      </div>
    </section>
  );
}

/**
 * Converts a legacy structured tool doc into an ordered block list. Kept in sync
 * with the admin editor's converter so DB→block rendering matches the editor.
 */
export function toolToBlocks(doc) {
  if (!doc) return [];
  if (Array.isArray(doc.blocks)) return doc.blocks;
  const b = [];
  if (doc.hero) b.push({ type: "hero", data: doc.hero });
  if (doc.what_it_is && (doc.what_it_is.title || doc.what_it_is.intro || doc.what_it_is.checks?.length)) b.push({ type: "what_it_is", data: doc.what_it_is });
  if (doc.how_it_works?.steps?.length) b.push({ type: "how_it_works", data: doc.how_it_works });
  if (doc.features?.length) b.push({ type: "features", data: doc.features });
  if (doc.showcase?.items?.length) b.push({ type: "showcase", data: doc.showcase });
  if (doc.why?.cards?.length) b.push({ type: "why", data: doc.why });
  if (doc.reviews?.quotes?.length) b.push({ type: "reviews", data: doc.reviews });
  if (doc.faq?.faqs?.length) b.push({ type: "faq", data: doc.faq });
  if (doc.cta && (doc.cta.title || doc.cta.description)) b.push({ type: "cta", data: doc.cta });
  return b;
}

export default function ToolBlockRenderer({ blocks, meta, slug }) {
  const list = Array.isArray(blocks) ? blocks : [];
  const heroData = list.find((b) => b?.type === "hero")?.data || {};

  useEffect(() => {
    document.title = meta?.seo_title || `${meta?.name || heroData.title} | LazyKiwi`;
    const el = document.querySelector('meta[name="description"]');
    if (el && meta?.seo_description) el.setAttribute("content", meta.seo_description);
  }, [meta, heroData.title]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: meta?.seo_title || `${meta?.name} | LazyKiwi`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${ORIGIN}/tools/${slug}`,
    description: meta?.seo_description || heroData.description || "",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={jsonLd} />
      {list.map((block, i) => {
        const data = block?.data;
        const key = block?.id || `${block?.type}-${i}`;
        switch (block?.type) {
          case "hero":
            return <HeroBlock key={key} data={data || {}} meta={meta} />;
          case "what_it_is":
            return <WhatItIsBlock key={key} data={data} />;
          case "how_it_works":
            return <HowItWorksBlock key={key} data={data} />;
          case "features":
            return <FeaturesBlock key={key} data={data} />;
          case "showcase":
            return <ShowcaseBlock key={key} data={data} />;
          case "why":
            return <WhyBlock key={key} data={data} />;
          case "reviews":
            return <ReviewsBlock key={key} data={data} />;
          case "faq":
            return <FaqBlock key={key} data={data} />;
          case "cta":
            return <CtaBlock key={key} data={data} />;
          default:
            return null;
        }
      })}
    </article>
  );
}
