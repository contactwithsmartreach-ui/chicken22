"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, UtensilsCrossed, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const ReservationModal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Table reservation confirmed successfully!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if(!open) setIsSubmitted(false); }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-[#EBE9E1]/95 backdrop-blur-2xl border border-white/80 text-[#221c19] sm:max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl">
        <DialogHeader className="mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#E43D12]/10 flex items-center justify-center mb-4 border border-[#E43D12]/30">
            <UtensilsCrossed className="w-6 h-6 text-[#E43D12]" />
          </div>
          <DialogTitle className="text-2xl font-serif font-bold text-[#221c19]">Reserve Your Table</DialogTitle>
          <p className="text-sm text-[#221c19]/70">Experience L'Élixir's 3D Gastronomy in person.</p>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#221c19]">Reservation Confirmed!</h3>
            <p className="text-sm text-[#221c19]/75 max-w-sm mx-auto">
              We have sent a confirmation email to <span className="text-[#E43D12] font-medium">{formData.email}</span> with your booking details.
            </p>
            <Button
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-[#E43D12] hover:bg-[#c9320d] text-white font-bold px-8 rounded-xl shadow-md"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-[#221c19]/70 font-semibold">Full Name</Label>
              <Input
                id="name"
                required
                placeholder="Jean Dupont"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/60 border-white/80 text-[#221c19] focus:border-[#E43D12] rounded-xl shadow-inner"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-[#221c19]/70 font-semibold">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="jean@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/60 border-white/80 text-[#221c19] focus:border-[#E43D12] rounded-xl shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#221c19]/70 font-semibold">Phone Number</Label>
                <Input
                  id="phone"
                  required
                  placeholder="+1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/60 border-white/80 text-[#221c19] focus:border-[#E43D12] rounded-xl shadow-inner"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-xs uppercase tracking-wider text-[#221c19]/70 font-semibold">Date</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-white/60 border-white/80 text-[#221c19] focus:border-[#E43D12] rounded-xl text-xs shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-xs uppercase tracking-wider text-[#221c19]/70 font-semibold">Time</Label>
                <select
                  id="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full h-10 px-3 bg-white/60 border border-white/80 text-[#221c19] focus:border-[#E43D12] rounded-xl text-sm shadow-inner"
                >
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-xs uppercase tracking-wider text-[#221c19]/70 font-semibold">Guests</Label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full h-10 px-3 bg-white/60 border border-white/80 text-[#221c19] focus:border-[#E43D12] rounded-xl text-sm shadow-inner"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="6">6+ Persons</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E43D12] hover:bg-[#c9320d] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#E43D12]/25 text-base mt-4 transition-transform active:scale-98"
            >
              Confirm Table Reservation
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};