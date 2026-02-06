"use client";

import { useState } from "react";
import TypewriterTitle from "./TypewriterTitle";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { FaCommentDots, FaFileAlt } from "react-icons/fa";

export default function HeroContent() {
  const [showContent, setShowContent] = useState(false);

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

            <Link 
              href="/resume"
              className="text-2xl hover:text-sky-blue hover:scale-110 transition-transform duration-300"
              title="View Resume"
            >
              <FaFileAlt />
            </Link>
            
          </div>
        </div>

      </div>
    </div>
  );
}