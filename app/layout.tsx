import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}