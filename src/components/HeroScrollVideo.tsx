"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 36;

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
      // Use 16:9 aspect ratio dimensions for the offscreen capture
      canvas.width = 1280;
      canvas.height = 720;
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
          img.src = canvas.toDataURL("image/jpeg", 0.8);
          frames[currentIndex] = img;
        }

        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        
        if (loadedCount >= 8 && !isInitialized && isLoading) {
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

          // Standard 1280x720 source aspect ratio
          const srcWidth = 1280;
          const srcHeight = 720;

          // 'cover' calculation without stretching sides
          const hRatio = width / srcWidth;
          const vRatio = height / srcHeight;
          const ratio = Math.max(hRatio, vRatio);

          const drawWidth = srcWidth * ratio;
          const drawHeight = srcHeight * ratio;
          const centerShiftX = (width - drawWidth) / 2;
          const centerShiftY = (height - drawHeight) / 2;

          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, srcWidth, srcHeight, centerShiftX, centerShiftY, drawWidth, drawHeight);
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