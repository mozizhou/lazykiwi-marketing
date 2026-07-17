import { Check } from "lucide-react";
import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

export default function ModelCapabilities({ data }) {
  if (!data || !data.items) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>
        <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
        {data.description && <p className="mt-4 text-base leading-7 text-gray-600">{renderInlineLinks(data.description)}</p>}
      </div>

      <div className="space-y-6">
        {data.items.map((cap, i) => (
          <div
            key={i}
            className="grid items-center gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-8"
          >
            <div className={`overflow-hidden rounded-2xl bg-gray-100 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="aspect-[16/10]">
                <img src={cap.image} alt={cap.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{cap.eyebrow}</p>
              <h3 className="text-2xl font-black tracking-tight text-gray-950">{cap.title}</h3>
              <p className="mt-3 text-base leading-7 text-gray-600">{renderInlineLinks(cap.description)}</p>
              {cap.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {cap.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-sm font-medium text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kiwi-light-green text-kiwi-green-dark">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
