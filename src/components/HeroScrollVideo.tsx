"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Play, Pause, Volume2, VolumeX, Sparkles, Compass } from "lucide-react";
import { getAssetPath } from "@/lib/config";

export const HeroScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const localVideoUrl = getAssetPath("videos/restaurant_3d.mp4");
  const fallbackCdnVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  return (
    <div className="relative h-screen bg-[#681403] w-full overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
        
        {/* Dynamic 3D Orbital Glow Animation as resilient backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-[#EFB11D]/20 via-[#E43D12]/30 to-[#FFA2B6]/20 blur-[130px] animate-pulse" />
          <div className="absolute w-[450px] h-[450px] rounded-full border border-[#EFB11D]/30 animate-[spin_35s_linear_infinite]" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite_reverse]" />
        </div>

        {/* Video Player with multi-source fallback for GitHub Pages */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-90"}`}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1920"
          onLoadedData={() => setVideoLoaded(true)}
          onError={(e) => {
            console.warn("Video failed to load primary source, falling back to CDN source.", e);
            const target = e.currentTarget;
            if (target.src !== fallbackCdnVideoUrl) {
              target.src = fallbackCdnVideoUrl;
              target.play().catch(() => {});
            }
          }}
        >
          <source src={localVideoUrl} type="video/mp4" />
          <source src="/chicken22/videos/restaurant_3d.mp4" type="video/mp4" />
          <source src="/videos/restaurant_3d.mp4" type="video/mp4" />
          <source src={fallbackCdnVideoUrl} type="video/mp4" />
        </video>

        {/* Ambient Darkened Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#681403] via-black/30 to-[#681403]/60 pointer-events-none" />

        {/* Floating Center Title & Branding Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFB11D]/20 border border-[#EFB11D]/40 text-[#EFB11D] text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Opening Experience</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight mb-6 leading-tight">
            L'ÉLIXIR <br />
            <span className="text-[#EFB11D] italic font-normal">3D Gastronomy</span>
          </h1>

          <p className="text-sm sm:text-lg text-white/90 max-w-xl mb-8 font-light leading-relaxed">
            Where haute French culinary craft meets immersive 3D digital projection and sensory gastronomy.
          </p>

          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full bg-[#EFB11D] hover:bg-[#d69d12] text-neutral-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-[#EFB11D]/30 flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore The Menu</span>
          </a>
        </div>

        {/* Floating Video Audio & Play Controls */}
        <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2 bg-black/60 border border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs text-white">
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-full hover:bg-white/20 text-[#EFB11D] transition-colors"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-white/20 text-[#EFB11D] transition-colors"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-85 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#EFB11D]">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-[#EFB11D]" />
        </div>
      </div>
    </div>
  );
};