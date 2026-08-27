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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#EBE9E1]/80 backdrop-blur-xl border-b border-[#221c19]/10 py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-[#221c19] group-hover:text-[#E43D12] transition-colors">
            L'ÉLIXIR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#221c19]/80">
          <a href="#explore" className="hover:text-[#E43D12] transition-colors">EXPLORE</a>
          <a href="#gallery" className="hover:text-[#E43D12] transition-colors">CATALOGUE</a>
          <a href="#salon" className="hover:text-[#E43D12] transition-colors">THE SALON</a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#221c19] hover:text-[#E43D12]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#EBE9E1]/95 backdrop-blur-2xl border-b border-[#221c19]/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#explore" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-[#221c19] hover:text-[#E43D12]">Explore</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-[#221c19] hover:text-[#E43D12]">Catalogue</a>
          <a href="#salon" onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-[#221c19] hover:text-[#E43D12]">The Salon</a>
        </div>
      )}
    </header>
  );
};