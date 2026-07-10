import { appUrl } from '@/lib/routes';

const IMAGE_MODEL_SLUGS = new Set([
  'seedream-5',
  'nano-banana',
  'flux-1-schnell',
  'gpt-image-2',
  'midjourney-blend',
  'wan-2-7-image',
]);

const MODEL_LINK_ALIASES = {
  'flux-schnell': 'flux-1-schnell',
  'wan-2-7-image-pro': 'wan-2-7-image',
};

function extractModelSlug(value) {
  if (!value) return '';
  if (typeof value !== 'string') return value.slug || value.id || '';
  const rawValue = value.trim();
  if (!rawValue) return '';

  if (rawValue.includes('?')) {
    const [, query = ''] = rawValue.split('?');
    return new URLSearchParams(query).get('model') || '';
  }

  if (rawValue.startsWith('/models/')) {
    return rawValue.split('/').filter(Boolean).pop() || '';
  }

  if (rawValue.startsWith('/')) return '';
  return rawValue.replace(/^\/+|\/+$/g, '');
}

export function getModelGeneratorHref(value, fallbackType = 'Video') {
  const rawSlug = extractModelSlug(value);
  const slug = MODEL_LINK_ALIASES[rawSlug] || rawSlug;

  if (!slug && typeof value === 'string' && value) return value;

  const isImageModel = fallbackType === 'Image' || IMAGE_MODEL_SLUGS.has(slug);
  const base = isImageModel ? '/app/image-generator' : '/app/video-generator';
  const params = new URLSearchParams({ mode: 'text' });
  if (slug) params.set('model', slug);
  return `${appUrl(base)}?${params.toString()}`;
}
