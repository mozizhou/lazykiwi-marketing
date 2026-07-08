import { Upload, Layers, Camera, Zap } from "lucide-react";

const iconMap = {
  Upload: Upload,
  Layers: Layers,
  Camera: Camera,
  Zap: Zap
};

export default function LandingIntro({ data }) {
  if (!data) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
            {data.eyebrow || "What it is"}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            {data.description}
          </p>
        </div>

        {data.features && data.features.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {data.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Camera;
              return (
                <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kiwi-light-green text-kiwi-green-dark">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-black text-gray-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
