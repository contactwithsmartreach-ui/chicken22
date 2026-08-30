import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chicken22.github.io/chicken22"),
  title: "L'ÉLIXIR — 3D Gastronomy Salon | Michelin Three-Star Experience",
  description:
    "An avant-garde multi-sensory fine dining odyssey in Paris, orchestrated with synchronized 3D spatial projections, molecular alchemy, and rare European vintage pairings.",
  keywords: [
    "L'Élixir",
    "3D Gastronomy",
    "Michelin Star Restaurant",
    "Molecular Dining",
    "Fine Dining Paris",
    "Interactive Projection Menu",
    "Lucien Vance",
  ],
  authors: [{ name: "L'Élixir Gastronomy Salon" }],
  openGraph: {
    title: "L'ÉLIXIR — 3D Gastronomy Salon",
    description:
      "Michelin three-star fine dining experience with immersive 3D culinary previews and multi-sensory projection art.",
    url: "https://chicken22.github.io/chicken22",
    siteName: "L'Élixir 3D Gastronomy Salon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "L'ÉLIXIR — 3D Gastronomy Salon Preview",
      },
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "L'ÉLIXIR — 3D Gastronomy Salon Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'ÉLIXIR — 3D Gastronomy Salon",
    description:
      "Michelin three-star fine dining experience with immersive 3D culinary previews.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}