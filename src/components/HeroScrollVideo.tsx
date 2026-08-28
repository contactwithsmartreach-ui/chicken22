"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, UtensilsCrossed } from "lucide-react";

export const HeroScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.25;
    video
      .play()
      .then(() => setIsVideoLoaded(true))
      .catch(() => {
        // Autoplay fallback if blocked
      });
  }, []);

  return (
    <div className="relative h-screen bg-[#681403] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
        {/* Elegant placeholder background before video loads */}
        <div
          className={`absolute inset-0 bg-[#681403] flex flex-col items-center justify-center transition-opacity duration-1000 z-10 ${
            isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 animate-pulse">
            <UtensilsCrossed className="w-8 h-8 text-amber-400" />
          </div>
          <span className="font-serif text-2xl font-bold text-white tracking-widest uppercase mb-1">
            L'ÉLIXIR
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70 font-medium">
            Preparing 3D Culinary Salon...
          </span>
        </div>

        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu will-change-auto transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

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