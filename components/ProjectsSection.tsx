'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "Symbria Logistics",
    description: "A comprehensive delivery and logistics management dashboard. Streamlines route tracking, inventory management, and driver coordination with a clean, data-rich interface. Built to handle complex scheduling needs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageDesktop: "/symbria-desktop.png",
    imageMobile: "/symbria-mobile.jpg",
    liveUrl: "https://symbria-delivery-logistics.vercel.app/",
    githubUrl: "https://github.com/idongCodes/symbria-delivery-logistics"
  },
  {
    title: "HSC Productions",
    description: "A high-energy, mobile-first portfolio for a music producer. Features a custom beat store, dynamic media gallery, and a 'Street Cred' testimonial section with a bold visual aesthetic. Optimized for high performance and visual impact.",
    tech: ["React", "Next.js", "Framer Motion"],
    imageDesktop: "/hsc-desktop.png",
    imageMobile: "/hsc-mobile.jpg",
    liveUrl: "https://hscprod.vercel.app/",
    githubUrl: "https://github.com/idongCodes/hscprod"
  },
  {
    title: "LoveMyFam",
    description: "A private, secure social platform designed for families. Features include a 'Common Room' for updates, threaded comments, emoji reactions, and a searchable family directory. It prioritizes privacy by ensuring no public access to sensitive family moments.",
    tech: ["Next.js 15", "Prisma", "PostgreSQL"],
    imageDesktop: "/love-my-fam-desktop.png",
    imageMobile: "/love-my-fam-mobile.jpg",
    liveUrl: "https://love-my-fam.vercel.app/",
    githubUrl: "https://github.com/idongCodes/love-my-fam"
  }
];

// --- 1. NEW SUB-COMPONENT FOR INDIVIDUAL STATE ---
function ProjectCard({ project }: { project: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 shadow-lg flex flex-col overflow-hidden">
      
      {/* CIRCULAR IMAGES AREA */}
      <div className="relative h-72 w-full flex items-center justify-center bg-white/5 p-6">
        <div className="relative w-56 h-56 flex-shrink-0">
          
          {/* Desktop Image */}
          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <Image
              src={project.imageDesktop}
              alt={`${project.title} Desktop`}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Mobile Image */}
          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full overflow-hidden border-4 border-black bg-black shadow-xl z-10 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
             <Image
              src={project.imageMobile}
              alt={`${project.title} Mobile`}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* TEXT CONTENT AREA */}
      <div className="flex-1 p-6 bg-zinc-900/80 border-t border-white/10 flex flex-col justify-between">
        
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">{project.title}</h3>
          
          {/* DESCRIPTION WITH TOGGLE */}
          <div className="text-center mb-4">
            <p className={`text-gray-400 md:text-gray-300 text-sm leading-relaxed transition-all ${isExpanded ? '' : 'md:line-clamp-4'}`}>
              {project.description}
            </p>
            
            {/* TOGGLE BUTTON (Desktop Only) */}
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

// --- 2. MAIN SECTION COMPONENT ---
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 w-full px-4 md:px-8 bg-black border-t border-white/5">
      <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
        Featured <span className="text-sky-blue">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}