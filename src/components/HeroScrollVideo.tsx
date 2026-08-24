"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 36; // Reduced to 36 keyframes for ultra-fast instant sub-3s loading while keeping buttery smooth scrolling

  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = new Array(totalFrames);

    const video = document.createElement("video");
    video.src = "/videos/restaurant_3d.mp4";
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    let isInitialized = false;

    video.onloadedmetadata = () => {
      const duration = video.duration;
      const canvas = document.createElement("canvas");
      // Smaller resolution for lightning fast data-url generation and zero lag
      canvas.width = 960;
      canvas.height = 540;
      const ctx = canvas.getContext("2d", { alpha: false });

      let currentIndex = 0;

      const loadNextBatch = () => {
        if (currentIndex >= totalFrames) {
          setIsLoading(false);
          return;
        }

        video.currentTime = (currentIndex / totalFrames) * duration;
      };

      video.onseeked = () => {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const img = new Image();
          img.src = canvas.toDataURL("image/jpeg", 0.75);
          frames[currentIndex] = img;
        }

        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        
        // If we have at least 10 frames, we can start immediately while the rest load in background!
        if (loadedCount >= 10 && !isInitialized && isLoading) {
          framesRef.current = frames;
          setIsLoading(false);
          isInitialized = true;
        } else {
          framesRef.current = frames;
        }

        currentIndex++;
        loadNextBatch();
      };

      loadNextBatch();
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;

    const render = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;

      const availableFrames = framesRef.current.filter(Boolean);

      if (containerHeight > 0 && availableFrames.length > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));
        const frameIndex = Math.min(
          availableFrames.length - 1,
          Math.floor(progress * availableFrames.length)
        );

        const img = availableFrames[frameIndex];
        if (img && img.complete) {
          const dpr = window.devicePixelRatio || 1;
          const width = window.innerWidth;
          const height = window.innerHeight;

          canvas.width = width * dpr;
          canvas.height = height * dpr;
          ctx.scale(dpr, dpr);

          const imgWidth = 960;
          const imgHeight = 540;

          const hRatio = width / imgWidth;
          const vRatio = height / imgHeight;
          const ratio = Math.max(hRatio, vRatio);

          const drawWidth = imgWidth * ratio;
          const drawHeight = imgHeight * ratio;
          const centerShiftX = (width - drawWidth) / 2;
          const centerShiftY = (height - drawHeight) / 2;

          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight, centerShiftX, centerShiftY, drawWidth, drawHeight);
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {isLoading && (
          <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center gap-4 text-amber-400">
            <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-400">
              Loading 3D Experience ({loadProgress}%)...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};