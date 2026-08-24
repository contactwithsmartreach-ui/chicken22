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
      <DialogContent className="bg-neutral-950 border border-neutral-800 text-white sm:max-w-lg p-6 sm:p-8 rounded-3xl">
        <DialogHeader className="mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/30">
            <UtensilsCrossed className="w-6 h-6 text-amber-400" />
          </div>
          <DialogTitle className="text-2xl font-serif font-bold">Reserve Your Table</DialogTitle>
          <p className="text-sm text-neutral-400">Experience L'Élixir's 3D Gastronomy in person.</p>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Reservation Confirmed!</h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto">
              We have sent a confirmation email to <span className="text-amber-400">{formData.email}</span> with your booking details.
            </p>
            <Button
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 rounded-xl"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-neutral-400">Full Name</Label>
              <Input
                id="name"
                required
                placeholder="Jean Dupont"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-neutral-900 border-neutral-800 text-white focus:border-amber-500 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-400">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="jean@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-neutral-900 border-neutral-800 text-white focus:border-amber-500 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-neutral-400">Phone Number</Label>
                <Input
                  id="phone"
                  required
                  placeholder="+1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-neutral-900 border-neutral-800 text-white focus:border-amber-500 rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-xs uppercase tracking-wider text-neutral-400">Date</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-neutral-900 border-neutral-800 text-white focus:border-amber-500 rounded-xl text-xs"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-xs uppercase tracking-wider text-neutral-400">Time</Label>
                <select
                  id="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full h-10 px-3 bg-neutral-900 border border-neutral-800 text-white focus:border-amber-500 rounded-xl text-sm"
                >
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-xs uppercase tracking-wider text-neutral-400">Guests</Label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full h-10 px-3 bg-neutral-900 border border-neutral-800 text-white focus:border-amber-500 rounded-xl text-sm"
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
              className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 text-base mt-4"
            >
              Confirm Table Reservation
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};