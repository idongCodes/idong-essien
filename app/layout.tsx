import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
  title: "Idong Essien | Software & Web Developer",
  description: "Portfolio of Idong Essien, a Software & Web Developer specializing in bespoke websites, Progressive Web Apps (PWAs), and internal software solutions.",
  keywords: ["Software Developer", "Web Developer", "React", "Next.js", "PWA", "Worcester MA", "Idong Essien", "Frontend Developer"],
  authors: [{ name: "Idong Essien" }],
  creator: "Idong Essien",
  metadataBase: new URL("https://essien.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://essien.dev",
    title: "Idong Essien | Software & Web Developer",
    description: "Portfolio of Idong Essien, a Software & Web Developer specializing in bespoke websites, Progressive Web Apps (PWAs), and internal software solutions.",
    siteName: "Idong Essien Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idong Essien | Software & Web Developer",
    description: "Portfolio of Idong Essien, a Software & Web Developer specializing in bespoke websites, Progressive Web Apps (PWAs), and internal software solutions.",
    creator: "@idongcodes",
  },
  icons: {
    icon: '/favicon.jpeg',
  },
  alternates: {
    canonical: "/",
  }
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
        
        <ScrollToTop />
      </body>
    </html>
  );
}