import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the footer

export const metadata: Metadata = {
  title: "Idong Essien",
  description: "Next.js Web App",
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
      {/* 1. Make body a flex container that fills the screen height */}
      <body className="antialiased flex flex-col min-h-screen">
        
        <Navbar />
        
        {/* 2. Main grows to fill available space, pushing footer down */}
        <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}