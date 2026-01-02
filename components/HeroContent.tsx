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
      
      {/* 1. The Typing Title */}
      <TypewriterTitle 
        text="Idong Essien" 
        onComplete={() => setShowContent(true)} 
      />

      {/* Wrapper for Subtitle, Icons & Blurb (Fades in together) */}
      <div 
        className={`flex flex-col gap-8 transition-opacity duration-1000 ease-in ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* 2. The Subtitle */}
        <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide">
          Software <span className="text-sky-blue mx-2">|</span> Web Developer
        </p>

        {/* 3. Social Icons (Top Row) */}
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

        {/* 4. The Quote Blurb */}
        <div className="mt-4 max-w-2xl border-l-4 border-current text-gray-200 pl-6 py-2">
          <p className="italic text-2xl md:text-3xl leading-relaxed font-light">
            &quot;I&apos;ve come to love using code + AI to bring ideas to life, so ... here we are .&quot;
          </p>
        </div>

        {/* 5. Shortened Location & Action Icons */}
        <div className="flex flex-wrap items-center gap-6 mt-2 text-gray-400">
          
          {/* Location Text */}
          <div className="flex items-center gap-2 text-lg">
            <span>📍</span> 
            <span>Worcester, MA</span>
          </div>

          {/* Separator (Visible on larger screens) */}
          <span className="hidden md:inline text-gray-700">|</span>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            
            {/* WhatsApp / Text Me Icon */}
            {/* UPDATED: Changed href to wa.me and added target="_blank" */}
            <a 
              href="https://wa.me/17743126471"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sky-blue hover:scale-110 transition-transform duration-300"
              title="Text Me via WhatsApp"
            >
              <FaCommentDots />
            </a>

            {/* Resume Icon */}
            <Link 
              href="https://profile.indeed.com/p/richarde-nr373s7"
              target="_blank"
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