import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nerèa — Extrait de Parfum",
  description:
    "Nerèa — Timeless Elegance in Every Scent. A modern niche fragrance house crafting extrait de parfum for the few who truly notice.",
  keywords: ["perfume", "extrait de parfum", "niche fragrance", "luxury scent", "Nerèa"],
  openGraph: {
    title: "Nerèa — Extrait de Parfum",
    description:
      "Timeless elegance in every scent. Composed for those who wear silence beautifully.",
    type: "website",
    locale: "en_US",
    siteName: "Maison Nerèa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nerèa — Extrait de Parfum",
    description: "Timeless elegance in every scent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${poppins.variable}`}
    >
      <body className="grain bg-ink text-ivory antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
