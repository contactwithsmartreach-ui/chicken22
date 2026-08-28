"use client";

import React from "react";
// @ts-ignore
import { default as ScrollAnimation } from "https://framer.com/m/Scroll-Animation-q4VCML.js@SVreS3Mr8rr3CqFr2Jac";

export const ScrollAnimationMenu = () => {
  return (
    <section className="relative py-24 bg-[#751604] text-white overflow-hidden border-t border-white/10 shadow-[inset_0_50px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#681403] to-transparent pointer-events-none z-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="w-full overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-neutral-950/40 backdrop-blur-xl">
          <ScrollAnimation className="w-full h-auto min-h-[500px]" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#8b1e06] pointer-events-none z-20" />
    </section>
  );
};