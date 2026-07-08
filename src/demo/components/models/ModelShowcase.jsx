import { Play, ArrowRight } from "lucide-react";
import { getModelGeneratorHref } from "../../utils/modelGeneratorLink";

const isVideoAsset = (url = "") => /\.(mp4|webm|mov)(\?|#|$)/i.test(url);

export default function ModelShowcase({ data }) {
  if (!data || !data.items || data.items.length === 0) return null;
  const ctaHref = getModelGeneratorHref(data.cta?.link);

  return (
    <section id="showcase" className="border-y border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green">{data.eyebrow}</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{data.title}</h2>
            {data.description && <p className="mt-4 text-base leading-7 text-white/60">{data.description}</p>}
          </div>
          {data.cta && (
            <a href={ctaHref} className="inline-flex items-center gap-2 rounded-xl bg-kiwi-green px-5 py-3 text-sm font-black text-gray-950 transition hover:bg-white">
              {data.cta.label} <ArrowRight size={16} />
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {data.items.map((item, i) => {
            const videoSrc = item.video || (isVideoAsset(item.image) ? item.image : "");
            const poster = videoSrc && !isVideoAsset(item.image) ? item.image : undefined;

            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
                  i === 0 ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={i === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-[3/4]"}>
                  {videoSrc ? (
                    <video
                      src={videoSrc}
                      poster={poster}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black transition duration-700 group-hover:scale-105" />
                  )}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                {item.tag && (
                  <span className="absolute right-2.5 top-2.5 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                    {item.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
                  <h3 className="text-xs font-bold leading-tight text-white drop-shadow sm:text-sm">{item.title}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
