"use client";

import Image from "next/image";
import Link from "next/link";
// 1. Added usePathname
import { usePathname } from "next/navigation"; 
import { useState, useEffect } from "react";
// 2. Added FaPenNib for Blog icon
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaHandshake, FaPenNib } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  // 3. Get current path
  const pathname = usePathname(); 

  const scrollToTop = (e: React.MouseEvent) => {
    // Only prevent default if we are already on home
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection("home");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only spy on scroll if we are on the home page
      if (pathname !== '/') return;

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
  }, [pathname]);

  // Helper to determine if a link is active
  const isActive = (section: string) => {
    if (section === 'blog') return pathname === '/blog';
    return pathname === '/' && activeSection === section;
  };

  const ActiveDot = ({ section }: { section: string }) => (
    isActive(section) ? (
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-blue rounded-full shadow-[0_0_8px_rgba(135,206,235,0.8)] md:hidden"></div>
    ) : null
  );

  return (
    <>
      {/* MOBILE HEADER */}
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

      {/* NAVIGATION BAR */}
      <nav className="
        fixed bottom-6 z-50 
        left-1/2 -translate-x-1/2 transform
        w-[90%] max-w-[450px] h-16 px-2
        bg-zinc-900/90 backdrop-blur-xl 
        border border-white/10 rounded-full shadow-2xl
        flex items-center justify-evenly

        md:top-0 md:bottom-auto 
        md:left-0 md:translate-x-0 md:transform-none
        md:w-full md:max-w-none md:h-16 md:px-6
        md:rounded-none md:border-0 md:border-b md:border-white/10
        md:bg-black md:backdrop-filter-none 
        md:justify-between md:shadow-none
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
        <div className="flex w-full md:w-auto justify-evenly md:justify-end md:gap-8 items-center">
          
          <Link 
            href="/" 
            onClick={scrollToTop} 
            className={`group transition-colors relative flex flex-col items-center ${isActive('home') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaHome className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="home" />
            <span className={`hidden md:block text-sm font-medium ${isActive('home') ? 'text-sky-blue' : ''}`}>Home</span>
          </Link>
          
          <Link 
            href="/#about" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('about') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaUser className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="about" />
            <span className={`hidden md:block text-sm font-medium ${isActive('about') ? 'text-sky-blue' : ''}`}>About</span>
          </Link>

          <Link 
            href="/#work" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('work') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaHandshake className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="work" />
            <span className={`hidden md:block text-sm font-medium ${isActive('work') ? 'text-sky-blue' : ''}`}>Work</span>
          </Link>

          {/* NEW BLOG LINK */}
          <Link 
            href="/blog" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('blog') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaPenNib className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="blog" />
            <span className={`hidden md:block text-sm font-medium ${isActive('blog') ? 'text-sky-blue' : ''}`}>Blog</span>
          </Link>

          <Link 
            href="/#projects" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('projects') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaBriefcase className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="projects" />
            <span className={`hidden md:block text-sm font-medium ${isActive('projects') ? 'text-sky-blue' : ''}`}>Projects</span>
          </Link>
          
          <Link 
            href="/#contact" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('contact') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaEnvelope className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot section="contact" />
            <span className={`hidden md:block text-sm font-medium ${isActive('contact') ? 'text-sky-blue' : ''}`}>Contact</span>
          </Link>
        </div>

      </nav>
    </>
  );
}