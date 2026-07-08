import { ArrowRight, Clapperboard, Play, Flame } from "lucide-react";

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
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 bg-black/20 backdrop-blur-md rounded-[2rem] py-6 px-2.5 border border-white/10 shadow-xl z-20">
                  <a href="#tiktok" className="flex items-center justify-center cursor-pointer hover:opacity-80 transition hover:scale-110" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] text-white drop-shadow-md"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/></svg>
                  </a>
                  <a href="#youtube" className="flex items-center justify-center cursor-pointer hover:opacity-80 transition hover:scale-110" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#instagram" className="flex items-center justify-center cursor-pointer hover:opacity-80 transition hover:scale-110" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-white drop-shadow-md"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="#reddit" className="flex items-center justify-center cursor-pointer hover:opacity-80 transition hover:scale-110" aria-label="Reddit">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.275-1.84.734-2.052-1.47-4.965-2.433-8.156-2.548l1.715-8.06 5.86 1.259c.026 1.189.99 2.148 2.176 2.148 1.213 0 2.202-.98 2.202-2.186 0-1.206-.989-2.186-2.202-2.186-.968 0-1.802.636-2.096 1.517l-6.284-1.353c-.27-.058-.545.105-.615.372l-1.832 8.608c-3.237.072-6.205 1.026-8.293 2.502-.472-.45-.1.11-.1-.11-.005-1.458-1.196-2.644-2.662-2.644-1.465 0-2.656 1.186-2.656 2.644 0 1.05.627 1.954 1.536 2.391-.035.253-.053.51-.053.769 0 4.148 5.215 7.534 11.636 7.534 6.42 0 11.635-3.386 11.635-7.534 0-.276-.021-.547-.061-.813.92-.429 1.554-1.332 1.554-2.393zm-17.653 1.258c0-.987.805-1.787 1.794-1.787.989 0 1.794.8 1.794 1.787 0 .986-.805 1.786-1.794 1.786-.989 0-1.794-.8-1.794-1.786zm9.832 5.092c-1.144 1.139-3.272 1.233-4.175 1.233-1.01 0-3.036-.094-4.181-1.233-.243-.242-.243-.635 0-.877.243-.243.637-.243.88 0 .749.745 2.274.877 3.3.877 1.02 0 2.545-.132 3.295-.877.243-.243.637-.243.88 0 .243.242.243.635 0 .877zm.794-3.306c-.989 0-1.794-.8-1.794-1.786 0-.987.805-1.787 1.794-1.787.989 0 1.794.8 1.794 1.787 0 .986-.805 1.786-1.794 1.786z"/></svg>
                  </a>
                  <a href="#x" className="flex items-center justify-center cursor-pointer hover:opacity-80 transition hover:scale-110" aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white drop-shadow-md"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  </a>
                </div>

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
