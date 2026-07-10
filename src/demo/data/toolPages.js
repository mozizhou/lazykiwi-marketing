// AUTO-GENERATED — rich tool landing data (issue #39). Do not edit by hand.

import t0 from './tool-json/gender-swap.json';
import t1 from './tool-json/outfit-generator.json';
import t2 from './tool-json/ai-photo-colorizer.json';
import t3 from './tool-json/photo-to-sketch.json';
import t4 from './tool-json/anime-avatar.json';
import t5 from './tool-json/buzz-cut-filter.json';
import t6 from './tool-json/bald-filter.json';
import t7 from './tool-json/ai-age-filter.json';

export const toolPages = {
  "gender-swap": t0,
  "outfit-generator": t1,
  "ai-photo-colorizer": t2,
  "photo-to-sketch": t3,
  "anime-avatar": t4,
  "buzz-cut-filter": t5,
  "bald-filter": t6,
  "ai-age-filter": t7,
};

export const getToolPage = (slug) => toolPages[slug] || null;
