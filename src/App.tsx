"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveMenu3D from "./components/InteractiveMenu3D";
import Experience3D from "./components/Experience3D";
import ChefSection from "./components/ChefSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ReservationModal from "./components/ReservationModal";
import { Toaster } from "sonner";

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-amber-500 selection:text-neutral-950">
      <Toaster position="top-right" richColors theme="dark" />
      
      <Navbar onOpenReservation={() => setReservationOpen(true)} />
      
      <main>
        <Hero />
        <InteractiveMenu3D />
        <Experience3D />
        <ChefSection />
        <ReviewsSection />
      </main>

      <Footer />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}