const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/models/nano-banana";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const nanoBananaData = {
  slug: "nano-banana",
  parentFeature: "image-generator",
  productionStatus: "draft",
  seo: {
    title: "Nano Banana AI Image Editor: Google Gemini Image Model | LazyKiwi",
    description:
      "Run Nano Banana (Google's Gemini image model) inside LazyKiwi. Generate and edit images with conversational prompts, hold characters consistent across edits, and iterate quickly. Try Nano Banana online for creators, products and content.",
  },
  hero: {
    breadcrumb: ["Models", "Nano Banana"],
    badge: "Google · Image Model",
    statusPill: "Popular",
    name: "Nano Banana",
    headline: "Nano Banana: fun, conversational image editing that **stays on character**",
    tagline: "Google's Gemini image model, now in the LazyKiwi workbench.",
    description:
      "Type a prompt or drop in an image, then edit it like you're chatting. Nano Banana, Google's Gemini image model, keeps your characters consistent across every change, so iteration stays fast, playful and dependable without a separate editing suite.",
    primaryCta: { label: "Try Nano Banana free", link: "/generate/?model=nano-banana" },
    secondaryCta: { label: "See sample outputs", link: "#showcase" },
    stats: [
      { label: "Modality", value: "Text & Image → Image" },
      { label: "Strength", value: "Character consistency" },
      { label: "Speed", value: "Fast" },
      { label: "Resolution", value: "Up to 1024px" },
    ],
    media: {
      wide: `${ART}/hero-wide.jpg`,
      card: `${ART}/hero-card.jpg`,
      caption: "Nano Banana · 1024px",
      meta: "Image Editing · 1:1",
    },
    trust: {
      label: "Runs in the LazyKiwi workbench",
      chips: ["No install", "Image editing", "Character-safe", "Fast"],
    },
  },
  steps: {
    eyebrow: "How it works",
    title: "From photo to polished edit in three steps",
    description: "No layers, no plugins. Pick Nano Banana in the workbench and just describe the change.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Pick Nano Banana & your input", description: "Open the Image Generator, choose Nano Banana, then start from text or upload an image you want to edit." },
      { image: `${ART}/step-2.jpg`, title: "Edit by chatting", description: "Describe the change in plain language (swap a background, restyle a scene, tweak an outfit) and your character stays intact." },
      { image: `${ART}/step-3.jpg`, title: "Iterate & export", description: "Keep refining with quick follow-up prompts, then export your favorite versions for posts, products or ads." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?model=nano-banana" },
  },
  capabilities: {
    eyebrow: "Why Nano Banana",
    title: "What sets Nano Banana apart",
    description:
      "Nano Banana turns image editing into a conversation. It holds subjects, faces and style consistent across edits, so iteration feels fast and fun instead of fragile.",
    items: [
      {
        image: `${ART}/cap-1.jpg`,
        eyebrow: "Conversational editing",
        title: "Edit images like you're chatting",
        description: "Ask for a change in plain language and watch it happen. Follow-up prompts stack, so you direct the image one idea at a time.",
        bullets: ["Plain-language edits", "Stacked follow-up prompts", "Skip the layers and masking"],
      },
      {
        image: `${ART}/cap-2.jpg`,
        eyebrow: "Character consistency",
        title: "Your character stays your character",
        description: "Faces, outfits and key details hold steady across edits, so a subject reads as the same person from the first version to the last.",
        bullets: ["Faces that match across edits", "Stable outfits and props", "Same subject, many scenes"],
      },
      {
        image: `${ART}/cap-3.jpg`,
        eyebrow: "Fast iteration",
        title: "Try ten ideas in the time of one",
        description: "Nano Banana responds quickly, so creative loops stay tight and you can explore variations without losing momentum.",
        bullets: ["Quick turnaround per edit", "Room to explore variations", "Workflow that keeps momentum"],
      },
      {
        image: `${ART}/cap-4.jpg`,
        eyebrow: "Playful creativity",
        title: "Built for fun, ready for work",
        description: "Remix styles, mash up scenes and chase wild ideas, then keep the results that are good enough to ship.",
        bullets: ["Style remixing", "Scene mashups", "Outputs ready to ship"],
      },
    ],
  },
  showcase: {
    eyebrow: "Sample outputs",
    title: "Made with Nano Banana in LazyKiwi",
    description: "Real creator use cases across content channels, each from a prompt or a single image, edited conversationally in the workbench.",
    cta: { label: "Make your own", link: "/generate/?model=nano-banana" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Character & avatar sets", tag: "Image Edit" },
      { image: `${ART}/shot-2.jpg`, title: "Product on new backgrounds", tag: "Image Edit" },
      { image: `${ART}/shot-3.jpg`, title: "Style & outfit swaps", tag: "Text→Image" },
      { image: `${ART}/shot-4.jpg`, title: "Scene mashups", tag: "Image Edit" },
      { image: `${ART}/shot-5.jpg`, title: "Consistent post series", tag: "Image Edit" },
      { image: `${ART}/shot-6.jpg`, title: "Creative concept art", tag: "Text→Image" },
    ],
  },
  specs: {
    eyebrow: "Specs",
    title: "Nano Banana at a glance",
    description: "Capabilities exposed through the LazyKiwi workbench. Available options may vary by plan and queue.",
    rows: [
      { label: "Provider", value: "Google" },
      { label: "Type", value: "Image generation & editing" },
      { label: "Inputs", value: "Text prompt + image to edit" },
      { label: "Max resolution", value: "Up to 1024px" },
      { label: "Aspect ratios", value: "1:1, 9:16, 16:9" },
      { label: "Best for", value: "Conversational edits, character-consistent series, fast iteration" },
    ],
  },
  comparison: {
    eyebrow: "When to use it",
    title: "Nano Banana vs. other image models",
    description: "Every model in LazyKiwi has a sweet spot. Use this to decide when Nano Banana is the right pick, and when a different model fits better.",
    columns: ["Model", "Strength", "Best for", "Speed"],
    rows: [
      { model: "Nano Banana", highlight: true, strength: "Fun, fast, character-consistent edits", bestFor: "Conversational editing & series", speed: "Fast" },
      { model: "Seedream 5.0", strength: "Photoreal quality", bestFor: "High-fidelity stills", speed: "Standard" },
      { model: "FLUX.1 Schnell", strength: "Ultra-fast open source", bestFor: "Quick drafts & high volume", speed: "Ultra-fast" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators build with Nano Banana",
    description: "One model, many editing jobs, from a single character to a whole consistent series.",
    items: [
      { icon: "Sparkles", title: "Character & avatar sets", description: "Generate a character once, then keep them consistent across endless edits and scenes." },
      { icon: "ShoppingBag", title: "Product visuals", description: "Drop a product into new backgrounds and styles without a reshoot." },
      { icon: "Megaphone", title: "Campaign variations", description: "Spin one concept into a batch of on-brand, character-safe ad creatives." },
      { icon: "Heart", title: "Fun social edits", description: "Remix selfies and photos into playful posts your audience loves to share." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why teams reach for Nano Banana",
    stats: [
      { value: "4.9/5", label: "Average creator rating" },
      { value: "2M+", label: "Edits generated in LazyKiwi" },
      { value: "Fast", label: "Turnaround per edit" },
    ],
    quotes: [
      { quote: "It keeps my character the same across every edit. I built a whole series from one photo and it never drifted.", name: "Sofia Park", role: "Content creator", avatar: `${AV}/sp.jpg` },
      { quote: "Editing by chatting is genuinely fun. I try ten ideas before I'd normally finish one.", name: "Marcus Tan", role: "Social media manager", avatar: `${AV}/mt.jpg` },
      { quote: "Fast, playful and dependable. Nano Banana is where my team starts every image edit now.", name: "Jamie Cole", role: "Creative lead", avatar: `${AV}/jc.jpg` },
    ],
  },
  faq: [
    { question: "What is Nano Banana?", answer: "Nano Banana is Google's popular Gemini-based image model. It generates and edits images from conversational prompts and is known for keeping characters consistent across edits. In LazyKiwi you run it directly from the Image Generator workbench." },
    { question: "Can I use Nano Banana for free?", answer: "You can try Nano Banana inside LazyKiwi. Generation availability and the number of runs depend on your plan and current queue. Open the workbench to see what's available on your account." },
    { question: "What makes Nano Banana good for editing?", answer: "Nano Banana shines at conversational editing. You describe a change in plain language and it applies it while keeping your character and key details consistent, which is ideal for fast, fun creative iteration." },
    { question: "How does character consistency work in Nano Banana?", answer: "Nano Banana holds faces, outfits and important details steady across edits, so the same subject reads consistently from one version to the next. That makes it great for building avatar sets and series from a single image." },
    { question: "Can I turn one photo into many variations?", answer: "Yes. Upload one clear image, then use follow-up prompts to swap backgrounds, styles or scenes. Nano Banana keeps the character intact, so you can build a whole consistent series quickly." },
  ],
  bottomCta: {
    title: "Make your next edit with Nano Banana.",
    description: "Start from a prompt or a single image, edit it conversationally while keeping your character consistent, then refine and export for every channel, all inside LazyKiwi.",
    buttonText: "Try Nano Banana now",
    buttonLink: "/generate/?model=nano-banana",
    bgImage: `${ART}/cap-2.jpg`,
  },
  related: {
    title: "Explore more models",
    description: "LazyKiwi keeps the newest and most popular AI image and video models in one workbench. Switch models without switching tools.",
    models: [
      { name: "Seedream 5.0", type: "Image", link: "/models/seedream-5" },
      { name: "FLUX.1 Schnell", type: "Image", link: "/models/flux-1-schnell" },
      { name: "Sora 2", type: "Video", link: "/models/sora-2" },
      { name: "Veo 3", type: "Video", link: "/models/veo-3" },
      { name: "Kling 1.6", type: "Video", link: "/models/kling-1-6" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Creator Playbook", title: "Turn One Photo Into a Week of Short-Form Content", excerpt: "Multiply one image into many posts.", readTime: "5 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/one-photo/cover.jpg", link: "/blog/one-photo-week-of-content" },
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "Prompt structure for clean results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for Nano Banana in many ways. LazyKiwi groups these related intents under one model page so creators land on the right workbench.",
    terms: ["Nano Banana AI", "Google Nano Banana", "Gemini 2.5 Flash Image", "Nano Banana image editor", "Nano Banana online", "Nano Banana free", "Gemini image model", "AI image editing", "character consistent AI", "Nano Banana alternative"],
  },
};
