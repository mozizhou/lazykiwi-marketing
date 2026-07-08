export default function ModelRelated({ data }) {
  if (!data || !data.models || data.models.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10">
      <div className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-sm sm:px-8">
        <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-[15px]">
          {data.description}
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.models.map((model) => {
            return (
              <a
                key={model.name}
                href={model.link}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-kiwi-green hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <span>
                    <span className="block text-sm font-black text-gray-950">{model.name}</span>
                    <span className="block text-xs font-medium text-gray-400">{model.type}</span>
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
