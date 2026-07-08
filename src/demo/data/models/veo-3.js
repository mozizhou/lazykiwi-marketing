const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/models/veo-3";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const veo3Data = {
  slug: "veo-3",
  parentFeature: "video-generator",
  productionStatus: "draft",
  seo: {
    title: "Veo 3 AI Video Generator | Try Google Veo 3 Online | LazyKiwi",
    description:
      "Run Google DeepMind's Veo 3 video model in LazyKiwi. Write a prompt or upload one image and Veo 3 returns natural, true-to-life clips with solid physics, faithful prompt adherence and native synchronized audio. Try Veo 3 online for TikTok, Reels, Shorts and ads.",
  },
  hero: {
    breadcrumb: ["Models", "Veo 3"],
    badge: "Google DeepMind · Video Model",
    statusPill: "Popular",
    name: "Veo 3",
    headline: "Veo 3: natural video that looks **true to life**, with sound",
    tagline: "Google DeepMind's flagship video model, now built into the LazyKiwi workbench.",
    description:
      "Write a scene or drop in a single image, and Veo 3 returns a coherent short clip with lifelike motion, accurate physics and native synchronized audio. You direct the shot, refine the prompt, then post it. No editing suite needed.",
    primaryCta: { label: "Try Veo 3 free", link: "/generate/?model=veo-3" },
    secondaryCta: { label: "Watch sample outputs", link: "#showcase" },
    stats: [
      { label: "Modality", value: "Text & Image → Video" },
      { label: "Audio", value: "Native synchronized" },
      { label: "Realism", value: "True-to-life" },
      { label: "Resolution", value: "Up to 1080p" },
    ],
    media: {
      wide: `${ART}/hero-wide.jpg`,
      card: `${ART}/hero-card.jpg`,
      caption: "Veo 3 · 1080p",
      meta: "Text to Video · 16:9",
    },
    trust: {
      label: "Runs in the LazyKiwi workbench",
      chips: ["No install", "Text-to-Video", "Image-to-Video", "Audio on"],
    },
  },
  steps: {
    eyebrow: "How it works",
    title: "Three steps from idea to a posted clip",
    description: "Skip the timeline and the plugins. Choose Veo 3 in the workbench, then direct the shot.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Pick Veo 3 & your input", description: "Open the Video Generator, select Veo 3, and either write a text prompt or upload one reference image." },
      { image: `${ART}/step-2.jpg`, title: "Direct the shot", description: "Spell out the scene, the motion, the camera and the mood, then set aspect ratio, length and whether native audio is on." },
      { image: `${ART}/step-3.jpg`, title: "Generate & export", description: "Play back the clip with sound, adjust the prompt or frames, and export for TikTok, Reels, Shorts or ads." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?model=veo-3" },
  },
  capabilities: {
    eyebrow: "Why Veo 3",
    title: "What sets Veo 3 apart",
    description:
      "Veo 3 is built for realism. Where stylized models chase a cinematic look, Veo 3 keeps lighting, texture and motion grounded across the whole shot, so a clip reads like real footage you filmed instead of a render.",
    items: [
      {
        image: `${ART}/cap-1.jpg`,
        eyebrow: "True-to-life realism",
        title: "Footage that looks filmed, not rendered",
        description: "Skin, fabric, light and depth render naturally across the take, so people and scenes read as genuinely captured rather than generated.",
        bullets: ["Lighting and color land naturally", "Textures and depth read as real", "Subjects stay locked across the whole take"],
      },
      {
        image: `${ART}/cap-2.jpg`,
        eyebrow: "Strong physics",
        title: "Motion that obeys the real world",
        description: "Objects move with real weight and momentum. Water, cloth, crowds and collisions behave the way viewers expect.",
        bullets: ["Gravity and momentum read correctly", "Fluid and cloth dynamics hold up", "Multi-object scenes stay coherent"],
      },
      {
        image: `${ART}/cap-3.jpg`,
        eyebrow: "Native synchronized audio",
        title: "Dialogue, ambience and SFX, built in",
        description: "Veo 3 generates sound natively with the picture, so speech, room tone and effects land in sync and the clip arrives finished.",
        bullets: ["Dialogue stays synced to the lip timing", "Room tone fills the background", "Effects sit on the on-screen action"],
      },
      {
        image: `${ART}/cap-4.jpg`,
        eyebrow: "Prompt adherence",
        title: "Detailed direction, rendered faithfully",
        description: "Subject, setting, lens, pacing and mood reach the screen with fewer retries before you nail the shot you wrote.",
        bullets: ["Prompts translate closely to output", "Style and lens stay under your control", "Fewer regenerations per shot"],
      },
    ],
  },
  showcase: {
    eyebrow: "Sample outputs",
    title: "Made with Veo 3 in LazyKiwi",
    description: "Real creator jobs from across short-video channels. Each one started as a prompt or a single reference image, then got refined in the workbench.",
    cta: { label: "Make your own", link: "/generate/?model=veo-3" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Lifestyle & everyday scenes", tag: "Text→Video" },
      { image: `${ART}/shot-2.jpg`, title: "Documentary-style beats", tag: "Image→Video" },
      { image: `${ART}/shot-3.jpg`, title: "Realistic story moments", tag: "Text→Video" },
      { image: `${ART}/shot-4.jpg`, title: "Product demos with sound", tag: "Image→Video" },
      { image: `${ART}/shot-5.jpg`, title: "Travel & location reels", tag: "Frames" },
      { image: `${ART}/shot-6.jpg`, title: "Nature & wildlife moments", tag: "Text→Video" },
    ],
  },
  specs: {
    eyebrow: "Specs",
    title: "Veo 3 at a glance",
    description: "Capabilities exposed through the LazyKiwi workbench. Available options may vary by plan and queue.",
    rows: [
      { label: "Provider", value: "Google DeepMind" },
      { label: "Type", value: "Video generation" },
      { label: "Inputs", value: "Text prompt, single image, start & end frame" },
      { label: "Audio", value: "Native synchronized audio (dialogue, ambience, SFX)" },
      { label: "Max duration", value: "Up to 8 seconds" },
      { label: "Resolution", value: "Up to 1080p" },
      { label: "Aspect ratios", value: "16:9, 9:16, 1:1" },
      { label: "Best for", value: "Realistic footage, lifestyle, documentary looks, ads" },
    ],
  },
  comparison: {
    eyebrow: "When to use it",
    title: "Veo 3 vs. other video models",
    description: "Every model in LazyKiwi has a sweet spot. Use this to decide when Veo 3 is the right pick and when another model fits the job better.",
    columns: ["Model", "Strength", "Best for", "Speed"],
    rows: [
      { model: "Veo 3", highlight: true, strength: "Natural, true-to-life realism", bestFor: "Lifestyle, documentary, real-world looks", speed: "Standard" },
      { model: "Sora 2", strength: "Cinematic + synced audio", bestFor: "Stylized hero shots, story beats, ads", speed: "Standard" },
      { model: "Kling 1.6 Turbo", strength: "Fast motion-heavy clips", bestFor: "Quick drafts & high volume", speed: "Fast" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators build with Veo 3",
    description: "One model covers a lot of short-form work, from the first-second hook through to the closing beat.",
    items: [
      { icon: "Clapperboard", title: "Realistic story scenes", description: "Open a video on a natural, audio-synced shot that reads like real footage." },
      { icon: "ShoppingBag", title: "Product & ad spots", description: "Take a product or a rough concept and render it as a believable spot with motion and native sound." },
      { icon: "Plane", title: "Travel & lifestyle reels", description: "Produce true-to-life location and lifestyle beats without booking a shoot or a crew." },
      { icon: "Megaphone", title: "Spokesperson & explainers", description: "Build talking, lip-synced clips for announcements, demos and ads." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why teams reach for Veo 3",
    stats: [
      { value: "4.9/5", label: "Average creator rating" },
      { value: "1M+", label: "Clips generated in LazyKiwi" },
      { value: "8s", label: "Of audio-synced video per run" },
    ],
    quotes: [
      { quote: "It honestly looks filmed. That realism is what gets my clients to approve a clip on the first pass.", name: "Jamie Cole", role: "Short-form creator", avatar: `${AV}/jc.jpg` },
      { quote: "Native audio and a true-to-life look together mean I skip half my edit. Veo 3 lands finished.", name: "Dana Nguyen", role: "Content lead", avatar: `${AV}/dn.jpg` },
      { quote: "Having Veo 3 and the other models in one workbench reset how fast we ship.", name: "Elena Vargas", role: "Agency producer", avatar: `${AV}/ev.jpg` },
    ],
  },
  faq: [
    { question: "What is Veo 3?", answer: "Veo 3 is Google DeepMind's flagship video generation model. Give it a text prompt or a single image and it returns a natural, true-to-life short video with accurate physics, faithful prompt adherence and native synchronized audio. In LazyKiwi you run it straight from the Video Generator workbench." },
    { question: "Can I use Veo 3 for free?", answer: "You can try Veo 3 inside LazyKiwi. How many runs you get depends on your plan and the current queue. Open the workbench to see what's available on your account." },
    { question: "Does Veo 3 generate sound?", answer: "Yes. Veo 3 has native synchronized audio. Dialogue, ambience and sound effects are generated to match the video, lip timing included, so clips feel finished without separate audio editing." },
    { question: "What's the difference between Veo 3 and Sora 2?", answer: "Both sit at the top tier of video models. Veo 3 is known for natural, true-to-life footage with strong physics and native audio; Sora 2 leans into a more cinematic, stylized look. LazyKiwi lets you switch between them in the same workbench." },
    { question: "Can I turn a photo into a Veo 3 video?", answer: "Yes. Upload one clear image, describe the motion and camera you want, and Veo 3 animates it into a natural-looking short clip you can refine and export." },
  ],
  bottomCta: {
    title: "Make your next short with Veo 3.",
    description: "Begin with a prompt or one image, generate a true-to-life clip with native sound, then refine it and export for every channel, all inside LazyKiwi.",
    buttonText: "Try Veo 3 now",
    buttonLink: "/generate/?model=veo-3",
    bgImage: `${ART}/cap-2.jpg`,
  },
  related: {
    title: "Explore more models",
    description: "LazyKiwi keeps the newest and most popular AI video and image models in one workbench. Switch models without switching tools.",
    models: [
      { name: "Sora 2", type: "Video", link: "/models/sora-2" },
      { name: "Kling 1.6 Turbo", type: "Video", link: "/models/kling-1-6-turbo" },
      { name: "Seedream 5.0", type: "Image", link: "/models/seedream-5" },
      { name: "Nano Banana", type: "Image", link: "/models/nano-banana" },
      { name: "FLUX.1 Schnell", type: "Image", link: "/models/flux-1-schnell" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Models", title: "Sora 2 vs. Veo 3: Which Video Model Should You Use?", excerpt: "A practical breakdown of when each flagship model wins.", readTime: "7 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/vs/cover.jpg", link: "/blog/sora-2-vs-veo-3" },
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "The prompt structure that gets clean, cinematic results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for Veo 3 in many ways. LazyKiwi groups these related intents under one model page so creators land on the right workbench.",
    terms: ["Veo 3 AI", "Google Veo 3", "Veo 3 video generator", "Veo 3 online", "Veo 3 text to video", "Veo 3 image to video", "Veo 3 free", "Google DeepMind video", "Veo 3 alternative", "AI video with sound"],
  },
};
