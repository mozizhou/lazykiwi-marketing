import { useEffect } from "react";
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
import JsonLd from "../components/common/JsonLd";

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

export default function TemplateRichLanding({ data, slug }) {
  const isImage = data.template_type === "image";
  const generatorPath = isImage ? "/image-generator" : "/video-generator";
  const workbenchHref = `${generatorPath}?mode=template&template=${encodeURIComponent(slug)}`;
  const typeLabel = isImage ? "Image Template" : "Video Template";

  const heroImage =
    data.hero?.image ||
    data.hero?.image_after ||
    data.images?.hero ||
    data.images?.hero_after ||
    data.images?.scenarios?.[0];
  const heroBefore = data.hero?.image_before || data.images?.hero_before;
  const heroAfter = data.hero?.image_after || data.images?.hero_after;
  const hasBeforeAfter = Boolean(heroBefore && heroAfter);

  useEffect(() => {
    if (!data) return;
    document.title = `${data.hero?.title || data.template_name} Template | LazyKiwi`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && data.hero?.description) meta.setAttribute("content", data.hero.description);
  }, [data]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${data.hero?.title || data.template_name} Template`,
    url: `${ORIGIN}/templates/${slug}`,
    description: data.hero?.description || "",
  };

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{typeLabel}</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
              {data.hero?.title || data.template_name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{data.hero?.description}</p>
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
                  <img src={it.img} alt={`${data.template_name} ${it.tag}`} className="h-full min-h-[300px] w-full object-cover" loading="lazy" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {it.tag}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            heroImage && (
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
                <img src={heroImage} alt={data.template_name} className="h-full min-h-[320px] w-full object-cover" loading="lazy" />
              </div>
            )
          )}
        </div>
      </section>

      {/* What it is */}
      {data.what_it_is && (
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            {data.what_it_is.eyebrow && (
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.what_it_is.eyebrow}</p>
            )}
            <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.what_it_is.title}</h2>
            {data.what_it_is.intro && <p className="mt-4 text-lg leading-8 text-gray-600">{data.what_it_is.intro}</p>}
          </div>
          {data.what_it_is.cards && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.what_it_is.cards.map((card, i) => (
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
      )}

      {/* Application scenarios */}
      {data.application_scenarios?.scenarios?.length > 0 && (
        <section className="border-y border-gray-100 bg-[#FBFCF8]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
            <div className="mb-10 max-w-3xl">
              {data.application_scenarios.eyebrow && (
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.application_scenarios.eyebrow}</p>
              )}
              <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.application_scenarios.title}</h2>
              {data.application_scenarios.description && (
                <p className="mt-4 text-lg leading-8 text-gray-600">{data.application_scenarios.description}</p>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {data.application_scenarios.scenarios.map((sc, i) => (
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
      )}

      {/* FAQ */}
      {data.faq?.faqs?.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 text-center">
            {data.faq.eyebrow && (
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.faq.eyebrow}</p>
            )}
            <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.faq.title}</h2>
          </div>
          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {data.faq.faqs.map((item, i) => (
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
      )}

      {/* Other names / keywords */}
      {data.other_names && (
        <section className="border-t border-gray-100 bg-[#FBFCF8]">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{data.other_names.title}</h2>
            {data.other_names.description && (
              <p className="mt-4 text-base leading-7 text-gray-600">{data.other_names.description}</p>
            )}
            {data.other_names.keywords?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {data.other_names.keywords.map((kw, i) => (
                  <span key={i} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      {data.cta && (
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-kiwi-green/30 blur-[120px]" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">{data.cta.headline}</h2>
            {data.cta.supporting_text && (
              <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-gray-300">{data.cta.supporting_text}</p>
            )}
            <div className="relative mt-8 flex justify-center">
              <a
                href={workbenchHref}
                className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-8 py-4 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white"
              >
                {data.cta.button_text || "Start creating"} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
