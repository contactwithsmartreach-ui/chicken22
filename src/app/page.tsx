import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { ChefStory } from "@/components/ChefStory";
import { MenuSection } from "@/components/MenuSection";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { UtensilsCrossed, Sparkles, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-6 bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent backdrop-blur-md border-b border-neutral-950">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-wider text-white">L'ÉLIXIR</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-amber-400 font-semibold">Paris • Haute Gastronomy</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-neutral-300">
          <a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Explore Menu</a>
        </div>

        <div>
          <ReservationModal>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-7 py-3 rounded-full shadow-xl shadow-amber-500/25 text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 border border-amber-400/30">
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
      <section className="py-32 px-6 lg:px-16 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800/80 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            An Unforgettable Evening Awaits
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
            Reserve Your <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Culinary Journey</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Join us for an immersive multi-course tasting experience curated by Executive Chef Jean-Luc Moreau.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <ReservationModal>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-10 py-5 rounded-2xl text-base shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 border border-amber-400/40">
                Book a Table Now
              </Button>
            </ReservationModal>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 lg:px-16 border-t border-neutral-900 bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>42 Avenue Montaigne, 75008 Paris</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Tue – Sun: 6PM – 11PM</span>
          </div>
        </div>
        <p className="text-neutral-500 font-light">© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
}