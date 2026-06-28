"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export default function GithubContributions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="py-20 w-full px-4 md:px-8 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
          GitHub <span className="text-sky-blue">Contributions</span>
        </h2>
        
        <div className="p-4 md:p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg w-full relative">
          <div className="w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" dir="rtl">
            <div className="min-w-max flex md:justify-center w-full min-h-[160px]" dir="ltr">
              {isMounted ? (
                <GitHubCalendar 
                  username="idongCodes" 
                  colorScheme="dark"
                  theme={{
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                  }}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={5}
                />
              ) : (
                <div className="text-gray-500 animate-pulse flex items-center justify-center w-full h-full mt-10">Loading calendar...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
