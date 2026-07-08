export default function LandingAliases({ data }) {
  if (!data || !Array.isArray(data.terms) || data.terms.length === 0) return null;

  return (
    <section id="other-names" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 sm:px-10">
      <div className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-sm sm:px-8">
        <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-600 sm:text-[15px]">
          {data.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {data.terms.map((term) => (
            <span
              key={term}
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
            >
              {term}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
