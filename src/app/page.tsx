import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { ChefStory } from "@/components/ChefStory";
import { MenuSection } from "@/components/MenuSection";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { UtensilsCrossed, Sparkles, MapPin, Phone, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-6 bg-gradient-to-b from-neutral-950/80 via-neutral-950/45 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-wider text-white">L'ÉLIXIR</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-amber-400 font-medium">Paris • Haute Gastronomy</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
          <a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Explore Menu</a>
        </div>

        <div>
          <ReservationModal>
            <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/20 text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105">
              Reserve Table
            </Button>
          </ReservationModal>
        </div>
      </header>

      {/* 3D Scrollable Video Hero Section */}
      <HeroScrollVideo />

      {/* Chef & Brand Story Section */}
      <ChefStory />

      {/* Interactive Menu Exploration Section */}
      <MenuSection />

      {/* Luxury Experience Call to Action Banner */}
      <section className="py-24 px-6 lg:px-16 bg-neutral-900 border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            An Unforgettable Evening Awaits
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
            Reserve Your <span className="italic text-amber-400">Culinary Journey</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
            Join us for an immersive multi-course tasting experience curated by Executive Chef Jean-Luc Moreau.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <ReservationModal>
              <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-amber-500/20">
                Book a Table Now
              </Button>
            </ReservationModal>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 lg:px-16 border-t border-neutral-900 bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neutral-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>42 Avenue Montaigne, 75008 Paris</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Tue – Sun: 6PM – 11PM</span>
          </div>
        </div>
        <p>© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
}