import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { Navigation } from "@/components/Navigation";
import { ScrollAnimationMenu } from "@/components/ScrollAnimationMenu";
import { ExploreGallery } from "@/components/ExploreGallery";
import { RunningCardsMenu } from "@/components/RunningCardsMenu";
import { SalonSection } from "@/components/SalonSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#681403] text-white">
      <Navigation />

      {/* 3D Scrollable Video Hero Section (untouched dark theme) */}
      <div id="explore" className="relative">
        <HeroScrollVideo />
        {/* Seamless smooth gradient fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#8b1e06]/60 to-[#681403] pointer-events-none z-30" />
      </div>

      {/* Animated Scroll Menu Representation */}
      <ScrollAnimationMenu />

      {/* Explore-Only Dish Catalogue with Palette & Glassmorphism */}
      <ExploreGallery />

      {/* Running Cards Interactive Menu Carousel */}
      <RunningCardsMenu />

      {/* Salon Location & Reservation */}
      <SalonSection />

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-16 border-t border-white/15 bg-[#520f02] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-white tracking-wider text-base">L'ÉLIXIR</span>
        </div>
        <MadeWithDyad />
      </footer>
    </div>
  );
}