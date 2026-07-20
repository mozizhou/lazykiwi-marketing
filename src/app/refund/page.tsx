import type { Metadata } from "next";
import { DemoLegalPage } from "@/components/demo/DemoLegalPage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("refund");
  return buildMetadata(override, {
    title: "Refund Policy | LazyKiwi",
    description: "Refund and cancellation policy for LazyKiwi subscriptions and credits.",
    canonical: "https://lazykiwi.ai/refund",
  });
}

export default function RefundPage() {
  return (
    <DemoLegalPage title="Refund Policy">
      <p>
        This page is the official Refund Policy shell for LazyKiwi. Final legal copy will be published here after
        review. For billing help, contact <a href="mailto:hello@lazykiwi.ai">hello@lazykiwi.ai</a>.
      </p>
    </DemoLegalPage>
  );
}
