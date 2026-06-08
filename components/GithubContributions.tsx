"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <section className="py-20 w-full px-4 md:px-8 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
          My <span className="text-sky-blue">Contributions</span>
        </h2>
        
        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg w-full overflow-x-auto flex justify-center">
          <GitHubCalendar 
            username="idongCodes" 
            colorScheme="dark"
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
            }}
            fontSize={14}
            blockSize={14}
            blockMargin={6}
          />
        </div>
      </div>
    </section>
  );
}
