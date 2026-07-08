/**
 * TemplateSliderSection
 *
 * Infinite draggable horizontal slider.
 * Inspired by the templates-infinite-slider demo, but implemented with pure
 * React + Pointer Events (no GSAP/Draggable dependency needed).
 *
 * Features:
 *  - Auto-scrolling ticker that pauses on hover/drag
 *  - Drag / swipe to scrub
 *  - Momentum / inertia after drag release
 *  - Infinite loop via duplicated items
 *  - Hover scale + shadow on individual cards
 */

import { useRef, useEffect, useCallback, useState } from 'react';

// ─── Video Template Cards ─────────────────────────────────────────────────────
const VIDEO_TEMPLATES = [
  { name: 'Bullet Time',        img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/bullet time.png' },
  { name: 'Earth Zoom Out',     img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/earth zoom out.png' },
  { name: 'Seamless Transition',img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/seamless transition.png' },
  { name: 'Crash Zoom',         img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/crash zoom.png' },
  { name: 'Rolling Motion',     img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/rolling motion.png' },
  { name: 'Zoom Out',           img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/zoom out.png' },
  { name: 'Whip Pan',           img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/whip pan.png' },
  { name: '360 Rotation',       img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/360 rotation.png' },
  { name: 'Flying Camera',      img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/flying cam transition.png' },
  { name: 'Money Rain',         img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-videoeffects/money rain.png' },
  { name: 'Explosion',          img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-videoeffects/explosion.png' },
  { name: 'Disintegration',     img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-videoeffects/disintegration.png' },
];

// ─── Image Template Cards ─────────────────────────────────────────────────────
const IMAGE_TEMPLATES = [
  { name: 'X-Ray Image',        img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-photoeffects/x-ray.png' },
  { name: 'Dirty Lens',         img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-photoeffects/dirty lens.png' },
  { name: 'Metallic Filter',    img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-photoeffects/metallic filter.png' },
  { name: 'Meme Generator',     img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/04-meme-generator.png' },
  { name: 'Face Swap',          img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/07-face-swap.png' },
  { name: 'Character Swap',     img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/08-character-swap.png' },
  { name: 'Avatar Talking',     img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/05-avatar-talking.png' },
  { name: 'Background Remover', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/06-photo-effects.png' },
];

// ─── Draggable Ticker Hook ─────────────────────────────────────────────────────
function useDraggableTicker({ speed = 0.6, paused = false } = {}) {
  const trackRef = useRef(null);
  const posRef   = useRef(0);
  const velRef   = useRef(0);
  const dragRef  = useRef({ active: false, startX: 0, startPos: 0, lastX: 0, lastT: 0 });
  const pauseRef = useRef(paused);
  const rafId    = useRef(null);

  useEffect(() => { pauseRef.current = paused; }, [paused]);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = performance.now();

    const tick = (now) => {
      rafId.current = requestAnimationFrame(tick);
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      const half = getHalfWidth();
      if (!half) return;

      if (!dragRef.current.active) {
        if (!pauseRef.current) {
          velRef.current = speed;
        }
        // Apply friction when not auto-scrolling
        velRef.current *= 0.92;
        posRef.current -= velRef.current * (pauseRef.current ? 1 : 0) + (pauseRef.current ? 0 : speed);
      } else {
        posRef.current -= velRef.current;
        velRef.current *= 0.9;
      }

      // Infinite loop: reset when first copy scrolled past
      if (Math.abs(posRef.current) >= half) {
        posRef.current += half * Math.sign(posRef.current) * -1;
        if (posRef.current > 0) posRef.current = 0;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [speed, getHalfWidth]);

  // Pointer events
  const onPointerDown = useCallback((e) => {
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current, lastX: e.clientX, lastT: performance.now() };
    velRef.current = 0;
    track.style.cursor = 'grabbing';
    track.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dt = performance.now() - dragRef.current.lastT;
    velRef.current = -dx / Math.max(dt, 1) * 14;
    posRef.current += dx;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastT = performance.now();
  }, []);

  const onPointerUp = useCallback((e) => {
    const track = trackRef.current;
    dragRef.current.active = false;
    if (track) track.style.cursor = 'grab';
  }, []);

  return { trackRef, onPointerDown, onPointerMove, onPointerUp };
}

// ─── Single Slider ─────────────────────────────────────────────────────────────
function InfiniteSlider({ items, onCardClick, accentColor = '#16A34A', speedMultiplier = 1 }) {
  const [hoveredSlider, setHoveredSlider] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const { trackRef, onPointerDown, onPointerMove, onPointerUp } = useDraggableTicker({
    speed: 0.6 * speedMultiplier,
    paused: hoveredSlider,
  });

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      style={{ overflow: 'hidden', cursor: 'grab', userSelect: 'none', paddingBottom: 4 }}
      onMouseEnter={() => setHoveredSlider(true)}
      onMouseLeave={() => setHoveredSlider(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: 20,
          willChange: 'transform',
          alignItems: 'center',
        }}
      >
        {doubled.map((item, idx) => {
          const isHovered = hoveredCard === idx;
          return (
            <div
              key={idx}
              onClick={() => onCardClick && onCardClick(item)}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flexShrink: 0,
                width: 320, // Enlarged from 230 to 320
                borderRadius: 24,
                overflow: 'hidden',
                background: 'white',
                boxShadow: isHovered
                  ? `0 20px 40px -8px rgba(0,0,0,0.15), 0 0 0 3px ${accentColor}66`
                  : '0 4px 16px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)',
                transform: isHovered ? 'scale(1.03) translateY(-6px)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', paddingBottom: '70%', background: '#F0FDF4', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  draggable={false}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.4s ease',
                    pointerEvents: 'none',
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              {/* Label */}
              <div style={{ padding: '16px 20px 18px' }}>
                <p style={{
                  margin: 0,
                  fontSize: 16, // Enlarged from 13 to 16
                  fontWeight: 700,
                  color: isHovered ? accentColor : '#1F2937',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Section Component ─────────────────────────────────────────────────────────
function SliderSection({ label, title, subtitle, items, onCardClick, bg, accentColor, speedMultiplier = 1 }) {
  return (
    <section style={{ width: '100%', background: bg, padding: '72px 0 64px' }}>
      {/* Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', marginBottom: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
          <div style={{
            display: 'inline-flex',
            background: `${accentColor}12`,
            border: `1px solid ${accentColor}2A`,
            borderRadius: 999,
            padding: '4px 13px',
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: accentColor, textTransform: 'uppercase' }}>
              {label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            margin: 0,
            maxWidth: 520,
          }}>
            {title}
          </h2>
          <p style={{ fontSize: 16, color: '#64748B', margin: 0, maxWidth: 480, lineHeight: 1.65 }}>
            {subtitle}
          </p>
        </div>
      </div>
      {/* Slider — full bleed */}
      <InfiniteSlider
        items={items}
        onCardClick={onCardClick}
        accentColor={accentColor}
        speedMultiplier={speedMultiplier}
      />
    </section>
  );
}

// ─── Exports ───────────────────────────────────────────────────────────────────
export function VideoTemplatesSection({ onNavigate }) {
  return (
    <SliderSection
      label="VIDEO TEMPLATES"
      title="Make videos that feel impossible."
      subtitle="Pick a playful effect and turn a simple upload into something scroll-stopping."
      items={VIDEO_TEMPLATES}
      onCardClick={() => onNavigate('video-generator', '/video-generator?mode=template')}
      bg="linear-gradient(180deg, #FFFFFF 0%, #F0FFF4 100%)"
      accentColor="#16A34A"
    />
  );
}

export function ImageTemplatesSection({ onNavigate }) {
  return (
    <SliderSection
      label="IMAGE TEMPLATES"
      title="Turn photos into something ridiculous."
      subtitle="Try quick image effects for memes, portraits, filters, edits, and fun transformations."
      items={IMAGE_TEMPLATES}
      onCardClick={() => onNavigate('image-generator', '/image-generator?mode=template')}
      bg="linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%)"
      accentColor="#E11D48"
      speedMultiplier={1.1} // slightly faster instead of reversed, to prevent empty space bugs
    />
  );
}
