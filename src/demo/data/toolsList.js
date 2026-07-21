// Curated tool list — 8 core tools plus 6 footer-linked landings from tool-json/.
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
  {
    slug: "gender-swap",
    name: "Gender Swap",
    category: "filters",
    categoryLabel: "Fun Filters & Face Tests",
    blurb:
      "Upload one photo and see a realistic male or female version of yourself — a fun, shareable face transformation.",
    href: "/tools/gender-swap",
    image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/landings/tools/assets/img/gender-swap/hero-after.jpg",
  },
  {
    slug: "outfit-generator",
    name: "AI Outfit Generator",
    category: "img2img",
    categoryLabel: "Image to Image",
    blurb:
      "Preview new outfits on your own photo while keeping your face and pose — ideal for events, shoots, or shopping.",
    href: "/tools/outfit-generator",
    image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/landings/tools/assets/img/outfit-generator/hero-after.jpg",
  },
  {
    slug: "ai-photo-colorizer",
    name: "AI Photo Colorizer",
    category: "enhance",
    categoryLabel: "Enhance & Restore",
    blurb:
      "Bring natural color back to black-and-white or faded photos with one upload — great for family archives.",
    href: "/tools/ai-photo-colorizer",
    image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/landings/tools/assets/img/ai-photo-colorizer/hero-after.jpg",
  },
  {
    slug: "photo-to-sketch",
    name: "Photo to Sketch",
    category: "convert",
    categoryLabel: "Convert & Stylize",
    blurb:
      "Turn a portrait into a clean pencil or ink sketch while keeping likeness — perfect for gifts and profile art.",
    href: "/tools/photo-to-sketch",
    image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/landings/tools/assets/img/photo-to-sketch/hero-after.jpg",
  },
  {
    slug: "anime-avatar",
    name: "AI Anime Avatar",
    category: "convert",
    categoryLabel: "Convert & Stylize",
    blurb:
      "Convert your selfie into an anime-style avatar with expressive lines and color — ready for social profiles.",
    href: "/tools/anime-avatar",
    image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/landings/tools/assets/img/anime-avatar/hero-after.jpg",
  },
  {
    slug: "ai-age-filter",
    name: "AI Age Filter",
    category: "filters",
    categoryLabel: "Fun Filters & Face Tests",
    blurb:
      "See younger or older versions of yourself in seconds — a playful way to preview age transformations.",
    href: "/tools/ai-age-filter",
    image: "https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/landings/tools/assets/img/ai-age-filter/hero-after.jpg",
  },
];

/** Tools shown on /tools hub grid (first 8 core tools). */
export const hubTools = tools.slice(0, 8);
