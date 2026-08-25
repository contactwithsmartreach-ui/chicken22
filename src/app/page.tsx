import { HeroScrollVideo } from "@/components/HeroScrollVideo";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-950">
      {/* 3D Scrollable Video Hero Section */}
      <HeroScrollVideo />

      {/* Minimal Footer */}
      <footer className="py-12 px-6 border-t border-neutral-900 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} L'Élixir Restaurant. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
}