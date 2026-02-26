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
  title: {
    default: "Groupe Syel | Diversified Excellence Across Industries",
    template: "%s | Groupe Syel",
  },
  description:
    "Groupe Syel is a diversified corporate group headquartered in Douala, Cameroon, driving excellence across energy, transport, agri-food, technology, construction, and real estate.",
  keywords: [
    "Groupe Syel",
    "corporate group",
    "Cameroon",
    "energy",
    "transport",
    "agri-food",
    "technology",
    "construction",
    "real estate",
  ],
  openGraph: {
    title: "Groupe Syel | Diversified Excellence Across Industries",
    description:
      "A diversified corporate group driving excellence across energy, transport, agri-food, technology, construction, and real estate.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
