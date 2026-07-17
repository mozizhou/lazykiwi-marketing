import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

export default function BlogAuthorBio({ data }) {
  if (!data) return null;
  return (
    <section className="mx-auto max-w-3xl px-6 pb-4 sm:px-10">
      <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-7">
        <img src={data.avatar} alt={data.name} className="h-14 w-14 shrink-0 rounded-full" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-kiwi-green-dark">{data.role}</p>
          <p className="text-lg font-black text-gray-950">{data.name}</p>
          <p className="mt-1 text-sm leading-6 text-gray-600">{renderInlineLinks(data.bio)}</p>
        </div>
      </div>
    </section>
  );
}
