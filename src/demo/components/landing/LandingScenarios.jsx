export default function LandingScenarios({ data }) {
  if (!data || data.length === 0) return null;

  const sectionEyebrow = data.sectionEyebrow || "Creator use cases";
  const sectionTitle = data.sectionTitle || "Application Scenarios";
  const sectionDescription = data.sectionDescription || "Real creative use cases of the effect across different channels.";

  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
            {sectionEyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            {sectionDescription}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.map((scenario, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 pt-10">
                  <h3 className="text-[1.05rem] font-bold leading-tight text-white drop-shadow-md">{scenario.title}</h3>
                  <p className="mt-1 max-w-[95%] text-[0.8rem] leading-snug text-white/90 drop-shadow">{scenario.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
