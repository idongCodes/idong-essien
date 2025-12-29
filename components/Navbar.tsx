"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="
      /* --- MOBILE: RIGHT SIDEBAR CONTAINER --- */
      fixed top-0 right-0 h-screen w-14
      bg-zinc-900/90 backdrop-blur-md border-l border-white/10 z-40
      flex flex-col justify-center items-center py-8
      
      /* --- DESKTOP: TOP NAVBAR (Fixed Header) --- */
      md:fixed md:top-0 md:left-0 md:right-0 md:h-16 md:w-full 
      md:bg-black md:border-l-0 md:border-b md:backdrop-filter-none md:z-50
      md:flex-row md:justify-between md:py-0 md:px-6
    ">
      
      {/* 1. LOGO (Pinned Top-Left on Mobile) */}
      <Link 
        href="/" 
        onClick={scrollToTop} 
        className="
          /* Mobile Positioning: Fixed Top-Left */
          fixed top-4 left-4 z-50
          
          /* Desktop Positioning: Static (Inside Navbar) */
          md:static md:z-auto
          
          flex items-center gap-2 group
        "
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-blue/50 bg-black">
          <Image 
            src="/favicon.jpeg" 
            alt="Logo" 
            fill
            className="object-cover group-hover:scale-110 transition-transform"
          />
        </div>
        <span className="font-bold text-xl tracking-tight text-white drop-shadow-md bg-black/60 md:bg-transparent rounded px-2 py-1">
          Idong<span className="text-sky-blue">Essien</span>
        </span>
      </Link>

      {/* 2. NAV LINKS (Right Sidebar on Mobile) */}
      <div className="
        flex items-center gap-10
        /* Mobile: Vertical Column */
        flex-col
        /* Desktop: Horizontal Row */
        md:flex-row md:gap-8
      ">
        
        {/* --- HOME --- */}
        <Link 
          href="/" 
          onClick={scrollToTop} 
          className="group text-white md:text-gray-400 md:hover:text-sky-blue transition-colors relative"
          title="Home"
        >
          <FaHome className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="hidden md:block text-sm font-medium">Home</span>
        </Link>
        
        {/* --- ABOUT --- */}
        <Link 
          href="#about" 
          className="group text-white md:text-gray-400 md:hover:text-sky-blue transition-colors relative"
          title="About"
        >
          <FaUser className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="hidden md:block text-sm font-medium">About</span>
        </Link>

        {/* --- PROJECTS --- */}
        <Link 
          href="#projects" 
          className="group text-white md:text-gray-400 md:hover:text-sky-blue transition-colors relative"
          title="Projects"
        >
          <FaBriefcase className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="hidden md:block text-sm font-medium">Projects</span>
        </Link>
        
        {/* --- CONTACT --- */}
        <Link 
          href="#contact" 
          className="group text-white md:text-gray-400 md:hover:text-sky-blue transition-colors relative"
          title="Contact"
        >
          <FaEnvelope className="text-2xl md:hidden group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="hidden md:block text-sm font-medium">Contact</span>
        </Link>
      </div>

    </nav>
  );
}