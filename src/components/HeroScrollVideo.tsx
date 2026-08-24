"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);

  // Use refs to track animation frame loop and target time to eliminate stuttering
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setIsLoading(false);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    
    if (video.readyState >= 1) {
      setVideoDuration(video.duration);
      setIsLoading(false);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Smooth lerp animation loop for butter-smooth scrubbing
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoDuration === 0) return;

    const updateVideoTime = () => {
      // Lerp (Linear interpolation) factor for silky smooth catching up (0.1 = smooth inertia, 1 = instant)
      const ease = 0.12;
      currentTimeRef.current += (targetTimeRef.current - currentTimeRef.current) * ease;
      
      if (Math.abs(targetTimeRef.current - currentTimeRef.current) > 0.001) {
        video.currentTime = currentTimeRef.current;
      }

      rafIdRef.current = requestAnimationFrame(updateVideoTime);
    };

    rafIdRef.current = requestAnimationFrame(updateVideoTime);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [videoDuration]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || videoDuration === 0) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;
      
      const scrollProgress = -rect.top / containerHeight;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Update target time for the rAF loop
      targetTimeRef.current = clampedProgress * videoDuration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoDuration]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-neutral-950">
      {/* Sticky viewport for the video */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Video element controlled by scroll with hardware acceleration */}
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
        />

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center gap-4 text-amber-400">
            <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-400">Loading Cinematic Experience...</p>
          </div>
        )}
      </div>
    </div>
  );
};