"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import ChefStory from "./components/ChefStory";
import VirtualTour3D from "./components/VirtualTour3D";
import ReviewSection from "./components/ReviewSection";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import GitHubSyncNotice from "./components/GitHubSyncNotice";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-neutral-950 font-sans">
      <Navbar />
      <Hero />
      <Menu />
      <ChefStory />
      <VirtualTour3D />
      <ReviewSection />
      <Reservation />
      <Footer />
      <GitHubSyncNotice />
    </div>
  );
}