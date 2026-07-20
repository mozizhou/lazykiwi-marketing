import type { Metadata } from "next";
import { DemoLegalPage } from "@/components/demo/DemoLegalPage";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { getSeoOverride } from "@/lib/seo/service";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("about");
  return buildMetadata(override, {
    title: "About LazyKiwi",
    description: "Learn about LazyKiwi — the all-in-one AI creative studio for video, image, and photo tools.",
    canonical: "https://lazykiwi.ai/about",
  });
}

export default function AboutPage() {
  return (
    <DemoLegalPage title="About LazyKiwi">
      <p>
        LazyKiwi is an all-in-one AI creative studio for images and video — text-to-video, image-to-video, photo tools,
        templates, and top models in one workbench.
      </p>
      <p>
        Company copy and social links will be expanded here. Contact us at{" "}
        <a href="mailto:hello@lazykiwi.ai">hello@lazykiwi.ai</a>.
      </p>
    </DemoLegalPage>
  );
}
