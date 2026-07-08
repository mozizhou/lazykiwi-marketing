const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/models/flux-1-schnell";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const flux1SchnellData = {
  slug: "flux-1-schnell",
  parentFeature: "image-generator",
  productionStatus: "draft",
  seo: {
    title: "FLUX.1 Schnell: Fast Open-Source AI Image Generator | LazyKiwi",
    description:
      "Run Black Forest Labs' FLUX.1 Schnell inside LazyKiwi. Generate high-quality images from text in a handful of steps with this ultra-fast, Apache 2.0 open-source model. Built for quick iteration plus free local and commercial use.",
  },
  hero: {
    breadcrumb: ["Models", "FLUX.1 Schnell"],
    badge: "Black Forest Labs · Image Model",
    statusPill: "Open Source",
    name: "FLUX.1 Schnell",
    headline: "FLUX.1 Schnell: fast, **open-source** images from text",
    tagline: "Black Forest Labs' ultra-fast image model, now in the LazyKiwi workbench.",
    description:
      "Write a prompt and FLUX.1 Schnell renders a high-quality image in just a few steps. Distilled for speed and released by Black Forest Labs under Apache 2.0, it suits quick iteration plus free local and commercial use. Generate, refine and ship without the wait.",
    primaryCta: { label: "Try FLUX.1 Schnell free", link: "/generate/?model=flux-1-schnell" },
    secondaryCta: { label: "See sample outputs", link: "#showcase" },
    stats: [
      { label: "Modality", value: "Text → Image" },
      { label: "Speed", value: "Ultra-fast" },
      { label: "License", value: "Open source" },
      { label: "Resolution", value: "Up to 2 megapixels" },
    ],
    media: {
      wide: `${ART}/hero-wide.jpg`,
      card: `${ART}/hero-card.jpg`,
      caption: "FLUX.1 Schnell · Apache 2.0",
      meta: "Text to Image · 1:1",
    },
    trust: {
      label: "Runs in the LazyKiwi workbench",
      chips: ["No install", "Text-to-Image", "Open source", "Few-step"],
    },
  },
  steps: {
    eyebrow: "How it works",
    title: "From prompt to image in three steps",
    description: "No setup, no GPU. Pick FLUX.1 Schnell in the workbench and start generating.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Pick FLUX.1 Schnell", description: "Open the Image Generator, choose FLUX.1 Schnell, then set your aspect ratio and resolution." },
      { image: `${ART}/step-2.jpg`, title: "Write your prompt", description: "Describe the subject, style, lighting and mood. Add detail to steer the look you want." },
      { image: `${ART}/step-3.jpg`, title: "Generate & export", description: "Get a high-quality image quickly, adjust the prompt to iterate, then download for any use." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?model=flux-1-schnell" },
  },
  capabilities: {
    eyebrow: "Why FLUX.1 Schnell",
    title: "What sets FLUX.1 Schnell apart",
    description:
      "FLUX.1 Schnell is distilled for few-step generation, so it delivers strong image quality at a fraction of the usual time. Open-sourced by Black Forest Labs under Apache 2.0, it's the fast, flexible choice for creators and builders.",
    items: [
      {
        image: `${ART}/cap-1.jpg`,
        eyebrow: "Ultra-fast",
        title: "High quality in just a few steps",
        description: "Distilled for speed, FLUX.1 Schnell produces sharp, detailed images in a handful of steps instead of dozens, which is perfect for rapid drafts.",
        bullets: ["Few-step generation", "Quick to render", "Quality that holds up at speed"],
      },
      {
        image: `${ART}/cap-2.jpg`,
        eyebrow: "Open source",
        title: "Apache 2.0, free to use",
        description: "Released under a permissive Apache 2.0 license, so you can use FLUX.1 Schnell for personal, commercial and local projects without lock-in.",
        bullets: ["Apache 2.0 license", "Commercial use allowed", "Runs locally too"],
      },
      {
        image: `${ART}/cap-3.jpg`,
        eyebrow: "Fast iteration",
        title: "Try ideas without the wait",
        description: "Each generation is quick, so you can explore many prompts and variations in the time other models take for one, which helps when you're ideating.",
        bullets: ["Room to explore prompts", "Cheap to experiment", "More versions per session"],
      },
      {
        image: `${ART}/cap-4.jpg`,
        eyebrow: "Prompt control",
        title: "Faithful to what you write",
        description: "Subject, style, composition and mood translate cleanly to screen, so you spend less time fighting the model and more time refining.",
        bullets: ["Close prompt adherence", "Control over style and composition", "Fewer regenerations per idea"],
      },
    ],
  },
  showcase: {
    eyebrow: "Sample outputs",
    title: "Made with FLUX.1 Schnell in LazyKiwi",
    description: "Real creator use cases across content channels, each from a single prompt, rendered quickly and refined in the workbench.",
    cta: { label: "Make your own", link: "/generate/?model=flux-1-schnell" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Product & hero imagery", tag: "Text→Image" },
      { image: `${ART}/shot-2.jpg`, title: "Character & portrait concepts", tag: "Text→Image" },
      { image: `${ART}/shot-3.jpg`, title: "Illustrations & art styles", tag: "Text→Image" },
      { image: `${ART}/shot-4.jpg`, title: "Editorial & blog visuals", tag: "Text→Image" },
      { image: `${ART}/shot-5.jpg`, title: "Backgrounds & textures", tag: "Concept" },
      { image: `${ART}/shot-6.jpg`, title: "Stylized genre art", tag: "Text→Image" },
    ],
  },
  specs: {
    eyebrow: "Specs",
    title: "FLUX.1 Schnell at a glance",
    description: "Capabilities exposed through the LazyKiwi workbench. Available options may vary by plan and queue.",
    rows: [
      { label: "Provider", value: "Black Forest Labs" },
      { label: "Type", value: "Image generation" },
      { label: "Inputs", value: "Text prompt" },
      { label: "License", value: "Apache 2.0 (open source)" },
      { label: "Max resolution", value: "Up to 2 megapixels" },
      { label: "Aspect ratios", value: "1:1, 9:16, 16:9, 4:3" },
      { label: "Best for", value: "Fast iteration, drafts, local & commercial use" },
    ],
  },
  comparison: {
    eyebrow: "When to use it",
    title: "FLUX.1 Schnell vs. other image models",
    description: "Every model in LazyKiwi has a sweet spot. Use this to decide when FLUX.1 Schnell is the right pick, and when another model fits better.",
    columns: ["Model", "Strength", "Best for", "Speed"],
    rows: [
      { model: "FLUX.1 Schnell", highlight: true, strength: "Ultra-fast open-source generation", bestFor: "Fast iteration, drafts, commercial use", speed: "Ultra-fast" },
      { model: "Seedream 5.0", strength: "Photoreal quality", bestFor: "Polished, true-to-life images", speed: "Standard" },
      { model: "Nano Banana", strength: "Fun character-consistent edits", bestFor: "Playful edits & remixes", speed: "Fast" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators build with FLUX.1 Schnell",
    description: "One fast model, many image jobs, from quick concepts to ready-to-post visuals.",
    items: [
      { icon: "Sparkles", title: "Concept exploration", description: "Generate dozens of ideas fast and lock the direction before you commit." },
      { icon: "ShoppingBag", title: "Product & ad visuals", description: "Render a product or concept as clean imagery for spots and listings." },
      { icon: "Newspaper", title: "Editorial & blog art", description: "Create on-brand cover images and illustrations for posts at a quick pace." },
      { icon: "Megaphone", title: "Social campaign assets", description: "Produce campaign visuals at volume for every channel and format." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why teams reach for FLUX.1 Schnell",
    stats: [
      { value: "4.9/5", label: "Average creator rating" },
      { value: "1M+", label: "Images generated in LazyKiwi" },
      { value: "Apache 2.0", label: "Open-source license" },
    ],
    quotes: [
      { quote: "The speed changed how I work. I explore ten directions before lunch and still have time to refine.", name: "Lena Kim", role: "Content lead", avatar: `${AV}/lk.jpg` },
      { quote: "Open source and commercial-friendly was the deal-maker. We ship FLUX.1 Schnell outputs without a second thought.", name: "Evan Vasquez", role: "Indie builder", avatar: `${AV}/ev.jpg` },
      { quote: "It's my go-to for fast iteration. Quality holds up at speed, and switching models in one place is a big win.", name: "Riley Banks", role: "Agency producer", avatar: `${AV}/rb.jpg` },
    ],
  },
  faq: [
    { question: "What is FLUX.1 Schnell?", answer: "FLUX.1 Schnell is Black Forest Labs' ultra-fast, open-source text-to-image model. It's distilled for few-step generation, so it produces high-quality images quickly. In LazyKiwi you run it directly from the Image Generator workbench." },
    { question: "Can I use FLUX.1 Schnell for free?", answer: "You can try FLUX.1 Schnell inside LazyKiwi. Generation availability and the number of runs depend on your plan and current queue. Open the workbench to see what's available on your account." },
    { question: "Is FLUX.1 Schnell really open source?", answer: "Yes. FLUX.1 Schnell is released under the permissive Apache 2.0 license, which means you can use it for personal, commercial and local projects freely, with no lock-in." },
    { question: "Why is FLUX.1 Schnell so fast?", answer: "It's distilled for few-step inference, so it generates an image in a handful of steps instead of dozens. That makes it ideal for fast iteration without giving up much quality." },
    { question: "What's the difference between FLUX.1 Schnell and Seedream 5.0?", answer: "Both are strong image models. FLUX.1 Schnell is the fast, open-source choice built for quick iteration, while Seedream 5.0 leans into photoreal, polished quality. LazyKiwi lets you switch between them in the same workbench." },
  ],
  bottomCta: {
    title: "Generate your next image with FLUX.1 Schnell.",
    description: "Start from a prompt, get a high-quality image quickly, then iterate fast and download for any use, all inside LazyKiwi.",
    buttonText: "Try FLUX.1 Schnell now",
    buttonLink: "/generate/?model=flux-1-schnell",
    bgImage: `${ART}/cap-1.jpg`,
  },
  related: {
    title: "Explore more models",
    description: "LazyKiwi keeps the newest and most popular AI video and image models in one workbench. Switch models without switching tools.",
    models: [
      { name: "Seedream 5.0", type: "Image", link: "/models/seedream-5" },
      { name: "Nano Banana", type: "Image", link: "/models/nano-banana" },
      { name: "Sora 2", type: "Video", link: "/models/sora-2" },
      { name: "Veo 3", type: "Video", link: "/models/veo-3" },
      { name: "Kling 1.6 Turbo", type: "Video", link: "/models/kling-1-6-turbo" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "Prompt structure for clean results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Turn One Photo Into a Week of Short-Form Content", excerpt: "Multiply one image into many posts.", readTime: "5 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/one-photo/cover.jpg", link: "/blog/one-photo-week-of-content" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for FLUX.1 Schnell in many ways. LazyKiwi groups these related intents under one model page so creators land on the right workbench.",
    terms: ["FLUX.1 schnell", "FLUX schnell", "FLUX.1 [schnell]", "Black Forest Labs FLUX", "FLUX image generator", "FLUX text to image", "FLUX schnell online", "open source image model", "fast AI image generator", "FLUX schnell free"],
  },
};
