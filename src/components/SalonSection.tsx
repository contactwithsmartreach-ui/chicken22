"use client";

import React from "react";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export const SalonSection = () => {
  return (
    <section id="salon" className="py-36 px-6 lg:px-16 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-tight leading-none text-white">
            An Oasis of <span className="italic font-normal text-amber-400">Refinement</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Located in the heart of the culinary district, L'Élixir offers an intimate sanctuary featuring acoustic-engineered private booths, bespoke lighting, and a temperature-controlled cellar housing over 1,200 rare vintages.
          </p>

          <div className="space-y-4 pt-4 border-t border-neutral-900">
            <div className="flex items-center gap-4 text-neutral-300 text-sm">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <span>428 Avenue des Champs-Élysées, 75008 Paris, France</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300 text-sm">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Tuesday – Sunday: 6:00 PM – 11:30 PM</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300 text-sm">
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <span>+33 1 42 68 55 00</span>
            </div>
          </div>

          <div className="pt-4">
            <ReservationModal>
              <Button className="bg-amber-400 hover:bg-amber-500 text-neutral-950 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-amber-400/10">
                Reserve Your Experience
              </Button>
            </ReservationModal>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-amber-400/5 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200"
              alt="L'Élixir Interior Dining Salon"
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};