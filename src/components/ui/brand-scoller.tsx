"use client";
 
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

      <div className="flex overflow-hidden py-3 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))] bg-transparent border-0">
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16">
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            Truffled Hokkaido Scallop Carpaccio
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            A5 Wagyu Striploin with Bone Marrow Glaze
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            The Golden Sphere 3D Chocolate Dome
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            Smoked Rosemary Old Fashioned Elixir
          </span>
        </div>
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            Truffled Hokkaido Scallop Carpaccio
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            A5 Wagyu Striploin with Bone Marrow Glaze
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            The Golden Sphere 3D Chocolate Dome
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
            Smoked Rosemary Old Fashioned Elixir
          </span>
        </div>
      </div>
    </>
  );
};
 
export const BrandScrollerReverse = () => {
  return (
    <div className="flex overflow-hidden py-3 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))] bg-transparent border-0">
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16">
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Hudson Valley Foie Gras Torchon
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Pan-Seared Chilean Sea Bass in Saffron Dashi
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Valrhona 70% Dark Chocolate Soufflé
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Oscietra Imperial Caviar Tartlet
        </span>
      </div>
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Hudson Valley Foie Gras Torchon
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Pan-Seared Chilean Sea Bass in Saffron Dashi
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Valrhona 70% Dark Chocolate Soufflé
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap">
          Oscietra Imperial Caviar Tartlet
        </span>
      </div>
    </div>
  );
};