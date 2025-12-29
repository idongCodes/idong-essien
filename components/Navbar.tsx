"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("home");
  };

  // --- SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections we want to track
      const sections = ["home", "about", "projects", "contact"];
      
      // Find the one currently most visible in the viewport
      for (const sectionId of sections) {
        // Note: Ensure your Hero section has id="hero" in page.tsx
        const element = document.getElementById(sectionId === "home" ? "hero" : sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top third of the screen
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
          // Fallback: Check if we are near the bottom for Contact
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setActiveSection("contact");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper component for the Dot
  const ActiveDot = ({ section }: { section: string }) => (
    activeSection === section ? (
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] md:hidden"></div>
    ) : null
  );

  return (
    <>
      {/* --- MOBILE HEADER (Sticky Logo) --- */}
      <header className="md:hidden sticky top-0 z-40 w-full flex items-center px-4 py-3 bg-black/40 backdrop-blur-md">
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 overflow-hidden rounded-full border border-sky-blue/50 bg-black">
            <Image src="/favicon.jpeg" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white drop-shadow-md">
            Idong<span className="text-sky-blue">Essien</span>
          </span>
        </Link>
      </header>


      {/* --- NAVIGATION CONTAINER --- */}
      <nav className="
        /* Mobile: Right Sidebar */
        fixed top-0 right-0 h-screen w-14
        bg-zinc-900/40 backdrop-blur-md z-50
        flex flex-col justify-center items-center py-8
        
        /* Desktop: Top Bar */
        md:fixed md:top-0 md:left-0 md:right-0 md:h-16 md:w-full 
        md:bg-black md:border-b md:border-white/10 md:backdrop-filter-none md:z-50
        md:flex-row md:justify-between md:py-0 md:px-6
      ">
        
        {/* Desktop Logo */}
        <Link href="/" onClick={scrollToTop} className="hidden md:flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-blue/50 bg-black">
            <Image src="/favicon.jpeg" alt="Logo" fill className="object-cover group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Idong<span className="text-sky-blue">Essien</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-10 flex-col md:flex-row md:gap-8">
          
          {/* HOME */}
          <Link 
            href="/" 
            onClick={scrollToTop} 
            className={`group transition-colors relative ${activeSection === 'home' ? 'text-white' : 'text-gray-400 hover:text-sky-blue'}`}
          >
            <ActiveDot section="home" />
            <FaHome className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'home' ? 'text-sky-blue' : ''}`}>Home</span>
          </Link>
          
          {/* ABOUT */}
          <Link 
            href="#about" 
            className={`group transition-colors relative ${activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-sky-blue'}`}
          >
            <ActiveDot section="about" />
            <FaUser className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'about' ? 'text-sky-blue' : ''}`}>About</span>
          </Link>

          {/* PROJECTS */}
          <Link 
            href="#projects" 
            className={`group transition-colors relative ${activeSection === 'projects' ? 'text-white' : 'text-gray-400 hover:text-sky-blue'}`}
          >
            <ActiveDot section="projects" />
            <FaBriefcase className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'projects' ? 'text-sky-blue' : ''}`}>Projects</span>
          </Link>
          
          {/* CONTACT */}
          <Link 
            href="#contact" 
            className={`group transition-colors relative ${activeSection === 'contact' ? 'text-white' : 'text-gray-400 hover:text-sky-blue'}`}
          >
            <ActiveDot section="contact" />
            <FaEnvelope className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'contact' ? 'text-sky-blue' : ''}`}>Contact</span>
          </Link>
        </div>

      </nav>
    </>
  );
}