"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const burgerLayers = [
  {
    name: "Brioche Crown",
    description: "Artisanal sesame-crusted brioche baked with cultured French butter.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800",
    offsetClass: "-translate-y-48 scale-95 opacity-80",
  },
  {
    name: "Aged Truffled Cheddar",
    description: "24-month cave-aged white cheddar melting over the patty.",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800",
    offsetClass: "-translate-y-32 scale-95 opacity-90",
  },
  {
    name: "Miyazaki A5 Wagyu Patty",
    description: "Hand-formed 8oz prime wagyu beef seared to succulent perfection.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    offsetClass: "-translate-y-16 scale-100 opacity-100",
  },
  {
    name: "Wild Forest Chanterelles & Truffle Aioli",
    description: "Sautéed golden chanterelles folded into house black truffle emulsion.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    offsetClass: "translate-y-12 scale-100 opacity-100",
  },
  {
    name: "Crisp Heirloom Lettuce & Tomato Confit",
    description: "Organic butter lettuce and slow-roasted slow-caramelized plum tomatoes.",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
    offsetClass: "translate-y-28 scale-95 opacity-90",
  },
  {
    name: "Toasted Brioche Heel",
    description: "Golden toasted base brushed with bone marrow reduction.",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80&w=800",
    offsetClass: "translate-y-44 scale-95 opacity-80",
  },
];

export const BurgerAnatomyScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 to 1 as the section scrolls through the viewport
      const totalScrollable = rect.height - windowHeight;
      const currentScrolled = -rect.top;
      let progress = currentScrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#681403] text-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Section Header */}
        <div className="absolute top-12 text-center z-30 max-w-xl mx-auto pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFB11D]/15 border border-[#EFB11D]/40 text-[#EFB11D] text-xs tracking-widest uppercase mb-3 font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Anatomy of Perfection
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white mb-2">
            The Ultimate <span className="italic font-normal text-[#EFB11D]">Gastronomy Burger</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm">
            Scroll down to assemble the masterpiece layer by layer.
          </p>
        </div>

        {/* Burger Assembly Container */}
        <div className="relative w-full max-w-md h-[450px] flex items-center justify-center mt-16">
          {burgerLayers.map((layer, index) => {
            // Calculate convergence factor: 
            // At scrollProgress = 0, layers are exploded apart.
            // At scrollProgress = 1, layers converge into a cohesive stack (progressMultiplier = 0).
            const explosionFactor = 1 - scrollProgress;
            
            // Stagger each layer's offset direction
            const directionMultiplier = index - (burgerLayers.length - 1) / 2;
            const translateY = directionMultiplier * 75 * explosionFactor;
            const scale = 0.88 + scrollProgress * 0.12;
            const opacity = 0.4 + scrollProgress * 0.6;

            return (
              <div
                key={layer.name}
                className="absolute w-72 sm:w-88 h-20 rounded-2xl overflow-hidden border border-white/25 shadow-2xl transition-transform duration-75 ease-out backdrop-blur-xl bg-black/50"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: burgerLayers.length - index,
                }}
              >
                <div className="absolute inset-0 flex items-center gap-4 p-3 bg-neutral-950/80">
                  <img
                    src={layer.image}
                    alt={layer.name}
                    className="w-14 h-14 rounded-xl object-cover border border-white/20"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#EFB11D] font-semibold block">
                      Layer 0{index + 1}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-white truncate">
                      {layer.name}
                    </h4>
                    <p className="text-[11px] text-white/70 truncate">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator helper */}
        <div className="absolute bottom-8 text-center text-xs text-white/50 tracking-widest uppercase animate-pulse pointer-events-none">
          {scrollProgress < 0.9 ? "↓ Keep scrolling to assemble" : "✦ Fully Assembled Masterpiece ✦"}
        </div>
      </div>
    </section>
  );
};