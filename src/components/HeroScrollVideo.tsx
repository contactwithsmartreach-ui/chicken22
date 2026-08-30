"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react";
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
    <>
      {/* Hidden preload link for instant browser cache & streaming initialization */}
      <link rel="preload" href={localVideoUrl} as="video" type="video/mp4" />

      <div className="relative h-screen bg-[#681403] w-full overflow-hidden">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#681403] select-none">
          
          {/* Instant Background Poster / Placeholder Layer to eliminate blank screen before video loads */}
          <div className={`absolute inset-0 z-0 bg-gradient-to-tr from-[#681403] via-[#8b1e06] to-[#681403] transition-opacity duration-500 ${videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,177,29,0.15)_0%,transparent_70%)]" />
          </div>

          {/* Dynamic 3D Orbital Glow Animation as resilient backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="absolute w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-[#EFB11D]/20 via-[#E43D12]/30 to-[#FFA2B6]/20 blur-[130px] animate-pulse" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-[#EFB11D]/30 animate-[spin_35s_linear_infinite]" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite_reverse]" />
          </div>

          {/* Optimized Video Player with eager preload and autoPlay */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu transition-opacity duration-300 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
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
    </>
  );
};