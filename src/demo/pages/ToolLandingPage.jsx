import { ArrowRight, ArrowUpRight, Upload, Sparkles, Clock } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { tools } from "../data/toolsList";
import { getToolPage } from "../data/toolPages";
import ToolBlockRenderer from "@/components/toolBlocks/ToolBlockRenderer";
import ToolPageSlots from "../components/tools/ToolPageSlots";
import IpDisclaimer from "../components/common/IpDisclaimer";
import { isIpRiskSlug } from "@/lib/seo/ipRiskSlugs";

const ORIGIN = "https://lazykiwi.ai";
const TRY_HREF = "/image-generator";
const WHY_ICONS = [Sparkles, Upload, Clock];

function StepNumber({ n }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-kiwi-green text-sm font-black text-gray-950 shadow-sm">
      {n}
    </span>
  );
}

function RichToolPage({ data, meta, slug }) {
  const heroBefore = data.hero?.image_before;
  const heroAfter = data.hero?.image_after;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: meta?.seo_title || `${meta?.name} | LazyKiwi`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${ORIGIN}/tools/${slug}`,
    description: meta?.seo_description || data.hero?.description || "",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={jsonLd} />

      {/* Hero */}
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
              {data.hero?.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">{data.hero?.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={TRY_HREF} className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
                Upload your photo <Upload size={18} />
              </a>
              <a href="/tools" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
                All tools <ArrowUpRight size={16} />
              </a>
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

      {/* What it is */}
      {data.what_it_is && (
        <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10 lg:py-24">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">What it is</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.what_it_is.title}</h2>
          {data.what_it_is.intro && <p className="mt-6 text-lg leading-8 text-gray-600">{data.what_it_is.intro}</p>}
          {data.what_it_is.checks?.length > 0 && (
            <div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[15px] font-semibold text-gray-950">
              {data.what_it_is.checks.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-kiwi-green-dark" /> {c}
                </span>
              ))}
            </div>
          )}
        </section>
      )}

      {/* How it works */}
      {data.how_it_works?.steps?.length > 0 && (
        <section className="border-y border-gray-100 bg-[#FBFCF8]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
            <div className="text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">How it works</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.how_it_works.title}</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {data.how_it_works.steps.map((step, i) => (
                <div key={i} className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-4"><StepNumber n={i + 1} /></div>
                  <h3 className="text-xl font-black text-gray-950">{step.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {data.features?.length > 0 && (
        <section className="mx-auto max-w-7xl space-y-20 px-6 py-16 sm:px-10 lg:space-y-28 lg:py-24">
          {data.features.map((feat, i) => (
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
                <p className="mt-5 text-[16.5px] leading-relaxed text-gray-600">{feat.description}</p>
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
      )}

      {/* Showcase gallery */}
      {data.showcase?.items?.length > 0 && (
        <section className="bg-gray-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green">Examples</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{data.showcase.title}</h2>
                {data.showcase.subtitle && <p className="mt-4 max-w-xl text-base text-white/60">{data.showcase.subtitle}</p>}
              </div>
              <a href={TRY_HREF} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-kiwi-green px-6 py-3 text-sm font-black text-gray-950 transition hover:bg-kiwi-green-dark">
                Upload your photo <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {data.showcase.items.map((it, i) => (
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
      )}

      {/* Why LazyKiwi */}
      {data.why?.cards?.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">Why LazyKiwi</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.why.title}</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.why.cards.map((card, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <div key={i} className="rounded-3xl border border-gray-100 p-7 transition hover:border-kiwi-green-dark/30 hover:shadow-sm">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-kiwi-green/15 text-kiwi-green-dark">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-gray-950">{card.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq?.faqs?.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.faq.title || "Questions, answered"}</h2>
          </div>
          <div className="mt-12 divide-y divide-gray-100 border-y border-gray-100">
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

      {/* CTA */}
      <ToolPageSlots data={data} />
      {isIpRiskSlug(slug) && <IpDisclaimer />}
      {data.cta && (
        <section className="px-6 pb-24 sm:px-10">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full bg-kiwi-green/30 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-kiwi-green/20 blur-[120px]" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">{data.cta.title}</h2>
            {data.cta.description && <p className="relative mx-auto mt-5 max-w-xl text-[17px] text-white/70">{data.cta.description}</p>}
            <div className="relative mt-9 flex justify-center">
              <a href={TRY_HREF} className="inline-flex items-center gap-2 rounded-full bg-kiwi-green px-8 py-4 text-base font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
                Upload your photo <Upload size={18} />
              </a>
            </div>
            <p className="relative mt-5 text-[13px] text-white/45">No credit card · Free to try · Results in seconds</p>
          </div>
        </section>
      )}
    </article>
  );
}

export default function ToolLandingPage({ slug, dbData }) {
  const richData = dbData || getToolPage(slug);
  const tool = tools.find((item) => item.slug === slug);

  if (richData) {
    if (Array.isArray(richData.blocks)) {
      return (
        <ToolBlockRenderer
          blocks={richData.blocks}
          meta={{ ...tool, seo_title: richData.seo_title, seo_description: richData.seo_description }}
          slug={slug}
        />
      );
    }
    return <RichToolPage data={richData} meta={{ ...tool, seo_title: richData.seo_title, seo_description: richData.seo_description }} slug={slug} />;
  }

  if (!tool) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${tool.name} | LazyKiwi`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${ORIGIN}/tools/${tool.slug}`,
    description: tool.blurb,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{tool.categoryLabel}</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">{tool.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{tool.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={TRY_HREF} className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Try it free <ArrowRight size={18} />
            </a>
            <a href="/tools" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
              All tools <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 sm:px-10 lg:grid-cols-3">
        {["Upload one photo", "Choose the result", "Generate in seconds"].map((title, index) => (
          <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-kiwi-green/20 text-kiwi-green-dark">
              {index === 0 ? <Upload size={20} /> : index === 1 ? <Sparkles size={20} /> : <Clock size={20} />}
            </div>
            <h2 className="text-xl font-black text-gray-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {index === 0 && "Start with a clear selfie or photo. LazyKiwi keeps the workflow focused and quick."}
              {index === 1 && `Use ${tool.name} to preview the edit while keeping the subject recognizable.`}
              {index === 2 && "Export a polished result from the same LazyKiwi workbench."}
            </p>
          </div>
        ))}
      </section>
      <ToolPageSlots data={tool} />
      {isIpRiskSlug(slug) && <IpDisclaimer />}
    </article>
  );
}
