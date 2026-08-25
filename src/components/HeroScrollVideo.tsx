"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 60;

  // Smooth interpolation refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    const video = document.createElement("video");
    video.src = "/videos/restaurant_3d.mp4";
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;

    const timeoutId = setTimeout(() => {
      if (isLoading && frames.length > 5) {
        framesRef.current = frames;
        setIsLoading(false);
      }
    }, 2800);

    video.onloadedmetadata = () => {
      const duration = video.duration || 3;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
      const ctx = canvas.getContext("2d");

      let currentFrame = 0;

      const extractNextFrame = () => {
        if (currentFrame >= totalFrames) {
          clearTimeout(timeoutId);
          framesRef.current = frames;
          setIsLoading(false);
          return;
        }

        video.currentTime = (currentFrame / totalFrames) * duration;
      };

      video.onseeked = () => {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const img = new Image();
          img.src = canvas.toDataURL("image/jpeg", 0.85);
          frames.push(img);
        }

        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        currentFrame++;
        extractNextFrame();
      };

      extractNextFrame();
    };

    video.load();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;
      if (containerHeight > 0) {
        targetProgressRef.current = Math.max(0, Math.min(1, -rect.top / containerHeight));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      // Linear Interpolation (lerp) for buttery smooth momentum
      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      currentProgressRef.current += (target - current) * 0.12; // 0.12 smoothing factor for silk-like glide

      if (framesRef.current.length > 0) {
        const frameIndex = Math.min(
          framesRef.current.length - 1,
          Math.floor(currentProgressRef.current * (framesRef.current.length - 1))
        );

        const img = framesRef.current[frameIndex];
        if (img && img.complete) {
          const width = window.innerWidth;
          const height = window.innerHeight;
          const dpr = window.devicePixelRatio || 1;

          if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
          }

          const imgWidth = img.width;
          const imgHeight = img.height;

          const hRatio = width / imgWidth;
          const vRatio = height / imgHeight;
          const ratio = Math.max(hRatio, vRatio);

          const renderW = imgWidth * ratio;
          const renderH = imgHeight * ratio;
          const offsetX = (width - renderW) / 2;
          const offsetY = (height - renderH) / 2;

          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight, offsetX, offsetY, renderW, renderH);
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isLoading]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Overlay Content synced with scroll progress */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-6 z-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              Michelin Three-Star Experience
            </span>
            <h1 className="text-5xl sm:text-7xl font-serif font-bold tracking-tight text-white drop-shadow-2xl">
              L'Élixir <span className="italic text-amber-400">Gastronomy</span>
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl font-light max-w-xl mx-auto drop-shadow-md">
              Scroll to step into our immersive 3D architectural salon and explore culinary mastery.
            </p>
          </div>
        </div>

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