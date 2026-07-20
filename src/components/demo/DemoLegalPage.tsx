"use client";

import { useState, type ReactNode } from "react";
import AuthModal from "@/demo/components/AuthModal";
import SiteShell from "@/demo/components/site/SiteShell";

type DemoLegalPageProps = {
  title: string;
  children: ReactNode;
};

export function DemoLegalPage({ title, children }: DemoLegalPageProps) {
  const [authModalMode, setAuthModalMode] = useState<null | "login" | "signup">(null);

  return (
    <>
      <SiteShell onOpenAuth={setAuthModalMode} otherNamesLabel={null}>
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
          <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">{title}</h1>
          <div className="prose prose-gray mt-8 max-w-none text-base leading-7 text-gray-700">{children}</div>
        </article>
      </SiteShell>
      <AuthModal
        mode={authModalMode}
        onClose={() => setAuthModalMode(null)}
        onComplete={() => setAuthModalMode(null)}
      />
    </>
  );
}
