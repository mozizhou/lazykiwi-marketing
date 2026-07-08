const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/effects/ai-headshot";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const aiHeadshotData = {
  slug: "ai-headshot",
  parentFeature: "photo-effects",
  productionStatus: "draft",
  seo: {
    title: "AI Headshot Generator: Studio-Quality Portraits From Selfies | LazyKiwi",
    description:
      "The LazyKiwi AI Headshot effect makes studio-quality professional portraits from a few selfies. Pick the background and wardrobe, keep your real likeness, and download LinkedIn-ready photos at up to 4K.",
  },
  hero: {
    breadcrumb: ["Effects", "AI Headshot"],
    badge: "Photo Effect",
    statusPill: "Popular",
    name: "AI Headshot",
    headline: "Studio **headshots** from a few selfies",
    tagline: "Professional, LinkedIn-ready portraits without a photographer or a studio booking.",
    description:
      "Upload a handful of selfies and the AI Headshot effect returns polished, studio-lit portraits that still look like you. Set the background, wardrobe, and crop, then download a set ready for LinkedIn, resumes, and team pages.",
    primaryCta: { label: "Create my headshots", link: "/generate/?effect=ai-headshot" },
    secondaryCta: { label: "See examples", link: "#showcase" },
    stats: [
      { label: "Input", value: "3–8 selfies" },
      { label: "Output", value: "Studio portraits" },
      { label: "Resolution", value: "Up to 4K" },
      { label: "Time", value: "Minutes, not days" },
    ],
    media: { wide: `${ART}/hero-wide.jpg`, card: `${ART}/hero-card.jpg`, caption: "AI Headshot · 4:5", meta: "Selfies → Portraits" },
    trust: { label: "Runs in the LazyKiwi workbench", chips: ["No install", "Selfie input", "Identity-safe", "Up to 4K"] },
  },
  steps: {
    eyebrow: "How it works",
    title: "Get pro headshots in three steps",
    description: "There's no shoot to book and no lighting to learn. Upload selfies, then choose your look.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Upload a few selfies", description: "Add 3 to 8 clear photos from different angles. A mix of expressions and lighting gives you the most flexible results." },
      { image: `${ART}/step-2.jpg`, title: "Pick your style", description: "Set background, wardrobe, lighting, and crop, from corporate to creative to outdoor to classic studio." },
      { image: `${ART}/step-3.jpg`, title: "Download your set", description: "You get a batch of polished portraits. Pick the favorites and download the high-resolution files ready to use." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?effect=ai-headshot" },
  },
  capabilities: {
    eyebrow: "Why it works",
    title: "What makes a great AI Headshot",
    description: "The effect upgrades the lighting, framing, and finish while protecting the one thing that matters most, which is that it still looks like you.",
    items: [
      { image: `${ART}/cap-1.jpg`, eyebrow: "True to you", title: "Your real face, kept", description: "Your likeness stays accurate, so the result reads as a genuine photo of you on a better day in better light.", bullets: ["Accurate facial likeness", "Natural skin texture", "No 'plastic AI' look"] },
      { image: `${ART}/cap-2.jpg`, eyebrow: "Studio lighting", title: "Lit like a real shoot", description: "Soft key light, clean catchlights, and balanced tones give every portrait a photographed, professional finish.", bullets: ["Soft, flattering light", "Clean color and contrast", "Sharp, in-focus eyes"] },
      { image: `${ART}/cap-3.jpg`, eyebrow: "Any setting", title: "Backgrounds and wardrobe", description: "Drop yourself into an office, a neutral studio, an outdoor scene, or a branded backdrop, with wardrobe to match the context.", bullets: ["Corporate to creative looks", "Neutral or branded backdrops", "Consistent across the set"] },
      { image: `${ART}/cap-4.jpg`, eyebrow: "Built for use", title: "Ready for every profile", description: "The crops and ratios you actually need are covered, from LinkedIn and resume to team page, speaker bio, and avatars.", bullets: ["LinkedIn and resume crops", "Square avatars", "High-res downloads"] },
    ],
  },
  showcase: {
    eyebrow: "Examples",
    title: "Made with AI Headshot in LazyKiwi",
    description: "Studio-style portraits built from everyday selfies, shown across a range of styles and settings.",
    cta: { label: "Make your own", link: "/generate/?effect=ai-headshot" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Corporate classic", tag: "Office" },
      { image: `${ART}/shot-2.jpg`, title: "Creative studio", tag: "Studio" },
      { image: `${ART}/shot-3.jpg`, title: "Outdoor natural light", tag: "Outdoor" },
      { image: `${ART}/shot-4.jpg`, title: "Founder portrait", tag: "Brand" },
      { image: `${ART}/shot-5.jpg`, title: "Team page set", tag: "Team" },
      { image: `${ART}/shot-6.jpg`, title: "Speaker bio shot", tag: "Bio" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "Who AI Headshot is for",
    description: "One effect handles just about every professional profile that needs a good photo.",
    items: [
      { icon: "Newspaper", title: "LinkedIn and resumes", description: "Refresh your profile with a consistent, professional portrait that still reads as you." },
      { icon: "ShoppingBag", title: "Founders and creators", description: "Pull together on-brand founder shots for your site, press kit, and product pages." },
      { icon: "Sparkles", title: "Team pages", description: "Give an entire team matching, polished headshots without booking a single shoot." },
      { icon: "Megaphone", title: "Speakers and bios", description: "Deliver sharp speaker and author photos in the exact crops events ask for." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by professionals",
    title: "Why people choose AI Headshot",
    stats: [
      { value: "4.8/5", label: "Average user rating" },
      { value: "500k+", label: "Headshots generated" },
      { value: "1/10th", label: "The cost of a studio shoot" },
    ],
    quotes: [
      { quote: "I uploaded six selfies on my lunch break and ended up with a LinkedIn photo better than my last paid shoot.", name: "Tara Reyes", role: "Product manager", avatar: `${AV}/tr.jpg` },
      { quote: "We did headshots for the whole remote team in an afternoon, and they came out perfectly consistent across everyone.", name: "Liam Koch", role: "People operations lead", avatar: `${AV}/lk.jpg` },
      { quote: "It actually looks like me. That sounds obvious, but no other tool managed it until this one.", name: "Riley Banks", role: "Startup founder", avatar: `${AV}/rb.jpg` },
    ],
  },
  faq: [
    { question: "What is the AI Headshot effect?", answer: "AI Headshot turns a few ordinary selfies into professional, studio-quality portraits. Inside LazyKiwi you upload your photos, pick a background and style, and download a polished set in a few minutes." },
    { question: "How many photos do I need to upload?", answer: "Three to eight clear selfies do the job. Variety helps a lot, so different angles, expressions, and lighting give the effect more to work with and lead to more flexible, accurate results." },
    { question: "Does the AI Headshot generator still look like me?", answer: "Yes. The effect is tuned to preserve your real likeness and skin texture while upgrading the lighting, framing, and finish, so the portrait reads as a genuine photo of you." },
    { question: "Can I choose the background and outfit?", answer: "You can pick from corporate, creative, outdoor, and studio backgrounds, with wardrobe options to match each one. The full set stays consistent so it looks like a single shoot." },
    { question: "What can I use the headshots for?", answer: "Use them for LinkedIn, resumes, team and about pages, speaker bios, press kits, and avatars. You get the standard crops plus high-resolution downloads ready to drop in anywhere." },
  ],
  bottomCta: {
    title: "Studio headshots, straight from your selfies.",
    description: "Upload a few photos, choose your style, and download professional portraits that still look like you, all inside LazyKiwi.",
    buttonText: "Create my headshots",
    buttonLink: "/generate/?effect=ai-headshot",
    bgImage: `${ART}/cap-2.jpg`,
  },
  related: {
    title: "More effects",
    description: "Explore other one-click effects in the LazyKiwi workbench. Same tool, different look.",
    models: [
      { name: "AI Hug", type: "Video", link: "/effects/ai-hug" },
      { name: "Explosion", type: "Video", link: "/effects/explosion" },
      { name: "Bullet Time", type: "Video", link: "/effects/bullet-time" },
      { name: "Disintegration", type: "Video", link: "/effects/disintegration" },
      { name: "Wings / Angel", type: "Video", link: "/effects/wings-angel" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Creator Playbook", title: "Turn One Photo Into a Week of Short-Form Content", excerpt: "A batching workflow to multiply one image into many posts.", readTime: "5 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/one-photo/cover.jpg", link: "/blog/one-photo-week-of-content" },
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "The prompt structure that gets clean, cinematic results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Use AI effects to build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for this effect in many ways. LazyKiwi groups these intents under one page.",
    terms: ["AI headshot generator", "AI professional headshot", "selfie to headshot", "LinkedIn photo AI", "AI portrait generator", "professional photo AI", "AI business headshot", "headshot from selfie", "AI corporate portrait", "studio headshot AI"],
  },
};
