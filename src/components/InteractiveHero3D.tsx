"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Utensils, ChevronRight, Award, Compass, Play, Pause, Layers } from "lucide-react";

export default function InteractiveHero3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isInteractive, setIsInteractive] = useState(true);
  const [particleCount, setParticleCount] = useState(400);

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

    // Mouse tracking for interactive 3D rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x * 0.001;
      mouseY = y * 0.001;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create 3D particles forming a gourmet sphere & floating culinary rings
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      baseTheta: number;
      basePhi: number;
      radius: number;
      color: string;
      speed: number;
      orbitRadius: number;
    }> = [];

    const colors = [
      "#f59e0b", // Amber 500
      "#fbbf24", // Amber 400
      "#d97706", // Amber 600
      "#ffffff", // White glow
      "#fef3c7", // Amber 100
      "#b45309", // Amber 700
    ];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const orbitRadius = Math.random() * 140 + 80;
      particles.push({
        x: 0,
        y: 0,
        z: 0,
        baseTheta: theta,
        basePhi: phi,
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: (Math.random() * 0.006) + 0.002,
        orbitRadius,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Dynamic glowing backdrop
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, Math.max(width, height) * 0.6);
      bgGradient.addColorStop(0, "rgba(217, 119, 6, 0.15)");
      bgGradient.addColorStop(0.5, "rgba(15, 23, 42, 0.6)");
      bgGradient.addColorStop(1, "rgba(3, 7, 18, 0.95)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      if (isInteractive) {
        targetRotationY += (mouseX - targetRotationY) * 0.05;
        targetRotationX += (mouseY - targetRotationX) * 0.05;
      }

      angleX += 0.005 + targetRotationX;
      angleY += 0.008 + targetRotationY;

      const projected = particles.map((p) => {
        p.baseTheta += p.speed;

        // 3D Spherical calculation with pulsation
        const pulse = Math.sin(Date.now() * 0.002 + p.basePhi) * 25;
        const currentRadius = p.orbitRadius + pulse;

        const x3d = currentRadius * Math.sin(p.basePhi) * Math.cos(p.baseTheta);
        const y3d = currentRadius * Math.sin(p.basePhi) * Math.sin(p.baseTheta);
        const z3d = currentRadius * Math.cos(p.basePhi);

        // Rotation around Y axis
        const x1 = x3d * Math.cos(angleY) + z3d * Math.sin(angleY);
        const y1 = y3d;
        const z1 = -x3d * Math.sin(angleY) + z3d * Math.cos(angleY);

        // Rotation around X axis
        const x2 = x1;
        const y2 = y1 * Math.cos(angleX) - z1 * Math.sin(angleX);
        const z2 = y1 * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Perspective projection
        const perspective = 450;
        const scale = perspective / (perspective + z2 + 250);
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

      // Sort by Z depth for accurate layering
      projected.sort((a, b) => a.z - b.z);

      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.min(1, Math.max(0.15, (p.z + 250) / 500));

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Connect nearby points to form luxury molecular wireframe
        for (let j = i + 1; j < Math.min(i + 4, projected.length); j++) {
          const p2 = projected[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 45) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(251, 191, 36, 0.25)";
            ctx.globalAlpha = (1 - dist / 45) * 0.35 * alpha;
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
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInteractive, particleCount]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16">
      {/* 3D Interactive Canvas Background */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent pointer-events-none" />
      </div>

      {/* Floating control pill */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 px-4 py-2 rounded-full backdrop-blur-md shadow-xl text-xs text-neutral-300">
        <span className="flex items-center gap-1.5 text-amber-400 font-medium">
          <Layers className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          3D Molecular Core Active
        </span>
        <button
          onClick={() => setIsInteractive(!isInteractive)}
          className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors font-semibold"
        >
          {isInteractive ? "Lock Rotation" : "Interactive Mouse"}
        </button>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-md shadow-2xl shadow-amber-950/40 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "5s" }} />
          <span>The Pinnacle of 3D Molecular Gastronomy</span>
          <Award className="w-4 h-4 text-amber-400" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 max-w-5xl leading-[1.08]">
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
            className="w-full sm:w-auto px-8.py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-semibold tracking-wide hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-xl shadow-amber-600/20 flex items-center justify-center gap-3 text-base group"
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