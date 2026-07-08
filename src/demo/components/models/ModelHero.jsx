import { useRef, useState } from "react";
import { ArrowRight, Pause, Play, ChevronRight, Check } from "lucide-react";
import { getModelGeneratorHref } from "../../utils/modelGeneratorLink";

// Renders headline with **highlighted** words wrapped in the kiwi accent.
function Headline({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <span key={i} className="relative whitespace-nowrap text-kiwi-green-dark">
            {p.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function ModelHero({ data }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!data) return null;

  const heroVideo = data.media.video || "";
  const heroMedia = heroVideo || data.media.wide;
  const isVideo = Boolean(heroVideo) || /\.(mp4|webm|mov)(\?|$)/i.test(heroMedia || "");
  const primaryCta = data.primaryCta || {
    label: `Try ${data.name || "this model"} free`,
    link: data.slug,
  };
  const primaryHref = getModelGeneratorHref(primaryCta.link);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-gradient-to-b from-kiwi-light-green/50 to-transparent"></div>
      <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[140px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-8 sm:px-10 lg:pb-16 lg:pt-12">
        {data.breadcrumb && (
          <nav className="mb-8 flex items-center gap-1.5 text-sm font-medium text-gray-400">
            {data.breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-gray-300" />}
                <span className={i === data.breadcrumb.length - 1 ? "text-gray-900" : ""}>{crumb}</span>
              </span>
            ))}
          </nav>
        )}

        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* Left */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-gray-600 shadow-sm">
                {data.badge}
              </span>
              {data.statusPill && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-kiwi-green px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-gray-950">
                  {data.statusPill}
                </span>
              )}
            </div>

            <h1 className="text-[2.6rem] font-black leading-[1.04] tracking-tight text-gray-950 sm:text-6xl">
              <Headline text={data.headline || data.name} />
            </h1>
            {data.tagline && (
              <p className="mt-4 text-lg font-bold text-gray-700 sm:text-xl">{data.tagline}</p>
            )}
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">{data.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
                {primaryCta.label}
                <ArrowRight size={18} />
              </a>
              {data.secondaryCta && (
                <a href={data.secondaryCta.link} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-black text-gray-800 transition hover:bg-gray-50">
                  <Play size={16} /> {data.secondaryCta.label}
                </a>
              )}
            </div>

            {data.trust && (
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5 font-bold text-gray-700">
                  <Check size={15} className="text-kiwi-green-dark" /> {data.trust.label}
                </span>
                {data.trust.chips?.map((c) => (
                  <span key={c} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">{c}</span>
                ))}
              </div>
            )}
          </div>

          {/* Right: media */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-gray-100 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.4)]">
              <div className="relative aspect-[16/10]">
                {isVideo ? (
                  <video
                    ref={videoRef}
                    src={heroMedia}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                ) : (
                  <img src={heroMedia} alt={data.name} className="h-full w-full object-cover" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-kiwi-green"></span> {data.media.meta}
                </div>
                {isVideo && (
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30"
                    aria-label={isPlaying ? "Pause sample video" : "Play sample video"}
                  >
                    {isPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" className="ml-0.5" />}
                  </button>
                )}
              </div>
            </div>

            {/* floating phone card */}
            <div className="absolute -bottom-6 -left-4 hidden w-[150px] rotate-[-5deg] overflow-hidden rounded-2xl border-4 border-white bg-gray-200 shadow-xl sm:block lg:-left-8 lg:w-[170px]">
              <div className="relative aspect-[9/16]">
                <img src={data.media.card} alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            {data.media.caption && (
              <div className="absolute -right-3 bottom-6 hidden rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 shadow-lg md:block">
                <p className="text-[11px] font-bold uppercase tracking-wide text-kiwi-green-dark">Output</p>
                <p className="text-xs font-bold text-gray-800">{data.media.caption}</p>
              </div>
            )}
          </div>
        </div>

        {data.stats && (
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
            {data.stats.map((stat) => (
              <div key={stat.label} className="bg-white p-5">
                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-gray-400">{stat.label}</dt>
                <dd className="mt-1 text-base font-black leading-tight text-gray-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
