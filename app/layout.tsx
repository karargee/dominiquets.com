import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";
import LiveChat from "@/components/LiveChat";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TS Dominique - Premium Adult Entertainment Services",
  description: "Professional dominatrix services, Lovense toys, dungeon experiences, and custom content creation. Discreet, safe, and unforgettable.",
  keywords: "dominatrix, BDSM, dungeon, Lovense, adult entertainment, professional domme",
  openGraph: {
    title: "TS Dominique - Premium Services",
    description: "Professional adult entertainment services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <AgeVerification />
          <Navigation />
          {children}
          <Footer />
          <LiveChat />
        </CartProvider>
      </body>
    </html>
  );
}
