import Image from "next/image";
import Link from "next/link"; 
import { FaChevronDown } from "react-icons/fa"; 

import HeroContent from "@/components/HeroContent"; 
import TechStack from "@/components/TechStack";
import AboutSection from "@/components/AboutSection";
import GithubContributions from "@/components/GithubContributions";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkWithMeSection from "@/components/WorkWithMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Idong Essien",
    "url": "https://essien.dev",
    "jobTitle": "Software Developer",
    "image": "https://essien.dev/opengraph-image.jpeg",
    "sameAs": [
      "https://github.com/idongCodes",
      "https://www.linkedin.com/in/idongcodes/",
      "https://medium.com/@idongcodes"
    ]
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="hero" className="relative w-full h-[80vh] overflow-hidden bg-black">
        
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

        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
        
        <div className="absolute inset-0 z-30 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <FadeIn>
              <HeroContent />
            </FadeIn>
          </div>
        </div>

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

      <section className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10 relative bg-black">
        <FadeIn>
          <AboutSection />
        </FadeIn>
        
        <FadeIn>
          <GithubContributions />
        </FadeIn>
        
        <FadeIn>
          <TechStack />
        </FadeIn>

        <FadeIn>
          <WorkWithMeSection />
        </FadeIn>

        <FadeIn>
          <TestimonialsSection />
        </FadeIn>

        <FadeIn>
          <ProjectsSection />
        </FadeIn>
      </section>

      <FadeIn>
        <ContactSection />
      </FadeIn>

    </div>
  );
}