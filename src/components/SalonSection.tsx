"use client";

import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";

export const SalonSection = () => {
  return (
    <section id="salon" className="py-36 px-6 lg:px-16 bg-gradient-to-t from-[#EBE9E1] via-[#faefe6] to-[#f4dcd0] text-[#221c19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-tight leading-none text-[#221c19]">
            An Oasis of <span className="italic font-normal text-[#E43D12]">Refinement</span>
          </h2>
          <p className="text-[#221c19]/80 text-base sm:text-lg leading-relaxed">
            Located in the heart of the culinary district, L'Élixir offers an intimate sanctuary featuring acoustic-engineered private booths, bespoke lighting, and a temperature-controlled cellar housing over 1,200 rare vintages.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#221c19]/10">
            <div className="flex items-center gap-4 text-[#221c19]/80 text-sm font-medium">
              <MapPin className="w-5 h-5 text-[#E43D12] shrink-0" />
              <span>428 Avenue des Champs-Élysées, 75008 Paris, France</span>
            </div>
            <div className="flex items-center gap-4 text-[#221c19]/80 text-sm font-medium">
              <Clock className="w-5 h-5 text-[#E43D12] shrink-0" />
              <span>Tuesday – Sunday: 6:00 PM – 11:30 PM</span>
            </div>
            <div className="flex items-center gap-4 text-[#221c19]/80 text-sm font-medium">
              <Phone className="w-5 h-5 text-[#E43D12] shrink-0" />
              <span>+33 1 42 68 55 00</span>
            </div>
          </div>

          <div className="pt-4">
            <ReservationModal>
              <Button className="bg-[#E43D12] hover:bg-[#c9320d] text-white font-bold px-8 py-6 rounded-2xl shadow-lg shadow-[#E43D12]/25 text-base transition-all transform hover:-translate-y-0.5">
                Reserve Your Table Now
              </Button>
            </ReservationModal>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-[#FFA2B6]/20 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-white/80 bg-white/40 backdrop-blur-xl shadow-2xl p-3">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200"
              alt="L'Élixir Interior Dining Salon"
              className="w-full h-[520px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};