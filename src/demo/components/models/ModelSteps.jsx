import { ArrowRight } from "lucide-react";
import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

export default function ModelSteps({ data, resolveCtaHref }) {
  if (!data || !data.items) return null;
  const ctaHref = resolveCtaHref ? resolveCtaHref(data.cta?.link) : data.cta?.link;

  return (
    <section className="border-y border-gray-100 bg-[#FBFCF8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
          {data.description && <p className="mt-4 text-base leading-7 text-gray-600">{renderInlineLinks(data.description)}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {data.items.map((step, i) => (
            <div key={i} className="relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img src={step.image} alt={step.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-gray-950 shadow-md">
                  {i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-gray-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{renderInlineLinks(step.description)}</p>
              </div>
            </div>
          ))}
        </div>

        {data.cta && (
          <div className="mt-10 text-center">
            <a href={ctaHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-7 py-3.5 text-sm font-black text-white transition hover:bg-gray-800">
              {data.cta.label} <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
