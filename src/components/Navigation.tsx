"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-[#EFB11D] transition-colors">
            L'ÉLIXIR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/90">
          <a href="#explore" className="hover:text-[#EFB11D] transition-colors">EXPLORE</a>
          <a href="#gallery" className="hover:text-[#EFB11D] transition-colors">CATALOGUE</a>
          <a href="#salon" className="hover:text-[#EFB11D] transition-colors">THE SALON</a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-[#EFB11D]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#explore" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-white hover:text-[#EFB11D]">Explore</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-white hover:text-[#EFB11D]">Catalogue</a>
          <a href="#salon" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-white hover:text-[#EFB11D]">The Salon</a>
        </div>
      )}
    </header>
  );
};