import { Navbar } from "@/components/Navbar";
import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { MenuSection } from "@/components/MenuSection";
import { ChefStory } from "@/components/ChefStory";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Star, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-950 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* 3D Scrollable Video Hero Section */}
      <HeroScrollVideo />

      {/* Hero overlay content floating above scroll */}
      <div className="relative z-10 -mt-[100vh] h-[300vh] pointer-events-none flex flex-col justify-between">
        <div className="h-screen flex items-center justify-center text-center px-6 pointer-events-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase font-semibold">
              <Sparkles className="w-4 h-4" />
              Michelin Three Star Sanctuary
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-none">
              Taste the <span className="italic text-amber-400">Extraordinary</span>
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-light">
              Scroll down to descend into our grand dining salon and explore avant-garde gastronomy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <ReservationModal>
                <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 py-4 rounded-full shadow-xl shadow-amber-500/20 text-base">
                  Reserve Your Experience
                </Button>
              </ReservationModal>
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-base transition-all text-center"
              >
                Explore 3D Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 3D Menu Section */}
      <MenuSection />

      {/* Chef Story & Philosophy */}
      <ChefStory />

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-16 border-t border-neutral-900 bg-neutral-950 text-neutral-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-xl text-white">L'ÉLIXIR</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Redefining luxury dining through architectural spatial design and world-class culinary art.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Location</h4>
            <p className="text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              75008 Champs-Élysées, Paris, France
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Contact</h4>
            <p className="text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              +33 1 42 68 55 00
            </p>
            <p className="text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              concierge@lelixir.gastronomy
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Hours</h4>
            <p className="text-sm">Tue — Sun: 6:00 PM — 11:30 PM</p>
            <p className="text-sm text-amber-400">Monday: Closed for foraging</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
}