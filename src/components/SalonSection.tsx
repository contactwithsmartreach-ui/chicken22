"use client";

import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export const SalonSection = () => {
  return (
    <section id="salon" className="py-36 px-6 lg:px-16 bg-gradient-to-b from-[#CDFAF8] via-[#b5f8f5] to-[#CDFAF8] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-tight leading-none text-neutral-900">
            An Oasis of <span className="italic font-normal text-teal-800">Refinement</span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
            Located in the heart of the culinary district, L'Élixir offers an intimate sanctuary featuring acoustic-engineered private booths, bespoke lighting, and a temperature-controlled cellar housing over 1,200 rare vintages.
          </p>

          <div className="space-y-4 pt-4 border-t border-teal-900/10">
            <div className="flex items-center gap-4 text-neutral-800 text-sm">
              <MapPin className="w-5 h-5 text-teal-800 shrink-0" />
              <span className="font-medium">428 Avenue des Champs-Élysées, 75008 Paris, France</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-800 text-sm">
              <Clock className="w-5 h-5 text-teal-800 shrink-0" />
              <span className="font-medium">Tuesday – Sunday: 6:00 PM – 11:30 PM</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-800 text-sm">
              <Phone className="w-5 h-5 text-teal-800 shrink-0" />
              <span className="font-medium">+33 1 42 68 55 00</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-teal-300/30 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200"
              alt="L'Élixir Interior Dining Salon"
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};