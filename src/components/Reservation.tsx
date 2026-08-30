"use client";

import React from "react";
import ReservationModal from "./ReservationModal";
import { Button } from "@/components/ui/button";

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-neutral-900 text-center text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold mb-4">Secure Your Culinary Experience</h2>
        <p className="text-neutral-400 mb-8">Join us for an unforgettable evening of 3D gastronomy and molecular artistry.</p>
      </div>
    </section>
  );
}