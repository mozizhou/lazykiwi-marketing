const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/models/kling-1-6-turbo";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const kling16TurboData = {
  slug: "kling-1-6-turbo",
  parentFeature: "video-generator",
  productionStatus: "draft",
  seo: {
    title: "Kling 1.6 Turbo AI Video Generator | Fast Text & Image to Video | LazyKiwi",
    description:
      "Run Kuaishou's Kling 1.6 Turbo video model in LazyKiwi. Generate motion-rich short videos from text or one image at high speed, from 720p to 4K. It's the fast pick for high-volume iteration, quick drafts and tight turnarounds.",
  },
  hero: {
    breadcrumb: ["Models", "Kling 1.6 Turbo"],
    badge: "Kuaishou · Video Model",
    statusPill: "Fast",
    name: "Kling 1.6 Turbo",
    headline: "Kling 1.6 Turbo: motion-rich video, generated **fast**, from text or one image",
    tagline: "Kuaishou's speed-first video model, now built into the LazyKiwi workbench.",
    description:
      "Write a scene or drop in a single image, and Kling 1.6 Turbo returns a clip with strong motion fidelity at a fraction of the usual wait. Iterate quickly, draft in volume, lock the shot, then render anywhere from 720p up to 4K.",
    primaryCta: { label: "Try Kling 1.6 Turbo free", link: "/generate/?model=kling-1-6-turbo" },
    secondaryCta: { label: "Watch sample outputs", link: "#showcase" },
    stats: [
      { label: "Modality", value: "Text & Image → Video" },
      { label: "Speed", value: "Blazing-fast" },
      { label: "Resolution", value: "720p to 4K" },
      { label: "Best for", value: "High-volume drafts" },
    ],
    media: {
      wide: `${ART}/hero-wide.jpg`,
      card: `${ART}/hero-card.jpg`,
      caption: "Kling 1.6 Turbo · 4K",
      meta: "Text to Video · 9:16",
    },
    trust: {
      label: "Runs in the LazyKiwi workbench",
      chips: ["No install", "Text-to-Video", "Image-to-Video", "Fast turnaround"],
    },
  },
  steps: {
    eyebrow: "How it works",
    title: "Three steps from idea to a posted clip",
    description: "Skip the timeline and the plugins. Choose Kling 1.6 Turbo in the workbench, then draft at speed.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Pick Kling 1.6 Turbo & your input", description: "Open the Video Generator, select Kling 1.6 Turbo, and either write a text prompt or upload one reference image." },
      { image: `${ART}/step-2.jpg`, title: "Direct the shot", description: "Spell out the scene, the motion, the camera and the mood, then set aspect ratio, length and resolution from 720p up to 4K." },
      { image: `${ART}/step-3.jpg`, title: "Generate & iterate", description: "A clip comes back quickly, so batch a few variations, compare them, and export the winner for TikTok, Reels, Shorts or ads." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?model=kling-1-6-turbo" },
  },
  capabilities: {
    eyebrow: "Why Kling 1.6 Turbo",
    title: "What sets Kling 1.6 Turbo apart",
    description:
      "Kling 1.6 Turbo is built for momentum. Motion-rich clips come back quickly, which lets you explore more ideas, draft in volume and settle the shot without waiting on a render queue.",
    items: [
      {
        image: `${ART}/cap-1.jpg`,
        eyebrow: "Blazing-fast generation",
        title: "Drafts back in a flash, not a coffee break",
        description: "Clips turn around quickly enough to iterate in real time, so a single session covers far more directions than usual.",
        bullets: ["First results land fast", "Each pass takes a beat, not a wait", "More ideas explored per session"],
      },
      {
        image: `${ART}/cap-2.jpg`,
        eyebrow: "Strong motion fidelity",
        title: "Movement that holds together",
        description: "Subjects, camera moves and action stay coherent across the clip, so motion-heavy scenes read clean rather than smearing or flickering.",
        bullets: ["Subjects stay stable while moving", "Camera moves track cleanly", "Action-heavy scenes hold up"],
      },
      {
        image: `${ART}/cap-3.jpg`,
        eyebrow: "720p to 4K output",
        title: "Draft small, ship sharp",
        description: "Iterate at 720p while you're exploring, then render the chosen shot up to 4K for crisp, post-ready short-form video.",
        bullets: ["Low-res drafts come back fast", "Final renders reach 4K", "Output is ready to post"],
      },
      {
        image: `${ART}/cap-4.jpg`,
        eyebrow: "Text & image to video",
        title: "Start from a prompt or one image",
        description: "Spin a scene up from text, or animate a single reference image. Either path returns a motion-rich clip quickly.",
        bullets: ["Draft straight from text", "Animate a single image", "Quick variations on either path"],
      },
    ],
  },
  showcase: {
    eyebrow: "Sample outputs",
    title: "Made with Kling 1.6 Turbo in LazyKiwi",
    description: "Real creator jobs from across short-video channels, each drafted fast from a prompt or a single reference image, then refined in the workbench.",
    cta: { label: "Make your own", link: "/generate/?model=kling-1-6-turbo" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Auto & product hero shots", tag: "Text→Video" },
      { image: `${ART}/shot-2.jpg`, title: "Creator performance clips", tag: "Image→Video" },
      { image: `${ART}/shot-3.jpg`, title: "Motion-heavy action beats", tag: "Text→Video" },
      { image: `${ART}/shot-4.jpg`, title: "Rapid concept drafts", tag: "Image→Video" },
      { image: `${ART}/shot-5.jpg`, title: "Travel & location reels", tag: "Frames" },
      { image: `${ART}/shot-6.jpg`, title: "Stylized genre edits", tag: "Text→Video" },
    ],
  },
  specs: {
    eyebrow: "Specs",
    title: "Kling 1.6 Turbo at a glance",
    description: "Capabilities exposed through the LazyKiwi workbench. Available options may vary by plan and queue.",
    rows: [
      { label: "Provider", value: "Kuaishou" },
      { label: "Type", value: "Video generation" },
      { label: "Inputs", value: "Text prompt, single image" },
      { label: "Speed", value: "Blazing-fast generation, built for high-volume iteration" },
      { label: "Motion", value: "Strong motion fidelity across the clip" },
      { label: "Resolution", value: "720p to 4K" },
      { label: "Aspect ratios", value: "9:16, 1:1, 16:9" },
      { label: "Best for", value: "Quick drafts, high-volume iteration, motion-heavy clips" },
    ],
  },
  comparison: {
    eyebrow: "When to use it",
    title: "Kling 1.6 Turbo vs. other video models",
    description: "Every model in LazyKiwi has a sweet spot. Use this to decide when Kling 1.6 Turbo is the right pick and when a slower, more cinematic model fits the job better.",
    columns: ["Model", "Strength", "Best for", "Speed"],
    rows: [
      { model: "Kling 1.6 Turbo", highlight: true, strength: "Fast motion-heavy clips", bestFor: "Quick drafts & high volume", speed: "Fast" },
      { model: "Sora 2", strength: "Cinematic + synced audio", bestFor: "Hero shots, story beats, ads", speed: "Standard" },
      { model: "Veo 3", strength: "Natural realism", bestFor: "Lifestyle & documentary looks", speed: "Standard" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators build with Kling 1.6 Turbo",
    description: "One fast model covers a lot of short-form work. Draft in volume and keep only the shots that land.",
    items: [
      { icon: "Clapperboard", title: "High-volume drafts", description: "Spin up dozens of clip variations in one session, then ship the handful that work." },
      { icon: "ShoppingBag", title: "Fast product spots", description: "Take a product or a rough concept and get a motion-rich ad clip back the same afternoon." },
      { icon: "Megaphone", title: "Rapid campaign iteration", description: "Test angles and hooks at speed, then double down on whatever performs." },
      { icon: "Gamepad2", title: "Action & motion beats", description: "Generate movement-heavy scenes that stay coherent without a long render wait." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why teams reach for Kling 1.6 Turbo",
    stats: [
      { value: "4.8/5", label: "Average creator rating" },
      { value: "1M+", label: "Clips generated in LazyKiwi" },
      { value: "4K", label: "Max render resolution" },
    ],
    quotes: [
      { quote: "The speed changed how we work. I draft ten variations in the time one used to take elsewhere.", name: "Dana Nwosu", role: "Short-form creator", avatar: `${AV}/dn.jpg` },
      { quote: "Motion-heavy clips hold together and come back quick. It's my go-to for high-volume iteration.", name: "Liang Kerr", role: "Content lead", avatar: `${AV}/lk.jpg` },
      { quote: "We draft at 720p, lock the shot, then render to 4K. That turnaround keeps the whole pipeline moving.", name: "Mara Toledo", role: "Agency producer", avatar: `${AV}/mt.jpg` },
    ],
  },
  faq: [
    { question: "What is Kling 1.6 Turbo?", answer: "Kling 1.6 Turbo is Kuaishou's speed-first video generation model. Give it a text prompt or a single image and it returns a motion-rich short video at high speed, with resolutions from 720p to 4K. In LazyKiwi you run it straight from the Video Generator workbench." },
    { question: "Can I use Kling 1.6 Turbo for free?", answer: "You can try Kling 1.6 Turbo inside LazyKiwi. How many runs you get depends on your plan and the current queue. Open the workbench to see what's available on your account." },
    { question: "Why is Kling 1.6 Turbo so fast?", answer: "The Turbo model is tuned for rapid generation, so clips return at a fraction of the wait you'd get from cinematic models. That makes it a strong fit for high-volume iteration and quick drafts where you want to test many ideas back to back." },
    { question: "What's the difference between Kling 1.6 Turbo and Sora 2?", answer: "Both are strong video models with different sweet spots. Kling 1.6 Turbo prioritizes speed and motion fidelity for drafting at scale; Sora 2 leans into cinematic shots with synchronized audio. LazyKiwi lets you switch between them in the same workbench." },
    { question: "Can I turn a photo into a Kling 1.6 Turbo video?", answer: "Yes. Upload one clear image, describe the motion and camera you want, and Kling 1.6 Turbo animates it into a short clip quickly enough to try several variations before you export." },
  ],
  bottomCta: {
    title: "Draft your next short with Kling 1.6 Turbo.",
    description: "Begin with a prompt or one image, get a motion-rich clip back fast, then iterate in volume and render up to 4K, all inside LazyKiwi.",
    buttonText: "Try Kling 1.6 Turbo now",
    buttonLink: "/generate/?model=kling-1-6-turbo",
    bgImage: `${ART}/cap-3.jpg`,
  },
  related: {
    title: "Explore more models",
    description: "LazyKiwi keeps the newest and most popular AI video and image models in one workbench. Switch models without switching tools.",
    models: [
      { name: "Sora 2", type: "Video", link: "/models/sora-2" },
      { name: "Veo 3", type: "Video", link: "/models/veo-3" },
      { name: "Seedream 5.0", type: "Image", link: "/models/seedream-5" },
      { name: "Nano Banana", type: "Image", link: "/models/nano-banana" },
      { name: "FLUX.1 Schnell", type: "Image", link: "/models/flux-1-schnell" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "The prompt structure that gets clean, cinematic results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Models", title: "Sora 2 vs. Veo 3: Which Video Model Should You Use?", excerpt: "When each flagship model wins.", readTime: "7 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/vs/cover.jpg", link: "/blog/sora-2-vs-veo-3" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for Kling 1.6 Turbo in many ways. LazyKiwi groups these related intents under one model page so creators land on the right workbench.",
    terms: ["Kling 1.6 Turbo AI", "Kuaishou Kling 1.6", "Kling 1.6 Turbo video generator", "Kling 1.6 Turbo online", "Kling 1.6 Turbo text to video", "Kling 1.6 Turbo image to video", "Kling 1.6 Turbo free", "Kling fast video AI", "Kling 1.6 Turbo alternative", "fast AI video generator"],
  },
};
