import type { Metadata } from "next";
import { DemoLegalPage } from "@/components/demo/DemoLegalPage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("privacy");
  return buildMetadata(override, {
    title: "Privacy Policy | LazyKiwi",
    description: "How LazyKiwi collects, uses, and protects your data.",
    canonical: "https://lazykiwi.ai/privacy",
  });
}

export default function PrivacyPage() {
  return (
    <DemoLegalPage title="Privacy Policy">
      <p>
        This page is the official Privacy Policy shell for LazyKiwi. Final legal copy will be published here after
        review. For questions, contact <a href="mailto:hello@lazykiwi.ai">hello@lazykiwi.ai</a>.
      </p>
    </DemoLegalPage>
  );
}
