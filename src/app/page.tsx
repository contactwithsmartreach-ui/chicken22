import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { Navigation } from "@/components/Navigation";
import { ExploreGallery } from "@/components/ExploreGallery";
import { SalonSection } from "@/components/SalonSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EBE9E1] text-[#221c19]">
      <Navigation />

      {/* 3D Scrollable Video Hero Section (untouched dark theme) */}
      <div id="explore">
        <HeroScrollVideo />
      </div>

      {/* Explore-Only Dish Catalogue with Palette & Glassmorphism */}
      <ExploreGallery />

      {/* Salon Location & Reservation */}
      <SalonSection />

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-16 border-t border-[#221c19]/10 bg-[#EBE9E1] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#221c19]/70">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#221c19] tracking-wider text-base">L'ÉLIXIR</span>
          <span>— Haute Gastronomy & 3D Curation</span>
        </div>
        <p>© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
}