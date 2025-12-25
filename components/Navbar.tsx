"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to scroll to top smoothly
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu if open
  };

  // Helper to close menu when clicking a regular link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-black border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between bg-black relative z-50">
          
          {/* Logo - Scrolls to Top */}
          <Link href="/" onClick={scrollToTop} className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-blue/50">
              <Image 
                src="/favicon.jpeg" 
                alt="Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Idong<span className="text-sky-blue">Essien</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <Link href="/" onClick={scrollToTop} className="hover:text-sky-blue transition-colors">
              Home
            </Link>
            {/* Href points to the ID */}
            <Link href="#about" className="hover:text-sky-blue transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-sky-blue transition-colors">
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-1/2 bg-black/90 backdrop-blur-sm border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out md:hidden pt-24 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 gap-6 text-lg font-medium text-gray-300">
          <Link 
            href="/" 
            onClick={scrollToTop} 
            className="hover:text-sky-blue transition-colors border-b border-white/5 pb-2"
          >
            Home
          </Link>
          <Link 
            href="#about" 
            onClick={handleLinkClick} 
            className="hover:text-sky-blue transition-colors border-b border-white/5 pb-2"
          >
            About
          </Link>
          <Link 
            href="#contact" 
            onClick={handleLinkClick} 
            className="hover:text-sky-blue transition-colors border-b border-white/5 pb-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}