import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Ensure Footer is imported
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white`}>
        
        <Navbar />
        
        {/* LAYOUT ADJUSTMENT:
           - Mobile: pr-14 (Right Padding) to make room for the sidebar.
           - Desktop: md:pr-0 because the nav moves to the top.
        */}
        <main className="flex-1 w-full pr-14 md:pr-0 transition-all">
          {children}
        </main>
        
        {/* Footer also needs padding on mobile so it doesn't touch the sidebar */}
        <div className="pr-14 md:pr-0 w-full">
          <Footer />
        </div>

      </body>
    </html>
  );
}