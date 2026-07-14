// Curated tool list — kept to the 8 supported tool pages.
export const toolCategories = [
  { key: "img2img", label: "Image to Image" },
  { key: "enhance", label: "Enhance & Restore" },
  { key: "convert", label: "Convert & Stylize" },
  { key: "filters", label: "Fun Filters & Face Tests" },
];

const TOOL_IMAGE_BASE = "https://lazykiwi.oss-accelerate.aliyuncs.com/tools";

export const tools = [
  {
    slug: "ai-hairstyle-changer",
    name: "AI Hairstyle Changer",
    category: "img2img",
    categoryLabel: "Image to Image",
    blurb:
      "Upload one selfie and try realistic hairstyles in seconds — short, long, curly, straight, and more — while keeping your face recognizable.",
    href: "/tools/ai-hairstyle-changer",
    image: `${TOOL_IMAGE_BASE}/ai-hairstyle-changer-white-bg.png`,
  },
  {
    slug: "hair-color-changer",
    name: "Hair Color Changer",
    category: "img2img",
    categoryLabel: "Image to Image",
    blurb:
      "Preview blonde, brunette, red, pastel, and bold hair colors on your own photo before you commit to a salon visit.",
    href: "/tools/hair-color-changer",
    image: `${TOOL_IMAGE_BASE}/hair-color-changer-white-bg.png`,
  },
  {
    slug: "photo-restoration",
    name: "Photo Restoration",
    category: "enhance",
    categoryLabel: "Enhance & Restore",
    blurb:
      "Repair scratches, fading, and blur in old family photos. LazyKiwi brings back detail and natural color in one upload.",
    href: "/tools/photo-restoration",
    image: `${TOOL_IMAGE_BASE}/photo-restoration-white-bg.png`,
  },
  {
    slug: "ai-photo-upscaler",
    name: "AI Photo Upscaler",
    category: "enhance",
    categoryLabel: "Enhance & Restore",
    blurb:
      "Upscale low-resolution images with sharper edges, cleaner textures, and less noise — ideal for prints and social posts.",
    href: "/tools/ai-photo-upscaler",
    image: `${TOOL_IMAGE_BASE}/ai-photo-upscaler-white-bg.png`,
  },
  {
    slug: "passport-photo-maker",
    name: "Passport Photo Maker",
    category: "convert",
    categoryLabel: "Convert & Stylize",
    blurb:
      "Turn a casual selfie into a clean, studio-style ID or passport photo with balanced lighting and a plain background.",
    href: "/tools/passport-photo-maker",
    image: `${TOOL_IMAGE_BASE}/passport-photo-maker-white-bg.png`,
  },
  {
    slug: "face-shape-detector",
    name: "Face Shape Detector",
    category: "filters",
    categoryLabel: "Fun Filters & Face Tests",
    blurb:
      "Upload a portrait and discover your face shape — oval, round, square, heart, and more — with styling tips to match.",
    href: "/tools/face-shape-detector",
    image: `${TOOL_IMAGE_BASE}/face-shape-detector-white-bg.png`,
  },
  {
    slug: "find-my-doppelganger",
    name: "Find My Doppelganger",
    category: "filters",
    categoryLabel: "Fun Filters & Face Tests",
    blurb:
      "See which celebrity or public figure you resemble most. One photo, instant lookalike matches powered by AI.",
    href: "/tools/find-my-doppelganger",
    image: `${TOOL_IMAGE_BASE}/find-my-doppelganger-white-bg.png`,
  },
  {
    slug: "eye-color-changer",
    name: "Eye Color Changer",
    category: "img2img",
    categoryLabel: "Image to Image",
    blurb:
      "Try blue, green, hazel, gray, and other eye colors on your portrait while keeping reflections and lighting natural.",
    href: "/tools/eye-color-changer",
    image: `${TOOL_IMAGE_BASE}/eye-color-changer-white-bg.png`,
  },
];
