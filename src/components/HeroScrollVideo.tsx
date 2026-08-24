"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, Utensils, Award } from "lucide-react";
import { ReservationModal } from "@/components/ReservationModal";

const totalFrames = 60;

export const HeroScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef(0);

  // Pre-cache all frames immediately on mount
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const padded = String(i).padStart(3, "0");
      img.src = `https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200`; // High quality placeholder or use placeholder frames
      
      // Let's create reliable canvas-generated gradient fallback frames if needed or standard images so it plays instantly without 404s
      const fallbackImg = new Image();
      fallbackImg.src = `https://picsum.photos/seed/restaurant${i}/1200/800`;
      
      fallbackImg.onload = () => {
        loaded++;
        setLoadCount(loaded);
        if (loaded >= 30) {
          setIsReady(true);
        }
      };

      images.push(fallbackImg);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.floor(progress * totalFrames)
        );

        currentFrameIndexRef.current = frameIndex;
        const img = imagesRef.current[frameIndex];

        if (img && img.complete) {
          const width = window.innerWidth;
          const height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;

          const imgWidth = img.naturalWidth || 1200;
          const imgHeight = img.naturalHeight || 800;

          const hRatio = width / imgWidth;
          const vRatio = height / imgHeight;
          const ratio = Math.max(hRatio, vRatio);

          const centerShiftX = (width - imgWidth * ratio) / 2;
          const centerShiftY = (height - imgHeight * ratio) / 2;

          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(
            img,
            0,
            0,
            imgWidth,
            imgHeight,
            centerShiftX,
            centerShiftY,
            imgWidth * ratio,
            imgHeight * ratio
          );
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* Dark vignette overlay for luxurious contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60 pointer-events-none" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-between p-6 sm:p-12 text-center max-w-5xl mx-auto pointer-events-none">
          {/* Top Navbar */}
          <div className="w-full flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-lg">
                L
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">L'ÉLIXIR</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
              <a href="#menu" className="hover:text-amber-400 transition-colors">Interactive Menu</a>
              <a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a>
              <span className="text-amber-400 flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Award className="w-3.5 h-3.5" /> 3 Michelin Stars
              </span>
            </div>

            <ReservationModal>
              <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-6 rounded-full shadow-lg shadow-amber-500/20 pointer-events-auto">
                Reserve Table
              </Button>
            </ReservationModal>
          </div>

          {/* Center Hero Titles */}
          <div className="space-y-6 max-w-2xl pointer-events-auto my-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Immersive 3D Gastronomy Experience
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
              Taste the <span className="italic text-amber-400">Extraordinary</span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Scroll to explore our revolutionary 3D culinary creations, legendary wine cellar, and private Parisian salon.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ReservationModal>
                <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 text-base">
                  Book Your Experience
                </Button>
              </ReservationModal>
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium border border-neutral-700/80 backdrop-blur-md transition-all text-center"
              >
                Explore 3D Menu
              </a>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-neutral-400 animate-bounce pointer-events-auto">
            <span className="text-xs tracking-widest uppercase font-medium">Scroll to Immerse</span>
            <ChevronDown className="w-5 h-5 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
};