"use client";

import { useState, useEffect } from "react";

export default function BlogTypewriter({ onComplete }: { onComplete?: () => void }) {
  const textFirstHalf = "Thoughts";
  const textSecondHalf = ".Compiled()";
  const fullText = textFirstHalf + textSecondHalf;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingSpeed = 100; // ms per char

    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete(); // <--- Notify parent when done
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const part1 = displayedText.slice(0, textFirstHalf.length);
  const part2 = displayedText.slice(textFirstHalf.length);

  return (
    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter min-h-[1.2em]">
      <span>{part1}</span>
      <span className="text-sky-blue">{part2}</span>
      <span className="animate-pulse text-sky-blue">_</span>
    </h1>
  );
}