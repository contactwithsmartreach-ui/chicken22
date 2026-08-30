"use client";

import React from "react";
import { Star, Award, Quote } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      quote: "L'Élixir completely reinvents fine dining. The 3D projection mapping combined with Chef Lucien Vance's culinary precision is nothing short of breathtaking.",
      source: "The New York Times",
      author: "Pete Wells",
      stars: 5
    },
    {
      quote: "A multi-sensory masterpiece. Each course tells a celestial story that lingers long after the evening concludes. Easily the most innovative restaurant in the world.",
      source: "Vogue Gastronomy",
      author: "Hélène Dupont",
      stars: 5
    },
    {
      quote: "Three Michelin stars well deserved. The Nebular Sea Urchin and Wagyu Supernova are triumphs of modern molecular alchemy.",
      source: "Michelin Guide 2025",
      author: "Inspector Review",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-neutral-900/30 border-t border-neutral-800/80 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Critical Acclaim</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-6">
            Celebrated by <span className="text-amber-400 italic">Global Critics</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light">
            Read what world-renowned culinary journalists and Michelin inspectors say about our 3D immersive salon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between relative group hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/10 group-hover:text-amber-500/20 transition-colors" />
              <div>
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 italic">
                  "{rev.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-900">
                <div className="font-serif font-bold text-white text-base">{rev.author}</div>
                <div className="text-xs text-amber-400 uppercase tracking-widest mt-0.5">{rev.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}