/**
 * StartAnythingSection — editorial mode grid.
 * Six tiles, one click target each. No dual CTAs.
 */

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const MODES = [
  {
    id: 'text-to-video',
    title: 'Text to Video',
    desc: 'Type an idea. Watch it become a video.',
    page: 'video-generator',
    route: '/video-generator?mode=text',
    video: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/start-anything/text-to-video.mp4',
    img: null,
  },
  {
    id: 'image-to-video',
    title: 'Image to Video',
    desc: 'Upload a photo. Make it come alive.',
    page: 'video-generator',
    route: '/video-generator?mode=image',
    video: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/start-anything/image-to-video.mp4',
    img: null,
  },
  {
    id: 'start-end',
    title: 'Start & End Frames',
    desc: 'Give two moments. Get the motion between them.',
    page: 'video-generator',
    route: '/video-generator?mode=start-end',
    video: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/start-anything/start-end-frames.mp4',
    img: null,
  },
  {
    id: 'text-to-image',
    title: 'Text to Image',
    desc: 'Describe it. See it appear instantly.',
    page: 'image-generator',
    route: '/image-generator?mode=text',
    video: null,
    img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/start-anything/text to image.jpg',
  },
  {
    id: 'video-templates',
    title: 'Video Templates',
    desc: 'Pick an effect. Upload a clip. Done.',
    page: 'video-generator',
    route: '/video-generator?mode=template',
    video: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/start-anything/video templates.mp4',
    img: null,
  },
  {
    id: 'image-templates',
    title: 'Image Templates',
    desc: 'Apply fun AI templates in one tap.',
    page: 'image-generator',
    route: '/image-generator?mode=template&template=selfies-with-celebrities',
    video: null,
    img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/presets/image-templates/selfies-with-celebrities.png',
  },
];

export default function StartAnythingSection({ onNavigate }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="lk-start-section"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div className="lk-start-inner">
        <header className="lk-start-header">
          <h2 className="lk-h2 lk-start-h2">
            One canvas.<br />
            <em>Six ways</em> to begin.
          </h2>
          <p className="lk-start-lead">
            Type an idea, upload a photo, pick a template, or connect two frames. LazyKiwi turns any input into a video.
          </p>
        </header>

        <ul className="lk-mode-grid">
          {MODES.map((mode, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <li key={mode.id} className="lk-mode-cell">
                <button
                  type="button"
                  onClick={() => onNavigate(mode.page, mode.route)}
                  className="lk-mode-tile"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(18px)',
                    transition: `opacity 0.6s ease ${idx * 70 + 120}ms, transform 0.6s ease ${idx * 70 + 120}ms`,
                  }}
                >
                  <div className="lk-mode-tile-media">
                    {mode.video ? (
                      <video src={mode.video} autoPlay muted playsInline loop className="lk-mode-tile-asset" />
                    ) : (
                      <img src={mode.img} alt={mode.title} className="lk-mode-tile-asset" />
                    )}
                    <span className="lk-mode-tile-veil" aria-hidden />
                  </div>

                  <div className="lk-mode-tile-body">
                    <span className="lk-mode-tile-num">{num}</span>
                    <div className="lk-mode-tile-text">
                      <h3 className="lk-mode-tile-title">{mode.title}</h3>
                      <p className="lk-mode-tile-desc">{mode.desc}</p>
                    </div>
                    <ArrowUpRight size={18} strokeWidth={2} className="lk-mode-tile-arrow" />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .lk-start-section {
          width: 100%;
          padding: 140px 0 120px;
          background: transparent;
        }
        .lk-start-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .lk-start-header { max-width: 680px; margin: 0 0 64px; }
        .lk-start-h2 { margin: 0 0 22px; }
        .lk-start-lead {
          margin: 0;
          font-size: 17px;
          line-height: 1.6;
          color: var(--lk-ink-soft);
          max-width: 540px;
        }

        .lk-mode-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 40px 28px;
        }
        .lk-mode-cell { min-width: 0; }

        .lk-mode-tile {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          text-align: left;
          color: var(--lk-ink);
          font: inherit;
        }

        .lk-mode-tile-media {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: var(--lk-r-card);
          overflow: hidden;
          background: #0E1116;
          margin-bottom: 20px;
          isolation: isolate;
          box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset;
        }
        .lk-mode-tile-asset {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
        }
        .lk-mode-tile:hover .lk-mode-tile-asset { transform: scale(1.045); }

        .lk-mode-tile-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(14,17,22,0.42) 0%, transparent 38%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .lk-mode-tile:hover .lk-mode-tile-veil { opacity: 1; }

        .lk-mode-tile-body {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 16px;
          align-items: start;
          padding: 0 2px;
        }
        .lk-mode-tile-num {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--lk-ink-mute);
          font-feature-settings: 'tnum';
          padding-top: 5px;
          transition: color 0.3s ease;
        }
        .lk-mode-tile:hover .lk-mode-tile-num { color: var(--lk-accent); }

        .lk-mode-tile-text { min-width: 0; }
        .lk-mode-tile-title {
          margin: 0 0 4px;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.018em;
          line-height: 1.3;
          color: var(--lk-ink);
        }
        .lk-mode-tile-desc {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--lk-ink-soft);
        }

        .lk-mode-tile-arrow {
          color: var(--lk-ink-mute);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .lk-mode-tile:hover .lk-mode-tile-arrow {
          color: var(--lk-accent);
          transform: translate(3px, -3px);
        }

        @media (max-width: 1024px) {
          .lk-mode-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 36px 24px; }
        }
        @media (max-width: 640px) {
          .lk-start-section { padding: 96px 0 90px; }
          .lk-mode-grid { grid-template-columns: 1fr; gap: 32px; }
          .lk-mode-tile-media { aspect-ratio: 16/10; }
        }
      `}</style>
    </section>
  );
}
