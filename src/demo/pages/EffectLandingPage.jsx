import { useEffect } from "react";
import LandingHero from "../components/landing/LandingHero";
import LandingCreationModule from "../components/landing/LandingCreationModule";
import LandingIntro from "../components/landing/LandingIntro";
import LandingScenarios from "../components/landing/LandingScenarios";
import LandingHowTo from "../components/landing/LandingHowTo";
import LandingFAQ from "../components/landing/LandingFAQ";
import LandingCTA from "../components/landing/LandingCTA";
import LandingAliases from "../components/landing/LandingAliases";
import { getEffectData } from "../data/landingPages";
import { getEffectPremiumData } from "../data/effectPremiumPages";
import EffectPremiumPage from "./EffectPremiumPage";

export default function EffectLandingPage({ slug }) {
  const premium = getEffectPremiumData(slug);
  const data = getEffectData(slug);

  useEffect(() => {
    if (data && data.seo) {
      document.title = data.seo.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", data.seo.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = data.seo.description;
        document.head.appendChild(meta);
      }
    }
  }, [data]);

  if (premium) {
    return <EffectPremiumPage slug={slug} />;
  }

  if (!data) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Page Not Found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-full bg-[#F9FAFB]">
      {data.creationModule ? (
        <LandingCreationModule data={data.creationModule} slug={slug} />
      ) : (
        <LandingHero data={data.hero} />
      )}
      <LandingIntro data={data.introduction} />
      <LandingScenarios data={data.scenarios} />
      <LandingHowTo data={data.howTo} />
      <LandingFAQ data={data.faq} />
      <LandingCTA data={data.bottomCta} />
      <LandingAliases data={data.aliases} />
    </article>
  );
}
