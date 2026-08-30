"use client";

import React from "react";
import { MadeWithDyad } from "./made-with-dyad";

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-16 border-t border-white/15 bg-[#520f02] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/70">
      <div className="flex items-center gap-2">
        <span className="font-serif font-bold text-white tracking-wider text-base">L'ÉLIXIR</span>
      </div>
      <MadeWithDyad />
    </footer>
  );
}