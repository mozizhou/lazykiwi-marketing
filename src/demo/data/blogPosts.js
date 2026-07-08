import { scrollStoppingData } from './blog/scroll-stopping-ai-effect-videos';
import { textToVideoPromptsData } from './blog/text-to-video-prompts';
import { sora2VsVeo3Data } from './blog/sora-2-vs-veo-3';
import { onePhotoWeekData } from './blog/one-photo-week-of-content';

// Registry of all available blog SEO landing pages by slug
export const blogPosts = {
  'scroll-stopping-ai-effect-videos': scrollStoppingData,
  'text-to-video-prompts': textToVideoPromptsData,
  'sora-2-vs-veo-3': sora2VsVeo3Data,
  'one-photo-week-of-content': onePhotoWeekData,
};

export const getBlogData = (slug) => {
  return blogPosts[slug] || null;
};
