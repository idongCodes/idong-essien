"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <section className="py-20 w-full px-4 md:px-8 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
          My <span className="text-sky-blue">Contributions</span>
        </h2>
        
        <div className="p-4 md:p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg w-full relative">
          <div className="w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" dir="rtl">
            <div className="min-w-max flex md:justify-center w-full" dir="ltr">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
