"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LandingPage from "@/demo/pages/LandingPage";
import AuthModal from "@/demo/components/AuthModal";
import { appUrl } from "@/lib/routes";
import { useLandingMutedMedia } from "@/demo/hooks/useLandingMutedMedia";

export function DemoLanding() {
  const router = useRouter();
  const landingRef = useRef(null);
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);
  useLandingMutedMedia(landingRef);

  const navigateToPage = (_pageId: string, path?: string) => {
    if (!path) return;
    if (path.startsWith("/video-generator")) {
      window.location.assign(appUrl(path.replace("/video-generator", "/app/video-generator")));
    } else if (path.startsWith("/image-generator")) {
      window.location.assign(appUrl(path.replace("/image-generator", "/app/image-generator")));
    } else {
      router.push(path);
    }
  };

  return (
    <div ref={landingRef}>
      <LandingPage
        onEnterApp={() => window.location.assign(appUrl("/app/video-generator"))}
        onNavigatePage={navigateToPage}
        onOpenAuth={setAuthModalMode}
      />
      <AuthModal
        mode={authModalMode}
        onClose={() => setAuthModalMode(null)}
        onComplete={() => setAuthModalMode(null)}
      />
    </div>
  );
}
