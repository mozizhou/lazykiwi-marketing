"use client";

import { useEffect, useState } from "react";
import { ChevronDown, LogOut, Settings, Sparkles } from "lucide-react";
import { useAuthSession } from "@/lib/auth/useAuthSession";
import { appUrl } from "@/lib/routes";
import { getProfileDisplay } from "@/lib/user/display";
import { useUserProfile } from "@/lib/user/useUserProfile";

function UserAvatar({ initials, size = "md" }) {
  const sizeClass = size === "sm" ? "h-8 w-8 text-[11px]" : "h-9 w-9 text-[13px]";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-kiwi-green to-lime-300 font-extrabold text-gray-950 shadow-sm ${sizeClass}`}
    >
      {initials}
    </div>
  );
}

function UserProfileMenu({
  variant,
  overHero,
  navText,
  onLogout,
  onClose,
}) {
  const menuItemClass =
    variant === "landing" && overHero
      ? "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-white/90 transition hover:bg-white/10"
      : "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-gray-700 transition hover:bg-gray-50";

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        className="fixed inset-0 z-40 bg-transparent"
        onClick={onClose}
      />
      <div
        className={
          variant === "landing" && overHero
            ? "absolute right-0 top-[calc(100%+8px)] z-50 w-60 rounded-2xl border border-white/15 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-md"
            : "absolute right-0 top-[calc(100%+8px)] z-50 w-60 rounded-2xl border border-gray-200/60 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md"
        }
      >
        <a href={appUrl("/app/video-generator")} className={menuItemClass} onClick={onClose}>
          <Sparkles size={15} className={variant === "landing" && overHero ? "text-white/60" : "text-gray-400"} />
          Open studio
        </a>
        <a href="/settings" className={menuItemClass} onClick={onClose}>
          <Settings size={15} className={variant === "landing" && overHero ? "text-white/60" : "text-gray-400"} />
          Account settings
        </a>
        <div className={`my-1 h-px ${variant === "landing" && overHero ? "bg-white/10" : "bg-gray-100"}`} />
        <button
          type="button"
          onClick={() => {
            onClose();
            onLogout();
          }}
          className={
            variant === "landing" && overHero
              ? "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-red-300 transition hover:bg-red-500/10"
              : "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-red-600 transition hover:bg-red-50"
          }
        >
          <LogOut size={15} className={variant === "landing" && overHero ? "text-red-300" : "text-red-400"} />
          Log out
        </button>
      </div>
    </>
  );
}

function LoggedInNav({
  layout,
  variant,
  overHero,
  navText,
  onLogout,
}) {
  const { profile, credits, loginEmail } = useUserProfile();
  const { nickname, email, initials } = getProfileDisplay(profile, loginEmail, credits);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isHeroLight = variant === "landing" && overHero;
  const nameColor = isHeroLight ? "#ffffff" : variant === "landing" ? "var(--lk-ink)" : "#111827";
  const metaColor = isHeroLight ? "rgba(255,255,255,0.72)" : variant === "landing" ? "var(--lk-ink-mute)" : "#6b7280";
  const chipHover = isHeroLight ? "hover:bg-white/10" : "hover:bg-gray-100/80";

  if (layout === "mobile") {
    return (
      <div className="mt-3 rounded-2xl border border-gray-200/80 bg-white/90 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <UserAvatar initials={initials} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[15px] font-bold text-gray-900">{nickname}</div>
            {email ? <div className="truncate text-[12px] text-gray-500">{email}</div> : null}
          </div>
          {credits != null ? (
            <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-600">
              {credits} Cr
            </span>
          ) : null}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href={appUrl("/app/video-generator")}
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-[13px] font-bold text-white"
          >
            Open studio
          </a>
          <a
            href="/settings"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] font-bold text-gray-700"
          >
            Settings
          </a>
        </div>
        <button
          type="button"
          onClick={() => onLogout()}
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] font-semibold text-gray-700"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className={`relative ${variant === "landing" ? "hidden md:flex" : "hidden md:flex"} items-center gap-2`}>
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        className={`flex max-w-[280px] items-center gap-2.5 rounded-xl px-2 py-1.5 transition ${chipHover}`}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
      >
        <UserAvatar initials={initials} size="sm" />
        <div className="hidden min-w-0 text-left lg:block">
          <div className="truncate text-[13px] font-bold leading-snug" style={{ color: nameColor }}>
            {nickname}
          </div>
          {email ? (
            <div className="truncate text-[11px] font-medium" style={{ color: metaColor }}>
              {email}
            </div>
          ) : null}
        </div>
        {credits != null ? (
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"
            style={{
              background: isHeroLight ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.06)",
              color: isHeroLight ? "rgba(255,255,255,0.88)" : navText || "#4b5563",
            }}
          >
            {credits} Cr
          </span>
        ) : null}
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform ${menuOpen ? "rotate-180" : ""}`}
          style={{ color: isHeroLight ? "rgba(255,255,255,0.72)" : metaColor }}
        />
      </button>
      {menuOpen ? (
        <UserProfileMenu
          variant={variant}
          overHero={overHero}
          navText={navText}
          onLogout={onLogout}
          onClose={() => setMenuOpen(false)}
        />
      ) : null}
    </div>
  );
}

export default function MarketingNavAuth({
  layout = "desktop",
  variant = "site",
  overHero = false,
  navText,
  onOpenAuth,
}) {
  const { isLoggedIn, logout } = useAuthSession();

  if (isLoggedIn) {
    return (
      <LoggedInNav
        layout={layout}
        variant={variant}
        overHero={overHero}
        navText={navText}
        onLogout={logout}
      />
    );
  }

  if (layout === "mobile") {
    return (
      <>
        <button
          type="button"
          onClick={() => onOpenAuth?.("login")}
          className={
            variant === "landing"
              ? "mt-3 w-full rounded-full border border-gray-200 px-5 py-3 text-[14px] font-semibold text-gray-700"
              : "mt-3 rounded-xl border border-gray-200 px-5 py-3 text-[14px] font-bold text-gray-700"
          }
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => onOpenAuth?.("signup")}
          className={
            variant === "landing"
              ? "lk-cta-primary justify-center"
              : "inline-flex items-center justify-center gap-1.5 rounded-xl bg-gray-900 px-5 py-3 text-[14px] font-bold text-white"
          }
        >
          {variant === "site" ? <Sparkles size={14} /> : null}
          Start for free
        </button>
      </>
    );
  }

  return (
    <div className={variant === "landing" ? "hidden md:flex items-center gap-1" : "hidden items-center gap-3 md:flex"}>
      <button
        type="button"
        onClick={() => onOpenAuth?.("login")}
        className={
          variant === "landing"
            ? "text-[13.5px] font-medium px-3 py-2 transition-colors"
            : "px-3 py-2 text-[14px] font-semibold text-gray-700 transition-colors hover:text-gray-900"
        }
        style={variant === "landing" ? { color: navText } : undefined}
      >
        Log in
      </button>
      <button
        type="button"
        onClick={() => onOpenAuth?.("signup")}
        className={overHero ? "lk-cta-primary lk-cta-primary--inverse" : "lk-cta-primary"}
      >
        {variant === "site" ? (
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-gray-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.97]">
            <Sparkles size={14} /> Start for free
          </span>
        ) : (
          "Start for free"
        )}
      </button>
    </div>
  );
}
