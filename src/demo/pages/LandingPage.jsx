import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import StartAnythingSection from '../components/landing/StartAnythingSection.jsx';
import TemplateLibrary from '../components/landing/TemplateLibrary.jsx';
import ModelsWallSection from '../components/landing/ModelsWallSection.jsx';
import { CommunitySection, IdeasSection, FinalCTASection } from '../components/landing/IdeasAndCTASection.jsx';
import { siteNav, siteNavHubs, footerNav } from '../data/siteNav.js';
import MegaMenuContent from '../components/site/MegaMenuContent.jsx';
import MarketingNavAuth from '../components/site/MarketingNavAuth.jsx';

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ = [
  { q: 'What is LazyKiwi?', a: 'LazyKiwi is an all-in-one AI creative studio — video generation, photo effects, meme maker, and more, all in one place.' },
  { q: 'Is LazyKiwi free?', a: 'Yes. Every new account gets 28 credits with no credit card required. Upgrade to Pro any time for unlimited access.' },
  { q: 'How many credits do I get?', a: 'Free accounts start with 28 credits. You can earn more by referring friends or upgrading to Pro.' },
  { q: 'Can I use generated videos commercially?', a: 'Yes. Pro members get full commercial usage rights on every output.' },
  { q: 'Which AI models are supported?', a: 'Kling, Veo 3, Sora 2, Runway, Seedream, FLUX, Midjourney, Stable Diffusion, and more — added regularly.' },
  { q: 'What can I create?', a: 'Cinematic videos, viral memes, stunning image effects, and seamless start-to-end transitions. If you can imagine it, you can prompt it.' },
  { q: 'Can I use templates without writing prompts?', a: 'Absolutely. One-click templates let you upload an image or video and apply complex effects instantly.' },
  { q: 'Do I need video editing experience?', a: 'Not at all. The interface is designed for everyone — the AI handles the heavy lifting.' },
];

// ─── Nav dropdowns ────────────────────────────────────────────────────────────

const NAV_DROPDOWNS = {
  Generator: { groups: siteNav.Generator },
  Tools: { groups: siteNav.Tools },
  Models: { groups: siteNav.Models },
  Templates: { groups: siteNav.Templates },
  Blog: { groups: siteNav.Blog },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function LandingNav({ onCreateNow, onNavigatePage, onOpenAuth }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [toolsExpanded, setToolsExpanded] = useState(false);

  const navLinks = ['Generator', 'Tools', 'Models', 'Templates', 'Pricing', 'Blog'];

  const refreshHome = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
    if (window.location.pathname === '/' && !window.location.search && !window.location.hash) {
      window.location.reload();
      return;
    }
    window.location.href = '/';
  };

  useEffect(() => {
    // The app shell often nests its own scrollable container, so window.scrollY
    // may stay at 0. Walk up from the landing root to find the real scroller.
    const findScroller = () => {
      let node = document.querySelector('.landing-brand-scope');
      while (node) {
        const cs = getComputedStyle(node);
        if (/(auto|scroll)/.test(cs.overflowY) && node.scrollHeight > node.clientHeight) return node;
        node = node.parentElement;
      }
      return window;
    };
    const scroller = findScroller();
    const onScroll = () => {
      const y = scroller === window ? window.scrollY : scroller.scrollTop;
      setScrolled(y > 8);
    };
    onScroll();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (link) => {
    const pageByLink = {
      Generator: 'video-generator',
      Tools: 'tools-hub',
      Models: 'models-hub',
      Templates: 'templates-hub',
      Pricing: 'pricing-site',
      Blog: 'blog-hub',
    };
    const path = siteNavHubs[link];
    if (path) onNavigatePage?.(pageByLink[link], path);
  };

  const handleDropdownItemClick = (event, item) => {
    event.stopPropagation();
    setActiveDropdown(null);
    if (item.href) {
      // Generator/Image links point at the workbench (on the app subdomain in
      // production). Route them through onNavigatePage so the query string
      // (mode=template / start-end / etc.) is preserved and mapped to the app
      // origin directly, instead of relying on the marketing redirect pages.
      if (item.href.startsWith('/image-generator')) {
        onNavigatePage?.('image-generator', item.href);
      } else if (item.href.startsWith('/video-generator')) {
        onNavigatePage?.('video-generator', item.href);
      } else {
        window.location.href = item.href;
      }
      return;
    }
    if (item.action === 'video-generator') onCreateNow();
    else if (item.action === 'image-generator') onNavigatePage?.('image-generator', '/image-generator');
  };

  // While at the very top, sit on the dark hero video — use light text.
  const overHero = !scrolled;
  const navText = overHero ? 'rgba(255,255,255,0.86)' : 'var(--lk-ink-soft)';
  const navTextStrong = overHero ? '#ffffff' : 'var(--lk-ink)';
  const navLogoColor = overHero ? '#ffffff' : 'var(--lk-ink)';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${overHero ? 'lk-nav--over-hero' : 'lk-nav--scrolled'}`}
      style={{
        background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(15,23,42,0.18)',
        backdropFilter: 'blur(20px) saturate(140%)',
        WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        borderBottom: scrolled ? '1px solid rgba(15,23,42,0.06)' : '1px solid transparent',
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[60px] relative z-10">

        <button
          type="button"
          onClick={refreshHome}
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="LazyKiwi home"
        >
          <img src="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/kiwi-logo.svg" alt="" width={26} height={26} className="transition-transform duration-500 group-hover:rotate-[-8deg]" />
          <span className="lk-display text-[19px] font-semibold tracking-[-0.04em] transition-colors" style={{ color: navLogoColor }}>
            LazyKiwi
          </span>
        </button>

        <nav className="hidden md:flex items-center h-full">
          {navLinks.map(link => {
            const hasDropdown = !!NAV_DROPDOWNS[link];
            const isActive = activeDropdown === link;
            return (
              <div
                key={link}
                className="h-full flex items-center px-4 cursor-pointer"
                onMouseEnter={() => {
                  setToolsExpanded(false);
                  setActiveDropdown(hasDropdown ? link : null);
                }}
                onClick={() => handleLinkClick(link)}
              >
                <span
                  className="text-[13.5px] font-medium transition-colors flex items-center gap-1"
                  style={{ color: isActive ? navTextStrong : navText }}
                >
                  {link}
                  {hasDropdown && <ChevronDown size={12} strokeWidth={2.5} className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />}
                </span>
              </div>
            );
          })}
        </nav>

        <MarketingNavAuth
          layout="desktop"
          variant="landing"
          overHero={overHero}
          navText={navText}
          onOpenAuth={onOpenAuth}
        />

        <button
          type="button"
          onClick={() => setMobileOpen(v => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-current transition-transform ${mobileOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} style={{ color: navTextStrong }} />
          <span className={`block w-5 h-[1.5px] bg-current transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} style={{ color: navTextStrong }} />
          <span className={`block w-5 h-[1.5px] bg-current transition-transform ${mobileOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} style={{ color: navTextStrong }} />
        </button>
      </div>

      {activeDropdown && NAV_DROPDOWNS[activeDropdown] && (
        <div
          className="absolute top-full left-0 w-full overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.94)',
            backdropFilter: 'blur(28px) saturate(160%)',
            WebkitBackdropFilter: 'blur(28px) saturate(160%)',
            borderTop: '1px solid rgba(15,23,42,0.06)',
            borderBottom: '1px solid rgba(15,23,42,0.06)',
            boxShadow: '0 24px 48px -28px rgba(15,23,42,0.18)',
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
            <MegaMenuContent
              menuKey={activeDropdown}
              groups={NAV_DROPDOWNS[activeDropdown].groups}
              expanded={toolsExpanded}
              onExpand={() => setToolsExpanded(true)}
              onItemClick={handleDropdownItemClick}
            />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-6 pb-6 pt-3 flex flex-col gap-2 max-h-[calc(100vh-60px)] overflow-y-auto" style={{ borderColor: 'rgba(15,23,42,0.06)' }}>
          {navLinks.map(link => (
            <div key={link}>
              <button
                type="button"
                onClick={() => {
                  if (NAV_DROPDOWNS[link]) {
                    setActiveDropdown(activeDropdown === link ? null : link);
                  } else {
                    handleLinkClick(link);
                    setMobileOpen(false);
                  }
                }}
                className="w-full flex items-center justify-between text-[15px] font-medium text-left py-2.5"
                style={{ color: 'var(--lk-ink)' }}
              >
                {link}
                {NAV_DROPDOWNS[link] && (
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link ? 'rotate-180' : ''}`} />
                )}
              </button>
              {activeDropdown === link && NAV_DROPDOWNS[link] && (
                <div className="pl-3 pb-3 flex flex-col gap-3">
                  {link === 'Tools' ? (
                    <div className="flex flex-col gap-1">
                      {NAV_DROPDOWNS[link].groups.flatMap((g) => g.items).slice(0, 8).map(item => (
                        <button
                          key={item.label}
                          onClick={(event) => { setMobileOpen(false); handleDropdownItemClick(event, item); }}
                          className="text-left text-[14px] font-medium py-1"
                          style={{ color: 'var(--lk-ink)' }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    NAV_DROPDOWNS[link].groups.map((g, idx) => (
                      <div key={idx}>
                        <div className="lk-mono text-[10px] tracking-[0.16em] uppercase mb-2" style={{ color: 'var(--lk-ink-mute)' }}>{g.title}</div>
                        <div className="flex flex-col gap-1">
                          {g.items.map(item => (
                            <button
                              key={item.label}
                              onClick={(event) => { setMobileOpen(false); handleDropdownItemClick(event, item); }}
                              className="text-left text-[14px] font-medium py-1"
                              style={{ color: 'var(--lk-ink)' }}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
          <MarketingNavAuth
            layout="mobile"
            variant="landing"
            onOpenAuth={(mode) => {
              setMobileOpen(false);
              onOpenAuth?.(mode);
            }}
          />
        </div>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

const HERO_VIDEOS = [
  'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/hero/hero-video-00.mp4',
  'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/hero/hero-video-01.mp4',
  'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/hero/hero-video-02.mp4',
  'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/assets/landing/hero/hero-video-03.mp4',
];
const HERO_VIDEO_MAX_S = { 1: 10, 2: 10 };

function HeroSection({ onCreateNow }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [fading, setFading] = useState(false);
  const fadeTimerRef = useRef(null);
  const currentIdxRef = useRef(0);
  useEffect(() => { currentIdxRef.current = currentIdx; }, [currentIdx]);

  const triggerFade = useCallback(() => {
    if (fading) return;
    const upcoming = (currentIdxRef.current + 1) % HERO_VIDEOS.length;
    setNextIdx(upcoming);
    setFading(true);
    fadeTimerRef.current = setTimeout(() => {
      setCurrentIdx(upcoming);
      currentIdxRef.current = upcoming;
      setNextIdx((upcoming + 1) % HERO_VIDEOS.length);
      setFading(false);
    }, 800);
  }, [fading]);

  const handleVideoEnded = () => triggerFade();
  const handleTimeUpdate = (e) => {
    const idx = currentIdxRef.current;
    const cap = HERO_VIDEO_MAX_S[idx];
    if (cap !== undefined && e.target.currentTime >= cap) {
      e.target.pause();
      triggerFade();
    }
  };

  useEffect(() => () => clearTimeout(fadeTimerRef.current), []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 640 }}>
      <video
        key={`cur-${currentIdx}`}
        src={HERO_VIDEOS[currentIdx]}
        autoPlay muted playsInline
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{ zIndex: 0, transition: 'opacity 0.8s ease', opacity: fading ? 0 : 1 }}
      />
      <video
        key={`nxt-${nextIdx}`}
        src={HERO_VIDEOS[nextIdx]}
        autoPlay muted playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{ zIndex: 1, transition: 'opacity 0.8s ease', opacity: fading ? 1 : 0 }}
      />

      {/* Cinematic vignette — single layered overlay tuned for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: [
            'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.55) 60%, rgba(15,23,42,0.50) 100%)',
            'linear-gradient(180deg, rgba(15,23,42,0.50) 0%, rgba(15,23,42,0.30) 25%, rgba(15,23,42,0.30) 70%, rgba(15,23,42,0.55) 100%)',
          ].join(', '),
        }}
      />

      {/* Centred content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 sm:px-8 pt-20 pb-32" style={{ zIndex: 3 }}>
        <h1
          className="lk-display text-white max-w-[920px] mb-6 opacity-0"
          style={{
            fontSize: 'clamp(48px, 8vw, 92px)',
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            textShadow: '0 8px 40px rgba(15,23,42,0.35)',
            animation: 'lk-fade-up 1s 0.15s cubic-bezier(0.2, 0.7, 0.2, 1) forwards',
          }}
        >
          A studio for scroll-stopping clips.
        </h1>

        <p
          className="text-white/85 max-w-[560px] mb-10 opacity-0"
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            fontWeight: 400,
            textShadow: '0 4px 16px rgba(15,23,42,0.4)',
            animation: 'lk-fade-up 1s 0.3s cubic-bezier(0.2, 0.7, 0.2, 1) forwards',
          }}
        >
          Turn an idea, a photo, or two frames into a cinematic short. One workspace, every leading model.
        </p>

        <div
          className="flex items-center justify-center opacity-0"
          style={{ animation: 'lk-fade-up 1s 0.45s cubic-bezier(0.2, 0.7, 0.2, 1) forwards' }}
        >
          <button
            type="button"
            onClick={onCreateNow}
            className="lk-cta-hero-primary"
          >
            Start creating
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section
      className="w-full bg-transparent py-28"
      style={{ borderTop: '1px solid var(--lk-line)' }}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <h2 className="lk-display text-[44px] sm:text-[56px]" style={{ fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.035em', color: 'var(--lk-ink)' }}>
            Questions, answered.
          </h2>
        </div>

        <div className="lg:col-span-7">
          {FAQ.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border-b" style={{ borderColor: 'var(--lk-line)' }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between gap-6 text-left focus:outline-none group"
                >
                  <span
                    className="text-[17px] sm:text-[18px] font-medium transition-colors"
                    style={{ color: 'var(--lk-ink)', letterSpacing: '-0.012em' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: isOpen ? 'var(--lk-accent)' : 'transparent',
                      border: isOpen ? '1px solid var(--lk-accent)' : '1px solid var(--lk-line-strong)',
                      color: isOpen ? '#fff' : 'var(--lk-ink)',
                    }}
                  >
                    <ChevronDown size={14} strokeWidth={2.4} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-[1.7] pb-6 pr-8 max-w-[620px]" style={{ color: 'var(--lk-ink-soft)' }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function LandingFooter() {
  const linkClass =
    'text-[14px] font-medium transition-colors text-left hover:text-[var(--lk-ink)]';

  return (
    <footer
      className="bg-transparent px-6 sm:px-10 pt-20 pb-10"
      style={{ borderTop: '1px solid var(--lk-line)' }}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-16">
          <div className="col-span-2 md:col-span-5 max-w-[360px]">
            <a href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <img src="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/kiwi-logo.svg" alt="" width={26} height={26} />
              <span className="lk-display text-[20px] font-semibold tracking-[-0.04em]" style={{ color: 'var(--lk-ink)' }}>
                LazyKiwi
              </span>
            </a>
            <p className="text-[14.5px] leading-[1.65]" style={{ color: 'var(--lk-ink-soft)' }}>
              An all-in-one AI creative studio for makers, marketers, and dreamers.
            </p>
          </div>

          {footerNav.map(col => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2">
              <h4 className="lk-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--lk-ink-mute)' }}>
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.items.map(item => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={linkClass}
                        style={{ color: 'var(--lk-ink-soft)' }}
                        {...(item.href.startsWith('mailto:') ? {} : item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className={linkClass} style={{ color: 'var(--lk-ink-mute)' }}>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 pt-8" style={{ borderTop: '1px solid var(--lk-line)' }}>
          <p className="lk-mono text-[11px] tracking-[0.12em]" style={{ color: 'var(--lk-ink-mute)' }}>
            © {new Date().getFullYear()} LazyKiwi · All rights reserved
          </p>
          <p className="lk-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: 'var(--lk-ink-mute)' }}>
            Made with care
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Landing Page ────────────────────────────────────────────────────────

export default function LandingPage({ onEnterApp, onNavigatePage, onOpenAuth }) {
  const handleCreateNow = () => {
    onEnterApp?.();
    window.scrollTo({ top: 0 });
  };

  const handleNavigate = (pageId, routePath) => {
    if (routePath) { onNavigatePage?.(pageId, routePath); return; }
    if (pageId === 'image-generator' || pageId === 'photo-effects') {
      onNavigatePage?.('image-generator', '/image-generator');
    } else if (pageId === 'blog') {
      // no-op for now
    } else {
      handleCreateNow();
    }
  };

  return (
    <div className="landing-brand-scope min-h-screen w-full bg-white font-sans overflow-x-hidden relative" style={{ color: 'var(--lk-ink)' }}>
      <style>{`
        .landing-brand-scope {
          /* Refined monochrome system — single accent + occasional amber highlight */
          --lk-ink:        #0E1116;
          --lk-ink-soft:   #4A5363;
          --lk-ink-mute:   #8A93A1;
          --lk-paper:      #FAFAF7;
          --lk-line:       rgba(14,17,22,0.08);
          --lk-line-strong:rgba(14,17,22,0.16);
          --lk-accent:     #2A6F5A;       /* deep botanical teal — single dominant brand accent */
          --lk-accent-2:   #87BBA2;       /* lighter teal for fills/backgrounds */
          --lk-amber:      #F6E690;       /* used sparingly for italics & highlights */

          /* Aliases kept for backwards-compatibility w/ child sections (mapped to new system) */
          --lk-pale-amber:   var(--lk-amber);
          --lk-honeydew:     #E8EFE9;
          --lk-muted-teal:   var(--lk-accent);
          --lk-blue-slate:   var(--lk-ink);
          --lk-black-cherry: #fff;
          --lk-white-glass:  rgba(255,255,255,0.72);
          --lk-border:       var(--lk-line);
          --lk-teal-border:  rgba(42,111,90,0.22);
          --lk-amber-soft:   rgba(246,230,144,0.20);

          /* Unified radius scale */
          --lk-r-pill:   999px;
          --lk-r-card:   24px;     /* outer surfaces, hero stages, decks */
          --lk-r-inner:  14px;     /* inner cards & images on dark stages */
          --lk-r-thumb:  10px;     /* small thumbs / icon tiles */

          color: var(--lk-ink);
          font-family: var(--lk-sans);
          letter-spacing: -0.005em;
        }

        /* Override stale Tailwind grayscale tokens used inside child sections */
        .landing-brand-scope .text-gray-900,
        .landing-brand-scope .text-gray-950,
        .landing-brand-scope .text-slate-900,
        .landing-brand-scope .text-slate-950 { color: var(--lk-ink) !important; }

        .landing-brand-scope .text-gray-800,
        .landing-brand-scope .text-gray-700,
        .landing-brand-scope .text-slate-700 { color: var(--lk-ink) !important; }

        .landing-brand-scope .text-gray-600,
        .landing-brand-scope .text-gray-500,
        .landing-brand-scope .text-slate-600,
        .landing-brand-scope .text-slate-500 { color: var(--lk-ink-soft) !important; }

        .landing-brand-scope .text-gray-400,
        .landing-brand-scope .text-slate-400 { color: var(--lk-ink-mute) !important; }

        .landing-brand-scope .border-gray-100,
        .landing-brand-scope .border-gray-200,
        .landing-brand-scope .border-slate-200 { border-color: var(--lk-line) !important; }

        .landing-brand-scope .bg-gray-100,
        .landing-brand-scope .bg-gray-50,
        .landing-brand-scope .bg-slate-100 { background-color: rgba(14,17,22,0.03) !important; }

        /* ── CTA system ──────────────────────────────────────────────────── */
        .landing-brand-scope .lk-cta-primary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 16px;
          font-size: 13.5px; font-weight: 600;
          color: #fff; background: var(--lk-ink);
          border-radius: 999px; border: 1px solid var(--lk-ink);
          transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          letter-spacing: -0.01em;
        }
        .landing-brand-scope .lk-cta-primary:hover {
          background: var(--lk-accent);
          border-color: var(--lk-accent);
          transform: translateY(-1px);
        }

        /* White-on-dark variant for nav while sitting over the hero video */
        .landing-brand-scope .lk-cta-primary--inverse {
          background: #fff;
          color: var(--lk-ink);
          border-color: rgba(255,255,255,0.85);
          box-shadow: 0 6px 18px -10px rgba(0,0,0,0.45);
        }
        .landing-brand-scope .lk-cta-primary--inverse:hover {
          background: var(--lk-amber);
          border-color: var(--lk-amber);
          color: var(--lk-ink);
          transform: translateY(-1px);
        }

        .landing-brand-scope .lk-cta-hero-primary {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 26px;
          font-size: 14.5px; font-weight: 600;
          color: var(--lk-ink); background: #fff;
          border-radius: 999px;
          box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 14px 36px -16px rgba(0,0,0,0.4);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          letter-spacing: -0.01em;
        }
        .landing-brand-scope .lk-cta-hero-primary:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 44px -16px rgba(0,0,0,0.5);
        }

        .landing-brand-scope .lk-cta-hero-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 14px 22px;
          font-size: 14.5px; font-weight: 500;
          color: rgba(255,255,255,0.92);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 999px;
          backdrop-filter: blur(14px);
          transition: background 0.25s ease, transform 0.25s ease;
          letter-spacing: -0.005em;
        }
        .landing-brand-scope .lk-cta-hero-ghost:hover {
          background: rgba(255,255,255,0.14);
          transform: translateY(-1.5px);
        }

        /* ── Eyebrow utility ──────────────────────────────────────────────── */
        .landing-brand-scope .lk-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--lk-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--lk-ink-mute);
          margin-bottom: 18px;
        }
        .landing-brand-scope .lk-eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--lk-line-strong);
        }

        /* ── Section heading family ──────────────────────────────────────── */
        .landing-brand-scope .lk-h2 {
          font-family: var(--lk-display);
          font-weight: 600;
          font-size: clamp(34px, 4.6vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: var(--lk-ink);
        }
        .landing-brand-scope .lk-h2 em {
          font-style: normal;
          font-weight: 600;
          color: var(--lk-ink);
        }

        @keyframes lk-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* selection */
        .landing-brand-scope ::selection {
          background: var(--lk-accent);
          color: #fff;
        }
      `}</style>

      <LandingNav onCreateNow={handleCreateNow} onNavigatePage={onNavigatePage} onOpenAuth={onOpenAuth} />

      <main className="landing-page-main">
        <HeroSection onCreateNow={handleCreateNow} />
        <StartAnythingSection onNavigate={handleNavigate} />
        <ModelsWallSection />
        <TemplateLibrary onNavigate={handleNavigate} />
        <IdeasSection onNavigate={handleNavigate} />
        <FAQSection />
        <CommunitySection />
        <FinalCTASection onCreateNow={handleCreateNow} />
      </main>

      <LandingFooter />
    </div>
  );
}
