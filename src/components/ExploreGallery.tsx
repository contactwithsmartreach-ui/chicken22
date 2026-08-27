"use client";

import React, { useState } from "react";
import { Eye, X } from "lucide-react";

const exploreDishes = [
  {
    id: 1,
    name: "Truffled Hokkaido Scallop Carpaccio",
    category: "Amuse-Bouche",
    description: "Thinly sliced diver scallops paired with black winter truffle shavings, Oscietra caviar, and delicate yuzu pearl emulsion.",
    origin: "Hokkaido, Japan & Périgord, France",
    tastingNotes: "Briny, citrus-floral, creamy truffle finish",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    name: "A5 Wagyu Striploin with Bone Marrow Glaze",
    category: "Haute Cuisine",
    description: "Miyazaki prefecture A5 striploin accompanied by charred shallot purée, roasted bone marrow jus, and wild chanterelle mushrooms.",
    origin: "Miyazaki Prefecture, Japan",
    tastingNotes: "Rich umami, buttery melt-in-mouth texture",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    name: "The Golden Sphere 3D Chocolate Dome",
    category: "Avant-Garde Sweets",
    description: "Valrhona 70% dark chocolate shell encrusted with 24k edible gold leaf, passion fruit molten center, and Tahitian vanilla bean gelato.",
    origin: "Tain-l'Hermitage, France",
    tastingNotes: "Bittersweet cocoa, tropical tartness, rich vanilla",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    name: "Smoked Rosemary Old Fashioned Elixir",
    category: "Alchemical Beverages",
    description: "WhistlePig 10yr Rye whiskey infused with maple and smoked rosemary, finished with Angostura bitters and charred orange peel.",
    origin: "Vermont, USA & Provençal Herbs",
    tastingNotes: "Woodsmoke, caramelized maple, warm spice",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    name: "Pan-Seared Chilean Sea Bass in Saffron Dashi",
    category: "Coastal Reserve",
    description: "Wild-caught sea bass served over baby fennel confit, sea urchin foam, and an imperial saffron-infused dashi broth.",
    origin: "Antarctic Waters & Kashmiri Saffron",
    tastingNotes: "Delicate flaked fish, earthy saffron, savory dashi",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    name: "Hudson Valley Foie Gras Torchon",
    category: "Signature Starter",
    description: "Silky torchon served with house-baked brioche, mission fig reduction, and smoked Maldon sea salt crystals.",
    origin: "New York, USA",
    tastingNotes: "Luxuriously smooth, sweet fig contrast",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
  },
];

const categories = ["All Creations", "Amuse-Bouche", "Haute Cuisine", "Avant-Garde Sweets", "Alchemical Beverages", "Coastal Reserve", "Signature Starter"];

export const ExploreGallery = () => {
  const [activeModalDish, setActiveModalDish] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Creations");

  const filteredDishes = selectedCategory === "All Creations"
    ? exploreDishes
    : exploreDishes.filter(dish => dish.category === selectedCategory);

  return (
    <section id="gallery" className="py-32 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-tight text-white leading-none">
            Explore <span className="italic font-normal text-amber-400">Creations</span>
          </h2>
        </div>
        <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
          Select a category below to filter masterworks and inspect their culinary profile.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex-shrink-0 border ${
                selectedCategory === cat
                  ? "bg-amber-400 text-neutral-950 border-amber-400 shadow-lg shadow-amber-400/10"
                  : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Sideways Scrolling Track */}
      <div
        className="flex gap-8 overflow-x-auto px-6 lg:px-16 pb-12 pt-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredDishes.map((dish, index) => (
          <div
            key={dish.id}
            onClick={() => setActiveModalDish(dish)}
            className="group relative flex-shrink-0 w-[340px] sm:w-[420px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer snap-center transition-all duration-500 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-400/10 transform hover:-translate-y-2"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

              <div className="absolute bottom-4 left-6 font-mono text-xs text-amber-400/80">
                0{index + 1} / 0{filteredDishes.length}
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-amber-300 transition-colors">
                {dish.name}
              </h3>
              <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed mb-6">
                {dish.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
                <span className="tracking-wider uppercase">{dish.origin.split("&")[0]}</span>
                <span className="text-amber-400 font-medium tracking-wide flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Dish <Eye className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dish Inspection Modal */}
      {activeModalDish && (
        <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveModalDish(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full min-h-[300px]">
                <img
                  src={activeModalDish.image}
                  alt={activeModalDish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 md:hidden to-transparent" />
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold tracking-wider uppercase border border-amber-400/20">
                    {activeModalDish.category}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    {activeModalDish.name}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {activeModalDish.description}
                  </p>

                  <div className="pt-4 space-y-3 border-t border-neutral-800">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-1">Sourcing Origin</span>
                      <span className="text-sm text-neutral-200 font-medium">{activeModalDish.origin}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-1">Sensory Profile</span>
                      <span className="text-sm text-amber-400 font-medium">{activeModalDish.tastingNotes}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 italic">Catalogue Inspection Mode</span>
                  <button
                    onClick={() => setActiveModalDish(null)}
                    className="px-6 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Close Inspection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};