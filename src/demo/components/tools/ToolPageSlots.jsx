export default function ToolPageSlots({ data }) {
  const beforeAfter = data?.before_after || data?.beforeAfter;
  const scenarios = data?.scenarios?.items || data?.scenarios;
  const extendedFaq = data?.extended_faq?.faqs || data?.extendedFaq;

  const hasBeforeAfter = beforeAfter?.before && beforeAfter?.after;
  const hasScenarios = Array.isArray(scenarios) && scenarios.length > 0;
  const hasFaq = Array.isArray(extendedFaq) && extendedFaq.length > 0;

  if (!hasBeforeAfter && !hasScenarios && !hasFaq) return null;

  return (
    <>
      {hasBeforeAfter && (
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
          <div className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-kiwi-green-dark">Before & After</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {beforeAfter.title || "See the transformation"}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
              <img src={beforeAfter.before} alt="Before" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-sm font-bold text-gray-500">Before</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
              <img src={beforeAfter.after} alt="After" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-sm font-bold text-kiwi-green-dark">After</figcaption>
            </figure>
          </div>
        </section>
      )}

      {hasScenarios && (
        <section className="border-y border-gray-100 bg-[#FBFCF8]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
              {data.scenarios?.title || "Popular use cases"}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {scenarios.map((item, index) => (
                <div key={item.title || index} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasFaq && (
        <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
          <h2 className="text-center text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {data.extended_faq?.title || data.extendedFaq?.title || "More questions"}
          </h2>
          <div className="mt-10 divide-y divide-gray-100 border-y border-gray-100">
            {extendedFaq.map((item, index) => (
              <details key={item.question || index} className="group py-5">
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
    </>
  );
}
