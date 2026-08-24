"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);

  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setIsLoading(false);
      video.currentTime = 0.001;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    
    if (video.readyState >= 1) {
      setVideoDuration(video.duration);
      setIsLoading(false);
      video.currentTime = 0.001;
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || videoDuration === 0) return;

    // Smooth linear interpolation loop for buttery smooth frame transitions without lag
    const renderLoop = () => {
      if (videoRef.current) {
        // Lerp factor (0.35) balances instant response with buttery smoothness for the wings
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.001) {
          currentTimeRef.current += diff * 0.35;
          videoRef.current.currentTime = currentTimeRef.current;
        }
      }
      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;
      
      if (containerHeight > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));
        targetTimeRef.current = progress * videoDuration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [videoDuration]);

  return (
    <div ref={containerRef} className="relative h-[450vh] bg-black">
      {/* Sticky viewport for the video */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Video element with hardware acceleration */}
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover will-change-[transform]"
        />

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center gap-4 text-amber-400">
            <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-400">Loading Cinematic Experience...</p>
          </div>
        )}
      </div>
    </div>
  );
};