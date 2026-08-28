"use client";

import React, { useState, useRef } from "react";
import { Eye, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const runningCardsData = [
  {
    id: 1,
    title: "Truffled Hokkaido Scallop",
    category: "Amuse-Bouche",
    price: "$48",
    description: "Thinly sliced diver scallops, black winter truffle shavings, Oscietra caviar, and yuzu pearl emulsion.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "A5 Wagyu Striploin",
    category: "Haute Cuisine",
    price: "$128",
    description: "Miyazaki prefecture A5 striploin, charred shallot purée, roasted bone marrow jus, and chanterelle mushrooms.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "The Golden Sphere Dome",
    category: "Avant-Garde Sweets",
    price: "$36",
    description: "Valrhona 70% dark chocolate shell, 24k edible gold leaf, passion fruit molten center, Tahitian vanilla bean gelato.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Smoked Rosemary Old Fashioned",
    category: "Alchemical Elixirs",
    price: "$28",
    description: "WhistlePig 10yr Rye, Angostura bitters, maple-infused smoked rosemary infusion, charred orange peel.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Pan-Seared Chilean Sea Bass",
    category: "Coastal Reserve",
    price: "$92",
    description: "Wild caught sea bass, baby fennel confit, sea urchin foam, saffron-infused imperial dashi broth.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Hudson Valley Foie Gras",
    category: "Signature Starter",
    price: "$52",
    description: "Hudson Valley foie gras, house-baked brioche, mission fig reduction, smoked Maldon salt.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
  },
];

export const RunningCardsMenu = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleOrder = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success(`${title} added to your tasting selection!`);
  };

  return (
    <section className="py-20 bg-[#681403] text-white relative overflow-hidden">
      {/* Manual Sideways Scrolling Track with Full Image 3D Cards */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 lg:px-16 py-4 no-scrollbar scroll-smooth snap-x snap-mandatory relative z-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {runningCardsData.map((card, idx) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="group relative flex-shrink-0 w-[320px] sm:w-[380px] h-[500px] rounded-3xl overflow-hidden cursor-pointer snap-center border border-white/20 shadow-2xl transition-all duration-700 hover:border-[#EFB11D] hover:-translate-y-3"
          >
            {/* Full Screen Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[#EFB11D] text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-lg">
                {card.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-serif font-bold text-lg border border-white/20 shadow-lg">
                {card.price}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#EFB11D] transition-colors leading-tight">
                {card.title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                {card.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-xs text-[#EFB11D] font-semibold tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <Eye className="w-4 h-4 mr-1" /> Inspect 3D View
                </span>
                <button
                  onClick={(e) => handleOrder(card.title, e)}
                  className="w-10 h-10 rounded-full bg-[#EFB11D] text-neutral-950 flex items-center justify-center hover:bg-[#d69d12] transition-transform active:scale-95 shadow-lg"
                  aria-label="Add to menu"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
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