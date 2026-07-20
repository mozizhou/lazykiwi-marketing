import { tools, toolCategories } from "../data/toolsList";

export default function ToolsCategoryHub({ categoryKey }) {
  const category = toolCategories.find((item) => item.key === categoryKey);
  const items = tools.filter((tool) => tool.category === categoryKey);

  if (!category) return null;

  return (
    <div className="min-h-full bg-white">
      <section className="border-b border-gray-100 bg-[#FBFCF8]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">Tools</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">{category.label}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Browse LazyKiwi {category.label.toLowerCase()} tools — upload one photo and get fast results online.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((tool) => (
          <a key={tool.slug} href={tool.href} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-kiwi-green-dark/40">
            <h2 className="text-xl font-black text-gray-950">{tool.name}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{tool.blurb}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
