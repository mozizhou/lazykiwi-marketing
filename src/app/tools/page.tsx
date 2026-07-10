import type { Metadata } from "next";
import { DemoSitePage } from "@/components/demo/DemoSitePage";

export const metadata: Metadata = {
  title: "Free AI Photo Tools | LazyKiwi",
  description:
    "Explore LazyKiwi's free online AI photo tools — gender swap, AI outfit generator, photo colorizer, photo to sketch, anime avatar and more. Upload one photo, get results in seconds.",
  alternates: { canonical: "https://lazykiwi.ai/tools" },
  openGraph: {
    title: "Free AI Photo Tools | LazyKiwi",
    description:
      "Explore LazyKiwi's free online AI photo tools — gender swap, AI outfit generator, photo colorizer, photo to sketch, anime avatar and more.",
    url: "https://lazykiwi.ai/tools",
    type: "website",
    siteName: "LazyKiwi",
  },
};

export default function ToolsHubPage() {
  return <DemoSitePage kind="tools-hub" />;
}
