import { modelCatalog } from "../data/modelCatalog";

const LABELS = {
  video: "Video Models",
  image: "Image Models",
};

export default function ModelsCategoryHub({ categoryKey }) {
  const label = LABELS[categoryKey];
  const items = modelCatalog.filter((model) => model.type.toLowerCase() === categoryKey);

  if (!label) return null;

  return (
    <div className="min-h-full bg-white">
      <section className="border-b border-gray-100 bg-[#FBFCF8]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">Models</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">{label}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Compare {label.toLowerCase()} on LazyKiwi and run any of them in one workbench.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((model) => (
          <a key={model.slug} href={model.href} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-kiwi-green-dark/40">
            <h2 className="text-xl font-black text-gray-950">{model.name}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{model.blurb}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
