"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const framesRef = useRef<(ImageBitmap | HTMLImageElement)[]>([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const totalFrames = 60;

  useEffect(() => {
    let isCancelled = false;
    const frames: (ImageBitmap | HTMLImageElement)[] = [];
    let loadedCount = 0;

    // Hard ceiling: Guarantees loading dismisses within 2.8 seconds
    const maxLoadingTimer = setTimeout(() => {
      if (!isCancelled) {
        framesRef.current = frames;
        setLoadProgress(100);
        setIsLoading(false);
      }
    }, 2800);

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
          clearTimeout(maxLoadingTimer);
          framesRef.current = frames;
          setLoadProgress(100);
          setIsLoading(false);
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
              img.src = offscreenCanvas.toDataURL("image/jpeg", 0.85);
              frames.push(img);
            }
          } catch {
            const img = new Image();
            img.src = offscreenCanvas.toDataURL("image/jpeg", 0.85);
            frames.push(img);
          }
        }

        loadedCount++;
        setLoadProgress(Math.min(100, Math.round((loadedCount / totalFrames) * 100)));
        currentFrame++;
        extractNextFrame();
      };

      extractNextFrame();
    };

    video.onerror = () => {
      if (!isCancelled) {
        clearTimeout(maxLoadingTimer);
        setIsLoading(false);
      }
    };

    video.load();

    return () => {
      isCancelled = true;
      clearTimeout(maxLoadingTimer);
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
      currentProgressRef.current += diff * 0.12;

      const frames = framesRef.current;
      if (frames.length > 0) {
        const frameIndex = Math.min(
          frames.length - 1,
          Math.max(0, Math.floor(currentProgressRef.current * (frames.length - 1)))
        );

        const frame = frames[frameIndex];
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
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isLoading]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black select-none">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block transform-gpu will-change-transform"
        />

        <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />

        {isLoading && (
          <div className="absolute inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex flex-col items-center justify-center gap-5 text-amber-400">
            <div className="relative">
              <div className="w-16 h-16 border-2 border-amber-500/20 border-t-amber-400 rounded-full animate-spin" />
              <Sparkles className="w-5 h-5 text-amber-400 absolute inset-0 m-auto animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-300">
                Calibrating 3D Experience
              </p>
              <p className="text-amber-400 font-mono text-sm">{loadProgress}%</p>
            </div>
          </div>
        )}

        {!isLoading && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-80 animate-bounce">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-amber-300/90">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4 text-amber-400" />
          </div>
        )}
      </div>
    </div>
  );
};