"use client";

import React from "react";
import { Sparkles, Eye, Volume2, Wind, UtensilsCrossed } from "lucide-react";

export default function Experience3D() {
  const features = [
    {
      icon: Eye,
      title: "Tabletop 3D Projection Mapping",
      description: "Custom laser micro-projectors paint animated starscapes, glowing coral reefs, and blooming lotus flowers directly onto your plate and dining surface."
    },
    {
      icon: Wind,
      title: "Olfactory Atmosphere Synced",
      description: "Subtle aromatic diffusers release notes of damp pine forest, ocean salt mist, or roasted tonka bean timed precisely to each course's narrative."
    },
    {
      icon: Volume2,
      title: "Spatial 3D Audioscapes",
      description: "Bespoke acoustic soundscapes composed by electronic virtuoso Paul Vance envelop you in the ambient sounds of crackling hearths or deep ocean currents."
    },
    {
      icon: UtensilsCrossed,
      title: "Molecular Alchemy Lab",
      description: "Every ingredient is molecularly engineered using cryo-centrifugation, ultrasonic cavitation, and vacuum distillation for intense, crystalline purity."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-neutral-900/40 border-y border-neutral-800/80 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Multi-Sensory Technology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-6">
            The Anatomy of an <span className="text-amber-400 italic">Immersive Salon</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light">
            We merge high-end culinary arts with cutting-edge projection technology to stimulate all five senses simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 hover:border-amber-500/40 transition-all duration-300 flex flex-col group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600/20 via-amber-400/20 to-yellow-300/30 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-white">{feat.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}