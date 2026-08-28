"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.25;
    video.play().catch(() => {
      // Autoplay fallback if blocked by browser
    });
  }, []);

  return (
    <div className="relative h-screen bg-[#681403] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu will-change-auto"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-neutral-950/40 pointer-events-none" />

        {/* Centered Large Bold Bubble Title & Logo */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto -mt-12 pointer-events-none">
          <div className="w-16 h-16 rounded-3xl bg-[#EFB11D]/20 border border-[#EFB11D]/50 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl animate-pulse">
            <Sparkles className="w-8 h-8 text-[#EFB11D]" />
          </div>

          <span className="text-xs uppercase tracking-[0.4em] text-[#EFB11D] font-semibold mb-3">
            Michelin Three Stars • Paris
          </span>

          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-2xl mb-6">
            L'Élixir
          </h1>

          <div className="inline-block px-8 py-3 rounded-full bg-[#EFB11D] text-neutral-950 font-sans font-black tracking-widest uppercase text-sm sm:text-base shadow-2xl shadow-[#EFB11D]/40 border-2 border-white/50 transform rotate-1">
            3D Gastronomy Salon
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-80 animate-bounce">
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-amber-300/90">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-amber-400" />
        </div>
      </div>
    </div>
  );
};