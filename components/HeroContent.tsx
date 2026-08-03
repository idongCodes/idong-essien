"use client";

import { useState, useEffect, useRef } from "react";
import TypewriterTitle from "./TypewriterTitle";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { FaCommentDots, FaFileAlt } from "react-icons/fa";

export default function HeroContent() {
  const [showContent, setShowContent] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showTooltip) return;
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current && !buttonRef.current.contains(e.target as Node) &&
        tooltipRef.current && !tooltipRef.current.contains(e.target as Node)
      ) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showTooltip]);

  return (
    <div className="flex flex-col gap-4">
      
      <TypewriterTitle 
        text="Idong Essien" 
        onComplete={() => setShowContent(true)} 
      />

      <div 
        className={`flex flex-col gap-8 transition-opacity duration-1000 ease-in ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide">
          Software <span className="text-sky-blue mx-2">|</span> Web Developer
        </p>

        <div className="flex items-center gap-6 text-2xl text-gray-400">
          <Link 
            href="https://github.com/idongCodes" 
            target="_blank" 
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </Link>

          <Link 
            href="https://www.linkedin.com/in/idongcodes/" 
            target="_blank" 
            className="hover:text-[#0077b5] hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </Link>

          <Link 
            href="https://medium.com/@idongcodes" 
            target="_blank" 
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaMedium />
          </Link>
        </div>

        <div className="mt-4 max-w-2xl border-l-4 border-current text-gray-200 pl-6 py-2">
          <p className="italic text-2xl md:text-3xl leading-relaxed font-light">
            "I've come to love using code + AI to bring ideas to life, so ... here we are ."
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-2 text-gray-400">
          
          <div className="flex items-center gap-2 text-lg">
            <span>📍</span> 
            <span>Worcester, MA</span>
          </div>

          <span className="hidden md:inline text-gray-700">|</span>

          <div className="flex items-center gap-6">
            
            <a 
              href="https://wa.me/17743126471"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sky-blue hover:scale-110 transition-transform duration-300"
              title="Text Me via WhatsApp"
            >
              <FaCommentDots />
            </a>

            <div className="relative flex items-center justify-center">
              <button 
                ref={buttonRef}
                className="text-2xl hover:text-sky-blue hover:scale-110 transition-transform duration-300 focus:outline-none focus:text-sky-blue cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setShowTooltip(!showTooltip);
                }}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                aria-describedby="resume-tooltip"
              >
                <FaFileAlt />
              </button>
              
              <div
                id="resume-tooltip"
                ref={tooltipRef}
                className={`absolute bottom-full mb-3 flex flex-col items-center z-50 pointer-events-none transition-all duration-300 origin-bottom ${
                  showTooltip 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-2 scale-95"
                }`}
                role="tooltip"
              >
                <div className="bg-zinc-900/90 backdrop-blur-md text-white text-xs font-medium px-3 py-2 rounded-lg shadow-[0_0_15px_rgba(135,206,235,0.15)] border border-sky-blue/20 whitespace-nowrap">
                  Resume available upon request
                </div>
                <div className="w-2.5 h-2.5 bg-zinc-900/90 border-r border-b border-sky-blue/20 rotate-45 -mt-1.5 backdrop-blur-md"></div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}