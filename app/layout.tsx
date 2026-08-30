import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asadhaye.com"),
  title: "Muhammad Asad Haye — Digital Growth Strategist & Product Builder",
  description: "Muhammad Asad Haye works across marketing, e-commerce, technology and AI to build digital businesses and products.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Asad Haye — Digital Growth Strategist & Product Builder",
    description: "Marketing, commerce, technology and AI — building digital businesses and products.",
    url: "https://www.asadhaye.com",
    siteName: "Asad Haye",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${instrument.variable}`}>{children}</body>
    </html>
  );
}
