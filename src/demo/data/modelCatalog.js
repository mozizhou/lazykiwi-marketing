export const modelCatalog = [
  { slug: "hailuo", name: "Hailuo AI", type: "Video", blurb: "MiniMax video model for realistic text-to-video generation.", href: "/models/hailuo" },
  { slug: "kling-1-6", name: "Kling 1.6", type: "Video", blurb: "Fast, controllable image-to-video and motion generation.", href: "/models/kling-1-6" },
  { slug: "wan-2-7", name: "Wan 2.7", type: "Video", blurb: "Alibaba video model for cinematic motion and prompt control.", href: "/models/wan-2-7" },
  { slug: "seedance-2", name: "Seedance 2.0", type: "Video", blurb: "ByteDance video generation for smooth, social-ready clips.", href: "/models/seedance-2" },
  { slug: "happy-horse", name: "Happy Horse", type: "Video", blurb: "Playful video model for expressive character and scene motion.", href: "/models/happy-horse" },
  { slug: "grok-2", name: "Grok 2", type: "Video", blurb: "xAI model for text and image driven video generation.", href: "/models/grok-2" },
  { slug: "veo-3", name: "Veo 3", type: "Video", blurb: "Google video generation for natural camera motion and believable scenes.", href: "/models/veo-3" },
  { slug: "seedream-5", name: "Seedream 5.0", type: "Image", blurb: "High-quality image generation and editing for clean creative output.", href: "/models/seedream-5" },
  { slug: "nano-banana", name: "Nano Banana", type: "Image", blurb: "Flexible image generation for fast concepting and stylized edits.", href: "/models/nano-banana" },
  { slug: "flux-1-schnell", name: "FLUX.1 Schnell", type: "Image", blurb: "Fast image generation with crisp detail and broad style coverage.", href: "/models/flux-1-schnell" },
  { slug: "gpt-image-2", name: "GPT Image 2", type: "Image", blurb: "Popular image model for prompt-driven generation and visual edits.", href: "/models/gpt-image-2" },
  { slug: "midjourney-blend", name: "Midjourney Blend", type: "Image", blurb: "Blend-style image generation for rich, stylized compositions.", href: "/models/midjourney-blend" },
  { slug: "wan-2-7-image", name: "Wan 2.7 Image", type: "Image", blurb: "Wan image model for prompt-driven visual generation.", href: "/models/wan-2-7-image" },
];

export const getModelCatalogItem = (slug) => modelCatalog.find((model) => model.slug === slug) || null;
