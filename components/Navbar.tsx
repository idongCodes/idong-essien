"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaHandshake, FaPenNib } from "react-icons/fa";

const ActiveDot = ({ active }: { active: boolean }) => (
  active ? (
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-blue rounded-full shadow-[0_0_8px_rgba(135,206,235,0.8)] md:hidden"></div>
  ) : null
);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname(); 

  const scrollToTop = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection("home");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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

  const isActive = (section: string) => {
    if (section === 'blog') return pathname === '/blog';
    return pathname === '/' && activeSection === section;
  };

  return (
    <>
      <header className="md:hidden sticky top-0 z-40 w-full flex items-center px-4 py-2 bg-black/40 backdrop-blur-md">
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-full border border-sky-blue/50 bg-black">
            <Image src="/favicon.jpeg" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white drop-shadow-md">
            Idong<span className="text-sky-blue">Essien</span>
          </span>
        </Link>
      </header>

      <Link
        href="/blog"
        className={`
          md:hidden fixed bottom-6 right-4 z-50 
          w-14 h-14 flex items-center justify-center 
          bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl
          transition-transform hover:scale-110 active:scale-95
          ${isActive('blog') ? 'text-sky-blue border-sky-blue/50' : 'text-gray-400'}
        `}
      >
        <FaPenNib className="text-2xl" />
      </Link>

      <nav className="
        fixed bottom-6 z-50 
        left-4 right-24
        h-14 px-1
        bg-zinc-900/90 backdrop-blur-xl 
        border border-white/10 rounded-full shadow-2xl
        flex items-center justify-evenly

        md:top-0 md:bottom-auto 
        md:left-0 md:right-0 md:translate-x-0 
        md:w-full md:max-w-none md:h-14 md:px-6
        md:rounded-none md:border-0 md:border-b md:border-white/10
        md:bg-black md:backdrop-filter-none 
        md:justify-between md:shadow-none
      ">
        
        <Link href="/" onClick={scrollToTop} className="hidden md:flex items-center gap-2 group">
          <div className="relative w-9 h-9 overflow-hidden rounded-full border border-sky-blue/50 bg-black">
            <Image src="/favicon.jpeg" alt="Logo" fill className="object-cover group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Idong<span className="text-sky-blue">Essien</span>
          </span>
        </Link>

        <div className="flex w-full md:w-auto justify-evenly md:justify-end md:gap-8 items-center">
          
          <Link 
            href="/" 
            onClick={scrollToTop} 
            className={`group transition-colors relative flex flex-col items-center ${isActive('home') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaHome className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot active={isActive('home')} />
            <span className={`hidden md:block text-sm font-medium ${isActive('home') ? 'text-sky-blue' : ''}`}>Home</span>
          </Link>
          
          <Link 
            href="/#about" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('about') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaUser className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot active={isActive('about')} />
            <span className={`hidden md:block text-sm font-medium ${isActive('about') ? 'text-sky-blue' : ''}`}>About</span>
          </Link>

          <Link 
            href="/#work" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('work') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaHandshake className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot active={isActive('work')} />
            <span className={`hidden md:block text-sm font-medium ${isActive('work') ? 'text-sky-blue' : ''}`}>Work</span>
          </Link>

          <Link 
            href="/blog" 
            className={`group transition-colors relative hidden md:flex flex-col items-center ${isActive('blog') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaPenNib className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot active={isActive('blog')} />
            <span className={`hidden md:block text-sm font-medium ${isActive('blog') ? 'text-sky-blue' : ''}`}>Blog</span>
          </Link>

          <Link 
            href="/#projects" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('projects') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaBriefcase className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot active={isActive('projects')} />
            <span className={`hidden md:block text-sm font-medium ${isActive('projects') ? 'text-sky-blue' : ''}`}>Projects</span>
          </Link>
          
          <Link 
            href="/#contact" 
            className={`group transition-colors relative flex flex-col items-center ${isActive('contact') ? 'text-sky-blue' : 'text-gray-400 hover:text-white'}`}
          >
            <FaEnvelope className="text-2xl md:hidden group-hover:scale-110 transition-transform" />
            <ActiveDot active={isActive('contact')} />
            <span className={`hidden md:block text-sm font-medium ${isActive('contact') ? 'text-sky-blue' : ''}`}>Contact</span>
          </Link>
        </div>

      </nav>
    </>
  );
}