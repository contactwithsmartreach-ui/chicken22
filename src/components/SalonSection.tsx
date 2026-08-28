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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersected, setIsIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
        }
      },
      { threshold: 0.05, rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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
    <section ref={ref} id="salon" className="py-36 px-6 lg:px-16 bg-gradient-to-t from-[#8b1e06] via-[#E43D12] to-[#681403] text-white relative overflow-hidden shadow-[inset_0_50px_100px_rgba(0,0,0,0.6),inset_0_-50px_100px_rgba(0,0,0,0.6)]">
      {/* Top seamless blend gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#681403] to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className={`lg:col-span-6 space-y-8 transition-all duration-300 ease-out ${isIntersected ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
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

        {/* High-Quality Image Scroller Component */}
        <div className={`lg:col-span-6 relative transition-all duration-300 delay-150 ease-out ${isIntersected ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <div className="absolute -inset-4 bg-black/30 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-white/25 bg-black/40 backdrop-blur-xl shadow-2xl p-3 group">
            
            {/* Scroller Track */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {salonImages.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 snap-center relative h-[520px]"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
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
              ))}
            </div>

            {/* Scroller Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/30 text-white hover:bg-[#EFB11D] hover:text-neutral-950 hover:border-[#EFB11D] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/30 text-white hover:bg-[#EFB11D] hover:text-neutral-950 hover:border-[#EFB11D] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {salonImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: idx * scrollRef.current.clientWidth, behavior: "smooth" });
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-6 bg-[#EFB11D]" : "w-1.5 bg-white/40 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};