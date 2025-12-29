"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="
      /* --- MOBILE: RIGHT SIDEBAR CONTAINER --- */
      fixed top-0 right-0 h-screen w-14
      bg-black border-l border-white/10 z-50
      flex flex-col justify-center items-center py-8
      
      /* --- DESKTOP: TOP NAVBAR (Resets to standard) --- */
      md:sticky md:top-0 md:h-auto md:w-full md:border-l-0 md:border-b
      md:flex-row md:justify-between md:py-3 md:px-6
    ">
      
      {/* 1. LOGO */}
      <Link 
        href="/" 
        onClick={scrollToTop} 
        className="
          /* Mobile Positioning */
          fixed top-4 left-4 z-50
          
          /* Desktop Positioning (Reset) */
          md:static md:z-auto
          
          flex items-center gap-2 group
        "
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-blue/50">
          <Image 
            src="/favicon.jpeg" 
            alt="Logo" 
            fill
            className="object-cover group-hover:scale-110 transition-transform"
          />
        </div>
        <span className="font-bold text-xl tracking-tight text-white drop-shadow-md bg-black/50 md:bg-transparent rounded px-1">
          Idong<span className="text-sky-blue">Essien</span>
        </span>
      </Link>

      {/* 2. NAV LINKS */}
      <div className="
        flex items-center gap-12
        /* Mobile: Vertical + Rotated Text */
        flex-col-reverse
        
        /* Desktop: Horizontal + Normal Text */
        md:flex-row md:gap-6
      ">
        <Link 
          href="/" 
          onClick={scrollToTop} 
          className="
            text-sm font-medium text-gray-400 hover:text-sky-blue transition-colors
            -rotate-90 md:rotate-0 whitespace-nowrap
          "
        >
          Home
        </Link>
        
        <Link 
          href="#about" 
          className="
            text-sm font-medium text-gray-400 hover:text-sky-blue transition-colors
            -rotate-90 md:rotate-0 whitespace-nowrap
          "
        >
          About
        </Link>

        {/* --- NEW LINK --- */}
        <Link 
          href="#projects" 
          className="
            text-sm font-medium text-gray-400 hover:text-sky-blue transition-colors
            -rotate-90 md:rotate-0 whitespace-nowrap
          "
        >
          Projects
        </Link>
        
        <Link 
          href="#contact" 
          className="
            text-sm font-medium text-gray-400 hover:text-sky-blue transition-colors
            -rotate-90 md:rotate-0 whitespace-nowrap
          "
        >
          Contact
        </Link>
      </div>

    </nav>
  );
}