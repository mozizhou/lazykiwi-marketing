import { Star, Quote } from "lucide-react";

export default function ModelTestimonials({ data }) {
  if (!data) return null;

  return (
    <section className="border-y border-gray-100 bg-[#FBFCF8]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
        </div>

        {data.stats && (
          <dl className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <dt className="text-4xl font-black tracking-tight text-gray-950">{s.value}</dt>
                <dd className="mt-1 text-sm font-medium text-gray-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {data.quotes && (
          <div className="grid gap-5 md:grid-cols-3">
            {data.quotes.map((q, i) => (
              <figure key={i} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Quote size={22} className="text-kiwi-green" fill="currentColor" />
                <blockquote className="mt-3 flex-1 text-[0.95rem] leading-7 text-gray-700">"{q.quote}"</blockquote>
                <div className="mt-1 mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={14} className="text-kiwi-green-dark" fill="currentColor" />
                  ))}
                </div>
                <figcaption className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <img src={q.avatar} alt={q.name} className="h-10 w-10 rounded-full" />
                  <span>
                    <span className="block text-sm font-black text-gray-950">{q.name}</span>
                    <span className="block text-xs text-gray-400">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
