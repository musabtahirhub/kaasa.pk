import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaasa.pk | Bespoke Luxury Workspace & Living",
  description: "Elevate your living space with bespoke desk decor, workspace essentials, and room lighting across Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${alexBrush.variable} scroll-smooth dark`}>
      <body className="bg-hh-ink text-hh-bone antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
