import {
  Film, Volume2, Atom, Wand2, Sparkles, Camera, Zap, Layers,
  Palette, Gauge, Aperture, Image, Brush, Sparkle, Type, Cpu,
} from "lucide-react";

const iconMap = {
  Film, Volume2, Atom, Wand2, Sparkles, Camera, Zap, Layers,
  Palette, Gauge, Aperture, Image, Brush, Sparkle, Type, Cpu,
};

export default function ModelHighlights({ data }) {
  if (!data || !data.features) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
          {data.eyebrow}
        </p>
        <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
          {data.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600">{data.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.features.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Sparkles;
          return (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-kiwi-light-green text-kiwi-green-dark">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-black text-gray-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
