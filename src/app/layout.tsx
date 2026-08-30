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

const siteUrl = "https://chicken22.github.io/chicken22";
const ogImageUrl = "https://chicken22.github.io/chicken22/opengraph-image";
const fallbackOgImageUrl = "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200&h=630";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "L'Élixir 3D Gastronomy Salon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "L'ÉLIXIR — 3D Gastronomy Salon Michelin Three-Star Experience",
        type: "image/png",
      },
      {
        url: fallbackOgImageUrl,
        width: 1200,
        height: 630,
        alt: "L'ÉLIXIR Haute Cuisine Preview",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'ÉLIXIR — 3D Gastronomy Salon",
    description:
      "Michelin three-star fine dining experience with immersive 3D culinary previews.",
    images: [ogImageUrl, fallbackOgImageUrl],
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
      <head>
        {/* Explicit OpenGraph & Telegram/WhatsApp tags */}
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="L'ÉLIXIR — 3D Gastronomy Salon" />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}