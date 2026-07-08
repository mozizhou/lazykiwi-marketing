/**
 * IdeasSection + FinalCTASection — refined editorial.
 */

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const IDEAS = Object.entries(blogPosts).slice(0, 4).map(([slug, post]) => ({
  id: slug,
  slug,
  title: post.header?.title || post.seo?.title?.split('|')[0]?.trim() || 'LazyKiwi blog',
  summary: post.header?.excerpt || post.seo?.description || '',
  readTime: post.header?.readTime || '',
}));

function IdeaCard({ idea, index, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <button
      type="button"
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate?.('blog-landing', `/blog/${idea.slug}`)}
      className="lk-idea-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms, border-color 0.2s ease`,
      }}
    >
      <h3 className="lk-idea-title">{idea.title}</h3>
      <p className="lk-idea-summary">{idea.summary}</p>
      <div className="lk-idea-foot">
        <span>Read more</span>
        <ArrowUpRight size={15} strokeWidth={2} className="lk-idea-arrow" style={{ transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)' }} />
      </div>
    </button>
  );
}

export function IdeasSection({ onNavigate }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="lk-ideas">
      <div className="lk-ideas-inner">
        <header
          ref={headerRef}
          className="lk-ideas-header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div>
            <h2 className="lk-h2">Fresh ideas for<br /><em>your next AI creation.</em></h2>
          </div>
        </header>

        <div className="lk-ideas-grid">
          {IDEAS.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      <style>{`
        .lk-ideas {
          width: 100%;
          padding: 110px 0 90px;
          background: transparent;
          border-top: 1px solid var(--lk-line);
        }
        .lk-ideas-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .lk-ideas-header {
          display: flex; align-items: end; justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .lk-ideas-header h2 { margin: 0; }

        .lk-ideas-all {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 18px;
          font-size: 13.5px; font-weight: 600;
          background: transparent;
          color: var(--lk-ink);
          border: 1px solid var(--lk-line-strong);
          border-radius: var(--lk-r-pill);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          letter-spacing: -0.005em;
        }
        .lk-ideas-all:hover {
          background: var(--lk-ink);
          color: #fff;
          border-color: var(--lk-ink);
          transform: translateY(-1px);
        }

        .lk-ideas-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          background: var(--lk-line);
          border: 1px solid var(--lk-line);
          border-radius: var(--lk-r-card);
          overflow: hidden;
        }

        .lk-idea-card {
          background: #fff;
          padding: 28px 28px 26px;
          cursor: pointer;
          border: 0;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-height: 230px;
          transition: background 0.2s ease;
        }
        .lk-idea-card:hover { background: rgba(14,17,22,0.025); }
        .lk-idea-card:focus-visible {
          outline: 2px solid var(--lk-accent);
          outline-offset: -2px;
        }

        .lk-idea-meta {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase;
        }
        .lk-idea-tag { color: var(--lk-accent); }
        .lk-idea-time { color: var(--lk-ink-mute); }

        .lk-idea-title {
          margin: 0;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: -0.018em;
          color: var(--lk-ink);
        }
        .lk-idea-summary {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: var(--lk-ink-soft);
          flex: 1;
        }
        .lk-idea-foot {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: var(--lk-ink);
          letter-spacing: -0.005em;
        }
        .lk-idea-arrow { transition: transform 0.25s ease; }

        @media (max-width: 640px) {
          .lk-ideas { padding: 80px 0; }
          .lk-ideas-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

// ─── Community / social placeholder ──────────────────────────────────────────
const SOCIAL_PLATFORMS = [
  {
    label: 'Discord',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M19.5 5.35A16.3 16.3 0 0 0 15.46 4l-.5 1.02a15.35 15.35 0 0 0-5.91 0L8.54 4A16.36 16.36 0 0 0 4.5 5.36C1.95 9.1 1.26 12.76 1.6 16.37a16.6 16.6 0 0 0 4.96 2.5l1.2-1.64a10.8 10.8 0 0 1-1.88-.91l.46-.36a11.72 11.72 0 0 0 11.32 0l.46.36c-.6.35-1.23.66-1.88.91l1.2 1.64a16.57 16.57 0 0 0 4.96-2.5c.4-4.18-.68-7.8-2.9-11.02ZM8.47 14.17c-1.1 0-2-1-2-2.22s.88-2.22 2-2.22c1.13 0 2.02 1.01 2 2.22 0 1.22-.88 2.22-2 2.22Zm7.06 0c-1.1 0-2-1-2-2.22s.88-2.22 2-2.22c1.13 0 2.02 1.01 2 2.22 0 1.22-.87 2.22-2 2.22Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.48 22H3.36l7.26-8.3L1.2 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L6.66 4.05H4.8L17.8 19.84Z" /></svg>,
  },
  {
    label: 'YouTube',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3 3 0 0 0 2.12-2.14C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" /></svg>,
  },
  {
    label: 'Instagram',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.2" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2.2" /><circle cx="17.4" cy="6.7" r="1.2" fill="currentColor" /></svg>,
  },
  {
    label: 'TikTok',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.6 6.7a4.84 4.84 0 0 1-3.78-4.26V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.76V9.4a6.85 6.85 0 1 0 5.49 6.27v-7a8.15 8.15 0 0 0 4.77 1.52V6.8c-.36 0-.7-.04-1.03-.1Z" /></svg>,
  },
];

export function CommunitySection() {
  return (
    <section className="lk-community">
      <div className="lk-community-inner">
        <div className="lk-community-card">
          <p className="lk-community-kicker">Stay close to the creative side of LazyKiwi.</p>
          <h2>
            See what&apos;s next.<br />
            Join our community of creators.
          </h2>
          <div className="lk-community-socials" aria-label="LazyKiwi social channels">
            {SOCIAL_PLATFORMS.map((platform) => (
              <button
                key={platform.label}
                type="button"
                className="lk-community-social"
                aria-label={`${platform.label} — coming soon`}
                title={`${platform.label} — coming soon`}
              >
                {platform.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .lk-community {
          width: 100%;
          padding: 24px 0 48px;
          background: transparent;
        }
        .lk-community-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .lk-community-card {
          min-height: 370px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(40px, 6vw, 76px);
          color: var(--lk-ink);
          background: transparent;
          overflow: hidden;
        }
        .lk-community-kicker {
          margin: 0 0 16px;
          color: var(--lk-ink-mute);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .lk-community-card h2 {
          max-width: 980px;
          margin: 0;
          color: var(--lk-ink);
          font-family: var(--lk-display);
          font-size: clamp(36px, 5.2vw, 68px);
          font-weight: 430;
          line-height: 1.08;
          letter-spacing: -0.045em;
        }
        .lk-community-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: clamp(38px, 5vw, 64px);
        }
        .lk-community-social {
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          color: var(--lk-ink);
          background: transparent;
          border: 1px solid var(--lk-line-strong);
          border-radius: 12px;
          cursor: default;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .lk-community-social:hover {
          background: rgba(14,17,22,0.04);
          border-color: var(--lk-ink);
        }
        .lk-community-social svg {
          width: 31px;
          height: 31px;
        }
        @media (max-width: 640px) {
          .lk-community { padding-bottom: 32px; }
          .lk-community-card { min-height: 330px; padding: 34px 24px; }
          .lk-community-social { width: 58px; height: 58px; }
          .lk-community-social svg { width: 26px; height: 26px; }
        }
      `}</style>
    </section>
  );
}

// ─── Final CTA ─────────────────────────────────────────────────────────────────
const CTA_VIDEOS = [
  'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/ready-to-make-something-fun/extra-video-02.mp4',
  'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/ready-to-make-something-fun/extra-video-03.mp4',
];

export function FinalCTASection({ onCreateNow }) {
  const [visible, setVisible] = useState(false);
  const [ctaVidIdx, setCtaVidIdx] = useState(0);
  const [ctaFading, setCtaFading] = useState(false);
  const ctaFadeTimer = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(ctaFadeTimer.current), []);

  const handleCtaVideoEnded = () => {
    if (ctaFading) return;
    setCtaFading(true);
    ctaFadeTimer.current = setTimeout(() => {
      setCtaVidIdx(i => (i + 1) % CTA_VIDEOS.length);
      setCtaFading(false);
    }, 600);
  };

  return (
    <section className="lk-final">
      <div className="lk-final-inner">
        <div
          ref={ref}
          className="lk-final-card"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <video
            key={`cta-cur-${ctaVidIdx}`}
            src={CTA_VIDEOS[ctaVidIdx]}
            autoPlay muted playsInline
            onEnded={handleCtaVideoEnded}
            className="lk-final-video"
            style={{ opacity: ctaFading ? 0 : 1, zIndex: 0 }}
          />
          <video
            key={`cta-nxt-${(ctaVidIdx + 1) % CTA_VIDEOS.length}`}
            src={CTA_VIDEOS[(ctaVidIdx + 1) % CTA_VIDEOS.length]}
            autoPlay muted playsInline
            className="lk-final-video"
            style={{ opacity: ctaFading ? 1 : 0, zIndex: 1 }}
          />

          {/* Single dark veil — no rainbow gradient stack */}
          <div className="lk-final-veil" aria-hidden />

          <div className="lk-final-content">
            <h2 className="lk-h2 lk-final-h2">
              Ready to make<br />
              <em>something fun?</em>
            </h2>
            <button onClick={onCreateNow} className="lk-final-cta">
              Start creating
              <ArrowRight size={16} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .lk-final {
          width: 100%;
          padding: 24px 0 110px;
          background: transparent;
        }
        .lk-final-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        .lk-final-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--lk-r-card);
          padding: clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px);
          text-align: center;
          isolation: isolate;
        }
        .lk-final-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: opacity 0.6s ease;
        }
        .lk-final-veil {
          position: absolute; inset: 0; z-index: 2;
          background:
            linear-gradient(180deg, rgba(14,17,22,0.45) 0%, rgba(14,17,22,0.65) 70%, rgba(14,17,22,0.78) 100%);
        }
        .lk-final-content { position: relative; z-index: 3; color: #fff; }
        .lk-final-eyebrow {
          color: rgba(255,255,255,0.65) !important;
          margin-bottom: 22px;
          justify-content: center;
        }
        .lk-final-eyebrow::before { background: rgba(255,255,255,0.4) !important; }
        .lk-final-h2,
        .landing-brand-scope .lk-final-h2 {
          margin: 0 0 18px;
          color: #fff !important;
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 340;
          line-height: 0.96;
        }
        .lk-final-h2 em,
        .landing-brand-scope .lk-final-h2 em { color: #fff !important; }
        .lk-final-lead {
          margin: 0 0 36px;
          font-size: 18px;
          color: rgba(255,255,255,0.78);
          line-height: 1.55;
        }
        .lk-final-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 16px 32px;
          font-size: 15px; font-weight: 600;
          color: var(--lk-ink); background: #fff;
          border: 0; border-radius: var(--lk-r-pill);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          letter-spacing: -0.01em;
          box-shadow: 0 14px 40px -12px rgba(0,0,0,0.4);
        }
        .lk-final-cta:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 18px 48px -12px rgba(0,0,0,0.5);
          background: var(--lk-amber);
        }
        .lk-final-fineprint {
          margin: 18px 0 0;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 640px) {
          .lk-final-card { padding: 64px 22px; border-radius: var(--lk-r-card); }
        }
      `}</style>
    </section>
  );
}
