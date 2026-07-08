import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteNav, siteNavHubs, siteNavOrder } from "../../data/siteNav";
import MegaMenuContent from "./MegaMenuContent";
import MarketingNavAuth from "./MarketingNavAuth";

// Single source of truth lives in src/data/siteNav.js (shared with the homepage nav).
const NAV = siteNav;
const SIMPLE = { Pricing: siteNavHubs.Pricing };
const HUB = siteNavHubs;

export default function SiteHeader({ onOpenAuth, otherNamesLabel }) {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const refreshHome = (event) => {
    event.preventDefault();
    if (window.location.pathname === "/" && !window.location.search && !window.location.hash) {
      window.location.reload();
      return;
    }
    window.location.href = "/";
  };
  const links = otherNamesLabel
    ? siteNavOrder.map((link) => (link === "Blog" ? otherNamesLabel : link))
    : siteNavOrder;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100/70 bg-white/70 backdrop-blur-md"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" onClick={refreshHome} className="flex shrink-0 items-center gap-2.5">
          <img src="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/kiwi-logo.svg" alt="LazyKiwi" width={30} height={30} />
          <span className="text-[17px] font-extrabold tracking-tight text-gray-900">LazyKiwi</span>
        </a>

        <nav className="hidden h-full items-center gap-1 md:flex">
          {links.map((link) => {
            const isOtherNames = link === otherNamesLabel;
            const hasMenu = !!NAV[link];
            const content = (
              <span className="flex items-center gap-1 text-[14px] font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                {link}
                {hasMenu && <ChevronDown size={14} className={`transition-transform ${open === link ? "rotate-180" : ""}`} />}
              </span>
            );
            return isOtherNames ? (
              <a
                key={link}
                href="#other-names"
                className="group flex h-full items-center px-4"
                onMouseEnter={() => setOpen(null)}
              >
                {content}
              </a>
            ) : hasMenu ? (
              HUB[link] ? (
                <a key={link} href={HUB[link]} className="group flex h-full items-center px-4" onMouseEnter={() => { setToolsExpanded(false); setOpen(link); }}>
                  {content}
                </a>
              ) : (
                <div key={link} className="group flex h-full cursor-pointer items-center px-4" onMouseEnter={() => setOpen(link)}>
                  {content}
                </div>
              )
            ) : (
              <a key={link} href={SIMPLE[link]} className="group flex h-full items-center px-4" onMouseEnter={() => setOpen(null)}>
                {content}
              </a>
            );
          })}
        </nav>

        <MarketingNavAuth layout="desktop" variant="site" onOpenAuth={onOpenAuth} />

        <button type="button" onClick={() => setMobile((v) => !v)} className="flex flex-col gap-1.5 rounded-lg p-2 transition hover:bg-gray-100 md:hidden" aria-label="Toggle menu">
          <span className={`block h-0.5 w-5 bg-gray-700 transition-transform ${mobile ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-gray-700 transition-opacity ${mobile ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-gray-700 transition-transform ${mobile ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mega menu */}
      {open && NAV[open] && (
        <div className="absolute left-0 top-full z-0 w-full overflow-hidden shadow-2xl" style={{ background: "rgba(15,15,20,0.88)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
            <MegaMenuContent
              menuKey={open}
              groups={NAV[open]}
              expanded={toolsExpanded}
              onExpand={() => setToolsExpanded(true)}
              dark
            />
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobile && (
        <div className="flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto border-t border-gray-100 bg-white px-5 pb-6 pt-3 md:hidden">
          {links.map((link) => (
            <div key={link} className="border-b border-gray-50 py-1">
              {link === otherNamesLabel ? (
                <a href="#other-names" onClick={() => setMobile(false)} className="block py-2.5 text-[15px] font-semibold text-gray-800">{link}</a>
              ) : NAV[link] ? (
                <>
                  <button type="button" onClick={() => setOpen(open === link ? null : link)} className="flex w-full items-center justify-between py-2.5 text-left text-[15px] font-semibold text-gray-800">
                    {link} <ChevronDown size={16} className={`transition-transform ${open === link ? "rotate-180" : ""}`} />
                  </button>
                  {open === link && (
                    <div className="flex flex-col gap-1 pb-2 pl-3">
                      {NAV[link].flatMap((g) => g.items).map((item) => (
                        <a key={item.label} href={item.href} className="py-1.5 text-[14px] font-medium text-gray-600">{item.label}</a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={SIMPLE[link]} className="block py-2.5 text-[15px] font-semibold text-gray-800">{link}</a>
              )}
            </div>
          ))}
          <MarketingNavAuth layout="mobile" variant="site" onOpenAuth={onOpenAuth} />
        </div>
      )}
    </header>
  );
}
