"use client";

import { useState } from "react";
import AuthModal from "@/demo/components/AuthModal";
import SiteShell from "@/demo/components/site/SiteShell";
import BlogHub from "@/demo/pages/BlogHub";
import BlogLandingPage from "@/demo/pages/BlogLandingPage";
import ModelsHub from "@/demo/pages/ModelsHub";
import ModelLandingPage from "@/demo/pages/ModelLandingPage";
import EffectsHub from "@/demo/pages/EffectsHub";
import ToolsHub from "@/demo/pages/ToolsHub";
import ToolLandingPage from "@/demo/pages/ToolLandingPage";
import TemplatesHub from "@/demo/pages/TemplatesHub";
import TemplateLandingPage from "@/demo/pages/TemplateLandingPage";

type DemoSitePageProps =
  | { kind: "blog-hub" }
  | { kind: "blog"; slug: string }
  | { kind: "models-hub" }
  | { kind: "model"; slug: string }
  | { kind: "effects-hub" }
  | { kind: "tools-hub" }
  | { kind: "tool"; slug: string }
  | { kind: "templates-hub" }
  | { kind: "template"; slug: string };

export function DemoSitePage(props: DemoSitePageProps) {
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);

  const content = (() => {
    switch (props.kind) {
      case "blog-hub":
        return <BlogHub />;
      case "blog":
        return <BlogLandingPage slug={props.slug} />;
      case "models-hub":
        return <ModelsHub />;
      case "model":
        return <ModelLandingPage slug={props.slug} />;
      case "effects-hub":
        return <EffectsHub />;
      case "tools-hub":
        return <ToolsHub />;
      case "tool":
        return <ToolLandingPage slug={props.slug} />;
      case "templates-hub":
        return <TemplatesHub />;
      case "template":
        return <TemplateLandingPage slug={props.slug} />;
      default:
        return null;
    }
  })();

  return (
    <>
      <SiteShell onOpenAuth={setAuthModalMode} otherNamesLabel={null}>{content}</SiteShell>
      <AuthModal
        mode={authModalMode}
        onClose={() => setAuthModalMode(null)}
        onComplete={() => setAuthModalMode(null)}
      />
    </>
  );
}
