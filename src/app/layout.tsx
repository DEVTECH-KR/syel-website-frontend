import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Groupe Syel | Excellence diversifiée à travers les industries",
    template: "%s | Groupe Syel",
  },
  description:
    "Le Groupe Syel est un groupe diversifié dont le siège est à Kinshasa, en République Démocratique du Congo, œuvrant dans l'énergie, le transport, l'agroalimentaire, la technologie, la construction et l'immobilier.",
  keywords: [
    "Groupe Syel",
    "groupe diversifié",
    "République Démocratique du Congo",
    "énergie",
    "transport",
    "agroalimentaire",
    "technologie",
    "construction",
    "immobilier",
  ],
  openGraph: {
    title: "Groupe Syel | Excellence diversifiée à travers les industries",
    description:
      "Un groupe diversifié qui porte l'excellence dans l'énergie, le transport, l'agroalimentaire, la technologie, la construction et l'immobilier.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
