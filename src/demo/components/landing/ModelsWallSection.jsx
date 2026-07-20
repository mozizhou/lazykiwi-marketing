import { useEffect, useRef, useState } from 'react';
import { modelCountLabel } from '@/lib/seo/siteStats';

const MODEL_BRANDS = [
  { name: 'Seedance', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/seedance.png' },
  { name: 'FLUX', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/flux.png' },
  { name: 'GPT Image', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/gpt-image.png' },
  { name: 'Kling', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/kling.png' },
  { name: 'Google Veo', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/google-veo.png' },
  { name: 'Nano Banana', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/nano-banana.png' },
  { name: 'Minimax', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/minimax.png' },
  { name: 'Qwen Image', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/qwen-image.png' },
  { name: 'Seedream', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/seedream.png' },
  { name: 'Sora', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/sora.png' },
  { name: 'Grok Imagine', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/grok-imagine.png' },
  { name: 'Wan', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/wan.png' },
  { name: 'Luma', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/luma.png' },
  { name: 'Midjourney', logo: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/logo/processed/midjourney.png' },
];

function LogoWallItem({ brand, index }) {
  return (
    <div
      className="model-brand-item"
      style={{ transitionDelay: `${Math.min(index * 18, 160)}ms` }}
    >
      <img src={brand.logo} alt="" className="model-brand-logo" loading="lazy" />
      <span>{brand.name}</span>
    </div>
  );
}

export default function ModelsWallSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="models-wall-section">
      <div className="models-wall-inner">
        <div
          ref={sectionRef}
          className={`models-wall-content${visible ? ' is-visible' : ''}`}
        >
          <h2 className="lk-h2">
            {modelCountLabel} leading models.<br />
            <em>One subscription.</em>
          </h2>
          <p>
            From fast drafts to polished 4K — switch between the world's best image and video models from one clean workspace.
          </p>

          <div className="models-brand-wall" aria-label="Supported AI model brands">
            {MODEL_BRANDS.map((brand, index) => (
              <LogoWallItem key={brand.name} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .models-wall-section {
          width: 100%;
          padding: 110px 0 100px;
          overflow: hidden;
          background: transparent;
          border-top: 1px solid var(--lk-line);
        }

        .models-wall-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .models-wall-content {
          text-align: center;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 560ms ease, transform 560ms ease;
        }
        .models-wall-content.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .models-wall-content h2 {
          max-width: 820px;
          margin: 0 auto;
        }

        .models-wall-content p {
          max-width: 540px;
          margin: 22px auto 0;
          color: var(--lk-ink-soft);
          font-size: 16px;
          line-height: 1.65;
          font-weight: 400;
        }

        .models-brand-wall {
          width: min(100%, 1100px);
          margin: 64px auto 0;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: clamp(20px, 3.5vw, 52px);
          row-gap: clamp(28px, 4vw, 40px);
          align-items: center;
        }

        .model-brand-item {
          min-width: 0;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          transform: translateY(0);
          cursor: default;
        }

        .model-brand-logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
          object-position: center;
          opacity: 0.82;
          flex: 0 0 auto;
        }

        .model-brand-item span {
          min-width: 0;
          color: var(--lk-ink-soft);
          font-size: clamp(14px, 1.2vw, 17px);
          font-weight: 500;
          letter-spacing: -0.012em;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (min-width: 900px) {
          .models-brand-wall .model-brand-item:nth-child(11) {
            grid-column-start: 2;
          }
        }

        @media (max-width: 940px) {
          .models-brand-wall {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .models-wall-section {
            padding: 80px 0 76px;
          }

          .models-wall-inner {
            padding: 0 18px;
          }

          .models-brand-wall {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 18px;
            row-gap: 22px;
            margin-top: 44px;
          }

          .model-brand-item {
            height: 40px;
            gap: 10px;
          }

          .model-brand-logo {
            width: 26px;
            height: 26px;
          }

          .model-brand-item span {
            font-size: 14px;
          }
        }

        @media (max-width: 380px) {
          .models-brand-wall {
            grid-template-columns: 1fr;
            width: min(100%, 240px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .models-wall-content,
          .model-brand-item {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
