"use client";

import React from "react";
import { Award, Sparkles, Utensils } from "lucide-react";

export default function ChefSection() {
  return (
    <section id="chef" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Chef Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-950/50">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000"
                alt="Chef Lucien Vance"
                className="w-full h-[500px] object-cover filter contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-950/80 border border-amber-500/30 backdrop-blur-md">
                <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-1">Executive Chef & Alchemist</div>
                <div className="text-2xl font-serif font-bold text-white">Lucien Vance</div>
                <div className="text-neutral-400 text-xs mt-1">Former Head Chef at L'Arpège Paris & El Celler de Can Roca</div>
              </div>
            </div>
          </div>

          {/* Right: Chef Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6 w-fit">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Culinary Visionary</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-6">
              "Food is not merely sustenance; it is a portal to memory and emotion."
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Chef Lucien Vance spent over two decades in Paris, Tokyo, and Copenhagen mastering both classical French escoffier techniques and avant-garde molecular physics.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-8">
              At L'Élixir, his 12-course menu is a deeply personal chronicle of childhood memories, oceanic explorations, and celestial wonders brought to life through 3D spatial projection.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
              <div>
                <div className="text-3xl font-serif font-bold text-amber-400 mb-1">22+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Years Mastery</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-amber-400 mb-1">3</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Michelin Stars</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-amber-400 mb-1">100%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Artisanal Produce</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}