export default function LandingFAQ({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
          FAQ
        </p>
        <h2 className="mt-1 text-3xl font-black tracking-tight text-gray-950">
          Common questions
        </h2>
      </div>
      <div className="space-y-4">
        {data.map((faq, index) => (
          <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-gray-950">
              {faq.question}
            </summary>
            <p className="mt-4 border-l-2 border-kiwi-green pl-5 text-base leading-7 text-gray-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
