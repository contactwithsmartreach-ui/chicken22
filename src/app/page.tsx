import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { MenuSection } from "@/components/MenuSection";
import { ChefStory } from "@/components/ChefStory";
import { ReservationModal } from "@/components/ReservationModal";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Utensils, Star, Award, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-950">
      {/* 3D Scrollable Video Hero Section */}
      <HeroScrollVideo />

      {/* Highlights Section */}
      <section id="experience" className="relative z-10 py-28 px-6 lg:px-24 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/30">
              <Star className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Michelin Starred Craft</h3>
            <p className="text-neutral-400 leading-relaxed">
              Created by world-renowned chefs blending French culinary heritage with modern avant-garde techniques.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/30">
              <Utensils className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Interactive 3D Plates</h3>
            <p className="text-neutral-400 leading-relaxed">
              Inspect every texture, garnish, and temperature before it even touches your table in stunning 3D detail.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/30">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Exquisite Pairings</h3>
            <p className="text-neutral-400 leading-relaxed">
              Curated sommelier selections from private cellars across Bordeaux, Burgundy, and Napa Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 3D Menu Catalog Section */}
      <MenuSection />

      {/* Chef Philosophy & Story Section */}
      <ChefStory />

      {/* Reservation CTA Banner */}
      <section className="py-28 px-6 lg:px-16 bg-neutral-950 text-center relative overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
            Secure Your Table
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight">
            Ready for an Unforgettable <span className="italic text-amber-400">Gastronomy</span> Journey?
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-light">
            Book your tasting experience today and discover why L'Élixir is redefined as the pinnacle of modern fine dining.
          </p>
          <div>
            <ReservationModal>
              <Button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-10 py-6 text-lg rounded-full shadow-xl shadow-amber-500/20">
                Reserve Table Now
              </Button>
            </ReservationModal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-16 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-wider font-serif bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              L'ÉLIXIR 3D
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed">
              The world's first fully immersive 3D interactive fine dining restaurant.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#experience" className="hover:text-amber-400 transition-colors">3D Experience</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Menu Catalog</a></li>
              <li><a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" /> 452 Avenue des Champs-Élysées, Paris</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400" /> +33 1 42 68 55 00</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> reservations@lelixir3d.com</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" /> Tue - Sun: 6:00 PM - 11:30 PM</li>
              <li>Monday: Closed for Chef's Market</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
}