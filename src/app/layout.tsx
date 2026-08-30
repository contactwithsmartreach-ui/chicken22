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
  title: {
    default: "L'ÉLIXIR — 3D Gastronomy Salon | Michelin Three-Star Experience",
    template: "%s | L'ÉLIXIR",
  },
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
  authors: [{ name: "L'Élixir Gastronomy Salon", url: "https://chicken22.github.io/chicken22" }],
  creator: "L'Élixir",
  publisher: "L'Élixir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://chicken22.github.io/chicken22",
  },
  openGraph: {
    title: "L'ÉLIXIR — 3D Gastronomy Salon | Michelin Three-Star Experience",
    description:
      "An avant-garde multi-sensory fine dining odyssey in Paris, orchestrated with synchronized 3D spatial projections and alchemical gastronomy.",
    url: "https://chicken22.github.io/chicken22",
    siteName: "L'ÉLIXIR",
    images: [
      {
        url: "https://chicken22.github.io/chicken22/opengraph-image",
        width: 1200,
        height: 630,
        alt: "L'ÉLIXIR — 3D Gastronomy Salon",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'ÉLIXIR — 3D Gastronomy Salon",
    description:
      "An avant-garde multi-sensory fine dining odyssey in Paris, orchestrated with synchronized 3D spatial projections.",
    images: ["https://chicken22.github.io/chicken22/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#520f02",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Direct Open Graph meta tags for WhatsApp, Telegram, iMessage & Facebook crawlers */}
        <meta property="og:title" content="L'ÉLIXIR — 3D Gastronomy Salon | Michelin Three-Star Experience" />
        <meta property="og:description" content="An avant-garde multi-sensory fine dining odyssey in Paris, orchestrated with synchronized 3D spatial projections and alchemical gastronomy." />
        <meta property="og:image" content="https://chicken22.github.io/chicken22/opengraph-image" />
        <meta property="og:image:secure_url" content="https://chicken22.github.io/chicken22/opengraph-image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="L'ÉLIXIR — 3D Gastronomy Salon" />
        <meta property="og:url" content="https://chicken22.github.io/chicken22" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="L'ÉLIXIR" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="L'ÉLIXIR — 3D Gastronomy Salon" />
        <meta name="twitter:description" content="An avant-garde multi-sensory fine dining odyssey in Paris, orchestrated with synchronized 3D spatial projections." />
        <meta name="twitter:image" content="https://chicken22.github.io/chicken22/opengraph-image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#681403] text-white selection:bg-[#EFB11D] selection:text-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}