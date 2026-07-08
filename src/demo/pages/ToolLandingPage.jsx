import { useEffect } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import JsonLd from "../components/common/JsonLd";
import { tools } from "../data/toolsList";

const ORIGIN = "https://lazykiwi.ai";

export default function ToolLandingPage({ slug }) {
  const tool = tools.find((item) => item.slug === slug);

  useEffect(() => {
    if (!tool) return;
    document.title = `${tool.name} Online | LazyKiwi`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", tool.blurb);
  }, [tool]);

  if (!tool) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Tool Not Found</h1>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${tool.name} | LazyKiwi`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${ORIGIN}/tools/${tool.slug}`,
    description: tool.blurb,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <article className="min-h-full bg-white">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-kiwi-green/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">{tool.categoryLabel}</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">{tool.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{tool.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/image-generator" className="inline-flex items-center gap-2 rounded-2xl bg-kiwi-green px-7 py-3.5 text-sm font-black text-gray-950 shadow-[0_10px_30px_-10px_rgba(132,204,22,0.7)] transition hover:bg-kiwi-green-dark hover:text-white">
              Try it free <ArrowRight size={18} />
            </a>
            <a href="/tools" className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-600 transition hover:text-gray-950">
              All tools <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 sm:px-10 lg:grid-cols-3">
        {["Upload one photo", "Choose the result", "Generate in seconds"].map((title, index) => (
          <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-kiwi-green/20 text-kiwi-green-dark">
              <Sparkles size={20} />
            </div>
            <h2 className="text-xl font-black text-gray-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {index === 0 && "Start with a clear selfie or photo. LazyKiwi keeps the workflow focused and quick."}
              {index === 1 && `Use ${tool.name} to preview the edit while keeping the subject recognizable.`}
              {index === 2 && "Export a polished result from the same LazyKiwi workbench."}
            </p>
          </div>
        ))}
      </section>
    </article>
  );
}
