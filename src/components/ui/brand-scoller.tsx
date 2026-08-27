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
        .neon-glow {
          color: #fff;
          text-shadow: 
            0 0 5px rgba(251, 191, 36, 0.4),
            0 0 10px rgba(251, 191, 36, 0.3),
            0 0 20px rgba(251, 191, 36, 0.2),
            0 0 40px rgba(251, 191, 36, 0.1);
        }
        .neon-glow:hover {
          color: #fde047;
          text-shadow: 
            0 0 8px rgba(253, 224, 71, 0.8),
            0 0 15px rgba(253, 224, 71, 0.6),
            0 0 30px rgba(251, 191, 36, 0.4),
            0 0 60px rgba(251, 191, 36, 0.2);
        }
      `}</style>

      <div className="flex overflow-hidden py-4 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))] bg-transparent border-0">
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16">
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            Truffled Hokkaido Scallop Carpaccio
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            A5 Wagyu Striploin with Bone Marrow Glaze
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            The Golden Sphere 3D Chocolate Dome
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            Smoked Rosemary Old Fashioned Elixir
          </span>
        </div>
        <div className="animate-marquee-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            Truffled Hokkaido Scallop Carpaccio
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            A5 Wagyu Striploin with Bone Marrow Glaze
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            The Golden Sphere 3D Chocolate Dome
          </span>
          <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
            Smoked Rosemary Old Fashioned Elixir
          </span>
        </div>
      </div>
    </>
  );
};
 
export const BrandScrollerReverse = () => {
  return (
    <div className="flex overflow-hidden py-4 max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_15%,rgba(0,_0,_0,_1)_85%,rgba(0,_0,_0,_0))] bg-transparent border-0">
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16">
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Hudson Valley Foie Gras Torchon
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Pan-Seared Chilean Sea Bass in Saffron Dashi
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Valrhona 70% Dark Chocolate Soufflé
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Oscietra Imperial Caviar Tartlet
        </span>
      </div>
      <div className="animate-marquee-reverse-custom flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Hudson Valley Foie Gras Torchon
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Pan-Seared Chilean Sea Bass in Saffron Dashi
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Valrhona 70% Dark Chocolate Soufflé
        </span>
        <span className="text-sm font-serif italic font-semibold tracking-wider uppercase neon-glow transition-all cursor-default whitespace-nowrap">
          Oscietra Imperial Caviar Tartlet
        </span>
      </div>
    </div>
  );
};