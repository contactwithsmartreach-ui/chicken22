"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown, ChevronRight, Play } from "lucide-react";

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 90; // Optimized frame count for lightning-fast load

  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    const video = document.createElement("video");
    video.src = "/videos/restaurant_3d.mp4";
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;

    video.onloadedmetadata = () => {
      const duration = video.duration || 3;
      const canvas = document.createElement("canvas");
      canvas.width = 1280;
      canvas.height = 720;
      const ctx = canvas.getContext("2d");

      let currentFrame = 0;

      const extractNextFrame = () => {
        if (currentFrame >= totalFrames) {
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
          img.src = canvas.toDataURL("image/jpeg", 0.8);
          frames.push(img);
        }

        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        currentFrame++;
        extractNextFrame();
      };

      extractNextFrame();
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
    <div ref={containerRef} className="relative h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* Overlay Hero UI Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12 lg:p-16 pointer-events-none">
          {/* Top Bar */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-xl">
                L
              </div>
              <div>
                <h1 className="font-serif font-bold text-lg tracking-wider text-white">L'ÉLIXIR</h1>
                <p className="text-[10px] tracking-widest text-amber-400 uppercase">Haute Gastronomy</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
              <a href="#menu" className="hover:text-amber-400 transition-colors">3D Menu</a>
              <a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a>
              <a href="#experience" className="hover:text-amber-400 transition-colors">Salon</a>
            </div>

            <ReservationModal>
              <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-6 rounded-full shadow-lg shadow-amber-500/20 pointer-events-auto">
                Reserve Table
              </Button>
            </ReservationModal>
          </div>

          {/* Center / Bottom Hero Banner */}
          <div className="max-w-2xl pointer-events-auto pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Michelin Three-Star Experience
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white mb-6">
              Taste the <span className="italic text-amber-400">Future</span> of Fine Dining
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mb-8 max-w-xl">
              Scroll to explore our architectural salon in immersive 3D, preview legendary chef creations, and book your unforgettable evening.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ReservationModal>
                <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 py-6 rounded-xl shadow-xl shadow-amber-500/20 text-base">
                  Book Your Experience
                </Button>
              </ReservationModal>
              <a
                href="#menu"
                className="px-8 py-6 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium border border-neutral-800 backdrop-blur-md transition-all inline-flex items-center gap-2 text-base"
              >
                Explore 3D Menu <ChevronRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex items-center justify-between text-xs text-neutral-400 pointer-events-auto">
            <span className="flex items-center gap-2">
              <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
              Scroll to experience 3D animation
            </span>
            <span>{isLoading ? `Loading (${loadProgress}%)...` : "Ready 60FPS"}</span>
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center gap-4 text-amber-400">
            <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-400">
              Initializing 3D Cinematic Engine ({loadProgress}%)...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};