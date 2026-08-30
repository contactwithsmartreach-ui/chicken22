"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Utensils, ChevronRight, Award, Compass } from "lucide-react";
import { getAssetPath } from "@/lib/config";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Canvas Particle / Interactive Gastronomy Sphere Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for 3D spinning molecular gastronomy sphere
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      baseTheta: number;
      basePhi: number;
      speed: number;
    }> = [];

    const numParticles = 350;
    const colors = ["#d4af37", "#f3e5ab", "#ffffff", "#e0a96d", "#b8860b", "#ffdf73"];

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particles.push({
        x: 0,
        y: 0,
        z: 0,
        radius: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseTheta: theta,
        basePhi: phi,
        speed: (Math.random() * 0.005) + 0.002,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background radial glow
      const centerX = width / 2;
      const centerY = height / 2;
      const radiusMax = Math.min(width, height) * 0.42;

      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radiusMax * 1.5);
      gradient.addColorStop(0, "rgba(212, 175, 55, 0.12)");
      gradient.addColorStop(0.5, "rgba(20, 20, 25, 0.4)");
      gradient.addColorStop(1, "rgba(10, 10, 15, 0.9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      angleX += 0.004;
      angleY += 0.007;

      // Render connecting constellation lines for 3D mesh effect
      ctx.lineWidth = 0.5;

      const projected = particles.map((p) => {
        // Rotate in 3D space
        const radius = radiusMax * (0.8 + Math.sin(p.basePhi + angleX * 2) * 0.15);
        p.baseTheta += p.speed;

        const x3d = radius * Math.sin(p.basePhi) * Math.cos(p.baseTheta);
        const y3d = radius * Math.sin(p.basePhi) * Math.sin(p.baseTheta);
        const z3d = radius * Math.cos(p.basePhi);

        // Rotate around Y axis
        const x1 = x3d * Math.cos(angleY) + z3d * Math.sin(angleY);
        const y1 = y3d;
        const z1 = -x3d * Math.sin(angleY) + z3d * Math.cos(angleY);

        // Rotate around X axis
        const x2 = x1;
        const y2 = y1 * Math.cos(angleX) - z1 * Math.sin(angleX);
        const z2 = y1 * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Perspective projection
        const perspective = 500;
        const scale = perspective / (perspective + z2 + 200);
        const screenX = centerX + x2 * scale;
        const screenY = centerY + y2 * scale;

        return {
          x: screenX,
          y: screenY,
          z: z2,
          scale,
          radius: p.radius * scale,
          color: p.color,
        };
      });

      // Sort by depth (Z)
      projected.sort((a, b) => a.z - b.z);

      // Draw particles and proximity lines
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        
        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        const alpha = Math.min(1, Math.max(0.2, (p.z + 300) / 600));
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Connect nearby particles for high-tech culinary molecular wireframe look
        for (let j = i + 1; j < Math.min(i + 5, projected.length); j++) {
          const p2 = projected[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(212, 175, 55, 0.18)";
            ctx.globalAlpha = (1 - dist / 55) * 0.3 * alpha;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-20">
      {/* Interactive 3D Canvas Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80" />
      </div>

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg shadow-amber-950/30 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
          <span>The Pinnacle of 3D Molecular Gastronomy</span>
          <Award className="w-4 h-4 text-amber-400" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 max-w-5xl leading-[1.1]">
          Where Artistry Meets <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent italic">
            Culinary Alchemy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl font-light mb-10 leading-relaxed">
          Immerse your senses in a multi-sensory 12-course avant-garde dining experience orchestrated by Chef Lucien Vance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#reservation"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-semibold tracking-wide hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-xl shadow-amber-600/20 flex items-center justify-center gap-3 text-base group"
          >
            <Utensils className="w-5 h-5 text-neutral-950 group-hover:rotate-12 transition-transform" />
            <span>Reserve Your Table</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-white font-medium tracking-wide hover:bg-neutral-800 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 text-base"
          >
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Explore The 3D Menu</span>
          </a>
        </div>

        {/* Quick Highlights / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-neutral-800/80 max-w-3xl w-full text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">3 Michelin</div>
            <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">Stars of Excellence</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">12 Courses</div>
            <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">Sensory Journey</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">3D Immersive</div>
            <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">Projection Dining</div>
          </div>
        </div>
      </div>
    </div>
  );
}