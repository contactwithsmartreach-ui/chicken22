"use client";

import React from "react";
import { Award, Sparkles, Quote } from "lucide-react";

export const ChefStory = () => {
  return (
    <section id="story" className="py-36 px-6 lg:px-16 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />
          <div className="relative rounded-[2rem] overflow-hidden border border-amber-500/30 shadow-2xl bg-neutral-900/50 backdrop-blur-xl group">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
              alt="Executive Chef preparing dishes"
              className="w-full h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-950/80 backdrop-blur-2xl border border-amber-500/20 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-400 mb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">Michelin Three Stars 2024</span>
              </div>
              <p className="text-neutral-200 font-serif italic text-lg leading-relaxed">
                "We don't merely cook food; we sculpt sensory memories through flavor, geometry, and passion."
              </p>
              <p className="text-xs text-amber-400/80 mt-3 font-medium tracking-wider uppercase">— Chef Jean-Luc Moreau, Culinary Director</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            Our Philosophy
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
            Where Haute Cuisine Meets <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Digital Artistry</span>
          </h2>
          
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            Founded in Paris and re-imagined for the modern connoisseur, L'Élixir combines century-old French culinary mastery with state-of-the-art sensory design. Every ingredient is sourced from organic biodynamic farms and private coastal reserves.
          </p>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Our immersive menu previews ensure that your culinary journey begins the moment you step into our virtual salon, setting unprecedented standards in fine dining hospitality.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950 border border-neutral-800/80 backdrop-blur-xl shadow-xl hover:border-amber-500/40 transition-colors">
              <span className="block text-4xl font-serif font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1.5">100%</span>
              <span className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Organic Biodynamic Produce</span>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950 border border-neutral-800/80 backdrop-blur-xl shadow-xl hover:border-amber-500/40 transition-colors">
              <span className="block text-4xl font-serif font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1.5">1,200+</span>
              <span className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Rare Vintage Wine Cellar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};