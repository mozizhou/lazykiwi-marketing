import { ArrowRight, ImageIcon, Sparkles, Video } from "lucide-react";
import { appUrl } from "@/lib/routes";

const FEATURES = {
  video: [
    {
      icon: Video,
      title: "Text to video",
      description: "Describe a scene and generate a short clip with motion, camera work, and optional audio.",
    },
    {
      icon: Sparkles,
      title: "Image to video",
      description: "Upload a still frame and animate it with controllable motion and aspect ratios.",
    },
    {
      icon: ArrowRight,
      title: "Top models in one workbench",
      description: "Switch between Sora 2, Veo 3, Kling, Wan, and more without leaving LazyKiwi.",
    },
  ],
  image: [
    {
      icon: ImageIcon,
      title: "Text to image",
      description: "Turn prompts into polished stills for ads, social posts, and concept art.",
    },
    {
      icon: Sparkles,
      title: "Templates & edits",
      description: "Start from templates or refine an upload with inpainting-friendly image models.",
    },
    {
      icon: ArrowRight,
      title: "Fast exports",
      description: "Generate, compare, and download from the same LazyKiwi workspace.",
    },
  ],
};

export default function GeneratorLandingPage({ kind = "video", mode }) {
  const isVideo = kind === "video";
  const title = isVideo ? "AI Video Generator" : "AI Image Generator";
  const subtitle = isVideo
    ? "Create scroll-stopping AI videos from a prompt or a single image — every major video model in one workbench."
    : "Generate studio-quality AI images from text or templates — fast exports for social, ads, and creative work.";
  const ctaHref = appUrl(isVideo ? "/app/video-generator" : "/app/image-generator");
  const query = mode ? `?mode=${encodeURIComponent(mode)}` : "";
  const features = FEATURES[kind] || FEATURES.video;

  return (
    <article className="min-h-full bg-white">
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-kiwi-green/20 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">
            {isVideo ? "Video" : "Image"} Generator
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${ctaHref}${query}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white"
            >
              Open the workbench <ArrowRight size={18} />
            </a>
            <a href={isVideo ? "/models" : "/templates"} className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
              Browse {isVideo ? "models" : "templates"}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:px-10 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-kiwi-green/20 text-kiwi-green-dark">
                <Icon size={20} />
              </div>
              <h2 className="text-xl font-black text-gray-950">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
}
