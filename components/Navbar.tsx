"use client"; // Required for useState and interactive events

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full bg-black border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* --- Logo Area --- */}
          <Link href="/" className="flex items-center gap-3 z-50">
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

          {/* --- Desktop Menu (Hidden on Mobile) --- */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-sky-blue transition-colors">Home</Link>
            <Link href="/about" className="hover:text-sky-blue transition-colors">About</Link>
            <Link href="/contact" className="hover:text-sky-blue transition-colors">Contact</Link>
          </div>

          {/* --- Mobile Hamburger Button --- */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none z-50 p-2"
            aria-label="Toggle menu"
          >
            {/* Simple Hamburger Icon */}
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* --- Mobile Slide-in Menu --- */}
      {/* 1. Backdrop (Invisible clickable area to close menu when clicking outside) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 2. The Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-1/2 bg-black/90 backdrop-blur-sm border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out md:hidden pt-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 gap-6 text-lg font-medium text-gray-300">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-sky-blue transition-colors border-b border-white/5 pb-2"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-sky-blue transition-colors border-b border-white/5 pb-2"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-sky-blue transition-colors border-b border-white/5 pb-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}