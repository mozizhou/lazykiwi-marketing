import { ArrowRight, BadgeCheck } from "lucide-react";
import { getModelGeneratorHref } from "../../utils/modelGeneratorLink";
import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

export default function ModelCTA({ data }) {
  if (!data) return null;
  const buttonHref = getModelGeneratorHref(data.buttonLink);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 sm:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 text-white shadow-sm">
        {data.bgImage && (
          <>
            <img src={data.bgImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/30"></div>
          </>
        )}
        <div className="relative flex flex-col gap-6 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold text-kiwi-green">
              <BadgeCheck size={16} /> LazyKiwi
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{data.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">{renderInlineLinks(data.description)}</p>
          </div>
          <a href={buttonHref} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-kiwi-green px-7 py-4 text-sm font-black text-gray-950 shadow-lg transition hover:bg-white">
            {data.buttonText} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
