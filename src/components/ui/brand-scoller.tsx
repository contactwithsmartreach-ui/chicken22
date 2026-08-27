"use client";
 
import { Utensils, Sparkles, Flame, Wine, Crown, Star, Coffee, Award } from "lucide-react";
 
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
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse-custom {
          display: flex;
          width: max-content;
          animation: marqueeReverse 35s linear infinite;
        }
      `}</style>

      <div className="flex overflow-hidden py-3 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))]">
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16">
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Crown size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Truffled Hokkaido Scallop Carpaccio</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Flame size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">A5 Wagyu Striploin with Bone Marrow Glaze</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Sparkles size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">The Golden Sphere 3D Chocolate Dome</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Wine size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Smoked Rosemary Old Fashioned Elixir</span>
          </div>
        </div>
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Crown size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Truffled Hokkaido Scallop Carpaccio</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Flame size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">A5 Wagyu Striploin with Bone Marrow Glaze</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Sparkles size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">The Golden Sphere 3D Chocolate Dome</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
            <Wine size={22} className="text-amber-400" />
            <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Smoked Rosemary Old Fashioned Elixir</span>
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
          <Award size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Hudson Valley Foie Gras Torchon</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Star size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Pan-Seared Chilean Sea Bass in Saffron Dashi</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Coffee size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Valrhona 70% Dark Chocolate Soufflé</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Utensils size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Oscietra Imperial Caviar Tartlet</span>
        </div>
      </div>
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Award size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Hudson Valley Foie Gras Torchon</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Star size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Pan-Seared Chilean Sea Bass in Saffron Dashi</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Coffee size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Valrhona 70% Dark Chocolate Soufflé</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-300 hover:text-amber-400 transition-colors">
          <Utensils size={22} className="text-amber-400" />
          <span className="text-sm font-semibold tracking-wider uppercase opacity-90">Oscietra Imperial Caviar Tartlet</span>
        </div>
      </div>
    </div>
  );
};