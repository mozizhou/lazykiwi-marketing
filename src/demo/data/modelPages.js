import { sora2Data } from './models/sora-2';
import { getModelGeneratorHref } from '../utils/modelGeneratorLink';
import flux1SchnellData from './model-json/flux-1-schnell.json';
import gptImage2Data from './model-json/gpt-image-2.json';
import grok2Data from './model-json/grok-2.json';
import hailuoData from './model-json/hailuo.json';
import happyHorseData from './model-json/happy-horse.json';
import kling16Data from './model-json/kling-1-6.json';
import midjourneyBlendData from './model-json/midjourney-blend.json';
import nanoBananaData from './model-json/nano-banana.json';
import seedance2Data from './model-json/seedance-2.json';
import seedream5Data from './model-json/seedream-5.json';
import veo3Data from './model-json/veo-3.json';
import wan27ImageData from './model-json/wan-2-7-image.json';
import wan27Data from './model-json/wan-2-7.json';

function normalizeModelPage(data) {
  if (!data) return data;
  const type = data.parentFeature === 'image-generator' ? 'Image' : 'Video';
  const generatorHref = getModelGeneratorHref(data.slug, type);
  const primaryCta = data.hero?.primaryCta || data.steps?.cta || data.showcase?.cta || {
    label: `Try ${data.hero?.name || data.slug} free`,
    link: generatorHref,
  };

  return {
    ...data,
    hero: {
      ...data.hero,
      primaryCta,
      secondaryCta: data.hero?.secondaryCta || null,
      media: {
        ...data.hero?.media,
        meta: data.hero?.media?.meta || `${type} model`,
      },
      trust: data.hero?.trust || null,
    },
    bottomCta: data.bottomCta ? {
      ...data.bottomCta,
      buttonText: data.bottomCta.buttonText || primaryCta.label,
      buttonLink: data.bottomCta.buttonLink || primaryCta.link || generatorHref,
    } : data.bottomCta,
  };
}

// Registry of all available model SEO landing pages by slug
const rawModelPages = {
  'sora-2': sora2Data,
  'veo-3': veo3Data,
  'hailuo': hailuoData,
  'kling-1-6': kling16Data,
  'wan-2-7': wan27Data,
  'seedance-2': seedance2Data,
  'happy-horse': happyHorseData,
  'grok-2': grok2Data,
  'seedream-5': seedream5Data,
  'nano-banana': nanoBananaData,
  'flux-1-schnell': flux1SchnellData,
  'gpt-image-2': gptImage2Data,
  'midjourney-blend': midjourneyBlendData,
  'wan-2-7-image': wan27ImageData,
};

export const modelPages = Object.fromEntries(
  Object.entries(rawModelPages).map(([slug, data]) => [slug, normalizeModelPage(data)])
);

export const getModelData = (slug) => {
  return modelPages[slug] || null;
};
