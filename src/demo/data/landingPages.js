import { bulletTimeData } from './effects/bullet-time';
import { explosionData } from './effects/explosion';
import { moneyRainData } from './effects/money-rain';
import { wingsAngelData } from './effects/wings-angel';
import { disintegrationData } from './effects/disintegration';

// Registry of all available effect landing pages by slug
export const effectPages = {
  'bullet-time': bulletTimeData,
  'explosion': explosionData,
  'money-rain': moneyRainData,
  'wings-angel': wingsAngelData,
  'disintegration': disintegrationData,
};

export const getEffectData = (slug) => {
  return effectPages[slug] || null;
};
