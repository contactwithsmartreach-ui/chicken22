"use client";

import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/blocks/animated-gallery";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const IMAGES_1 = [
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=900",
];
const IMAGES_2 = [
  "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=900",
];
const IMAGES_3 = [
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=900",
];

export const AnimatedGallerySection = () => {
  return (
    <div className="relative bg-neutral-950 text-white overflow-hidden py-24 border-t border-neutral-900">
      <ContainerStagger className="relative z-30 -mb-12 place-self-center px-6 pt-12 text-center max-w-4xl mx-auto">
        <ContainerAnimated>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs tracking-widest uppercase mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Immersive 3D Gallery
          </div>
        </ContainerAnimated>
        <ContainerAnimated>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight mb-4">
            Artistry in <span className="italic font-normal text-amber-400">Motion</span>
          </h2>
        </ContainerAnimated>

        <ContainerAnimated className="my-6 max-w-xl mx-auto">
          <p className="text-neutral-400 text-base leading-relaxed">
            Experience our multi-dimensional culinary creations gliding seamlessly through spatial perspectives. Every masterpiece designed to elevate your senses.
          </p>
        </ContainerAnimated>

        <ContainerAnimated className="flex items-center justify-center gap-4">
          <a href="#gallery">
            <Button className="bg-amber-400 hover:bg-amber-500 text-neutral-950 font-bold px-8 py-6 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-amber-400/10">
              Explore Catalogue <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </ContainerAnimated>
      </ContainerStagger>

      <div
        className="pointer-events-none absolute z-10 h-[70vh] w-full top-1/3 left-0 opacity-30"
        style={{
          background: "linear-gradient(to right, #b45309, #d97706, #78350f)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
        }}
      />

      <ContainerScroll className="relative h-[300vh] px-4 sm:px-12 max-w-7xl mx-auto mt-12">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="border border-neutral-800 bg-neutral-900/50 backdrop-blur-md p-4">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-xl object-cover shadow-2xl border border-neutral-800"
                  src={imageUrl}
                  alt="gastronomy item"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-40%]" yRange={["15%", "5%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-xl object-cover shadow-2xl border border-neutral-800"
                  src={imageUrl}
                  alt="gastronomy item"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-xl object-cover shadow-2xl border border-neutral-800"
                  src={imageUrl}
                  alt="gastronomy item"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
};