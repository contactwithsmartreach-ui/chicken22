"use client";

import React, { useState } from "react";
import { Sparkles, Utensils, ChevronRight, Award, Compass, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { getAssetPath } from "@/lib/config";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16">
      {/* Background Layer: Stunning CSS Luxury Ambient Animation as bulletproof fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-600/30 via-amber-400/25 to-yellow-300/40 blur-[120px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-amber-500/30 animate-[spin_25s_linear_infinite]" style={{ transformStyle: "preserve-3d" }} />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-amber-400/25 animate-[spin_18s_linear_infinite_reverse]" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_20px_#fbbf24] animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-[0_0_15px_#fde047] animate-bounce" style={{ animationDuration: "4s" }} />
      </div>

      {/* Video Background (if supported & loaded) */}
      {!videoError && (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-75 contrast-125"
          >
            <source src={getAssetPath("videos/restaurant_3d.mp4")} type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-restaurant-interior-with-warm-lighting-41555-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/80" />
        </div>
      )}

      {/* Floating Video Controls Pill */}
      {!videoError && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-neutral-900/80 border border-neutral-700/60 px-4 py-2 rounded-full backdrop-blur-md shadow-2xl text-xs text-neutral-300">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium mr-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Live Atmosphere
          </span>
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-amber-300 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-amber-300 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-md shadow-2xl shadow-amber-950/40">
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
            <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">Projection Dining Domain</div>
          </div>
        </div>
      </div>
    </div>
  );
}