import Image from "next/image";
import Link from "next/link"; 
import { FaChevronDown } from "react-icons/fa"; 

import HeroContent from "@/components/HeroContent"; 
import TechStack from "@/components/TechStack";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
// 1. Import the new section
import WorkWithMeSection from "@/components/WorkWithMeSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* --- 1. Hero Section --- */}
      <section id="hero" className="relative w-full h-[80vh] overflow-hidden bg-black">
        
        {/* Layer 1: Image */}
        <div 
          className="absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(circle_at_center,black_0%,transparent_45%)]"
        >
          <Image
            src="/hero.jpeg"
            alt="Hero Background"
            fill
            className="object-cover object-[50%_35%] opacity-80" 
            priority
          />
        </div>

        {/* Layer 2: Blur */}
        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>

        {/* Layer 3: Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
        
        {/* Layer 4: Content */}
        <div className="absolute inset-0 z-30 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <HeroContent />
          </div>
        </div>

        {/* Pulsating Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <Link 
            href="#about" 
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <FaChevronDown size={28} />
          </Link>
        </div>

      </section>

      {/* --- 2. Main Content Area --- */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10 relative bg-black">
        <AboutSection />
        <TechStack />
        {/* 2. Inserted WorkWithMeSection here */}
        <WorkWithMeSection />
        <ProjectsSection />
      </section>

      <ContactSection />

    </div>
  );
}