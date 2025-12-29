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
  title: "Idong Essien | Developer",
  description: "Portfolio of Idong Essien - Web Developer",
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
      {/* FIX: Added suppressHydrationWarning to body to prevent extension-related errors */}
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white`}
        suppressHydrationWarning
      >
        
        <Navbar />
        
        {/* Mobile Sidebar Padding (pr-14) | Desktop Top Bar Padding (pt-0) */}
        <main className="flex-1 w-full pr-14 md:pr-0 transition-all">
          {children}
        </main>
        
        {/* Footer Padding for Mobile Sidebar */}
        <div className="pr-14 md:pr-0 w-full">
          <Footer />
        </div>

      </body>
    </html>
  );
}