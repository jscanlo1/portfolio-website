import type { Metadata } from "next";
import { Lora, Spectral, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
//  variable: "--font-lora",
  subsets: ["latin"],
});

const spectral = Spectral({
//  variable: "--font-spectral",
  subsets: ["latin"],
  weight: "300"
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Johnny Scanlon's portfolio ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_sans.className} ${lora.className} ${spectral.className} antialiased font-lora font-black bg-parchment-light bg-[url('/noise.png')] font-sans`}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}