"use client"; // <--- Now a Client Component to handle state

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import BlogTypewriter from "@/components/BlogTypewriter";

export default function BlogPage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      
      {/* Back to Home Link */}
      <div className="w-full max-w-4xl mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      <div className="max-w-4xl w-full text-center space-y-12">
        
        <div className="space-y-6">
          {/* Pass the handler here */}
          <BlogTypewriter onComplete={() => setShowContent(true)} />
          
          {/* FADE IN WRAPPER - Controls everything below the title */}
          <div 
            className={`transition-opacity duration-1000 ease-in flex flex-col items-center gap-12 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
              Exploring the intersection of code, creativity, and continuous learning.
            </p>
          
            {/* Empty State Card */}
            <div className="w-full p-16 border border-white/10 rounded-3xl bg-zinc-900/30 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-6 border-dashed">
              <div className="text-6xl mb-4 animate-pulse">⚡</div>
              <h2 className="text-2xl font-bold text-white">System Update in Progress</h2>
              <p className="text-lg text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
                I am currently compiling tutorials, tech deep-dives, and behind-the-scenes stories. The first batch of commits is coming soon.
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}