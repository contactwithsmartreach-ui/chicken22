"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Using ImageBitmap / Image array with pre-allocated slots for instantaneous readiness
  const framesRef = useRef<(ImageBitmap | HTMLImageElement)[]>([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastRenderedIndexRef = useRef(-1);

  const totalFrames = 60;

  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;

    const video = document.createElement("video");
    video.src = "/videos/restaurant_3d.mp4";
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    // Fast-unlock safety timeout: display the experience quickly
    const fastUnlockTimeout = setTimeout(() => {
      if (!isCancelled) {
        setIsLoading(false);
      }
    }, 450);

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
          setIsLoading(false);
          return;
        }

        video.currentTime = (currentFrame / (totalFrames - 1 || 1)) * duration;
      };

      video.onseeked = async () => {
        if (isCancelled) return;

        if (offCtx) {
          offCtx.drawImage(video, 0, 0, vidWidth, vidHeight);
          let frameImage: ImageBitmap | HTMLImageElement;

          try {
            if ("createImageBitmap" in window) {
              frameImage = await createImageBitmap(offscreenCanvas);
            } else {
              const img = new Image();
              img.src = offscreenCanvas.toDataURL("image/jpeg", 0.85);
              frameImage = img;
            }
          } catch {
            const img = new Image();
            img.src = offscreenCanvas.toDataURL("image/jpeg", 0.85);
            frameImage = img;
          }

          // Populate the frame slot
          if (framesRef.current.length === 0) {
            // Seed all initial slots with the first available frame for zero flicker
            framesRef.current = new Array(totalFrames).fill(frameImage);
            // Quickly dismiss loader once first pristine frame is rendered
            setIsLoading(false);
          } else {
            framesRef.current[currentFrame] = frameImage;
          }
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
      isCancelled = true;
      clearTimeout(fastUnlockTimeout);
    };
  }, []);

  // Update target progress on scroll with passive listener for performance
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

  // Optimized Render Loop with Linear Interpolation (Lerp) & Resize Observer
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
      // Lerp current progress smoothly towards target progress for 60fps/120fps fluid feel
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.12;

      const frames = framesRef.current;
      if (frames.length > 0) {
        const frameIndex = Math.min(
          frames.length - 1,
          Math.max(0, Math.floor(currentProgressRef.current * (frames.length - 1)))
        );

        const frame = frames[frameIndex];
        if (frame && frame.width > 0 && frame.height > 0) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const screenW = window.innerWidth;
          const screenH = window.innerHeight;

          const imgW = frame.width;
          const imgH = frame.height;

          // Aspect ratio preservation (object-fit: cover)
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

          lastRenderedIndexRef.current = frameIndex;
        }
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
    <div ref={containerRef} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black select-none">
        {/* Canvas displaying high-performance smooth 3D video frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block transform-gpu will-change-transform"
        />

        {/* Ambient subtle vignette overlay for depth */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40" />

        {/* Short & smooth loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex flex-col items-center justify-center gap-5 text-amber-400 transition-opacity duration-300">
            <div className="relative">
              <div className="w-14 h-14 border-2 border-amber-500/20 border-t-amber-400 rounded-full animate-spin" />
              <Sparkles className="w-5 h-5 text-amber-400 absolute inset-0 m-auto animate-pulse" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-300">
                Calibrating 3D Experience
              </p>
              <p className="text-amber-400 font-mono text-xs">{loadProgress}%</p>
            </div>
          </div>
        )}

        {/* Floating subtle scroll guidance */}
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