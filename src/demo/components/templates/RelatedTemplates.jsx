import { templates } from "@/demo/data/templatesList";

export default function RelatedTemplates({ currentSlug, limit = 6, title = "Related templates" }) {
  const related = templates.filter((item) => item.slug !== currentSlug).slice(0, limit);
  if (!related.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10">
      <h2 className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((template) => (
          <a
            key={template.slug}
            href={template.href}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-kiwi-green-dark/40"
          >
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-kiwi-green-dark">{template.type}</p>
            <h3 className="mt-2 text-lg font-black text-gray-950">{template.name}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{template.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
