"use client";

import React, { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const scrollMenuItems = [
  {
    id: 1,
    title: "Truffled Hokkaido Scallop",
    category: "Amuse-Bouche",
    price: "$48",
    description: "Delicate diver scallops with black winter truffle and Oscietra caviar pearls.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "A5 Wagyu Striploin",
    category: "Haute Cuisine",
    price: "$128",
    description: "Miyazaki A5 striploin with charred shallot purée and bone marrow jus.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "The Golden Sphere",
    category: "Avant-Garde",
    price: "$36",
    description: "Valrhona 70% dark chocolate with 24k gold leaf and passion fruit molten center.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Smoked Rosemary Old Fashioned",
    category: "Alchemical Elixir",
    price: "$28",
    description: "WhistlePig 10yr Rye whiskey infused with maple and smoked rosemary.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
  },
];

export const ScrollAnimationMenu = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32 bg-[#751604] text-white overflow-hidden border-t border-white/10 shadow-[inset_0_50px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#681403] to-transparent pointer-events-none z-20" />
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFB11D]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFB11D]/20 border border-[#EFB11D]/40 text-[#EFB11D] text-xs tracking-widest uppercase mb-4 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Kinetic Culinary Showcase
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white mb-6">
          Scroll-Animated <span className="italic text-[#EFB11D]">Masterpieces</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Glide through our curated collection of haute cuisine masterworks, engineered for the ultimate sensory preview.
        </p>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto px-6 lg:px-16 flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory relative z-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {scrollMenuItems.map((item) => (
          <div
            key={item.id}
            className="group relative flex-shrink-0 w-[340px] sm:w-[420px] h-[520px] rounded-3xl overflow-hidden snap-center border border-white/20 bg-neutral-950/50 shadow-2xl transition-all duration-700 hover:border-[#EFB11D] hover:-translate-y-3"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#EFB11D] text-xs font-semibold tracking-wider uppercase">
                  {item.category}
                </span>
                <span className="font-serif text-2xl font-bold text-[#EFB11D]">
                  {item.price}
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white mb-3 group-hover:text-[#EFB11D] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#8b1e06] pointer-events-none z-20" />
    </section>
  );
};