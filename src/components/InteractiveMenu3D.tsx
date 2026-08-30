"use client";

import React, { useState } from "react";
import { Sparkles, Wine, Flame, Eye, Volume2, ChevronRight, Award, CheckCircle2 } from "lucide-react";

interface Course {
  id: string;
  name: string;
  subtitle: string;
  category: "starter" | "main" | "dessert";
  description: string;
  projectionEffect: string;
  winePairing: string;
  image: string;
  temp: string;
  notes: string[];
}

const COURSES: Course[] = [
  {
    id: "course-1",
    name: "Nebula Sea Urchin Sphere",
    subtitle: "Hokkaido Uni, Yuzu Caviar, Liquid Nitrogen Seafoam",
    category: "starter",
    description: "Encased in an edible crystalline sphere that dissolves upon contact with an artisanal citrus tincture, releasing ocean mist and umami aromas.",
    projectionEffect: "Deep Sea Bioluminescent Waves & Pulsing Coral Reef",
    winePairing: "2018 Domaine Leflaive Puligny-Montrachet",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
    temp: "-4°C Chamber / 18°C Plate",
    notes: ["Wild Hokkaido Sea Urchin", "Finger Lime Caviar", "Kombu Dashi Essence"]
  },
  {
    id: "course-2",
    name: "Truffle Nebula Foie Gras",
    subtitle: "Black Périgord Truffle, Brioche Cloud, Sauternes Gelé",
    category: "starter",
    description: "Slightly torched A5-grade foie gras torchon resting on a levitating magnetic magnetic walnut slate, surrounded by aromatic truffle woodsmoke.",
    projectionEffect: "Autumn Forest Canopy & Floating Gold Leaf Leaves",
    winePairing: "1997 Château d'Yquem Sauternes",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1000",
    temp: "12°C Precision Chill",
    notes: ["Périgord Black Truffle", "Artisanal Brioche", "Sauternes Reduction"]
  },
  {
    id: "course-3",
    name: "A5 Wagyu Supernova",
    subtitle: "Miyazaki Beef, Smoked Bone Marrow Emulsion, Morel Crisp",
    category: "main",
    description: "Seared tableside with a 1200°C binchotan charcoal flame, accompanied by projection mapping that turns your dining plate into a celestial supernova.",
    projectionEffect: "Stellar Explosion & Interstellar Nebula Dust",
    winePairing: "2015 Château Margaux Premier Grand Cru",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1000",
    temp: "65°C Core Warmth",
    notes: ["Miyazaki A5 Tenderloin", "Morel Mushrooms", "Bone Marrow Glaze"]
  },
  {
    id: "course-4",
    name: "Glacial Glacier Arctic Char",
    subtitle: "Fjord Trout, Pickled Samphire, Dashi Snow",
    category: "main",
    description: "Sub-zero frozen dashi snow melts instantly over lightly cured arctic char when warm infused pine oil is drizzled over the centerpiece.",
    projectionEffect: "Northern Lights Aurora Borealis & Ice Crystals",
    winePairing: "2020 Egon Müller Scharzhofberger Riesling Kabinett",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
    temp: "2°C Arctic Crisp",
    notes: ["Norwegian Fjord Char", "Samphire Sea Succulent", "Pine Needle Oil"]
  },
  {
    id: "course-5",
    name: "The Golden Alchemy Sphere",
    subtitle: "Valrhona 72% Grand Cru, Edible 24K Gold, Tonka Bean Smoke",
    category: "dessert",
    description: "A delicate chocolate sphere cracked open with a silver ceremonial hammer to reveal warm salted caramel and liquid nitrogen raspberry pearls.",
    projectionEffect: "Liquid Gold Melt & Blooming Lotus Constellation",
    winePairing: "2010 Taylor Fladgate Vintage Port",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000",
    temp: "32°C Molten Center",
    notes: ["Valrhona Dark Chocolate", "24K Edible Gold Leaf", "Tonka Bean Infusion"]
  },
  {
    id: "course-6",
    name: "Starlight Citrus Cloud",
    subtitle: "Blood Orange Spherification, Basil Air, Yuzu Sorbet",
    category: "dessert",
    description: "Suspended in a levitating magnetic glass dome, this palate cleanser explodes with effervescent citrus notes and aromatic Thai basil mist.",
    projectionEffect: "Sunrise Over Tokyo Bay & Shimmering Stars",
    winePairing: "NV Billecart-Salmon Rosé Champagne",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
    temp: "-12°C Frost",
    notes: ["Sicilian Blood Orange", "Thai Basil Micro-foam", "Yuzu Crystals"]
  }
];

export default function InteractiveMenu3D() {
  const [activeCategory, setActiveCategory] = useState<"all" | "starter" | "main" | "dessert">("all");
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [projectionActive, setProjectionActive] = useState(true);

  const filteredCourses = activeCategory === "all" ? COURSES : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Ambient Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Immersive 12-Course Symphony</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-6">
            Interactive <span className="text-amber-400 italic">3D Projection</span> Menu
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light">
            Each creation is paired with synchronized 3D tabletop projection mapping, olfactory infusions, and acoustic soundscapes. Select a course to preview its alchemy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(["all", "starter", "main", "dessert"] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 shadow-lg shadow-amber-600/30"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:border-amber-500/30"
              }`}
            >
              {cat === "all" ? "Full 3D Experience" : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Main 3D Inspector Grid / Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          {/* Left: Course List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">Select Course to Inspect</h3>
            {filteredCourses.map(course => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  selectedCourse.id === course.id
                    ? "bg-amber-500/15 border-amber-500/60 shadow-lg shadow-amber-950/50 text-white"
                    : "bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:bg-neutral-900 hover:border-neutral-700 hover:text-neutral-200"
                }`}
              >
                <div>
                  <div className="text-xs text-amber-400 font-medium uppercase tracking-wider mb-1">{course.category}</div>
                  <div className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition-colors">{course.name}</div>
                  <div className="text-xs text-neutral-400 truncate max-w-[260px]">{course.subtitle}</div>
                </div>
                <ChevronRight className={`w-5 h-5 text-amber-400 transition-transform ${selectedCourse.id === course.id ? "translate-x-1" : ""}`} />
              </button>
            ))}
          </div>

          {/* Right: Selected Course 3D Inspector View */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Image Header with Projection Badge */}
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.name}
                className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              
              {/* 3D Projection Status Pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-neutral-950/80 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs text-amber-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>3D Projection: {selectedCourse.projectionEffect}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">{selectedCourse.category} course</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{selectedCourse.name}</h3>
                </div>
                <div className="bg-neutral-900/90 border border-neutral-700 px-3.5 py-1.5 rounded-xl text-xs text-neutral-300 font-mono">
                  {selectedCourse.temp}
                </div>
              </div>
            </div>

            {/* Course Details Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Ingredients / Notes */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">Key Elements & Provenance</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.notes.map((note, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Wine Pairing */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/80 border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Wine className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-400">Sommelier Selection</div>
                    <div className="text-sm sm:text-base font-serif font-medium text-amber-200">{selectedCourse.winePairing}</div>
                  </div>
                </div>
                <span className="text-xs text-amber-400 font-medium">Included in Pairing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}