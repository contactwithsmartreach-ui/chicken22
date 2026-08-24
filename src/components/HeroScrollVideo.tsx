"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const handleLoaded = () => {
      setIsReady(true);
    };

    if (video.readyState >= 3) {
      setIsReady(true);
    } else {
      video.addEventListener("loadeddata", handleLoaded, { once: true });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    let rafId: number;

    const updateVideoTime = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;

      if (containerHeight > 0 && video.duration) {
        const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));
        video.currentTime = progress * video.duration;
      }

      rafId = requestAnimationFrame(updateVideoTime);
    };

    rafId = requestAnimationFrame(updateVideoTime);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isReady]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src="/videos/restaurant_3d.mp4"
          className="w-full h-full object-cover"
          playsInline
          muted
          preload="auto"
        />

        {!isReady && (
          <div className="absolute inset-0 z-50 bg-black flex items-center justify-center text-amber-400">
            <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};