// 1. Removed 'SiVisualstudiocode' from this list
import { 
  SiGit, SiGithub, 
  SiJavascript, SiPython, SiCss3, SiTypescript, 
  SiReact, SiNextdotjs, SiSupabase, SiVercel, 
  SiJira, SiPostgresql, SiUbuntu, SiGoogle, SiTailwindcss 
} from "react-icons/si";

import { TbSql } from "react-icons/tb";

// 2. Added this import for the official VS Code icon
import { VscVscode } from "react-icons/vsc"; 

const technologies = [
  // 3. Updated the icon here
  { name: "VS Code", icon: <VscVscode /> }, 
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "SQL", icon: <TbSql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Ubuntu", icon: <SiUbuntu /> },
  { name: "Gemini AI", icon: <SiGoogle /> },
];

export default function TechStack() {
  return (
    // Added 'px-4 md:px-8' for edge padding
    <section className="py-20 w-full px-4 md:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">
        Tech <span className="text-sky-blue">Stack</span>
      </h2>

      {/* Added 'max-w-full' to ensure grid uses available space */}
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <div className="text-4xl text-gray-400 group-hover:text-sky-blue group-hover:scale-110 transition-all duration-300">
              {tech.icon}
            </div>
            
            <span className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}