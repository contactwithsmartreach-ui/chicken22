"use client";

import React, { useState, useEffect } from "react";
import { UtensilsCrossed, Menu, X, Sparkles } from "lucide-react";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-300">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-wider text-white">L'ÉLIXIR</span>
            <span className="block text-[9px] uppercase tracking-widest text-amber-400 font-medium">Haute Gastronomy</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors">
            Experience
          </a>
          <a href="#menu" className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors">
            3D Menu
          </a>
          <a href="#story" className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors">
            Our Philosophy
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <ReservationModal>
            <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/20 text-sm">
              Book a Table
            </Button>
          </ReservationModal>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-amber-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-200 hover:text-amber-400"
          >
            Experience
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-200 hover:text-amber-400"
          >
            3D Menu
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-200 hover:text-amber-400"
          >
            Our Philosophy
          </a>
          <ReservationModal>
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-3 rounded-xl mt-2">
              Book a Table
            </Button>
          </ReservationModal>
        </div>
      )}
    </header>
  );
};