"use client";

import React, { useEffect, useRef, useState } from "react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 60; // Reduced to 60 frames for lightning-fast loading under 3 seconds

  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    const video = document.createElement("video");
    video.src = "/videos/restaurant_3d.mp4";
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;

    // Safety timeout fallback to ensure loading never exceeds 3 seconds
    const timeoutId = setTimeout(() => {
      if (isLoading && frames.length > 5) {
        framesRef.current = frames;
        setIsLoading(false);
      }
    }, 2800);

    video.onloadedmetadata = () => {
      const duration = video.duration || 3;
      const canvas = document.createElement("canvas");
      canvas.width = 1280;
      canvas.height = 720;
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
          img.src = canvas.toDataURL("image/jpeg", 0.75);
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

    const render = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;

      if (containerHeight > 0 && framesRef.current.length > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));
        const frameIndex = Math.min(
          framesRef.current.length - 1,
          Math.floor(progress * framesRef.current.length)
        );

        const img = framesRef.current[frameIndex];
        if (img && img.complete) {
          const dpr = window.devicePixelRatio || 1;
          const width = window.innerWidth;
          const height = window.innerHeight;

          canvas.width = width * dpr;
          canvas.height = height * dpr;
          ctx.scale(dpr, dpr);

          const imgWidth = img.naturalWidth || 1280;
          const imgHeight = img.naturalHeight || 720;

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
  }, [isLoading]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
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