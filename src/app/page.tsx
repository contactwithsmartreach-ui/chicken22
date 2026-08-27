import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { Navigation } from "@/components/Navigation";
import { ExploreGallery } from "@/components/ExploreGallery";
import { SalonSection } from "@/components/SalonSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#681403] text-white">
      <Navigation />

      {/* 3D Scrollable Video Hero Section */}
      <div id="explore" className="relative pb-24 bg-gradient-to-b from-black via-[#681403] to-[#8b1e06]">
        <HeroScrollVideo />
        {/* Deep, tall gradient overlay that completely dissolves any hard boundary */}
        <div className="absolute -bottom-1 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#681403]/80 to-[#8b1e06] pointer-events-none z-30" />
      </div>

      {/* Explore-Only Dish Catalogue */}
      <div className="-mt-12 relative z-20">
        <ExploreGallery />
      </div>

      {/* Salon Location & Reservation */}
      <SalonSection />

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-16 border-t border-white/15 bg-[#520f02] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-white tracking-wider text-base">L'ÉLIXIR</span>
          <span>— Haute Gastronomy & 3D Curation</span>
        </div>
        <p>© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
}