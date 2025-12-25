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
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        
        {/* Removed padding and max-width here so Hero can be full-width */}
        <main className="flex-1 w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}