import type { Metadata } from "next";
import { DemoLegalPage } from "@/components/demo/DemoLegalPage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("terms");
  return buildMetadata(override, {
    title: "Terms of Service | LazyKiwi",
    description: "Terms and conditions for using LazyKiwi.",
    canonical: "https://lazykiwi.ai/terms",
  });
}

export default function TermsPage() {
  return (
    <DemoLegalPage title="Terms of Service">
      <p>
        This page is the official Terms of Service shell for LazyKiwi. Final legal copy will be published here after
        review. For questions, contact <a href="mailto:hello@lazykiwi.ai">hello@lazykiwi.ai</a>.
      </p>
    </DemoLegalPage>
  );
}
