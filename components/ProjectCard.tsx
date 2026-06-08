"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageDesktop: string;
  imageMobile: string;
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 shadow-lg flex flex-col overflow-hidden">
      
      <div className="relative h-72 w-full flex items-center justify-center bg-white/5 p-6">
        <div className="relative w-56 h-56 flex-shrink-0">
          
          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-zinc-800">
            {project.imageDesktop && (
              <Image
                src={project.imageDesktop}
                alt={`${project.title} Desktop`}
                fill
                className="object-cover object-center"
              />
            )}
          </div>

          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full overflow-hidden border-4 border-black bg-black shadow-xl z-10 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
             {project.imageMobile && (
               <Image
                src={project.imageMobile}
                alt={`${project.title} Mobile`}
                fill
                className="object-cover"
              />
             )}
          </div>

        </div>
      </div>

      <div className="flex-1 p-6 bg-zinc-900/80 border-t border-white/10 flex flex-col justify-between">
        
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">{project.title}</h3>
          
          <div className="text-center mb-4">
            <p className={`text-gray-400 md:text-gray-300 text-sm leading-relaxed transition-all ${isExpanded ? '' : 'md:line-clamp-4'}`}>
              {project.description}
            </p>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden md:inline-block text-sky-blue text-xs font-bold mt-2 hover:text-white transition-colors uppercase tracking-wide"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-sky-blue bg-sky-blue/10 px-2 py-1 rounded border border-sky-blue/20">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-auto">
          <Link 
            href={project.githubUrl} 
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors text-xs uppercase tracking-wide"
          >
            <FaGithub className="text-lg" /> Code
          </Link>
          <Link 
            href={project.liveUrl} 
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 bg-sky-blue text-black rounded-full font-bold hover:bg-sky-400 transition-colors text-xs uppercase tracking-wide"
          >
            <FaArrowUpRightFromSquare className="text-lg" /> Live
          </Link>
        </div>

      </div>
    </div>
  )
}
