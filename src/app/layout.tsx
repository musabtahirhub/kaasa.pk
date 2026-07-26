import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaasa.pk | Bespoke Luxury Furniture & Interior Design Atelier",
  description: "Handcrafted luxury furniture engineered with solid Sheesham wood, velvet upholstery, and gold accents across Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} scroll-smooth dark`}>
      <body className="bg-kaasa-dark text-kaasa-text antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
