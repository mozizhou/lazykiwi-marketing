"use client";

import { useState } from "react";
import AuthModal from "@/demo/components/AuthModal";
import SiteShell from "@/demo/components/site/SiteShell";
import EffectLandingPage from "@/demo/pages/EffectLandingPage";
import { getEffectData } from "@/demo/data/landingPages";
import { getEffectPremiumData } from "@/demo/data/effectPremiumPages";

export function DemoEffect({ slug }: { slug: string }) {
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);
  const data = getEffectPremiumData(slug) || getEffectData(slug);
  const effectName = data?.hero?.name || data?.creationModule?.workbench?.effectLabel;
  const otherNamesLabel = effectName ? `Other name of ${effectName}` : undefined;

  return (
    <>
      <SiteShell onOpenAuth={setAuthModalMode} otherNamesLabel={otherNamesLabel}>
        <EffectLandingPage slug={slug} />
      </SiteShell>
      <AuthModal
        mode={authModalMode}
        onClose={() => setAuthModalMode(null)}
        onComplete={() => setAuthModalMode(null)}
      />
    </>
  );
}
