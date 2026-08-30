"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash = ({ onComplete }: IntroSplashProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        onComplete();
      }, 500); // match transition duration
      return () => clearTimeout(removeTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#681403] flex items-center justify-center transition-opacity duration-500 select-none ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#681403] via-[#8b1e06] to-[#681403] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#EFB11D]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-16 h-16 rounded-full bg-[#EFB11D]/20 border border-[#EFB11D]/40 flex items-center justify-center text-[#EFB11D] mb-6 shadow-2xl">
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>
        <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3">
          L'ÉLIXIR
        </span>
        <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EFB11D] font-medium">
          3D Gastronomy Salon
        </span>
      </div>
    </div>
  );
};