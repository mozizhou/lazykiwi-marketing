const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/models/sora-2";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const sora2Data = {
  slug: "sora-2",
  parentFeature: "video-generator",
  productionStatus: "draft",
  seo: {
    title: "Sora 2 AI Video Generator | Try OpenAI Sora 2 Online | LazyKiwi",
    description:
      "Run OpenAI's Sora 2 video model in LazyKiwi. Write a prompt or upload one image and Sora 2 builds a cinematic short clip with matching audio, real motion and physics. Try Sora 2 online for TikTok, Reels, Shorts and ads.",
  },
  hero: {
    breadcrumb: ["Models", "Sora 2"],
    badge: "OpenAI · Video Model",
    statusPill: "New",
    name: "Sora 2",
    headline: "Sora 2: cinematic video with **sound**, from text or one image",
    tagline: "OpenAI's flagship video model, now built into the LazyKiwi workbench.",
    description:
      "Write a scene or drop in a single image, and Sora 2 builds a coherent short clip with believable motion, real physics and matching audio. You direct the shot, refine the prompt, then export it. There's no editing suite involved.",
    primaryCta: { label: "Try Sora 2 free", link: "/generate/?model=sora-2" },
    secondaryCta: { label: "Watch sample outputs", link: "#showcase" },
    stats: [
      { label: "Modality", value: "Text & Image → Video" },
      { label: "Audio", value: "Synchronized" },
      { label: "Max length", value: "Up to 25s" },
      { label: "Resolution", value: "Up to 1080p" },
    ],
    media: {
      wide: `${ART}/hero-wide.jpg`,
      card: `${ART}/hero-card.jpg`,
      caption: "Sora 2 · 1080p",
      meta: "Text to Video · 9:16",
    },
    trust: {
      label: "Runs in the LazyKiwi workbench",
      chips: ["No install", "Text-to-Video", "Image-to-Video", "Audio on"],
    },
  },
  steps: {
    eyebrow: "How it works",
    title: "Three steps from idea to a posted clip",
    description: "Skip the timeline and the plugins. Choose Sora 2 in the workbench, then direct the shot.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Pick Sora 2 & your input", description: "Open the Video Generator, select Sora 2, and either write a text prompt or upload one reference image." },
      { image: `${ART}/step-2.jpg`, title: "Direct the shot", description: "Spell out the scene, the motion, the camera and the mood, then set aspect ratio, length and whether audio is on." },
      { image: `${ART}/step-3.jpg`, title: "Generate & export", description: "Play back the clip with sound, adjust the prompt or frames, and export for TikTok, Reels, Shorts or ads." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?model=sora-2" },
  },
  capabilities: {
    eyebrow: "Why Sora 2",
    title: "What sets Sora 2 apart",
    description:
      "Sora 2 goes past single-clip generation. Subjects, lighting and motion hold steady across the whole shot, so the result reads like one real take rather than a flickering loop.",
    items: [
      {
        image: `${ART}/cap-1.jpg`,
        eyebrow: "Cinematic motion",
        title: "Camera moves that feel directed",
        description: "Dolly, orbit and parallax stay smooth and intentional across the full clip, and frames hold their shape without warping or melting.",
        bullets: ["Subjects stay locked across the whole take", "Camera language reads as deliberate", "Lighting and color match shot to shot"],
      },
      {
        image: `${ART}/cap-2.jpg`,
        eyebrow: "Synchronized audio",
        title: "Sound generated to match the picture",
        description: "Ambience, effects and dialogue timing arrive with the video, so each clip lands as finished short-form content.",
        bullets: ["Effects sit on the on-screen action", "Room tone fills the background", "Dialogue timing matches the cut"],
      },
      {
        image: `${ART}/cap-3.jpg`,
        eyebrow: "Believable physics",
        title: "Things move with weight",
        description: "Objects fall, collide and react the way viewers expect. Water, cloth and crowds behave instead of glitching.",
        bullets: ["Gravity and momentum read correctly", "Fluid and cloth dynamics hold up", "Multi-object scenes stay coherent"],
      },
      {
        image: `${ART}/cap-4.jpg`,
        eyebrow: "Prompt control",
        title: "Detailed direction, rendered faithfully",
        description: "Scene, style, lens, pacing and mood reach the screen with fewer retries before you nail the shot you wrote.",
        bullets: ["Prompts translate closely to output", "Style and lens stay under your control", "Fewer regenerations per shot"],
      },
    ],
  },
  showcase: {
    eyebrow: "Sample outputs",
    title: "Made with Sora 2 in LazyKiwi",
    description: "Real creator jobs from across short-video channels. Each one started as a prompt or a single reference image, then got refined in the workbench.",
    cta: { label: "Make your own", link: "/generate/?model=sora-2" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Auto & product hero shots", tag: "Text→Video" },
      { image: `${ART}/shot-2.jpg`, title: "Creator performance clips", tag: "Image→Video" },
      { image: `${ART}/shot-3.jpg`, title: "Cinematic story beats", tag: "Text→Video" },
      { image: `${ART}/shot-4.jpg`, title: "Documentary-style scenes", tag: "Image→Video" },
      { image: `${ART}/shot-5.jpg`, title: "Travel & location reels", tag: "Frames" },
      { image: `${ART}/shot-6.jpg`, title: "Stylized genre edits", tag: "Text→Video" },
    ],
  },
  specs: {
    eyebrow: "Specs",
    title: "Sora 2 at a glance",
    description: "Capabilities exposed through the LazyKiwi workbench. Available options may vary by plan and queue.",
    rows: [
      { label: "Provider", value: "OpenAI" },
      { label: "Type", value: "Video generation" },
      { label: "Inputs", value: "Text prompt, single image, start & end frame" },
      { label: "Audio", value: "Synchronized audio (effects, ambience, dialogue timing)" },
      { label: "Max duration", value: "Up to 25 seconds" },
      { label: "Resolution", value: "Up to 1080p" },
      { label: "Aspect ratios", value: "9:16, 1:1, 16:9" },
      { label: "Best for", value: "Cinematic shots, ads, creator hooks, story beats" },
    ],
  },
  comparison: {
    eyebrow: "When to use it",
    title: "Sora 2 vs. other video models",
    description: "Every model in LazyKiwi has a sweet spot. Use this to decide when Sora 2 is the right pick and when a faster model fits the job better.",
    columns: ["Model", "Strength", "Best for", "Speed"],
    rows: [
      { model: "Sora 2", highlight: true, strength: "Cinematic realism + synced audio", bestFor: "Hero shots, story beats, ads", speed: "Standard" },
      { model: "Veo 3", strength: "Natural, true-to-life footage", bestFor: "Lifestyle & documentary looks", speed: "Standard" },
      { model: "Kling 1.6 Turbo", strength: "Fast motion-heavy clips", bestFor: "Quick drafts & high volume", speed: "Fast" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators build with Sora 2",
    description: "One model covers a lot of short-form work, from the first-second hook through to the closing beat.",
    items: [
      { icon: "Clapperboard", title: "Cinematic intros", description: "Open a video on a directed, audio-synced shot that earns the first second of attention." },
      { icon: "ShoppingBag", title: "Product & ad spots", description: "Take a product or a rough concept and render it as a polished spot with motion and sound." },
      { icon: "Plane", title: "Travel & lifestyle reels", description: "Produce location and lifestyle beats without booking a shoot or a crew." },
      { icon: "Music", title: "Music & mood pieces", description: "Build atmospheric, beat-matched visuals for releases and edits." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why teams reach for Sora 2",
    stats: [
      { value: "4.9/5", label: "Average creator rating" },
      { value: "1M+", label: "Clips generated in LazyKiwi" },
      { value: "25s", label: "Of audio-synced video per run" },
    ],
    quotes: [
      { quote: "The audio sync is what sold my clients. A clip looks and sounds finished the moment it leaves the workbench.", name: "Alex Moreau", role: "Content lead", avatar: `${AV}/am.jpg` },
      { quote: "I storyboard in prompts now. Sora 2 keeps the character consistent across the whole take.", name: "Jamie Cole", role: "Short-form creator", avatar: `${AV}/jc.jpg` },
      { quote: "Having Sora 2 and the other models in one place reset how fast we ship.", name: "Riley Banks", role: "Agency producer", avatar: `${AV}/rb.jpg` },
    ],
  },
  faq: [
    { question: "What is Sora 2?", answer: "Sora 2 is OpenAI's video generation model. Give it a text prompt or a single image and it produces a short video with realistic motion, physics and synchronized audio. In LazyKiwi you run it straight from the Video Generator workbench." },
    { question: "Can I use Sora 2 for free?", answer: "You can try Sora 2 inside LazyKiwi. How many runs you get depends on your plan and the current queue. Open the workbench to see what's available on your account." },
    { question: "Does Sora 2 generate sound?", answer: "Yes. Synchronized audio is one of Sora 2's biggest upgrades. Ambience, sound effects and dialogue timing are generated to match the video, so clips feel finished before you touch an editor." },
    { question: "What's the difference between Sora 2 and Veo 3?", answer: "Both sit at the top tier of video models. Sora 2 leans into cinematic, stylized shots with strong audio sync; Veo 3 is known for natural, true-to-life footage. LazyKiwi lets you switch between them in the same workbench." },
    { question: "Can I turn a photo into a Sora 2 video?", answer: "Yes. Upload one clear image, describe the motion and camera you want, and Sora 2 animates it into a short clip you can refine and export." },
  ],
  bottomCta: {
    title: "Make your next short with Sora 2.",
    description: "Begin with a prompt or one image, generate a cinematic clip with sound, then refine it and export for every channel, all inside LazyKiwi.",
    buttonText: "Try Sora 2 now",
    buttonLink: "/generate/?model=sora-2",
    bgImage: `${ART}/cap-1.jpg`,
  },
  related: {
    title: "Explore more models",
    description: "LazyKiwi keeps the newest and most popular AI video and image models in one workbench. Switch models without switching tools.",
    models: [
      { name: "Veo 3", type: "Video", link: "/models/veo-3" },
      { name: "Kling 1.6", type: "Video", link: "/models/kling-1-6" },
      { name: "Seedream 5.0", type: "Image", link: "/models/seedream-5" },
      { name: "Nano Banana", type: "Image", link: "/models/nano-banana" },
      { name: "FLUX.1 Schnell", type: "Image", link: "/models/flux-1-schnell" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Models", title: "Sora 2 vs. Veo 3: Which Video Model Should You Use?", excerpt: "A practical breakdown of when each flagship model wins.", readTime: "7 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/vs/cover.jpg", link: "/blog/sora-2-vs-veo-3" },
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "The prompt structure that gets clean, cinematic results on the first try.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Use AI effects to build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for Sora 2 in many ways. LazyKiwi groups these related intents under one model page so creators land on the right workbench.",
    terms: ["Sora 2 AI", "OpenAI Sora 2", "Sora 2 video generator", "Sora 2 online", "Sora 2 text to video", "Sora 2 image to video", "Sora 2 free", "Sora AI video", "Sora 2 alternative", "AI video with sound"],
  },
};
