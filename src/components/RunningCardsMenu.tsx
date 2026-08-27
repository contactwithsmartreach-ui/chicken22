"use client";

import React, { useState } from "react";
import { Sparkles, Eye, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const runningCardsData = [
  {
    id: 1,
    title: "Truffled Hokkaido Scallop",
    category: "Amuse-Bouche",
    price: "$48",
    description: "Thinly sliced diver scallops, black winter truffle shavings, Oscietra caviar, and yuzu pearl emulsion.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "A5 Wagyu Striploin",
    category: "Haute Cuisine",
    price: "$128",
    description: "Miyazaki prefecture A5 striploin, charred shallot purée, roasted bone marrow jus, and chanterelle mushrooms.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "The Golden Sphere Dome",
    category: "Avant-Garde Sweets",
    price: "$36",
    description: "Valrhona 70% dark chocolate shell, 24k edible gold leaf, passion fruit molten center, Tahitian vanilla bean gelato.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Smoked Rosemary Old Fashioned",
    category: "Alchemical Elixirs",
    price: "$28",
    description: "WhistlePig 10yr Rye, Angostura bitters, maple-infused smoked rosemary infusion, charred orange peel.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Pan-Seared Chilean Sea Bass",
    category: "Coastal Reserve",
    price: "$92",
    description: "Wild caught sea bass, baby fennel confit, sea urchin foam, saffron-infused imperial dashi broth.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Hudson Valley Foie Gras",
    category: "Signature Starter",
    price: "$52",
    description: "Hudson Valley foie gras, house-baked brioche, mission fig reduction, smoked Maldon salt.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
  },
];

export const RunningCardsMenu = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleOrder = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success(`${title} added to your tasting selection!`);
  };

  return (
    <section className="py-24 bg-[#681403] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFB11D]/15 border border-[#EFB11D]/40 text-[#EFB11D] text-xs tracking-widest uppercase mb-4 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Motion Carousel
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white mb-4">
          Infinite <span className="italic font-normal text-[#EFB11D]">Gastronomy</span>
        </h2>
        <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
          Hover to pause or click any masterwork card to inspect details and add to your tasting menu.
        </p>
      </div>

      {/* Marquee Running Cards Track */}
      <div className="relative w-full overflow-hidden py-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#681403] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#681403] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...runningCardsData, ...runningCardsData].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => setSelectedCard(card)}
              className="group relative w-[320px] sm:w-[380px] rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/20 cursor-pointer transition-all duration-500 hover:border-[#EFB11D] hover:shadow-2xl hover:shadow-black/60 transform hover:-translate-y-2 flex-shrink-0"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#EFB11D] text-xs font-semibold tracking-wider uppercase border border-white/10">
                  {card.category}
                </span>
                <span className="absolute bottom-4 right-4 text-xl font-serif font-bold text-white bg-black/60 px-3 py-1 rounded-xl backdrop-blur-md border border-white/10">
                  {card.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-[#EFB11D] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <span className="text-xs text-[#EFB11D] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <Eye className="w-3.5 h-3.5 mr-1" /> Inspect Creation
                  </span>
                  <button
                    onClick={(e) => handleOrder(card.title, e)}
                    className="w-9 h-9 rounded-full bg-[#EFB11D] text-neutral-950 flex items-center justify-center hover:bg-[#d69d12] transition-colors shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Clickable Card Inspection */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-neutral-950/95 backdrop-blur-2xl border border-white/25 rounded-3xl overflow-hidden shadow-2xl text-white p-6 sm:p-8">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#EFB11D] flex items-center justify-center transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#EFB11D]/20 text-[#EFB11D] text-xs font-semibold tracking-wider uppercase border border-[#EFB11D]/40">
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
                    className="flex-1 bg-[#EFB11D] hover:bg-[#d69d12] text-neutral-950 font-bold py-3 rounded-xl shadow-lg"
                  >
                    Add to Tasting Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Marquee CSS Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};