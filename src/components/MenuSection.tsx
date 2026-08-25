"use client";

import React, { useState } from "react";
import { Sparkles, Flame, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const menuCategories = [
  { id: "starters", label: "Amuse-Bouche & Starters" },
  { id: "mains", label: "Haute Cuisine Mains" },
  { id: "desserts", label: "Avant-Garde Sweets" },
  { id: "cocktails", label: "Alchemical Elixirs" },
];

const menuItems = {
  starters: [
    {
      id: 1,
      name: "Truffled Hokkaido Scallop Carpaccio",
      description: "Thinly sliced diver scallops, black winter truffle shavings, Oscietra caviar, yuzu pearl emulsion.",
      price: "$48",
      calories: "320 kcal",
      tags: ["Signature", "Gluten-Free"],
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Foie Gras Torchon with Fig Gastrique",
      description: "Hudson Valley foie gras, house-baked brioche, mission fig reduction, smoked Maldon salt.",
      price: "$52",
      calories: "450 kcal",
      tags: ["Chef's Pick"],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    },
  ],
  mains: [
    {
      id: 3,
      name: "A5 Wagyu Tenderloin with Bone Marrow Glaze",
      description: "Miyazaki prefecture A5 striploin, charred shallot purée, roasted bone marrow jus, chanterelle mushrooms.",
      price: "$128",
      calories: "780 kcal",
      tags: ["Grand Cru", "Signature"],
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Pan-Seared Chilean Sea Bass in Saffron Dashi",
      description: "Wild caught sea bass, baby fennel confit, sea urchin foam, saffron-infused imperial dashi broth.",
      price: "$92",
      calories: "520 kcal",
      tags: ["Sustainable", "Dairy-Free"],
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    },
  ],
  desserts: [
    {
      id: 5,
      name: "The Golden Sphere 3D Chocolate Dome",
      description: "Valrhona 70% dark chocolate shell, 24k edible gold leaf, passion fruit molten center, Tahitian vanilla bean gelato.",
      price: "$36",
      calories: "410 kcal",
      tags: ["Must Try", "Artisan"],
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800",
    },
  ],
  cocktails: [
    {
      id: 6,
      name: "Smoked Rosemary Old Fashioned",
      description: "WhistlePig 10yr Rye, Angostura bitters, maple-infused smoked rosemary infusion, charred orange peel.",
      price: "$28",
      calories: "180 kcal",
      tags: ["Elixir", "Popular"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("mains");
  const [selectedDish, setSelectedDish] = useState<any>(menuItems.mains[0]);

  const handleInspectDish = (dishName: string) => {
    toast.success(`Inspecting ${dishName} tasting profile`);
  };

  return (
    <section id="menu" className="py-32 px-6 lg:px-16 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background ambient glowing gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-[0.25em] uppercase mb-4 font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            Interactive Catalog
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            The Gastronomy <span className="italic text-amber-400">Collection</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
            Examine our seasonal creations crafted with precision, rare ingredients, and visionary artistry.
          </p>
        </div>

        {/* Glassmorphism Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setSelectedDish((menuItems as any)[cat.id][0]);
              }}
              className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-500 backdrop-blur-xl border ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-neutral-900/60 text-neutral-300 border-neutral-800/80 hover:border-amber-500/40 hover:bg-neutral-900/90"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Display Grid & Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* List of items */}
          <div className="lg:col-span-6 space-y-4">
            {(menuItems as any)[activeTab].map((item: any) => (
              <div
                key={item.id}
                onClick={() => setSelectedDish(item)}
                className={`group p-5 sm:p-6 rounded-3xl border transition-all duration-500 cursor-pointer flex items-center justify-between gap-5 backdrop-blur-xl ${
                  selectedDish.id === item.id
                    ? "bg-neutral-900/90 border-amber-500/50 shadow-2xl shadow-amber-500/10 scale-[1.02]"
                    : "bg-neutral-900/30 border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-neutral-800 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-1 mt-1 font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2.5">
                      {item.tags.map((t: string) => (
                        <span key={t} className="text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Selected Dish Glassmorphism Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-neutral-900/90 to-neutral-950 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-neutral-800 shadow-inner group">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30 tracking-wider">
                    {selectedDish.calories}
                  </span>
                  <span className="text-3xl font-serif font-bold text-white drop-shadow-md">{selectedDish.price}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                {selectedDish.name}
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                {selectedDish.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  onClick={() => handleInspectDish(selectedDish.name)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold py-4 rounded-2xl shadow-xl shadow-amber-500/20 text-base transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Eye className="w-4 h-4 mr-2" /> Inspect Culinary Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};