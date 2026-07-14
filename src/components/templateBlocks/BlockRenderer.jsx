import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Layers,
  Sparkles,
  User,
  Wand2,
  Zap,
} from "lucide-react";
import JsonLd from "@/demo/components/common/JsonLd";

const ORIGIN = "https://lazykiwi.ai";

const ICONS = {
  scene: Layers,
  subject: User,
  motion: Zap,
  camera: Camera,
  sparkle: Sparkles,
  sparkles: Sparkles,
  magic: Wand2,
  video: Clapperboard,
};

function CardIcon({ name }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={20} />;
}

/**
 * Minimal, safe markdown rendering (no HTML injection): supports #/## headings,
 * "- " bullet lists and blank-line separated paragraphs. Anything else renders
 * as plain paragraph text.
 */
function RichText({ markdown }) {
  const text = String(markdown || "").trim();
  if (!text) return null;
  const lines = text.split(/\r?\n/);
  const nodes = [];
  let list = [];
  const flushList = (key) => {
    if (list.length) {
      nodes.push(
        <ul key={`ul-${key}`} className="my-4 list-disc space-y-2 pl-6 text-gray-600">
          {list.map((item, i) => (
            <li key={i} className="text-[15.5px] leading-relaxed">{item}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line) {
      flushList(i);
      return;
    }
    if (line.startsWith("## ")) {
      flushList(i);
      nodes.push(<h3 key={i} className="mt-6 text-xl font-black text-gray-950">{line.slice(3)}</h3>);
    } else if (line.startsWith("# ")) {
      flushList(i);
      nodes.push(<h2 key={i} className="mt-6 text-2xl font-black text-gray-950">{line.slice(2)}</h2>);
    } else if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else {
      flushList(i);
      nodes.push(<p key={i} className="my-3 text-[15.5px] leading-relaxed text-gray-600">{line}</p>);
    }
  });
  flushList("end");
  return <div className="mx-auto max-w-3xl">{nodes}</div>;
}

function HeroBlock({ data, workbenchHref, typeLabel }) {
  const heroImage = data.image || data.image_after || data.image_before;
  const heroBefore = data.image_before;
  const heroAfter = data.image_after;
  const hasBeforeAfter = Boolean(heroBefore && heroAfter);
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{typeLabel}</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            {data.title}
          </h1>
          {data.description && <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{data.description}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={workbenchHref}
              className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white"
            >
              Use this template <ArrowRight size={18} />
            </a>
            <a
              href="/templates"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950"
            >
              All templates <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        {hasBeforeAfter ? (
          <div className="grid grid-cols-2 gap-3">
            {[{ img: heroBefore, tag: "Before" }, { img: heroAfter, tag: "After" }].map((it) => (
              <div key={it.tag} className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
                <img src={it.img} alt={`${data.title || ""} ${it.tag}`} className="h-full min-h-[300px] w-full object-cover" loading="lazy" />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {it.tag}
                </span>
              </div>
            ))}
          </div>
        ) : (
          heroImage && (
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
              <img src={heroImage} alt={data.title || ""} className="h-full min-h-[320px] w-full object-cover" loading="lazy" />
            </div>
          )
        )}
      </div>
    </section>
  );
}

function WhatItIsBlock({ data }) {
  const cards = Array.isArray(data.cards) ? data.cards : [];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
      <div className="mb-10 max-w-3xl">
        {data.eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>}
        {data.title && <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>}
        {data.intro && <p className="mt-4 text-lg leading-8 text-gray-600">{data.intro}</p>}
      </div>
      {cards.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <div key={i} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-kiwi-green/20 text-kiwi-green-dark">
                <CardIcon name={card.icon} />
              </div>
              <h3 className="text-lg font-black text-gray-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ScenariosBlock({ data }) {
  const scenarios = Array.isArray(data.scenarios) ? data.scenarios : [];
  if (scenarios.length === 0) return null;
  return (
    <section className="border-y border-gray-100 bg-[#FBFCF8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="mb-10 max-w-3xl">
          {data.eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>}
          {data.title && <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>}
          {data.description && <p className="mt-4 text-lg leading-8 text-gray-600">{data.description}</p>}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {scenarios.map((sc, i) => (
            <figure key={i} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              {sc.image && (
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img src={sc.image} alt={sc.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
              )}
              <figcaption className="p-6">
                {sc.category && (
                  <span className="mb-2 inline-block rounded-full bg-kiwi-green/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-kiwi-green-dark">
                    {sc.category}
                  </span>
                )}
                <h3 className="text-lg font-black text-gray-950">{sc.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{sc.use_case_description || sc.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqBlock({ data }) {
  const faqs = Array.isArray(data.faqs) ? data.faqs : [];
  if (faqs.length === 0) return null;
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-20">
      <div className="mb-10 text-center">
        {data.eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>}
        {data.title && <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>}
      </div>
      <div className="divide-y divide-gray-100 border-y border-gray-100">
        {faqs.map((item, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="pr-6 text-[17px] font-bold text-gray-950">{item.question}</span>
              <span className="shrink-0 text-2xl leading-none text-kiwi-green-dark transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15.5px] leading-relaxed text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function OtherNamesBlock({ data }) {
  const keywords = Array.isArray(data.keywords) ? data.keywords : [];
  return (
    <section className="border-t border-gray-100 bg-[#FBFCF8]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        {data.title && <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{data.title}</h2>}
        {data.description && <p className="mt-4 text-base leading-7 text-gray-600">{data.description}</p>}
        {keywords.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <span key={i} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
                {kw}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CtaBlock({ data, workbenchHref }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-14 text-center sm:px-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-kiwi-green/30 blur-[120px]" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">{data.headline}</h2>
        {data.supporting_text && (
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-gray-300">{data.supporting_text}</p>
        )}
        <div className="relative mt-8 flex justify-center">
          <a
            href={workbenchHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-8 py-4 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white"
          >
            {data.button_text || "Start creating"} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function HeadingBlock({ data }) {
  if (!data.text) return null;
  return (
    <section className="mx-auto max-w-5xl px-6 pt-12 sm:px-10">
      <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.text}</h2>
    </section>
  );
}

function ImageBlock({ data }) {
  if (!data.url) return null;
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
      <figure className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
        <img src={data.url} alt={data.alt || ""} className="w-full object-cover" loading="lazy" />
        {data.caption && <figcaption className="px-6 py-4 text-center text-sm text-gray-500">{data.caption}</figcaption>}
      </figure>
    </section>
  );
}

function GalleryBlock({ data }) {
  const images = Array.isArray(data.images) ? data.images : [];
  if (images.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
            <img src={img.url} alt={img.alt || ""} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

function RichTextBlock({ data }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-8 sm:px-10">
      <RichText markdown={data.markdown} />
    </section>
  );
}

function SpacerBlock() {
  return <div className="py-8" />;
}

/**
 * Renders DB-driven template page blocks in order. Typed blocks reuse the rich
 * landing markup; generic blocks (rich_text/image/gallery/heading/spacer) add
 * Notion-style flexibility.
 */
export default function BlockRenderer({ blocks, slug, templateType, name }) {
  const list = Array.isArray(blocks) ? blocks : [];
  const isImage = templateType === "image";
  const generatorPath = isImage ? "/image-generator" : "/video-generator";
  const workbenchHref = `${generatorPath}?mode=template&template=${encodeURIComponent(slug)}`;
  const typeLabel = isImage ? "Image Template" : "Video Template";

  const hero = list.find((b) => b?.type === "hero");
  const heroData = hero?.data || {};
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${heroData.title || name || slug} Template`,
    url: `${ORIGIN}/templates/${slug}`,
    description: heroData.description || "",
  };

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={jsonLd} />
      {list.map((block, i) => {
        const data = block?.data || {};
        const key = block?.id || `${block?.type}-${i}`;
        switch (block?.type) {
          case "hero":
            return <HeroBlock key={key} data={data} workbenchHref={workbenchHref} typeLabel={typeLabel} />;
          case "what_it_is":
            return <WhatItIsBlock key={key} data={data} />;
          case "scenarios":
          case "application_scenarios":
            return <ScenariosBlock key={key} data={data} />;
          case "faq":
            return <FaqBlock key={key} data={data} />;
          case "other_names":
            return <OtherNamesBlock key={key} data={data} />;
          case "cta":
            return <CtaBlock key={key} data={data} workbenchHref={workbenchHref} />;
          case "heading":
            return <HeadingBlock key={key} data={data} />;
          case "image":
            return <ImageBlock key={key} data={data} />;
          case "gallery":
            return <GalleryBlock key={key} data={data} />;
          case "rich_text":
            return <RichTextBlock key={key} data={data} />;
          case "spacer":
            return <SpacerBlock key={key} />;
          default:
            return null;
        }
      })}
    </article>
  );
}
