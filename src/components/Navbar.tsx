"use client";

import React, { useState, useEffect } from "react";
import { Utensils, Menu, X, Sparkles, Calendar, Compass, PhoneCall } from "lucide-react";
import { getAssetPath } from "@/lib/config";

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/90 border-b border-amber-500/20 backdrop-blur-xl py-4 shadow-2xl shadow-neutral-950/80"
          : "bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-0.5 shadow-lg shadow-amber-600/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              L'ÉLIXIR
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80 font-medium -mt-1">
              3D Gastronomy Salon
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>3D Menu</span>
          </a>
          <a href="#experience" className="hover:text-amber-400 transition-colors">
            <span>The Journey</span>
          </a>
          <a href="#chef" className="hover:text-amber-400 transition-colors">
            <span>Chef Lucien</span>
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">
            <span>Press & Acclaim</span>
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">
            <span>Salon & Private</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-semibold text-sm tracking-wide hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-600/20 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400 hover:bg-neutral-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-950/95 border-b border-amber-500/20 backdrop-blur-2xl py-6 px-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-900 font-medium flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>3D Menu</span>
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-900 font-medium"
          >
            The Journey
          </a>
          <a
            href="#chef"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-900 font-medium"
          >
            Chef Lucien Vance
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-900 font-medium"
          >
            Press & Acclaim
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-900 font-medium"
          >
            Salon & Private
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
        </div>
      )}
    </nav>
  );
}