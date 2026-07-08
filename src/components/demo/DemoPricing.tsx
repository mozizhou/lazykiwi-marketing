"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SiteShell from "@/demo/components/site/SiteShell";
import AuthModal from "@/demo/components/AuthModal";
import Pricing from "@/demo/pages/Pricing";
import { appUrl } from "@/lib/routes";

export function DemoPricing() {
  const router = useRouter();
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);

  return (
    <>
      <SiteShell onOpenAuth={setAuthModalMode} otherNamesLabel={null}>
        <Pricing
          onRequireAuth={() => setAuthModalMode("login")}
          navigateToPage={(_pageId: string, path?: string) => {
            if (!path) return;
            if (path === "/video-generator") window.location.assign(appUrl("/app/video-generator"));
            else router.push(path);
          }}
        />
      </SiteShell>
      <AuthModal
        mode={authModalMode}
        onClose={() => setAuthModalMode(null)}
        onComplete={() => setAuthModalMode(null)}
      />
    </>
  );
}
