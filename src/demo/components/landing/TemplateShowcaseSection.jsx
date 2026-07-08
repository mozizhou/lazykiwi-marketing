import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const VIDEO_TEMPLATES = [
  { name: 'Bullet Time', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/bullet time.png', prompt: 'Create a cinematic slow-motion bullet time shot with dramatic camera orbit.' },
  { name: 'Earth Zoom Out', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/earth zoom out.png', prompt: 'Start close to the subject, then zoom out rapidly into a breathtaking earth-scale view.' },
  { name: 'Seamless Transition', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/seamless transition.png', prompt: 'Move smoothly from one scene into another with a hidden cinematic transition.' },
  { name: 'Crash Zoom', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/crash zoom.png', prompt: 'Dramatically snap zoom into the subject for a high-impact cinematic feel.' },
  { name: 'Rolling Motion', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/rolling motion.png', prompt: 'Add a dynamic barrel roll motion to the camera as it travels forward.' },
  { name: 'Zoom Out', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/zoom out.png', prompt: 'Smoothly zoom out from the subject to reveal the surrounding environment.' },
  { name: 'Whip Pan', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/whip pan.png', prompt: 'Execute a fast, blurry whip pan to transition to the next action.' },
  { name: '360 Rotation', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/360 rotation.png', prompt: 'Orbit the camera a full 360 degrees around the central subject.' },
  { name: 'Flying Camera', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-cameramotion/flying cam transition.png', prompt: 'Simulate a drone or flying camera gracefully moving through the scene.' },
  { name: 'Money Rain', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-videoeffects/money rain.png', prompt: 'Make it rain cash all over the scene with realistic physics.' },
  { name: 'Explosion', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-videoeffects/explosion.png', prompt: 'Add a dramatic but stylized explosion effect behind the subject.' },
  { name: 'Disintegration', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-videoeffects/disintegration.png', prompt: 'Let the subject dissolve into elegant particles with a cinematic motion trail.' },
];

const IMAGE_TEMPLATES = [
  { name: 'X-Ray Image', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-photoeffects/x-ray.png', prompt: 'Apply a playful x-ray style reveal while keeping the subject clean and polished.' },
  { name: 'Dirty Lens', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-photoeffects/dirty lens.png', prompt: 'Add a gritty dirty lens overlay for a cinematic street-photo feeling.' },
  { name: 'Metallic Filter', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/pic-references/home-photoeffects/metallic filter.png', prompt: 'Transform the subject into a shiny metallic editorial portrait.' },
  { name: 'Meme Generator', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/04-meme-generator.png', prompt: 'Turn the image into a funny social-ready meme visual.' },
  { name: 'Background Remover', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/06-photo-effects.png', prompt: 'Instantly cut out the subject with pixel-perfect precision.' },
  { name: 'Face Swap', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/07-face-swap.png', prompt: 'Seamlessly swap faces while maintaining natural lighting and expression.' },
  { name: 'Character Swap', img: 'https://lazykiwi.oss-accelerate.aliyuncs.com/web-assets/resources1/08-character-swap.png', prompt: 'Transform the subject into a completely different character.' },
];

function ShowcaseComponent({ label, title, subtitle, items, onNavigate, accentColor }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const currentItem = items[activeIndex];
  const prevItem = items[prevIndex];

  const handleSelect = (idx) => {
    if (idx === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(idx);
    setAnimKey(prev => prev + 1);
  };

  return (
    <section className="w-full py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center min-h-[700px]">
          
          {/* Left: Text & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center w-max px-4 py-1.5 rounded-full mb-6 border" style={{ borderColor: `${accentColor}30`, backgroundColor: `${accentColor}10` }}>
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase" style={{ color: accentColor }}>
                {label}
              </span>
            </div>
            
            <h2 className="text-[48px] sm:text-[56px] lg:text-[72px] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
              {title}
            </h2>
            
            <p className="text-[18px] text-slate-500 leading-relaxed mb-10 max-w-md font-medium">
              {subtitle}
            </p>
            
            <button
              onClick={() => onNavigate()}
              className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-[16px] transition-all shadow-xl hover:shadow-2xl active:scale-95 w-max"
            >
              <Sparkles size={18} style={{ color: accentColor }} className="group-hover:rotate-12 transition-transform" />
              Try {label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Visual Stage & Rail */}
          <div className="lg:col-span-8 flex flex-col h-full order-1 lg:order-2">
            
            {/* Active Stage Container */}
            <div className="relative w-full aspect-video sm:aspect-[16/10] lg:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl bg-slate-100 flex-shrink-0">
              
              {/* Background Layer (Previous Image) */}
              <img 
                src={prevItem.img} 
                alt="Previous" 
                className="absolute inset-0 w-full h-full object-cover scale-100 filter blur-sm grayscale-[30%]"
              />

              {/* Foreground Layer (New Image with Reveal Wipe) */}
              <div 
                key={animKey}
                className="absolute inset-0 w-full h-full transition-all"
                style={{
                  animation: 'diagonal-wipe 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                }}
              >
                <img 
                  src={currentItem.img} 
                  alt={currentItem.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ animation: 'slight-zoom 2s ease-out forwards' }}
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Template Name & Prompt */}
              <div 
                key={`text-${animKey}`}
                className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 pointer-events-none"
                style={{ animation: 'float-up-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s', opacity: 0 }}
              >
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight drop-shadow-md">
                  {currentItem.name}
                </h3>
                <div className="inline-flex items-center gap-3">
                  <div className="w-1 h-10 rounded-full" style={{ backgroundColor: accentColor }} />
                  <p className="text-[15px] sm:text-[17px] font-medium text-white/90 leading-snug max-w-xl drop-shadow-sm italic">
                    "{currentItem.prompt}"
                  </p>
                </div>
              </div>
            </div>

            {/* Cinematic Carousel Rail */}
            <div className="mt-6 sm:mt-8 relative -mx-6 sm:mx-0 px-6 sm:px-0">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
                {items.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={item.name}
                      onClick={() => handleSelect(idx)}
                      onMouseEnter={() => handleSelect(idx)}
                      className={`relative flex-shrink-0 w-[140px] h-[90px] rounded-2xl overflow-hidden cursor-pointer snap-start transition-all duration-300 ${isActive ? 'ring-2 ring-offset-2 scale-100 shadow-lg' : 'opacity-60 hover:opacity-100 scale-95 hover:scale-100'}`}
                      style={{ ringColor: isActive ? accentColor : 'transparent' }}
                    >
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover pointer-events-none" />
                      <div className={`absolute inset-0 bg-slate-900/40 transition-opacity ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-[11px] font-bold text-white truncate text-center drop-shadow-sm">{item.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded Animations for the wipe effect */}
      <style>{`
        @keyframes diagonal-wipe {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        @keyframes slight-zoom {
          0% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes float-up-fade {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export function VideoTemplatesShowcase({ onNavigate }) {
  return (
    <ShowcaseComponent
      label="VIDEO TEMPLATES"
      title={
        <>Make videos<br />that feel<br />impossible.</>
      }
      subtitle="Pick a playful effect and turn a simple upload into something cinematic and scroll-stopping."
      items={VIDEO_TEMPLATES}
      onNavigate={() => onNavigate('video-generator', '/video-generator?mode=template')}
      accentColor="#16A34A"
    />
  );
}

export function ImageTemplatesShowcase({ onNavigate }) {
  return (
    <ShowcaseComponent
      label="IMAGE TEMPLATES"
      title={
        <>Turn photos<br />into something<br />ridiculous.</>
      }
      subtitle="Try quick image effects for memes, portraits, filters, edits, and fun transformations."
      items={IMAGE_TEMPLATES}
      onNavigate={() => onNavigate('image-generator', '/image-generator?mode=template')}
      accentColor="#E11D48"
    />
  );
}
