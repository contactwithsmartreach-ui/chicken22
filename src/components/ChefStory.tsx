"use client";

import React from "react";
import { Award, UtensilsCrossed, Sparkles } from "lucide-react";

export const ChefStory = () => {
  return (
    <section id="story" className="py-28 px-6 lg:px-16 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
              alt="Executive Chef preparing dishes"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800">
              <div className="flex items-center gap-3 text-amber-400 mb-2">
                <Award className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase">Michelin Three Stars 2024</span>
              </div>
              <p className="text-neutral-300 font-serif italic text-lg">
                "We don't merely cook food; we sculpt sensory memories through flavor, geometry, and passion."
              </p>
              <p className="text-xs text-neutral-400 mt-2">— Chef Jean-Luc Moreau, Culinary Director</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Our Philosophy
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Where Haute Cuisine Meets <span className="italic text-amber-400">Digital Artistry</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Founded in Paris and re-imagined for the modern era, L'Élixir combines century-old French culinary mastery with state-of-the-art sensory design. Every ingredient is sourced from organic biodynamic farms and private coastal reserves.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Our immersive 3D menu previews ensure that your culinary journey begins the moment you step into our virtual salon, setting unprecedented standards in fine dining hospitality.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <span className="block text-3xl font-serif font-bold text-amber-400 mb-1">100%</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Organic Biodynamic Produce</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <span className="block text-3xl font-serif font-bold text-amber-400 mb-1">1,200+</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Rare Vintage Wine Cellar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};