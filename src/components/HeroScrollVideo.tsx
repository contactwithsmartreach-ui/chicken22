"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const framesRef = useRef<(ImageBitmap | HTMLImageElement)[]>([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const totalFrames = 60;

  useEffect(() => {
    let isCancelled = false;
    const frames: (ImageBitmap | HTMLImageElement)[] = [];

    const video = document.createElement("video");
    video.src = "/videos/restaurant_3d.mp4";
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    video.onloadedmetadata = () => {
      if (isCancelled) return;
      const duration = video.duration || 3;
      const vidWidth = video.videoWidth || 1280;
      const vidHeight = video.videoHeight || 720;

      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = vidWidth;
      offscreenCanvas.height = vidHeight;
      const offCtx = offscreenCanvas.getContext("2d", { willReadFrequently: false });

      let currentFrame = 0;

      const extractNextFrame = () => {
        if (isCancelled) return;
        if (currentFrame >= totalFrames) {
          framesRef.current = frames;
          return;
        }

        video.currentTime = (currentFrame / totalFrames) * duration;
      };

      video.onseeked = async () => {
        if (isCancelled) return;

        if (offCtx) {
          offCtx.drawImage(video, 0, 0, vidWidth, vidHeight);
          try {
            if ("createImageBitmap" in window) {
              const bitmap = await createImageBitmap(offscreenCanvas);
              frames.push(bitmap);
            } else {
              const img = new Image();
              img.src = offscreenCanvas.toDataURL("image/jpeg", 0.9);
              frames.push(img);
            }
          } catch {
            const img = new Image();
            img.src = offscreenCanvas.toDataURL("image/jpeg", 0.9);
            frames.push(img);
          }
        }

        currentFrame++;
        extractNextFrame();
      };

      extractNextFrame();
    };

    video.load();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Passive scroll listener for target progress
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;

      if (containerHeight > 0) {
        const rawProgress = -rect.top / containerHeight;
        targetProgressRef.current = Math.max(0, Math.min(1, rawProgress));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Optimized Render Loop with smooth lerp
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let rafId: number;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    const render = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.15;

      const frames = framesRef.current;
      
      // If frames are loaded, ensure we default to index 0 or higher
      const activeIndex = frames.length > 0 ? Math.min(
        frames.length - 1,
        Math.max(0, Math.floor(currentProgressRef.current * (frames.length - 1)))
      ) : 0;

      // Clear canvas with white/neutral so there's no black flash
      ctx.fillStyle = "#1a0501";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const frame = frames.length > 0 ? frames[activeIndex] : null;
      if (frame) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;

        const imgW = frame.width;
        const imgH = frame.height;

        const hRatio = screenW / imgW;
        const vRatio = screenH / imgH;
        const ratio = Math.max(hRatio, vRatio);

        const renderW = imgW * ratio;
        const renderH = imgH * ratio;
        const offsetX = (screenW - renderW) / 2;
        const offsetY = (screenH - renderH) / 2;

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(frame, 0, 0, imgW, imgH, offsetX, offsetY, renderW, renderH);
        ctx.restore();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#681403]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block transform-gpu will-change-transform"
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