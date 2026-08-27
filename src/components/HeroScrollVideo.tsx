"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is loaded and ready
    video.pause();
    video.currentTime = 0;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;

      if (containerHeight > 0) {
        const rawProgress = Math.max(0, Math.min(1, -rect.top / containerHeight));
        video.currentTime = rawProgress * video.duration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#681403]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          muted
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