"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, UtensilsCrossed, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setIsLoading(false);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    
    // Fallback if already loaded
    if (video.readyState >= 1) {
      setVideoDuration(video.duration);
      setIsLoading(false);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current || videoDuration === 0) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;
      
      // Calculate scroll progress from 0 to 1 inside the sticky container
      const scrollProgress = -rect.top / containerHeight;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Map progress to video current time
      videoRef.current.currentTime = clampedProgress * videoDuration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoDuration]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-neutral-950 text-white">
      {/* Sticky viewport for the video and overlays */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video element controlled by scroll */}
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-105"
        />

        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Top Navbar Header */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 lg:px-16 py-6 backdrop-blur-md bg-neutral-950/40 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
              <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-xl font-bold tracking-wider font-serif bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              L'ÉLIXIR 3D
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#experience" className="hover:text-amber-400 transition-colors">3D Menu</a>
            <a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a>
            <a href="#chef" className="hover:text-amber-400 transition-colors">Chef's Table</a>
          </nav>

          <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold px-6 rounded-full shadow-lg shadow-amber-500/20">
            Reserve Table
          </Button>
        </header>

        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6 text-amber-300 text-xs sm:text-sm tracking-widest uppercase font-semibold animate-pulse">
            <Sparkles className="w-4 h-4" />
            Immersive Gastronomy Experience
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
            Taste the <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Dimension</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-light mb-10 leading-relaxed drop-shadow">
            Scroll down to explore our revolutionary 3D interactive menu cinematic. Every dish brought to life in high definition.
          </p>

          <div className="flex flex-col items-center gap-3 pointer-events-auto">
            <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">Scroll to explore</span>
            <div className="w-8 h-12 rounded-full border-2 border-amber-500/40 flex items-start justify-center p-2 backdrop-blur-sm bg-neutral-950/30">
              <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center gap-4 text-amber-400">
            <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-400">Loading Cinematic Menu...</p>
          </div>
        )}
      </div>
    </div>
  );
};