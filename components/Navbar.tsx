"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaHandshake } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("home");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "projects", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId === "home" ? "hero" : sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setActiveSection("contact");
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED: Dot now sits below the icon for the horizontal layout
  const ActiveDot = ({ section }: { section: string }) => (
    activeSection === section ? (
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-blue rounded-full shadow-[0_0_8px_rgba(135,206,235,0.8)] md:hidden"></div>
    ) : null
  );

  return (
    <>
      {/* MOBILE HEADER (Logo stays at top) */}
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

      {/* NAVIGATION BAR (Floating Bottom Pill) */}
      <nav className="
        fixed bottom-6 left-1/2 -translate-x-1/2 
        w-[90%] max-w-[400px] h-16 
        bg-zinc-900/90 backdrop-blur-xl border border-white/10 
        rounded-full shadow-2xl z-50
        flex flex-row justify-evenly items-center px-2

        md:fixed md:top-0 md:left-0 md:right-0 md:h-16 md:w-full md:transform-none 
        md:rounded-none md:border-b md:border-white/10 md:bg-black md:backdrop-filter-none 
        md:justify-between md:px-6 md:border-t-0 md:shadow-none
      ">
        
        {/* Desktop Logo (Hidden on mobile) */}
        <Link href="/" onClick={scrollToTop} className="hidden md:flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-blue/50 bg-black">
            <Image src="/favicon.jpeg" alt="Logo" fill className="object-cover group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Idong<span className="text-sky-blue">Essien</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex w-full md:w-auto justify-evenly md:justify-end md:gap-8 items-center">
          
          <Link 
            href="/" 
            onClick={scrollToTop} 
            className={`group transition-colors relative flex flex-col items-center ${activeSection === 'home' ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaHome className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="home" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'home' ? 'text-sky-blue' : ''}`}>Home</span>
          </Link>
          
          <Link 
            href="#about" 
            className={`group transition-colors relative flex flex-col items-center ${activeSection === 'about' ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaUser className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="about" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'about' ? 'text-sky-blue' : ''}`}>About</span>
          </Link>

          <Link 
            href="#work" 
            className={`group transition-colors relative flex flex-col items-center ${activeSection === 'work' ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaHandshake className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="work" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'work' ? 'text-sky-blue' : ''}`}>Work</span>
          </Link>

          <Link 
            href="#projects" 
            className={`group transition-colors relative flex flex-col items-center ${activeSection === 'projects' ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaBriefcase className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="projects" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'projects' ? 'text-sky-blue' : ''}`}>Projects</span>
          </Link>
          
          <Link 
            href="#contact" 
            className={`group transition-colors relative flex flex-col items-center ${activeSection === 'contact' ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaEnvelope className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="contact" />
            <span className={`hidden md:block text-sm font-medium ${activeSection === 'contact' ? 'text-sky-blue' : ''}`}>Contact</span>
          </Link>
        </div>

      </nav>
    </>
  );
}