"use client";

import React from "react";
import { Sparkles, Compass, ShieldCheck, HeartHandshake } from "lucide-react";

export const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-36 px-6 lg:px-16 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs tracking-widest uppercase mb-6 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            Our Manifesto
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-none mb-8">
            Artistry in <span className="italic font-normal text-amber-400">Every Detail</span>
          </h2>
          <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
            At L'Élixir, dining is elevated to an interactive multi-sensory performance. We bridge heritage French technique with futuristic digital curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-white">Biodynamic Sourcing</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every vegetable, herb, and grain is harvested daily from certified organic estates across the French countryside and sustainable local reserves.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-white">Immersive Curation</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Our 3D digital catalogue allows patrons to inspect provenance, aroma notes, and culinary geometry long before stepping into our dining salon.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-white">Impeccable Hospitality</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Guided by master sommeliers and Michelin-starred culinary hosts, your experience is tailored precisely to your personal palate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};