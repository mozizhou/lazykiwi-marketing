const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/models/seedream-5";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const seedream5Data = {
  slug: "seedream-5",
  parentFeature: "image-generator",
  productionStatus: "draft",
  seo: {
    title: "Seedream 5.0 AI Image Generator: ByteDance Text-to-Image | LazyKiwi",
    description:
      "Run ByteDance's Seedream 5.0 image model inside LazyKiwi. Write a prompt and get photorealistic scenes with rich texture, accurate prompt following and clean in-image text. Try Seedream 5.0 online for portraits, products, posters and ads.",
  },
  hero: {
    breadcrumb: ["Models", "Seedream 5.0"],
    badge: "ByteDance · Image Model",
    statusPill: "Quality",
    name: "Seedream 5.0",
    headline: "Seedream 5.0: photoreal images with **rich texture**, straight from text",
    tagline: "ByteDance's high-quality image model, now in the LazyKiwi workbench.",
    description:
      "Describe a scene and Seedream 5.0 renders it with photorealistic detail, accurate materials and faithful prompt following, including clean, legible text inside the frame. Prompt it, refine the result and export, without opening a separate editing suite.",
    primaryCta: { label: "Try Seedream 5.0 free", link: "/generate/?model=seedream-5" },
    secondaryCta: { label: "See sample outputs", link: "#showcase" },
    stats: [
      { label: "Modality", value: "Text → Image" },
      { label: "Quality", value: "Photoreal" },
      { label: "Resolution", value: "Up to 2K" },
      { label: "Text", value: "In-image text" },
    ],
    media: {
      wide: `${ART}/hero-wide.jpg`,
      card: `${ART}/hero-card.jpg`,
      caption: "Seedream 5.0 · 2K",
      meta: "Text to Image · 1:1",
    },
    trust: {
      label: "Runs in the LazyKiwi workbench",
      chips: ["No install", "Text-to-Image", "Photoreal", "Text rendering"],
    },
  },
  steps: {
    eyebrow: "How it works",
    title: "From idea to finished image in three steps",
    description: "No layers, no plugins. Pick Seedream 5.0 in the workbench and describe the shot.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Pick Seedream 5.0 & your input", description: "Open the Image Generator, choose Seedream 5.0, then start from a text prompt or add an optional reference image." },
      { image: `${ART}/step-2.jpg`, title: "Describe the scene", description: "Set the subject, style, lighting and any in-image text. Pick the aspect ratio and resolution that match your channel." },
      { image: `${ART}/step-3.jpg`, title: "Generate & export", description: "Preview the image, adjust the prompt for more texture or detail, then export for portraits, products, posters or ads." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?model=seedream-5" },
  },
  capabilities: {
    eyebrow: "Why Seedream 5.0",
    title: "What sets Seedream 5.0 apart",
    description:
      "Seedream 5.0 is built for quality. It renders photorealistic scenes with believable materials and lighting, follows detailed prompts closely and keeps text legible, so the output reads like a finished shot rather than a rough draft.",
    items: [
      {
        image: `${ART}/cap-1.jpg`,
        eyebrow: "Photoreal detail",
        title: "Scenes that read as real",
        description: "Realistic lighting, depth and materials give every render a true-to-life finish, with none of the plastic or melted look you get from weaker models.",
        bullets: ["Natural light and shadow", "Believable depth of field", "Clean, artifact-free output"],
      },
      {
        image: `${ART}/cap-2.jpg`,
        eyebrow: "Rich textures",
        title: "Materials with real surface",
        description: "Skin, fabric, metal and foliage carry fine grain and micro-detail instead of flat, smeared surfaces.",
        bullets: ["Fine surface detail", "Skin and hair that hold up close", "Convincing fabric and metal"],
      },
      {
        image: `${ART}/cap-3.jpg`,
        eyebrow: "In-image text",
        title: "Type that stays legible",
        description: "Signage, labels and short copy render cleanly inside the image, which keeps designs and product shots usable.",
        bullets: ["Readable letterforms", "Posters and signage", "Product labels and packaging"],
      },
      {
        image: `${ART}/cap-4.jpg`,
        eyebrow: "Prompt control",
        title: "Detailed direction, faithfully rendered",
        description: "Subject, composition, style and mood translate to screen with fewer retries to land the image you wrote.",
        bullets: ["Close prompt adherence", "Control over style and composition", "Fewer regenerations per shot"],
      },
    ],
  },
  showcase: {
    eyebrow: "Sample outputs",
    title: "Made with Seedream 5.0 in LazyKiwi",
    description: "Real creator use cases across image work, each from a prompt or an optional reference image, refined in the workbench.",
    cta: { label: "Make your own", link: "/generate/?model=seedream-5" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Product hero shots", tag: "Product" },
      { image: `${ART}/shot-2.jpg`, title: "Photoreal portraits", tag: "Portrait" },
      { image: `${ART}/shot-3.jpg`, title: "Lifestyle scenes", tag: "Photoreal" },
      { image: `${ART}/shot-4.jpg`, title: "Posters with clean text", tag: "Text→Image" },
      { image: `${ART}/shot-5.jpg`, title: "Food & still life", tag: "Photoreal" },
      { image: `${ART}/shot-6.jpg`, title: "Editorial & ad visuals", tag: "Text→Image" },
    ],
  },
  specs: {
    eyebrow: "Specs",
    title: "Seedream 5.0 at a glance",
    description: "Capabilities exposed through the LazyKiwi workbench. Available options may vary by plan and queue.",
    rows: [
      { label: "Provider", value: "ByteDance" },
      { label: "Type", value: "Image generation" },
      { label: "Inputs", value: "Text prompt (+ optional reference image)" },
      { label: "Max resolution", value: "Up to 2K" },
      { label: "Aspect ratios", value: "1:1, 4:3, 16:9, 9:16" },
      { label: "Best for", value: "Photoreal scenes, portraits, products, posters with text" },
    ],
  },
  comparison: {
    eyebrow: "When to use it",
    title: "Seedream 5.0 vs. other image models",
    description: "Every model in LazyKiwi has a sweet spot. Use this to decide when Seedream 5.0 is the right pick, and when a faster model fits better.",
    columns: ["Model", "Strength", "Best for", "Speed"],
    rows: [
      { model: "Seedream 5.0", highlight: true, strength: "Photoreal textures + prompt accuracy", bestFor: "Portraits, products, posters", speed: "Standard" },
      { model: "Nano Banana", strength: "Fun, character-consistent edits", bestFor: "Character art & quick edits", speed: "Fast" },
      { model: "FLUX.1 Schnell", strength: "Ultra-fast open source", bestFor: "Rapid drafts & high volume", speed: "Ultra-fast" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators build with Seedream 5.0",
    description: "One model, many image jobs, from the product shot to the finished poster.",
    items: [
      { icon: "ShoppingBag", title: "Product & ad visuals", description: "Render a product or concept as a polished, photoreal shot that's ready to post." },
      { icon: "Sparkles", title: "Photoreal portraits", description: "Generate clean, detailed portraits with natural skin and lighting." },
      { icon: "Newspaper", title: "Posters & layouts", description: "Lay out designs with legible in-image text for posters and covers." },
      { icon: "Megaphone", title: "Campaign & social art", description: "Produce on-brand campaign visuals without booking a photoshoot." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why teams reach for Seedream 5.0",
    stats: [
      { value: "4.9/5", label: "Average creator rating" },
      { value: "1M+", label: "Images generated in LazyKiwi" },
      { value: "2K", label: "Resolution per render" },
    ],
    quotes: [
      { quote: "The textures sold it for me. Skin, fabric, metal, everything reads real straight out of the workbench.", name: "Riley Banks", role: "Agency producer", avatar: `${AV}/rb.jpg` },
      { quote: "Finally a model that keeps the text in my posters legible. I've stopped fixing garbled letters in post.", name: "Sara Park", role: "Brand designer", avatar: `${AV}/sp.jpg` },
      { quote: "Prompt accuracy is the difference. Seedream lands the shot I described with far fewer retries.", name: "Alex Moreau", role: "Content lead", avatar: `${AV}/am.jpg` },
    ],
  },
  faq: [
    { question: "What is Seedream 5.0?", answer: "Seedream 5.0 is ByteDance's text-to-image model. Give it a prompt and it produces a photorealistic image with rich textures, accurate prompt following and clean in-image text. In LazyKiwi you run it directly from the Image Generator workbench." },
    { question: "Can I use Seedream 5.0 for free?", answer: "You can try Seedream 5.0 inside LazyKiwi. Generation availability and the number of runs depend on your plan and current queue. Open the workbench to see what's available on your account." },
    { question: "Can Seedream 5.0 render text inside images?", answer: "Yes. Seedream 5.0 is strong at in-image text. Signage, labels and short copy stay legible, which makes it a good fit for posters, packaging and product visuals." },
    { question: "What's the difference between Seedream 5.0 and Nano Banana?", answer: "Both are image models in LazyKiwi. Seedream 5.0 leans into photoreal quality, rich textures and prompt accuracy, while Nano Banana is faster and built for fun, character-consistent edits. You can switch between them in the same workbench." },
    { question: "Can I use a reference image with Seedream 5.0?", answer: "Yes. Start from a text prompt alone, or add an optional reference image to guide the subject, style or composition, then refine and export the result." },
  ],
  bottomCta: {
    title: "Make your next photoreal image with Seedream 5.0.",
    description: "Start from a prompt or an optional reference image, generate a photoreal result with rich textures and clean text, then refine and export for every channel, all inside LazyKiwi.",
    buttonText: "Try Seedream 5.0 now",
    buttonLink: "/generate/?model=seedream-5",
    bgImage: `${ART}/cap-1.jpg`,
  },
  related: {
    title: "Explore more models",
    description: "LazyKiwi keeps the newest and most popular AI image and video models in one workbench. Switch models without switching tools.",
    models: [
      { name: "Nano Banana", type: "Image", link: "/models/nano-banana" },
      { name: "FLUX.1 Schnell", type: "Image", link: "/models/flux-1-schnell" },
      { name: "Sora 2", type: "Video", link: "/models/sora-2" },
      { name: "Veo 3", type: "Video", link: "/models/veo-3" },
      { name: "Kling 1.6 Turbo", type: "Video", link: "/models/kling-1-6-turbo" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Creator Playbook", title: "Turn One Photo Into a Week of Short-Form Content", excerpt: "A batching workflow to multiply one image into many posts.", readTime: "5 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/one-photo/cover.jpg", link: "/blog/one-photo-week-of-content" },
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "Prompt structure for clean results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for Seedream 5.0 in many ways. LazyKiwi groups these related intents under one model page so creators land on the right workbench.",
    terms: ["Seedream 5.0 AI", "ByteDance Seedream", "Seedream image generator", "Seedream 5.0 online", "Seedream text to image", "Seedream 5.0 free", "Seedream photoreal AI", "Seedream AI image", "Seedream 5.0 alternative", "AI photorealistic image generator"],
  },
};
