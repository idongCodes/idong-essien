import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  // Updated Title and Description
  title: "Idong Essien | Software Developer",
  description: "Portfolio of Idong Essien - Software Developer",
  icons: {
    icon: '/favicon.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white`}
        suppressHydrationWarning={true}
      >
        
        <Navbar />
        
        <main className="flex-1 w-full transition-all">
          {children}
        </main>
        
        <div className="w-full">
          <Footer />
        </div>

      </body>
    </html>
  );
}