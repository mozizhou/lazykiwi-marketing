"use client";

import { useState } from "react";
import AuthModal from "@/demo/components/AuthModal";
import SiteShell from "@/demo/components/site/SiteShell";
import GeneratorLandingPage from "@/demo/pages/GeneratorLandingPage";

type DemoGeneratorPageProps = {
  kind: "video" | "image";
  mode?: string;
};

export function DemoGeneratorPage({ kind, mode }: DemoGeneratorPageProps) {
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);

  return (
    <>
      <SiteShell onOpenAuth={setAuthModalMode} otherNamesLabel={null}>
        <GeneratorLandingPage kind={kind} mode={mode} />
      </SiteShell>
      <AuthModal
        mode={authModalMode}
        onClose={() => setAuthModalMode(null)}
        onComplete={() => setAuthModalMode(null)}
      />
    </>
  );
}
