import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/sections/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Glai Baan | Isan Thai Street Food | Phoenix AZ",
  description:
    "Phoenix's most celebrated Thai street food restaurant. Authentic Isan cuisine by Chef Cat Bunnag. Walk-ins welcome at 2333 E Osborn Rd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg-dark text-cream font-body">
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
