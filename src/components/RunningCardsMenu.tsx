"use client";

import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
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
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolledIn, setHasScrolledIn] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setHasScrolledIn(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous auto-scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let speed = 1.2;

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const duplicatedCards = [...circularMenuData, ...circularMenuData, ...circularMenuData];

  return (
    <section ref={ref} className="py-24 bg-[#681403] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[700px]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFB11D]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Title Header */}
      <div className={`text-center mb-12 px-6 relative z-10 transition-all duration-500 ease-out ${hasScrolledIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
        <span className="text-[#EFB11D] text-xs font-semibold tracking-widest uppercase mb-2 block">
          Immersive Experience
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Continuous Culinary Stream
        </h2>
      </div>

      {/* Running Marquee Cards Track */}
      <div className={`w-full transition-all duration-500 delay-150 ease-out ${hasScrolledIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="w-full flex gap-8 overflow-x-auto px-6 py-8 no-scrollbar cursor-grab active:cursor-grabbing select-none relative z-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => setSelectedCard(card)}
              className="group relative flex-shrink-0 w-[300px] sm:w-[340px] h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/20 shadow-2xl transition-all duration-500 hover:border-[#EFB11D] hover:-translate-y-3"
            >
              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* High-Quality Diagonal Glass Specular Reflection Highlight */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:animate-[shine_1.2s_ease-in-out] pointer-events-none" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[#EFB11D] text-xs font-semibold tracking-wider uppercase mb-1">
                  {card.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-[#EFB11D] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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