// SINGLE SOURCE OF TRUTH for the official-site top navigation (mega-menus + hub links).
// Consumed by BOTH src/components/site/SiteHeader.jsx (SEO pages) and the homepage
// nav in src/pages/LandingPage.jsx, so the two never drift apart.
// Edit the menus HERE — not in those components.

export const siteNav = {
  Generator: [
    { title: "Video", items: [
      { label: "Video Generator", href: "/video-generator?mode=text" },
      { label: "Image to Video", href: "/video-generator?mode=image" },
      { label: "Start & End Frames", href: "/video-generator?mode=start-end" },
      { label: "Video Templates", href: "/video-generator?mode=template" },
    ] },
    { title: "Image", items: [
      { label: "Image Generator", href: "/image-generator?mode=text" },
      { label: "Image Templates", href: "/image-generator?mode=template" },
    ] },
  ],
  Tools: [
    { title: "Tools", items: [
      { label: "AI Hairstyle Changer", href: "/tools/ai-hairstyle-changer" },
      { label: "Hair Color Changer", href: "/tools/hair-color-changer" },
      { label: "Photo Restoration", href: "/tools/photo-restoration" },
      { label: "AI Photo Upscaler", href: "/tools/ai-photo-upscaler" },
    ] },
    { title: "More Tools", items: [
      { label: "Passport Photo Maker", href: "/tools/passport-photo-maker" },
      { label: "Face Shape Detector", href: "/tools/face-shape-detector" },
      { label: "Find My Doppelganger", href: "/tools/find-my-doppelganger" },
      { label: "Eye Color Changer", href: "/tools/eye-color-changer" },
    ] },
  ],
  Models: [
    { title: "Video Models", items: [
      { label: "Hailuo AI", href: "/models/hailuo" },
      { label: "Kling 1.6", href: "/models/kling-1-6" },
      { label: "Wan 2.7", href: "/models/wan-2-7" },
      { label: "Seedance 2.0", href: "/models/seedance-2" },
      { label: "Happy Horse", href: "/models/happy-horse" },
      { label: "Grok 2", href: "/models/grok-2" },
      { label: "Veo 3", href: "/models/veo-3" },
    ] },
    { title: "Image Models", items: [
      { label: "Seedream 5.0", href: "/models/seedream-5" },
      { label: "Nano Banana", href: "/models/nano-banana" },
      { label: "FLUX.1 Schnell", href: "/models/flux-1-schnell" },
      { label: "GPT Image 2", href: "/models/gpt-image-2" },
      { label: "Midjourney Blend", href: "/models/midjourney-blend" },
      { label: "Wan 2.7 Image", href: "/models/wan-2-7-image" },
    ] },
  ],
  Templates: [
    { title: "Video Templates", items: [
      { label: "Bullet Time", href: "/templates/bullet-time" },
      { label: "Earth Zoom Out", href: "/templates/earth-zoom-out" },
      { label: "Seamless Transition", href: "/templates/seamless-transition" },
      { label: "Crash Zoom", href: "/templates/crash-zoom" },
      { label: "Rolling Motion", href: "/templates/rolling-motion" },
      { label: "Zoom Out", href: "/templates/zoom-out" },
      { label: "Whip Pan", href: "/templates/whip-pan" },
      { label: "360 Rotation", href: "/templates/360-rotation" },
      { label: "Dolly In Zoom Out", href: "/templates/dolly-in-zoom-out" },
      { label: "Earth Wave", href: "/templates/earth-wave" },
    ] },
    { title: "Image Templates", items: [
      { label: "Selfies with Celebrities", href: "/templates/selfies-with-celebrities" },
      { label: "Ghibli Art AI", href: "/templates/ghibli-art-ai" },
      { label: "Chubby Filter", href: "/templates/chubby-filter" },
      { label: "Polaroid Family Photo", href: "/templates/polaroid-family-photo" },
      { label: "AI Action Figure Generator", href: "/templates/ai-action-figure-generator" },
      { label: "Pixar AI Generator Free", href: "/templates/pixar-ai-generator-free" },
      { label: "Pregnant AI Generator", href: "/templates/pregnant-ai-generator" },
      { label: "Simpsons AI", href: "/templates/simpsons-ai" },
      { label: "One Piece Group Photo", href: "/templates/one-piece-group-photo" },
      { label: "Minecraft Filter", href: "/templates/minecraft-filter" },
      { label: "AI GTA", href: "/templates/ai-gta" },
    ] },
  ],
  Blog: [
    { title: "Latest", items: [
      { label: "Make Scroll-Stopping AI Videos", href: "/blog/scroll-stopping-ai-effect-videos" },
      { label: "Text-to-Video Prompts", href: "/blog/text-to-video-prompts" },
      { label: "Sora 2 vs. Veo 3", href: "/blog/sora-2-vs-veo-3" },
      { label: "One Photo, a Week of Content", href: "/blog/one-photo-week-of-content" },
    ] },
  ],
};

// Top-level label → hub page (clicking the label itself goes here).
export const siteNavHubs = {
  Generator: "/video-generator",
  Tools: "/tools",
  Models: "/models",
  Templates: "/templates",
  Blog: "/blog",
  Pricing: "/pricing",
};

// Order of the top-level nav links.
export const siteNavOrder = ["Generator", "Tools", "Models", "Templates", "Pricing", "Blog"];

// Homepage footer columns — keep in sync with marketing routes.
export const footerNav = [
  {
    title: "Product",
    items: [
      { label: "Video Generator", href: "/video-generator" },
      { label: "Image Generator", href: "/image-generator" },
      { label: "Templates", href: "/templates" },
      { label: "Models", href: "/models" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund", href: "/refund" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:hello@lazykiwi.ai" },
    ],
  },
];
