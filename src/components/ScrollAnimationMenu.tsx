"use client";

import React, { useRef } from "react";
import { Sparkles } from "lucide-react";

export const ScrollAnimationMenu = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#751604] text-white overflow-hidden border-t border-white/10 shadow-[inset_0_50px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#681403] to-transparent pointer-events-none z-20" />
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EFB11D]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFB11D]/20 border border-[#EFB11D]/40 text-[#EFB11D] text-xs tracking-widest uppercase mb-4 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Kinetic Culinary Art
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white mb-6">
          The Scroll-Animated <span className="italic text-[#EFB11D]">Masterpiece</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Scroll smoothly to experience our avant-garde dishes transform and scale in real-time as you navigate through our culinary philosophy.
        </p>
      </div>

      {/* Interactive Framer-Inspired Scroll Card Showcase */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="group relative rounded-3xl overflow-hidden bg-neutral-950/60 border border-white/20 p-8 shadow-2xl transition-all duration-500 hover:border-[#EFB11D] hover:-translate-y-2">
          <div className="h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
              alt="Scallop Carpaccio"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <span className="text-[#EFB11D] text-xs font-semibold tracking-wider uppercase block mb-1">Amuse-Bouche</span>
          <h3 className="font-serif text-2xl font-bold text-white mb-2">Hokkaido Scallop Harmony</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Layered with black winter truffle and Oscietra caviar pearls, floating on yuzu emulsion.
          </p>
        </div>

        <div className="group relative rounded-3xl overflow-hidden bg-neutral-950/60 border border-white/20 p-8 shadow-2xl transition-all duration-500 hover:border-[#EFB11D] hover:-translate-y-2 md:-translate-y-6">
          <div className="h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800"
              alt="Wagyu Striploin"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <span className="text-[#EFB11D] text-xs font-semibold tracking-wider uppercase block mb-1">Haute Cuisine</span>
          <h3 className="font-serif text-2xl font-bold text-white mb-2">A5 Miyazaki Wagyu</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Presented with bone marrow glaze, charred shallot purée, and wild chanterelle mushrooms.
          </p>
        </div>

        <div className="group relative rounded-3xl overflow-hidden bg-neutral-950/60 border border-white/20 p-8 shadow-2xl transition-all duration-500 hover:border-[#EFB11D] hover:-translate-y-2">
          <div className="h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800"
              alt="Golden Sphere"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <span className="text-[#EFB11D] text-xs font-semibold tracking-wider uppercase block mb-1">Avant-Garde</span>
          <h3 className="font-serif text-2xl font-bold text-white mb-2">The Golden Sphere</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Valrhona 70% dark chocolate encrusted with 24k gold leaf and passion fruit molten center.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#8b1e06] pointer-events-none z-20" />
    </section>
  );
};