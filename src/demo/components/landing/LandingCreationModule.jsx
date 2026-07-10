import { ImagePlus, Plus, Sparkles, SlidersHorizontal, Settings2, Clock, Send, Play } from "lucide-react";
import { SocialIconRail } from "../common/SocialPlatformIcons";

export default function LandingCreationModule({ data, slug }) {
  if (!data) return null;

  const workbenchPreset = data.workbenchPreset || "two-frame-effect";
  const templateLabel = data.workbench.templateLabel || `${data.workbench.effectLabel} Template`;

  const renderWorkbench = () => {
    if (workbenchPreset === "video-effect") {
      return (
        <div className="mt-6 flex min-h-[380px] flex-col rounded-[28px] border border-gray-200 bg-[#FCFDF8] p-5 shadow-sm sm:p-6 md:min-h-[460px] lg:min-h-[360px] lg:flex-1 lg:p-7 xl:min-h-[400px]">
          <button className="flex min-h-[96px] w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 bg-white p-4 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 lg:min-h-[220px] lg:flex-1 lg:items-start lg:pt-8">
            <ImagePlus size={20} />
            <span className="text-sm font-medium">Upload source</span>
          </button>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-kiwi-green bg-kiwi-light-green/30 px-4 py-2.5 text-sm font-medium text-kiwi-green-dark transition-colors">
              <Sparkles size={16} /> {templateLabel}
            </button>
            <a
              href={data.workbench.generateLink}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-kiwi-green px-8 py-3.5 font-bold text-gray-900 shadow-sm transition-colors hover:bg-kiwi-green-dark hover:text-white"
            >
              <Send size={18} /> {data.workbench.generateLabel}
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-6 rounded-[28px] border border-gray-200 bg-[#FCFDF8] p-5 shadow-sm sm:p-6 lg:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <button className="flex min-h-[76px] w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-200 bg-white p-4 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700">
            <ImagePlus size={20} />
            <span className="text-sm font-medium">{data.workbench.startFrameLabel}</span>
          </button>
          <button className="flex min-h-[76px] w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-200 bg-white p-4 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700">
            <ImagePlus size={20} />
            <span className="text-sm font-medium">{data.workbench.endFrameLabel}</span>
          </button>
        </div>

        <div className="mt-5">
          <textarea
            placeholder={data.workbench.promptPlaceholder}
            className="h-36 w-full resize-none rounded-[20px] border border-transparent bg-white p-4 text-base text-gray-800 shadow-[inset_0_0_0_1px_rgba(229,231,235,0.9)] transition-all focus:border-kiwi-green/30 focus:outline-none focus:ring-2 focus:ring-kiwi-green/40"
          ></textarea>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <button className="flex items-center gap-2 rounded-xl border border-kiwi-green bg-kiwi-light-green/30 px-4 py-2.5 text-sm font-medium text-kiwi-green-dark transition-colors">
            <Sparkles size={16} /> {data.workbench.effectLabel}
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <SlidersHorizontal size={16} /> {data.workbench.aspectRatioLabel}
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <Settings2 size={16} /> {data.workbench.qualityLabel}
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <Clock size={16} /> {data.workbench.durationLabel}
          </button>
        </div>

        <div className="mt-6">
          <a
            href={data.workbench.generateLink}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-kiwi-green px-8 py-3.5 font-bold text-gray-900 shadow-sm transition-colors hover:bg-kiwi-green-dark hover:text-white"
          >
            <Send size={18} /> {data.workbench.generateLabel}
          </a>
        </div>
      </div>
    );
  };

  if (slug === "bullet-time") {
    return (
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[#FFFDFC]"></div>
        <div className="pointer-events-none absolute right-[8%] top-[14%] h-[360px] w-[420px] rounded-full bg-kiwi-green/5 blur-[120px]"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
          <div className="rounded-[28px] border border-gray-200/80 bg-white/95 p-5 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:p-7 xl:p-8">
            <div className="flex justify-center text-center">
              <h1
                aria-label="Bullet Time Effect"
                className="max-w-full overflow-visible font-black tracking-normal text-gray-950"
                style={{ fontSize: "clamp(2.55rem, 6vw, 4.8rem)", lineHeight: 1.03 }}
              >
                <span
                  className="mr-3 inline-block overflow-visible bg-gradient-to-r from-[#15803d] via-[#22c55e] to-[#84cc16] bg-clip-text text-transparent sm:mr-4"
                  style={{ paddingLeft: "0.02em", paddingRight: "0.12em", paddingBottom: "0.06em" }}
                >
                  Bullet Time
                </span>
                <span className="inline-block text-gray-950">Effect</span>
              </h1>
            </div>

            <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.12fr)] lg:gap-8 xl:gap-9">
              <div className="flex h-full flex-col items-center text-center lg:items-stretch lg:text-left">
                <p className="w-full max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-7">
                  {data.description}
                </p>

                <div className="mt-5 flex w-full max-w-md flex-1 flex-col rounded-3xl border border-gray-200 bg-[#FCFDF8] p-4 shadow-sm sm:p-5">
                  <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                      <img
                        src={data.preview?.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-950">Bullet Time Template</p>
                      <p className="mt-0.5 text-sm text-gray-600">Upload media to apply this template.</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex min-h-[112px] w-full flex-1 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white p-4 text-gray-500 transition-colors hover:border-kiwi-green/70 hover:bg-kiwi-light-green/20 hover:text-kiwi-green-dark"
                    aria-label="Upload media"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-kiwi-light-green text-kiwi-green-dark">
                      <Plus size={25} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-bold">Upload media</span>
                  </button>

                  <a
                    href={data.workbench?.generateLink}
                    className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-kiwi-green px-8 py-3.5 text-base font-black text-gray-950 shadow-lg shadow-kiwi-green/20 transition-all hover:-translate-y-0.5 hover:bg-kiwi-green-dark hover:text-white"
                  >
                    <Sparkles size={20} /> Generate
                  </a>
                </div>
              </div>

              <div className="w-full self-end">
                <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-black shadow-[0_24px_64px_-22px_rgba(15,23,42,0.38)] sm:rounded-3xl">
                  <div className="relative aspect-video w-full bg-black">
                    <video
                      className="absolute inset-0 h-full w-full object-contain"
                      src="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/effects/bullet-time/bullet-time.mp4"
                      poster="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/effects/bullet-time/hero-poster.png"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Bullet Time effect preview"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[#FFFDFC]"></div>
      <div className="pointer-events-none absolute top-[12%] right-[10%] h-[320px] w-[320px] rounded-full bg-[#F7F8EF]/8 blur-[145px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">
        <div className="rounded-[32px] border border-gray-200/80 bg-white/95 p-4 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.16)] backdrop-blur-sm sm:p-6 lg:p-8">
          <div className={workbenchPreset === "video-effect" ? "grid items-start gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch lg:gap-8" : "grid items-start gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-8"}>
            <div className={workbenchPreset === "video-effect" ? "flex h-full flex-col lg:self-stretch" : undefined}>
              <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
                  {data.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                  {data.description}
                </p>
              </div>

              {renderWorkbench()}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] rounded-[28px] border border-gray-200 bg-[#F8F9F4] p-3 shadow-sm sm:p-4">
                <div className="relative overflow-hidden rounded-[2.35rem] border border-gray-200/70 bg-gray-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)]">
                  <div className="relative aspect-[9/16] overflow-hidden bg-gray-100">
                    <img
                      src={data.preview.image}
                      alt={data.preview.title}
                      className="h-full w-full scale-[1.03] object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:scale-110 hover:bg-white/20">
                        <Play size={26} fill="currentColor" className="ml-1 opacity-90" />
                      </div>
                    </div>

                    {data.preview.showSocialRail && (
                      <SocialIconRail className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-black/20 px-2.5 py-6 shadow-xl backdrop-blur-md" />
                    )}

                    <div className="pointer-events-none absolute bottom-6 left-6 right-20">
                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-sm bg-kiwi-green px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">
                          Template
                        </span>
                      </div>
                      <h3 className="mb-1 text-[1.1rem] font-black leading-tight tracking-tight text-white drop-shadow-lg">
                        {data.preview.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 shadow-md backdrop-blur-md">
                          <span className="h-3 w-3 overflow-hidden rounded-full bg-kiwi-green">
                            <img src={data.preview.image} className="h-full w-full object-cover opacity-80" alt="" />
                          </span>
                          <span className="max-w-[100px] truncate text-[9px] font-medium text-white/90">
                            {data.preview.meta}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
