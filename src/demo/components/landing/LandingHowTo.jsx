export default function LandingHowTo({ data }) {
  if (!data || !Array.isArray(data.steps) || data.steps.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
            {data.eyebrow || "How to"}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {data.title || "Create in LazyKiwi"}
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            {data.description}
          </p>
        </div>
        <div className="grid gap-4">
          {data.steps.map((step, index) => (
            <div key={index} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kiwi-yellow text-sm font-black text-gray-950">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-950">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
