"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Utensils, Award } from "lucide-react";
import { toast } from "sonner";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2 Guests",
    date: "2025-04-15",
    time: "19:00 (First Seating)",
    dietary: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all contact details.");
      return;
    }
    setStep(2);
    toast.success("Table reserved successfully! Confirmation sent to your email.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Exclusive 12-Course Booking</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Reserve Your 3D Dining Experience</h3>
            <p className="text-neutral-400 text-sm mb-6">Seating is strictly limited to 16 guests per session to ensure pristine 3D projection synchronization.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Monsieur / Madame"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="guest@luxury.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Party Size</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests (Private Table)</option>
                    <option>6 Guests (VIP Salon)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Seating Time</label>
                  <select
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option>17:30 (Sunset Seating)</option>
                    <option>19:00 (First Seating)</option>
                    <option>21:15 (Starlight Seating)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">Dietary Notes / Allergies (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Vegetarian, Shellfish allergy, etc."
                  value={formData.dietary}
                  onChange={e => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold tracking-wide hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 mt-6"
              >
                <Utensils className="w-5 h-5" />
                <span>Confirm Reservation ($380 per guest)</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-2">Reservation Confirmed</h3>
            <p className="text-neutral-300 text-sm mb-6">
              We look forward to welcoming you, <span className="text-amber-400 font-semibold">{formData.name}</span>. A confirmation email has been dispatched to <span className="text-amber-400 font-semibold">{formData.email}</span>.
            </p>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-left space-y-3 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Date & Time:</span>
                <span className="font-medium text-amber-200">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Party Size:</span>
                <span className="font-medium text-amber-200">{formData.guests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Experience:</span>
                <span className="font-medium text-amber-200">12-Course Molecular 3D Symphony</span>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors text-sm font-medium"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}