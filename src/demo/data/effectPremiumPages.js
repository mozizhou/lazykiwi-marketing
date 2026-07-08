import { aiHugData } from './effects/ai-hug';
import { aiHeadshotData } from './effects/ai-headshot';

// Premium effect landing pages (rich layout via EffectPremiumPage).
// Separate from the legacy effect pages so existing effects are untouched.
export const effectPremiumPages = {
  'ai-hug': aiHugData,
  'ai-headshot': aiHeadshotData,
};

export const getEffectPremiumData = (slug) => effectPremiumPages[slug] || null;
