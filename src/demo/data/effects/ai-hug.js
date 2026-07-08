const ART = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/effects/ai-hug";
const AV = "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/avatars";

export const aiHugData = {
  slug: "ai-hug",
  parentFeature: "video-effects",
  productionStatus: "draft",
  seo: {
    title: "AI Hug Video Effect: Animate Two Photos Into a Hug | LazyKiwi",
    description:
      "The AI Hug effect in LazyKiwi animates two photos into a warm, natural hugging video. Reunite people across distance, bring old photos to life, and make short clips for TikTok, Reels, and Shorts.",
  },
  hero: {
    breadcrumb: ["Effects", "AI Hug"],
    badge: "Video Effect",
    statusPill: "Trending",
    name: "AI Hug",
    headline: "Two photos, one **heartfelt hug**",
    tagline: "The viral AI Hug effect, now a single click in LazyKiwi.",
    description:
      "Drop in two photos and the AI Hug effect animates them into a warm, believable embrace. Reunite loved ones across distance, bring an old photo back to life, and make the kind of clip people save and pass along.",
    primaryCta: { label: "Try AI Hug free", link: "/generate/?effect=ai-hug" },
    secondaryCta: { label: "See examples", link: "#showcase" },
    stats: [
      { label: "Input", value: "Two photos" },
      { label: "Output", value: "5–10s hug clip" },
      { label: "Aspect", value: "9:16 · 1:1 · 16:9" },
      { label: "Time", value: "Roughly two minutes" },
    ],
    media: { wide: `${ART}/hero-wide.jpg`, card: `${ART}/hero-card.jpg`, caption: "AI Hug · 9:16", meta: "Two Photos → Video" },
    trust: { label: "Runs in the LazyKiwi workbench", chips: ["No install", "Two-photo input", "Natural motion", "Audio optional"] },
  },
  steps: {
    eyebrow: "How it works",
    title: "Make a hug video in three steps",
    description: "There's no editing and no keyframing. Add two photos and the effect handles the motion.",
    items: [
      { image: `${ART}/step-1.jpg`, title: "Upload two photos", description: "Pick two clear photos of the people (or pets) you want to see hug. Front-facing shots give the effect the most to work with." },
      { image: `${ART}/step-2.jpg`, title: "Pick the hug style", description: "Set the embrace, whether that's gentle, a joyful reunion, or a slow cinematic hold, then choose your aspect ratio and length." },
      { image: `${ART}/step-3.jpg`, title: "Generate and share", description: "Preview the clip, nudge the motion until it feels right, and export for TikTok, Reels, Shorts, or a private send." },
    ],
    cta: { label: "Open the workbench", link: "/generate/?effect=ai-hug" },
  },
  capabilities: {
    eyebrow: "Why it works",
    title: "What makes a great AI Hug",
    description: "Faces stay recognizable and the motion reads as real, so the moment lands as genuine rather than uncanny.",
    items: [
      { image: `${ART}/cap-1.jpg`, eyebrow: "Identity-safe", title: "Faces stay recognizable", description: "The people you upload stay themselves through every frame of the motion, with no melting and no swapped features.", bullets: ["Stable facial identity", "Natural skin and hair", "Consistent across frames"] },
      { image: `${ART}/cap-2.jpg`, eyebrow: "Natural motion", title: "A hug that moves like a hug", description: "Arms, posture, and weight shift the way they would in person, so the embrace reads as a real moment instead of a stiff morph.", bullets: ["Believable body motion", "Soft, human timing", "Gentle camera drift"] },
      { image: `${ART}/cap-3.jpg`, eyebrow: "Emotional tone", title: "Built for the feels", description: "Warm lighting and unhurried pacing are tuned for the kind of moment viewers stop on, watch, and save.", bullets: ["Warm, cinematic light", "Reunion-ready pacing", "Save-and-share moments"] },
      { image: `${ART}/cap-4.jpg`, eyebrow: "Any pairing", title: "People, pets, and memories", description: "Family, partners, friends, pets, or one old photo paired with a new one all animate into a single shared hug.", bullets: ["Reunite distant loved ones", "Animate old photos", "Mix eras in one clip"] },
    ],
  },
  showcase: {
    eyebrow: "Examples",
    title: "Made with AI Hug in LazyKiwi",
    description: "Real creator moments, each one built from two photos and refined in the workbench.",
    cta: { label: "Make your own", link: "/generate/?effect=ai-hug" },
    items: [
      { image: `${ART}/shot-1.jpg`, title: "Long-distance reunion", tag: "Reunion" },
      { image: `${ART}/shot-2.jpg`, title: "Family throwback", tag: "Memory" },
      { image: `${ART}/shot-3.jpg`, title: "Partners' anniversary", tag: "Couple" },
      { image: `${ART}/shot-4.jpg`, title: "Pet and owner moment", tag: "Pet" },
      { image: `${ART}/shot-5.jpg`, title: "Friends across cities", tag: "Friends" },
      { image: `${ART}/shot-6.jpg`, title: "In memory of", tag: "Tribute" },
    ],
  },
  scenarios: {
    eyebrow: "Use cases",
    title: "What creators make with AI Hug",
    description: "One effect covers a lot of emotional short-form ground.",
    items: [
      { icon: "Heart", title: "Reunion reels", description: "Give a long-distance relationship a shared on-screen hug that viewers actually root for." },
      { icon: "Sparkles", title: "Memory tributes", description: "Animate an old photo into a gentle embrace for a tribute clip that means something." },
      { icon: "Music", title: "Emotional edits", description: "Set the hug to a track and you've got a beat-matched clip people tend to save." },
      { icon: "Megaphone", title: "Brand moments", description: "Lean on warmth and reunion storytelling for campaigns that connect instead of just selling." },
    ],
  },
  testimonials: {
    eyebrow: "Loved by creators",
    title: "Why people reach for AI Hug",
    stats: [
      { value: "4.9/5", label: "Average creator rating" },
      { value: "2M+", label: "Hug clips generated" },
      { value: "~2 min", label: "From two photos to clip" },
    ],
    quotes: [
      { quote: "I made a hug video of my grandma and me, and my whole family cried. Nothing else gets that reaction.", name: "Nadia Kerr", role: "Family video creator", avatar: `${AV}/nk.jpg` },
      { quote: "The faces actually stay right. That's the exact part every other tool got wrong before this.", name: "Dani Nguyen", role: "Short-form video editor", avatar: `${AV}/dn.jpg` },
      { quote: "Reunion content is our highest-saving format now, and AI Hug turned it into a two-minute job.", name: "Sam Park", role: "Creative agency producer", avatar: `${AV}/sp.jpg` },
    ],
  },
  faq: [
    { question: "What is the AI Hug effect?", answer: "AI Hug is a video effect that takes two photos and animates the people in them into a natural-looking hug. Inside LazyKiwi you upload two images, choose a style, and generate a short clip in a couple of minutes." },
    { question: "What photos work best for AI Hug?", answer: "Reach for clear, front-facing photos with visible faces and shoulders. Good lighting and an uncluttered background help the effect hold identities sharp and keep the motion natural." },
    { question: "Can I make a hug with someone who has passed away?", answer: "Yes. Many people use AI Hug for tribute and memory clips, animating an old photo into a gentle embrace. Treat it as a stylized keepsake rather than a real recording, and use it with care." },
    { question: "Can I use AI Hug for free?", answer: "You can try AI Hug inside LazyKiwi. How many generations you get depends on your plan and the current queue. Open the workbench to see what's available on your account." },
    { question: "What can I do with the finished clip?", answer: "Export at 9:16, 1:1, or 16:9 and post it natively to TikTok, Reels, and Shorts, or keep it as a private share. Shorter, emotional clips tend to earn the most saves and re-shares." },
  ],
  bottomCta: {
    title: "Two photos, one hug worth sharing.",
    description: "Upload two images, choose a style, and generate a warm, natural hug clip without ever leaving LazyKiwi.",
    buttonText: "Try AI Hug now",
    buttonLink: "/generate/?effect=ai-hug",
    bgImage: `${ART}/cap-3.jpg`,
  },
  related: {
    title: "More video effects",
    description: "Explore other one-click effects in the LazyKiwi workbench. Same tool, different look.",
    models: [
      { name: "AI Headshot", type: "Photo", link: "/effects/ai-headshot" },
      { name: "Explosion", type: "Video", link: "/effects/explosion" },
      { name: "Bullet Time", type: "Video", link: "/effects/bullet-time" },
      { name: "Money Rain", type: "Video", link: "/effects/money-rain" },
      { name: "Wings / Angel", type: "Video", link: "/effects/wings-angel" },
    ],
  },
  relatedPosts: {
    title: "From the blog",
    posts: [
      { category: "Creator Playbook", title: "Make Scroll-Stopping AI Effect Videos", excerpt: "Use AI effects to build a hook people can't scroll past.", readTime: "8 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/scroll-stopping/cover.jpg", link: "/blog/scroll-stopping-ai-effect-videos" },
      { category: "Creator Playbook", title: "Text-to-Video Prompts That Actually Look Good", excerpt: "The prompt structure that gets clean, cinematic results.", readTime: "6 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/tt-prompts/cover.jpg", link: "/blog/text-to-video-prompts" },
      { category: "Creator Playbook", title: "Turn One Photo Into a Week of Short-Form Content", excerpt: "A batching workflow to multiply one image into many posts.", readTime: "5 min read", image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/blog/one-photo/cover.jpg", link: "/blog/one-photo-week-of-content" },
    ],
  },
  aliases: {
    title: "Other names",
    description: "People search for this effect in many ways. LazyKiwi groups these intents under one page.",
    terms: ["AI hug effect", "AI hug video", "hug video generator", "photo to hug video", "AI hugging effect", "reunion video AI", "make two photos hug", "AI embrace effect", "hug animation AI", "TikTok AI hug"],
  },
};
