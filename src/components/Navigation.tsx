"use client";

import React, { useState, useEffect } from "react";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-900 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            L'ÉLIXIR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
          <a href="#explore" className="hover:text-amber-400 transition-colors">EXPLORE</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">CATALOGUE</a>
          <a href="#philosophy" className="hover:text-amber-400 transition-colors">PHILOSOPHY</a>
          <a href="#salon" className="hover:text-amber-400 transition-colors">THE SALON</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ReservationModal>
            <Button className="bg-amber-400 hover:bg-amber-500 text-neutral-950 font-semibold px-6 py-2.5 rounded-full tracking-wider text-xs uppercase transition-all duration-300 shadow-lg shadow-amber-400/10">
              Reserve Table
            </Button>
          </ReservationModal>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-900 p-6 flex flex-col gap-4 md:hidden">
          <a href="#explore" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-neutral-300 hover:text-amber-400">Explore</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-neutral-300 hover:text-amber-400">Catalogue</a>
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-neutral-300 hover:text-amber-400">Philosophy</a>
          <a href="#salon" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-neutral-300 hover:text-amber-400">The Salon</a>
          <ReservationModal>
            <Button className="w-full bg-amber-400 text-neutral-950 font-semibold py-3 rounded-full mt-2">
              Reserve Table
            </Button>
          </ReservationModal>
        </div>
      )}
    </header>
  );
};