"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundParticleAnimation = () => {
  // Generate floating gold particles
  const particles = Array.from({ length: 24 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = Math.floor(Math.random() * 6) + 3;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#EFB11D]"
            style={{
              width: randomSize,
              height: randomSize,
              left: `${randomX}%`,
              top: `${randomY}%`,
              boxShadow: "0 0 10px #EFB11D, 0 0 20px rgba(239, 177, 29, 0.4)",
            }}
            initial={{ opacity: 0.1, y: 0, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              y: [-40, -140, -240],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Floating subtle ambient luminous gold aura orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#EFB11D]/10 blur-[140px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-[#E43D12]/15 blur-[160px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};