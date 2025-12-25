import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      {/* Added 'bg-black' here as a safeguard */}
      <body className="antialiased flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        
        <main className="flex-1 w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}