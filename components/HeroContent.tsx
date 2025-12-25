"use client";

import { useState } from "react";
import TypewriterTitle from "./TypewriterTitle";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

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

        {/* 3. Social Icons */}
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

        {/* 4. The Quote Blurb (Border matches text color) */}
        {/* Added 'text-gray-200' and 'border-current' here */}
        <div className="mt-4 max-w-2xl border-l-4 border-current text-gray-200 pl-6 py-2">
          <p className="italic text-2xl md:text-3xl leading-relaxed font-light">
            &quot;I&apos;ve come to love using code + AI to bring ideas to life, so ... here we are .&quot;
          </p>
        </div>

      </div>

    </div>
  );
}