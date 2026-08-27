"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    let targetTime = 0;
    let currentTime = 0;
    let animationFrameId: number;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;

      if (containerHeight > 0) {
        const rawProgress = Math.max(0, Math.min(1, -rect.top / containerHeight));
        targetTime = rawProgress * video.duration;
      }
    };

    const updateVideoTime = () => {
      // Smooth linear interpolation (lerp) for butter-smooth animation without lag
      const diff = targetTime - currentTime;
      if (Math.abs(diff) > 0.001) {
        currentTime += diff * 0.12; // Adjust smoothing weight
        if (Number.isFinite(currentTime) && currentTime >= 0 && currentTime <= video.duration) {
          video.currentTime = currentTime;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateVideoTime);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#681403]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu will-change-auto"
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