export default function ModelSpecs({ data }) {
  if (!data || !data.rows) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
            {data.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">{data.description}</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <dl>
            {data.rows.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                  index !== data.rows.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <dt className="w-40 shrink-0 text-sm font-bold text-gray-500">{row.label}</dt>
                <dd className="text-sm font-semibold text-gray-950">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
