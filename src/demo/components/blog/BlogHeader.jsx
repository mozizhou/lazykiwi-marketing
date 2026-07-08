import { ChevronRight, Clock, Calendar, Share2, Bookmark, Link2 } from "lucide-react";

export default function BlogHeader({ data }) {
  if (!data) return null;

  return (
    <header className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-kiwi-light-green/40 to-transparent"></div>

      <div className="relative mx-auto max-w-3xl px-6 pt-10 sm:px-10 lg:pt-14">
        {data.breadcrumb && (
          <nav className="mb-6 flex items-center gap-1.5 text-sm font-medium text-gray-400">
            {data.breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-gray-300" />}
                <span className={i === data.breadcrumb.length - 1 ? "text-gray-900" : ""}>{crumb}</span>
              </span>
            ))}
          </nav>
        )}

        <span className="inline-flex items-center rounded-full bg-kiwi-light-green px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-kiwi-green-dark">
          {data.category}
        </span>

        <h1 className="mt-5 text-[2.1rem] font-black leading-[1.1] tracking-tight text-gray-950 sm:text-5xl">
          {data.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">{data.excerpt}</p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-3">
            <img src={data.author.avatar} alt={data.author.name} className="h-11 w-11 rounded-full" />
            <span>
              <span className="block text-sm font-black text-gray-950">{data.author.name}</span>
              <span className="flex items-center gap-2 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1"><Calendar size={12} /> {data.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {data.readTime}</span>
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="mr-1 text-xs font-bold uppercase tracking-wide">Share</span>
            <a href="#share" aria-label="Share" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition hover:border-kiwi-green hover:text-kiwi-green-dark"><Share2 size={14} /></a>
            <a href="#save" aria-label="Save" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition hover:border-kiwi-green hover:text-kiwi-green-dark"><Bookmark size={14} /></a>
            <a href="#copy" aria-label="Copy link" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition hover:border-kiwi-green hover:text-kiwi-green-dark"><Link2 size={14} /></a>
          </div>
        </div>
      </div>

      {data.cover && (
        <div className="relative mx-auto mt-8 max-w-4xl px-6 sm:px-10">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.4)]">
            <div className="aspect-[16/9]">
              <img src={data.cover} alt={data.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
