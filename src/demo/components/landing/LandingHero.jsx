import { ArrowRight, Clapperboard, Play, Flame } from "lucide-react";
import { SocialIconRail } from "../common/SocialPlatformIcons";

export default function LandingHero({ data }) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
        .font-handwritten { font-family: 'Caveat', cursive; }
      `}</style>
      
      {/* Clean warm-white base with a barely-there local highlight */}
      <div className="absolute inset-0 bg-[#FFFDFC] z-0 pointer-events-none"></div>
      <div className="absolute top-[12%] right-[12%] w-[320px] h-[320px] bg-[#F7F8EF]/8 blur-[145px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-4 pb-12 sm:px-10 lg:pt-6 lg:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center z-10">
        
        {/* Left Side: Copy & CTA */}
        <div className="max-w-2xl relative z-10 pt-4 lg:pt-0">
          {/* Tag with subtle kiwi brand accent */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-kiwi-green/30 bg-white/80 px-4 py-2 text-sm font-bold text-kiwi-green-dark shadow-sm backdrop-blur">
            <Clapperboard size={18} className="text-kiwi-green" />
            Camera Motion Effect
            <img src="https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/kiwi-logo.svg" className="ml-1.5 h-[16px] w-auto opacity-90" alt="Kiwi" />
          </div>
          
          <div className="relative mb-6">
            <h1 className="text-[5.5rem] font-black tracking-tight text-gray-950 sm:text-[6.5rem] lg:text-[7rem] leading-[0.85] mb-2">
              {data.h1Line1}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mt-1">
              <h1 className="text-[5.5rem] font-black tracking-tight text-kiwi-green sm:text-[6.5rem] lg:text-[7rem] leading-[0.85]">
                {data.h1Line2}
              </h1>
              
              {/* Elegant handwritten-style slogan next to "Effect" */}
              {data.slogan && (
                <div className="relative mt-4 sm:mt-2 ml-4 flex-shrink-0 z-20">
                  <p className="font-handwritten text-[2.2rem] font-bold text-[#5F684A] tracking-wide rotate-[-4deg] whitespace-pre-line leading-tight opacity-95" style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.92), -1px -1px 0 rgba(255,255,255,0.92), 1px -1px 0 rgba(255,255,255,0.92), -1px 1px 0 rgba(255,255,255,0.92), 0px 2px 4px rgba(0,0,0,0.08)' }}>
                    {data.slogan}
                  </p>
                  {/* Subtle hand-drawn curved arrow pointing back to Effect */}
                  <svg className="absolute -bottom-6 left-2 w-12 h-6 text-[#8A9070]/22 rotate-[-15deg]" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 0px 1px rgba(255,255,255,0.45))' }}><path d="M5 25 Q 30 5 55 20" /><path d="M48 24 L 55 20 L 52 13" /></svg>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-10 space-y-4 text-[1.15rem] leading-relaxed text-gray-600 whitespace-pre-wrap max-w-lg">
            {data.subtitle}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={data.ctaLink} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-kiwi-green px-8 py-4 text-base font-black text-gray-950 shadow-md transition hover:bg-kiwi-green-dark hover:text-white hover:-translate-y-0.5">
              {data.ctaText}
              <ArrowRight size={20} />
            </a>
            {data.secondaryCtaText && (
              <a href={data.secondaryCtaLink} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/90 px-8 py-4 text-base font-bold text-gray-800 shadow-sm backdrop-blur transition hover:border-gray-300 hover:bg-white hover:-translate-y-0.5">
                {data.secondaryCtaText}
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Designed Editorial Flagship Vertical Poster */}
        {data.flagship && (
          <div className="hidden lg:flex justify-center relative z-10">
            
            {/* Promo Layer: Strong Campaign Promo Card (Bottom Left) */}
            <div className="absolute -left-16 bottom-32 bg-[#07101A] px-4 py-3 rounded-[1.1rem] shadow-[0_18px_42px_rgba(5,7,13,0.36)] border border-white/8 z-30 flex items-center gap-3 transform transition-transform hover:-translate-y-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A8BC77] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <Flame className="h-5 w-5 text-[#0B1220]" fill="currentColor" />
              </div>
              <div className="pr-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8BC77]"></span>
                  <p className="text-[9px] font-black text-[#CFE0A2] uppercase tracking-[0.2em]">Trending Look</p>
                </div>
                <p className="text-[14px] font-bold text-[#F8FAFC] leading-tight">Freeze one frame.<br/><span className="text-[#D1D5DB] font-medium">Add cinematic motion.</span></p>
              </div>
            </div>

            {/* Main Poster Mockup */}
            <div className="relative w-[380px] overflow-hidden rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] bg-gray-100 transform transition-transform hover:scale-[1.01] duration-500 z-10 border border-gray-200/50">
              <div className="aspect-[9/16] relative overflow-hidden bg-gray-100">
                <img 
                  src={data.flagship.image} 
                  alt={data.flagship.title} 
                  className="h-full w-full object-cover scale-[1.03]" 
                  style={{ objectPosition: 'center 20%' }}
                />
                
                {/* Subtle overlay to ensure UI pops, keeping it clean */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20 z-0 pointer-events-none opacity-90"></div>

                {/* ORIGINAL Badge */}
                <div className="absolute top-8 left-[-2.5rem] w-40 rotate-[-12deg] flex items-center justify-center gap-1.5 bg-gray-950 text-white px-3 py-1.5 shadow-xl z-20 border-b border-kiwi-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-kiwi-green animate-pulse"></span>
                  <span className="text-[11px] font-black tracking-widest uppercase">Original</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition hover:scale-110 hover:bg-white/20 cursor-pointer pointer-events-auto border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <Play size={26} fill="currentColor" className="ml-1 opacity-90" />
                  </div>
                </div>

                {/* Right Side Social Platforms in frosted pill */}
                <SocialIconRail className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-black/20 px-2.5 py-6 shadow-xl backdrop-blur-md" />

                {/* Animated Meme Accent */}
                {data.flagship.meme && data.flagship.meme.enabled && (
                  <div className={`absolute ${data.flagship.meme.position} z-20 flex flex-col items-center pointer-events-none drop-shadow-2xl animate-[bounce_3s_ease-in-out_infinite]`}>
                    {data.flagship.meme.bubbleText && (
                      <div className="relative mb-1 rounded-[1rem] bg-white px-3 py-1.5 text-[10px] font-bold text-gray-900 shadow-xl ml-4 rotate-2 border border-gray-100 max-w-[100px] text-center">
                        {data.flagship.meme.bubbleText}
                        <div className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-white border-b border-r border-gray-100"></div>
                      </div>
                    )}
                    <img 
                      src={data.flagship.meme.assetPath} 
                      className={`${data.flagship.meme.size} object-contain filter drop-shadow-xl`} 
                      alt="Meme character" 
                    />
                  </div>
                )}

                {/* Bottom Info Section - Simplified for Poster Style */}
                <div className="absolute bottom-6 left-6 right-20 z-20 pointer-events-none">
                  <div className="mb-2">
                    <span className="inline-flex items-center rounded-sm bg-kiwi-green px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">
                      Template
                    </span>
                  </div>
                  <h3 className="text-[1.1rem] font-black text-white drop-shadow-lg tracking-tight leading-tight mb-1">{data.flagship.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-black/40 rounded-full px-2.5 py-1 backdrop-blur-md border border-white/10 shadow-md">
                      <span className="w-3 h-3 rounded-full overflow-hidden bg-kiwi-green animate-[spin_4s_linear_infinite]"><img src={data.flagship.image} className="w-full h-full object-cover opacity-80" alt="" /></span>
                      <span className="text-[9px] font-medium text-white/90 truncate max-w-[100px]">{data.flagship.music}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
