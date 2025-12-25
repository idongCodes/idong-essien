"use client";

import { useEffect, useState } from "react";

export default function TypewriterTitle({ 
  text, 
  onComplete 
}: { 
  text: string; 
  onComplete?: () => void; 
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Notify parent that typing is done
        if (onComplete) onComplete();
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text, onComplete]);

  return (
    <h1 className="text-white font-bold text-5xl md:text-7xl tracking-tighter min-h-[1.2em]">
      {displayedText}
      {/* Blinking Cursor */}
      <span className="animate-pulse text-sky-blue ml-1">|</span>
    </h1>
  );
}