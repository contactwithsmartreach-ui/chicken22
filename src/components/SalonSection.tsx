"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Clock, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const salonImages = [
  {
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1600",
    title: "The Grand Dining Salon",
    subtitle: "Acoustic-engineered private booths & bespoke chandeliers",
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
    title: "Intimate Atmospheres",
    subtitle: "Designed for exquisite conversations and culinary romance",
  },
  {
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1600",
    title: "The Sommelier Cellar",
    subtitle: "Over 1,200 rare vintages curated from private European estates",
  },
  {
    url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=1600",
    title: "Chef's Counter",
    subtitle: "Front-row seats to avant-garde culinary artistry",
  },
];

export const SalonSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress of section through viewport (0 to 1)
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % salonImages.length;
    setCurrentIndex(nextIndex);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: nextIndex * cardWidth, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + salonImages.length) % salonImages.length;
    setCurrentIndex(prevIndex);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: prevIndex * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="salon" className="py-36 px-6 lg:px-16 bg-gradient-to-t from-[#8b1e06] via-[#E43D12] to-[#681403] text-white relative overflow-hidden shadow-[inset_0_50px_100px_rgba(0,0,0,0.6),inset_0_-50px_100px_rgba(0,0,0,0.6)]">
      {/* Top seamless blend gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#681403] to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-tight leading-none text-white">
            An Oasis of <span className="italic font-normal text-[#EFB11D]">Refinement</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Located in the heart of the culinary district, L'Élixir offers an intimate sanctuary featuring acoustic-engineered private booths, bespoke lighting, and a temperature-controlled cellar housing over 1,200 rare vintages.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
              <MapPin className="w-5 h-5 text-[#EFB11D] shrink-0" />
              <span>428 Avenue des Champs-Élysées, 75008 Paris, France</span>
            </div>
            <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
              <Clock className="w-5 h-5 text-[#EFB11D] shrink-0" />
              <span>Tuesday – Sunday: 6:00 PM – 11:30 PM</span>
            </div>
            <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
              <Phone className="w-5 h-5 text-[#EFB11D] shrink-0" />
              <span>+33 1 42 68 55 00</span>
            </div>
          </div>
        </div>

        {/* Cascading Step-by-Step Dropping Images */}
        <div className="lg:col-span-6 space-y-4">
          {salonImages.map((img, idx) => {
            // Calculate staggered drop offset based on scroll progress
            const staggerDelay = idx * 0.12;
            const cardProgress = Math.max(0, Math.min(1, (scrollProgress - 0.15 - staggerDelay) * 3));
            const translateY = (1 - cardProgress) * -80; // drop down from top
            const opacity = cardProgress;
            const scale = 0.9 + cardProgress * 0.1;

            return (
              <div
                key={idx}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.1s ease-out",
                }}
                className="relative rounded-3xl overflow-hidden border border-white/25 bg-black/40 backdrop-blur-xl shadow-2xl p-3 group"
              >
                <div className="relative rounded-2xl overflow-hidden h-[360px] sm:h-[420px]">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <span className="text-[#EFB11D] text-xs font-semibold tracking-widest uppercase mb-1">
                      {img.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};