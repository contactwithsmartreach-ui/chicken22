"use client";

import React from "react";
import { Sparkles, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    toast.success("Successfully subscribed to L'Élixir Private Journal!");
    setNewsletterEmail("");
  };

  return (
    <footer id="contact" className="bg-neutral-950 text-white pt-20 pb-12 border-t border-neutral-800/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-0.5 shadow-lg shadow-amber-600/30">
                <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                L'ÉLIXIR
              </span>
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              The pinnacle of 3D molecular gastronomy and multi-sensory projection dining. Orchestrated by Chef Lucien Vance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 hover:bg-neutral-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 hover:bg-neutral-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 hover:bg-neutral-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Salon Hours */}
          <div>
            <h4 className="font-serif font-bold text-lg text-amber-300 mb-4">Salon Hours</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Tuesday – Sunday</strong>
                  <span>Seating 1: 17:30 | Seating 2: 19:00 | Seating 3: 21:15</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Location</strong>
                  <span>75008 Rue du Faubourg Saint-Honoré, Paris</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-lg text-amber-300 mb-4">Reservations & Private</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+33 1 42 68 55 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>concierge@lelixir-gastronomy.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-lg text-amber-300 mb-4">Private Journal</h4>
            <p className="text-neutral-400 text-sm font-light mb-4">
              Subscribe to receive private invitations to seasonal tasting premieres.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-semibold text-sm hover:from-amber-400 hover:to-yellow-500 transition-colors shadow-lg shadow-amber-600/20"
              >
                Join Private List
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} L'Élixir 3D Gastronomy Salon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Sommelier Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}