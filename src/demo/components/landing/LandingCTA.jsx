import { ArrowRight, BadgeCheck } from "lucide-react";

export default function LandingCTA({ data }) {
  if (!data) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 p-8 text-white shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold text-kiwi-green">
              <BadgeCheck size={16} />
              LazyKiwi
            </div>
            <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              {data.description}
            </p>
          </div>
          <a href={data.buttonLink} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-kiwi-green px-6 py-3.5 text-sm font-black text-gray-950 transition hover:bg-white">
            {data.buttonText}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
