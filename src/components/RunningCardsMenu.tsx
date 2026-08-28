"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const circularMenuData = [
  {
    id: 1,
    title: "Celestial Lumina",
    category: "Haute Cuisine",
    price: "$95",
    description: "An ethereal composition of luminous botanicals and rare aquatic extracts crafted for the avant-garde palate.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Vespera Elixir",
    category: "Alchemical Drinks",
    price: "$45",
    description: "Infused with botanical smoke, midnight orchid nectar, and artisanal small-batch botanicals.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Aethelgard Reserve",
    category: "Masterwork",
    price: "$140",
    description: "A profound symphony of textures, featuring aged umami reductions and delicate edible gold structures.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Solarium Tartine",
    category: "Amuse-Bouche",
    price: "$60",
    description: "Crisp artisanal brioche topped with sun-ripened citrus emulsions and sea salt pearls.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Obsidian Velvet",
    category: "Avant-Garde Sweets",
    price: "$50",
    description: "Dark Valrhona chocolate structure encasing a molten passionfruit heart and vanilla bean whisper.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Abyssal Pearl",
    category: "Coastal Reserve",
    price: "$110",
    description: "Pristine catch served over imperial saffron broth with delicate sea foam and herbs.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000",
  },
];

export const RunningCardsMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const totalCards = circularMenuData.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <section className="py-24 bg-[#681403] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[700px]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFB11D]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Circular Carousel Stage */}
      <div className="relative w-full max-w-5xl h-[450px] sm:h-[500px] flex items-center justify-center perspective-[1200px]">
        {circularMenuData.map((card, index) => {
          // Calculate relative position from current index
          const offset = (index - currentIndex + totalCards) % totalCards;
          // Normalize offset for circular layout (-3 to +3 or similar)
          let angle = (index - currentIndex) * (360 / totalCards);
          
          // Determine scale and opacity based on proximity to active index (offset === 0)
          const isActive = offset === 0;
          const isPrev = offset === totalCards - 1;
          const isNext = offset === 1;

          // Compute transform values for circular 3D rotunda effect
          const radius = 280; // Distance from center
          const radian = (angle * Math.PI) / 180;
          const x = Math.sin(radian) * radius;
          const z = Math.cos(radian) * radius - radius; // Depth
          const scale = isActive ? 1.05 : isPrev || isNext ? 0.8 : 0.65;
          const opacity = isActive ? 1 : isPrev || isNext ? 0.75 : 0.3;
          const zIndex = isActive ? 30 : isPrev || isNext ? 20 : 10;
          const pointerEvents = isActive || isPrev || isNext ? "auto" : "none";

          return (
            <div
              key={card.id}
              onClick={() => {
                if (isActive) {
                  setSelectedCard(card);
                } else {
                  setCurrentIndex(index);
                }
              }}
              style={{
                transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                pointerEvents: pointerEvents as any,
              }}
              className={`absolute w-[280px] sm:w-[320px] h-[420px] sm:h-[460px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border shadow-2xl ${
                isActive
                  ? "border-[#EFB11D] shadow-[#EFB11D]/20 ring-4 ring-[#EFB11D]/20"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[#EFB11D] text-xs font-semibold tracking-wider uppercase mb-1">
                  {card.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-8 relative z-40">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-black/60 border border-white/25 text-white hover:bg-[#EFB11D] hover:text-neutral-950 hover:border-[#EFB11D] flex items-center justify-center transition-all shadow-xl active:scale-95"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2">
          {circularMenuData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#EFB11D]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-black/60 border border-white/25 text-white hover:bg-[#EFB11D] hover:text-neutral-950 hover:border-[#EFB11D] flex items-center justify-center transition-all shadow-xl active:scale-95"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Modal for Clickable Card Inspection */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-neutral-950/95 backdrop-blur-2xl border border-white/25 rounded-3xl overflow-hidden shadow-2xl text-white p-6 sm:p-8">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#EFB11D] flex items-center justify-center transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-[#EFB11D]/20 text-[#EFB11D] text-xs font-semibold tracking-wider uppercase border border-[#EFB11D]/40">
                  {selectedCard.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {selectedCard.title}
                </h3>
                <span className="block text-2xl font-serif font-bold text-[#EFB11D]">
                  {selectedCard.price}
                </span>
                <p className="text-white/80 text-sm leading-relaxed">
                  {selectedCard.description}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <Button
                    onClick={() => {
                      toast.success(`${selectedCard.title} added to your tasting menu!`);
                      setSelectedCard(null);
                    }}
                    className="flex-1 bg-[#EFB11D] hover:bg-[#d69d12] text-neutral-950 font-bold py-4 rounded-xl shadow-lg text-base"
                  >
                    Add to Tasting Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};