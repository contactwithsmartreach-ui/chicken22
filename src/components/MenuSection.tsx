"use client";

import React, { useState } from "react";
import { Sparkles, Flame, Check, Eye, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const menuCategories = [
  { id: "signature", label: "4K Signature Specialties" },
  { id: "starters", label: "Amuse-Bouche & Starters" },
  { id: "mains", label: "Haute Cuisine Mains" },
  { id: "desserts", label: "Avant-Garde Sweets" },
  { id: "cocktails", label: "Alchemical Elixirs" },
];

const menuItems = {
  signature: [
    {
      id: "wings-4k",
      name: "4K Glazed Crispy Artisanal Wings",
      subtitle: "Ultra High-Definition Crispy Texture & 24K Gold Dust",
      description: "Double-fried organic free-range wings tossed in a secret black truffle & hot blossom honey glaze, topped with toasted sesame, micro scallions, and edible 24K gold flakes. Rendered in full 4K sensory perfection.",
      price: "$38",
      calories: "490 kcal",
      is4K: true,
      tags: ["4K UHD Texture", "Chef's Signature", "Crunchy & Glazed"],
      details: ["Double-confit crisp exterior", "Organic heritage chicken", "Truffle honey emulsion", "Zero soggy skin"],
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=100&w=3840",
    },
    {
      id: "wagyu-wings",
      name: "Charred Umami Stuffed Wings",
      subtitle: "De-boned & Stuffed with A5 Wagyu Mince",
      description: "De-boned prime jumbo wings stuffed with seasoned A5 Miyazaki Wagyu, glazed with aged tare sauce, and charcoal-grilled over Japanese Binchotan.",
      price: "$46",
      calories: "540 kcal",
      is4K: true,
      tags: ["4K UHD", "Rare Recipe", "Binchotan Grilled"],
      details: ["100% Boneless center", "A5 Wagyu stuffing", "Aged 15-year tare glaze"],
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=100&w=3840",
    }
  ],
  starters: [
    {
      id: 1,
      name: "Truffled Hokkaido Scallop Carpaccio",
      description: "Thinly sliced diver scallops, black winter truffle shavings, Oscietra caviar, yuzu pearl emulsion.",
      price: "$48",
      calories: "320 kcal",
      tags: ["Signature", "Gluten-Free"],
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=100&w=3840",
    },
    {
      id: 2,
      name: "Foie Gras Torchon with Fig Gastrique",
      description: "Hudson Valley foie gras, house-baked brioche, mission fig reduction, smoked Maldon salt.",
      price: "$52",
      calories: "450 kcal",
      tags: ["Chef's Pick"],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=100&w=3840",
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
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=100&w=3840",
    },
    {
      id: 4,
      name: "Pan-Seared Chilean Sea Bass in Saffron Dashi",
      description: "Wild caught sea bass, baby fennel confit, sea urchin foam, saffron-infused imperial dashi broth.",
      price: "$92",
      calories: "520 kcal",
      tags: ["Sustainable", "Dairy-Free"],
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=100&w=3840",
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
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=100&w=3840",
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
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=100&w=3840",
    },
  ],
};

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("signature");
  const [selectedDish, setSelectedDish] = useState<any>(menuItems.signature[0]);
  const [is4KZoom, setIs4KZoom] = useState(false);

  const handleOrderDish = (dishName: string) => {
    toast.success(`${dishName} added to your tasting menu selection!`);
  };

  return (
    <section id="menu" className="py-28 px-6 lg:px-16 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Gastronomy Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 tracking-tight">
            Culinary Art in <span className="italic text-amber-400">4K Clarity</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Experience food photography and culinary texture rendered in ultra-high fidelity 4K resolution.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setSelectedDish((menuItems as any)[cat.id][0]);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === cat.id
                  ? "bg-amber-500 text-neutral-950 border-amber-400 shadow-lg shadow-amber-500/20 font-semibold"
                  : "bg-neutral-900/80 text-neutral-300 border-neutral-800 hover:border-amber-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Display Grid & Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* List of items */}
          <div className="lg:col-span-6 space-y-4">
            {(menuItems as any)[activeTab].map((item: any) => (
              <div
                key={item.id}
                onClick={() => setSelectedDish(item)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-6 ${
                  selectedDish.id === item.id
                    ? "bg-neutral-900 border-amber-500/60 shadow-xl shadow-amber-500/10"
                    : "bg-neutral-900/40 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover border border-neutral-800"
                    />
                    {item.is4K && (
                      <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-amber-500 text-neutral-950 font-black text-[9px] rounded-md tracking-wider shadow">
                        4K UHD
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-serif font-semibold text-lg text-white">{item.name}</h4>
                    </div>
                    <p className="text-sm text-neutral-400 line-clamp-1">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((t: string) => (
                        <span key={t} className="text-[10px] uppercase px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right whitespace-nowrap">
                  <span className="text-xl font-serif font-bold text-amber-400">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Selected Dish 4K Showcase Card */}
          <div className="lg:col-span-6 sticky top-8">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-neutral-900 p-8 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-neutral-800 group">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out cursor-zoom-in ${
                    is4KZoom ? "scale-150" : "group-hover:scale-105"
                  }`}
                  onClick={() => setIs4KZoom(!is4KZoom)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-amber-500/40 flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> 4K Ultra-HD Crisp Texture
                  </span>
                </div>

                <button
                  onClick={() => setIs4KZoom(!is4KZoom)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-neutral-950/70 backdrop-blur-md text-white border border-neutral-700 hover:border-amber-500 transition-colors"
                  title="Toggle 4K Zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-neutral-950/70 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30">
                    {selectedDish.calories}
                  </span>
                  <span className="text-2xl font-serif font-bold text-white">{selectedDish.price}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {selectedDish.name}
                </h3>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {selectedDish.details && (
                <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  {selectedDish.details.map((detail: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              <Button
                onClick={() => handleOrderDish(selectedDish.name)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 text-base"
              >
                Add {selectedDish.name} to Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};