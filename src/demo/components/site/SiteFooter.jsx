const COLUMNS = [
  {
    title: "Models",
    titleHref: "/models",
    links: [
      { label: "Veo 3", href: "/models/veo-3" },
      { label: "Kling 1.6", href: "/models/kling-1-6" },
      { label: "Hailuo AI", href: "/models/hailuo" },
      { label: "Seedream 5.0", href: "/models/seedream-5" },
      { label: "Nano Banana", href: "/models/nano-banana" },
      { label: "FLUX.1 Schnell", href: "/models/flux-1-schnell" },
    ],
  },
  {
    title: "Templates",
    titleHref: "/templates",
    links: [
      { label: "Bullet Time", href: "/templates/bullet-time" },
      { label: "Earth Zoom Out", href: "/templates/earth-zoom-out" },
      { label: "Seamless Transition", href: "/templates/seamless-transition" },
      { label: "Selfies with Celebrities", href: "/templates/selfies-with-celebrities" },
      { label: "Ghibli Art AI", href: "/templates/ghibli-art-ai" },
      { label: "Chubby Filter", href: "/templates/chubby-filter" },
    ],
  },
  {
    title: "Tools",
    titleHref: "/tools",
    links: [
      { label: "Gender Swap", href: "/tools/gender-swap" },
      { label: "AI Outfit Generator", href: "/tools/outfit-generator" },
      { label: "AI Photo Colorizer", href: "/tools/ai-photo-colorizer" },
      { label: "Photo to Sketch", href: "/tools/photo-to-sketch" },
      { label: "AI Anime Avatar", href: "/tools/anime-avatar" },
      { label: "AI Age Filter", href: "/tools/ai-age-filter" },
    ],
  },
  {
    title: "Blog",
    titleHref: "/blog",
    links: [
      { label: "Scroll-Stopping AI Videos", href: "/blog/scroll-stopping-ai-effect-videos" },
      { label: "Text-to-Video Prompts", href: "/blog/text-to-video-prompts" },
      { label: "Sora 2 vs. Veo 3", href: "/blog/sora-2-vs-veo-3" },
      { label: "One Photo, a Week of Content", href: "/blog/one-photo-week-of-content" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Video Generator", href: "/video-generator" },
      { label: "Image Generator", href: "/image-generator" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <img src="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/kiwi-logo.svg" alt="LazyKiwi" width={30} height={30} />
              <span className="text-[18px] font-extrabold tracking-tight text-gray-900">LazyKiwi</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              The all-in-one AI creative studio — video, image and effects, every top model in one workbench.
            </p>
            <a href="/video-generator" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-kiwi-green px-5 py-2.5 text-sm font-black text-gray-950 transition hover:bg-kiwi-green-dark hover:text-white">
              Start creating free
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400">
                {col.titleHref ? <a href={col.titleHref} className="transition-colors hover:text-kiwi-green-dark">{col.title}</a> : col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-600 transition-colors hover:text-kiwi-green-dark">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-xs text-gray-400">© 2026 LazyKiwi. All rights reserved.</p>
          <div className="flex flex-wrap gap-5 text-xs font-medium text-gray-400">
            <a href="/privacy" className="transition-colors hover:text-gray-700">Privacy</a>
            <a href="/terms" className="transition-colors hover:text-gray-700">Terms</a>
            <a href="/refund" className="transition-colors hover:text-gray-700">Refund</a>
            <a href="/about" className="transition-colors hover:text-gray-700">About</a>
            <a href="mailto:hello@lazykiwi.ai" className="transition-colors hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
