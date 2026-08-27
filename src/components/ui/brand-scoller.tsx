"use client";
 
import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";
 
export const BrandScroller = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-custom {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse-custom {
          display: flex;
          width: max-content;
          animation: marqueeReverse 30s linear infinite;
        }
      `}</style>

      <div className="flex overflow-hidden py-3 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))]">
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16">
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsSpotify size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Spotify Gastronomy</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsYoutube size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">YouTube Culinary</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsAmazon size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Amazon Prime Reserve</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsGoogle size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Google Arts & Culture</span>
          </div>
        </div>
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsSpotify size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Spotify Gastronomy</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsYoutube size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">YouTube Culinary</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsAmazon size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Amazon Prime Reserve</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <BsGoogle size={26} />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Google Arts & Culture</span>
          </div>
        </div>
      </div>
    </>
  );
};
 
export const BrandScrollerReverse = () => {
  return (
    <div className="flex overflow-hidden py-3 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))]">
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16">
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsGoogle size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Google Arts & Culture</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsAmazon size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Amazon Prime Reserve</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsYoutube size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">YouTube Culinary</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsSpotify size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Spotify Gastronomy</span>
        </div>
      </div>
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsGoogle size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Google Arts & Culture</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsAmazon size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Amazon Prime Reserve</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsYoutube size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">YouTube Culinary</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <BsSpotify size={26} />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Spotify Gastronomy</span>
        </div>
      </div>
    </div>
  );
};