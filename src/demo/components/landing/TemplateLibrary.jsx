"use client";

import { useEffect, useRef, useState } from "react";
import { LANDING_VIDEO_TEMPLATES } from './landingTemplateShowcaseData.js';
import { IMAGE_TEMPLATES_VISIBLE } from '../workbench/imageGeneratorData.js';

const VIDEO_ITEMS = LANDING_VIDEO_TEMPLATES.map((t) => ({
  ...t,
  kind: 'video',
  page: 'video-generator',
  route: '/video-generator?mode=template',
}));

const IMAGE_ITEMS = IMAGE_TEMPLATES_VISIBLE.map((t) => ({
  ...t,
  kind: 'image',
  page: 'image-generator',
  route: '/image-generator?mode=template',
}));

const GENERATED_IMAGE_ASSETS = {
  'selfies-with-celebrities': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/selfies-with-celebrities.png',
  'ghibli-art-ai': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/ghibli-art-ai.png',
  'ai-action-figure-generator': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/ai-action-figure-generator.png',
  'polaroid-family-photo': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/polaroid-family-photo.png',
  'pixar-style-3d-animation-look': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/pixar-style-3d-animation-look.png',
  'beardless-filter': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/beardless-filter.png',
  'see-yourself-as-a-baby-ai': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/see-yourself-as-a-baby-ai.png',
  'ai-gta': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/ai-gta.png',
  'bylo-ai-age-filter': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/bylo-ai-age-filter.png',
};

const GENERATED_VIDEO_ASSETS = {
  'video-bullet-time': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/videos/bullet-time-sample.mp4',
  'video-earth-zoom-out': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/videos/earth-zoom-out.mp4',
  'video-seamless-transition': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/videos/seamless-transition.mp4',
  'video-rolling-motion': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/videos/rolling-motion.mp4',
  'video-360-rotation': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/videos/360-rotation.mp4',
  'video-flying-camera': 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/generated/landing-template-library/videos/flying-camera.mp4',
};

const byId = (items, id) => items.find((item) => item.id === id);
const landingImage = (id) => {
  const item = byId(IMAGE_ITEMS, id);
  return { ...item, fallbackImg: item.img, img: GENERATED_IMAGE_ASSETS[id] };
};
const landingVideo = (id) => {
  const item = byId(VIDEO_ITEMS, id);
  return { ...item, videoSrc: GENERATED_VIDEO_ASSETS[id] };
};

// Curated 15-tile bento: 6 motion templates and 9 image templates.
// Image assets are generated for their desktop slot ratios and displayed
// with object-fit: contain so the complete composition remains visible.
const ALL_ITEMS = [
  landingVideo('video-bullet-time'),
  landingImage('selfies-with-celebrities'),
  landingVideo('video-earth-zoom-out'),
  landingImage('ghibli-art-ai'),
  landingImage('ai-action-figure-generator'),
  landingVideo('video-rolling-motion'),
  landingImage('polaroid-family-photo'),
  landingVideo('video-seamless-transition'),
  landingImage('pixar-style-3d-animation-look'),
  landingImage('beardless-filter'),
  landingImage('see-yourself-as-a-baby-ai'),
  landingVideo('video-flying-camera'),
  landingImage('ai-gta'),
  landingVideo('video-360-rotation'),
  landingImage('bylo-ai-age-filter'),
];

/**
 * Bento layout — 6-col grid with row-spans.
 * Pattern repeats every 15 cells. Each entry: { c: cols, r: rows }
 *   s = 2×2  (square)
 *   w = 4×2  (wide)
 *   t = 2×4  (tall)
 *   b = 4×4  (hero)
 *
 * Pattern (rows 1–16, 6 cols):
 *   r1-2  : s s s
 *   r3-6  : b___ t
 *   r7-8  : w___ s
 *   r9-10 : s s s
 *   r11-14: t  b___
 *   r15-16: s s s
 */
const PATTERN = [
  { c: '1 / span 2',  r: '1 / span 2'  }, // 0  s
  { c: '3 / span 2',  r: '1 / span 2'  }, // 1  s
  { c: '5 / span 2',  r: '1 / span 2'  }, // 2  s
  { c: '1 / span 4',  r: '3 / span 4'  }, // 3  b
  { c: '5 / span 2',  r: '3 / span 4'  }, // 4  t
  { c: '1 / span 4',  r: '7 / span 2'  }, // 5  w
  { c: '5 / span 2',  r: '7 / span 2'  }, // 6  s
  { c: '1 / span 2',  r: '9 / span 2'  }, // 7  s
  { c: '3 / span 2',  r: '9 / span 2'  }, // 8  s
  { c: '5 / span 2',  r: '9 / span 2'  }, // 9  s
  { c: '1 / span 2',  r: '11 / span 4' }, // 10 t
  { c: '3 / span 4',  r: '11 / span 4' }, // 11 b
  { c: '1 / span 2',  r: '15 / span 2' }, // 12 s
  { c: '3 / span 2',  r: '15 / span 2' }, // 13 s
  { c: '5 / span 2',  r: '15 / span 2' }, // 14 s
];

function AutoplayVideo({ src, poster, label }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const tryPlay = () => {
      const promise = video.play();
      if (promise?.catch) {
        promise.catch(() => {});
      }
    };

    const onPlaying = () => setPlaying(true);
    const onPause = () => {
      if (video.readyState < 2) setPlaying(false);
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.preload = "auto";
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "120px 0px", threshold: 0.15 },
    );
    observer.observe(video);

    tryPlay();

    return () => {
      observer.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={playing ? undefined : poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
      />
      {!playing && poster ? (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="lk-tl-poster"
          draggable={false}
        />
      ) : null}
    </>
  );
}

export default function TemplateLibrary({ onNavigate }) {
  const handleSelect = (item) => {
    onNavigate(item.page, `${item.route}&template=${encodeURIComponent(item.id)}`);
  };

  return (
    <section className="lk-tl">
      <div className="lk-tl-inner">
        <header className="lk-tl-head">
          <h2 className="lk-h2 lk-tl-h2">Pick a template to start.</h2>
        </header>

        <div className="lk-tl-grid">
          {ALL_ITEMS.map((item, idx) => {
            const place = PATTERN[idx];
            return (
              <button
                key={`${item.kind}-${item.id}`}
                type="button"
                onClick={() => handleSelect(item)}
                className={`lk-tl-cell lk-tl-cell-${item.kind}`}
                style={place ? { gridColumn: place.c, gridRow: place.r } : undefined}
                aria-label={`Use ${item.name}`}
              >
                <span className="lk-tl-media">
                  {item.videoSrc ? (
                    <AutoplayVideo src={item.videoSrc} poster={item.img} label={item.name} />
                  ) : (
                    <img
                      src={item.img}
                      alt={item.name}
                      draggable={false}
                      onError={(event) => {
                        if (item.fallbackImg && event.currentTarget.src !== item.fallbackImg) {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = item.fallbackImg;
                        }
                      }}
                    />
                  )}
                </span>
                <span className="lk-tl-name">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .lk-tl {
          position: relative;
          padding: 120px 0 110px;
          background: transparent;
          border-top: 1px solid var(--lk-line);
        }
        .lk-tl-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .lk-tl-head { margin-bottom: 56px; }
        .lk-tl-h2 { margin: 0; }

        /* Base bento: 6 cols, row height matches col width so 2×2 = square */
        .lk-tl-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          grid-auto-rows: calc((min(100vw, 1280px) - 48px - 14px * 5) / 6);
          gap: 14px;
        }

        .lk-tl-cell {
          position: relative;
          padding: 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          overflow: hidden;
          border-radius: var(--lk-r-card);
          color: #fff;
          text-align: left;
          isolation: isolate;
        }

        .lk-tl-media {
          position: absolute; inset: 0;
          display: block;
          overflow: hidden;
        }
        .lk-tl-poster {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          pointer-events: none;
          z-index: 1;
        }
        .lk-tl-media::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg,
            rgba(14,17,22,0) 45%,
            rgba(14,17,22,0.6) 100%);
          pointer-events: none;
        }

        .lk-tl-cell img,
        .lk-tl-cell video {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .lk-tl-cell-image {
          background: #eef0f3;
        }
        .lk-tl-cell-image img {
          object-fit: contain;
        }
        .lk-tl-cell:hover img,
        .lk-tl-cell:hover video { transform: scale(1.05); }

        .lk-tl-name {
          position: absolute;
          left: 16px; right: 16px; bottom: 14px;
          z-index: 2;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.012em;
          color: #fff;
          text-transform: capitalize;
          text-shadow: 0 1px 6px rgba(0,0,0,0.35);
        }

        /* Tablet — 4 cols, simpler pattern: ignore explicit placement, dense flow */
        @media (max-width: 1024px) {
          .lk-tl-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-auto-rows: calc((min(100vw, 1024px) - 48px - 14px * 3) / 4);
            grid-auto-flow: dense;
          }
          .lk-tl-cell { grid-column: auto !important; grid-row: auto !important; }
          .lk-tl-cell:nth-child(7n + 1) { grid-column: span 2; grid-row: span 2; }
          .lk-tl-cell:nth-child(7n + 4) { grid-column: span 2; grid-row: span 1; }
        }

        /* Phone — 2 cols, uniform squares */
        @media (max-width: 640px) {
          .lk-tl { padding: 84px 0 80px; }
          .lk-tl-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: calc((min(100vw, 640px) - 48px - 12px) / 2);
            gap: 12px;
          }
          .lk-tl-cell:nth-child(7n + 1) { grid-column: span 2; grid-row: span 1; }
          .lk-tl-cell:nth-child(7n + 4) { grid-column: span 1; grid-row: span 1; }
          .lk-tl-head { margin-bottom: 32px; }
          .lk-tl-name { font-size: 13px; left: 12px; right: 12px; bottom: 11px; }
        }
      `}</style>
    </section>
  );
}
