import { Megaphone, Clapperboard, ShoppingBag, Music, Plane, Gamepad2, Newspaper, Heart, Sparkles } from "lucide-react";
import { renderInlineLinks } from "@/lib/cms/renderInlineLinks";

const iconMap = { Megaphone, Clapperboard, ShoppingBag, Music, Plane, Gamepad2, Newspaper, Heart, Sparkles };

export default function ModelScenarios({ data }) {
  if (!data || !data.items) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{data.eyebrow}</p>
        <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{data.title}</h2>
        {data.description && <p className="mt-4 text-base leading-7 text-gray-600">{renderInlineLinks(data.description)}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((s, i) => {
          const Icon = iconMap[s.icon] || Sparkles;
          return (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-kiwi-green hover:shadow-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kiwi-light-green text-kiwi-green-dark">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-black text-gray-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{renderInlineLinks(s.description)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
