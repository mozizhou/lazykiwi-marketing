import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

// Official-website chrome for SEO landing pages (header + footer, no console sidebar).
export default function SiteShell({ children, onOpenAuth, otherNamesLabel }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-sans text-gray-900">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120vw 90vh at 50% 0%, rgba(200,245,228,0.35) 0%, transparent 55%), radial-gradient(120vw 100vh at 100% 20%, rgba(209,240,255,0.30) 0%, transparent 50%), linear-gradient(180deg,#FFFFFF 0%, #F7FFFA 30%, #FFFFFF 70%)",
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader onOpenAuth={onOpenAuth} otherNamesLabel={otherNamesLabel} />
        <main className="flex-1 pt-16">{children}</main>
        <SiteFooter onOpenAuth={onOpenAuth} />
      </div>
    </div>
  );
}
