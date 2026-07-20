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
import ToolsCategoryHub from "@/demo/pages/ToolsCategoryHub";
import ModelsCategoryHub from "@/demo/pages/ModelsCategoryHub";
import type { TemplateBlock, TemplatePageCard } from "@/lib/seo/templatePage";

type CmsDoc = Record<string, unknown> | null;

type DemoSitePageProps =
  | { kind: "blog-hub"; extra?: TemplatePageCard[] }
  | { kind: "blog"; slug: string; dbData?: CmsDoc }
  | { kind: "models-hub"; extra?: TemplatePageCard[] }
  | { kind: "model"; slug: string; dbData?: CmsDoc }
  | { kind: "effects-hub" }
  | { kind: "tools-hub"; extra?: TemplatePageCard[] }
  | { kind: "tool"; slug: string; dbData?: CmsDoc }
  | { kind: "templates-hub"; extraTemplates?: TemplatePageCard[] }
  | { kind: "template"; slug: string; blocks?: TemplateBlock[] | null; name?: string; templateType?: string }
  | { kind: "tools-category"; categoryKey: string }
  | { kind: "models-category"; categoryKey: string };

export function DemoSitePage(props: DemoSitePageProps) {
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);

  const content = (() => {
    switch (props.kind) {
      case "blog-hub":
        return <BlogHub extra={props.extra} />;
      case "blog":
        return <BlogLandingPage slug={props.slug} dbData={props.dbData ?? undefined} />;
      case "models-hub":
        return <ModelsHub extra={props.extra} />;
      case "model":
        return <ModelLandingPage slug={props.slug} dbData={props.dbData ?? undefined} />;
      case "effects-hub":
        return <EffectsHub />;
      case "tools-hub":
        return <ToolsHub extra={props.extra} />;
      case "tool":
        return <ToolLandingPage slug={props.slug} dbData={props.dbData ?? undefined} />;
      case "templates-hub":
        return <TemplatesHub extraTemplates={props.extraTemplates} />;
      case "template":
        return (
          <TemplateLandingPage
            slug={props.slug}
            dbBlocks={props.blocks}
            dbName={props.name}
            dbTemplateType={props.templateType}
          />
        );
      case "tools-category":
        return <ToolsCategoryHub categoryKey={props.categoryKey} />;
      case "models-category":
        return <ModelsCategoryHub categoryKey={props.categoryKey} />;
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
