import Image from "next/image";
import HeroContent from "@/components/HeroContent"; 
import TechStack from "@/components/TechStack";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection"; // <--- Import

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* Hero... */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        {/* ... (Hero Code remains unchanged) ... */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        >
          <Image
            src="/hero.jpeg"
            alt="Hero Background"
            fill
            className="object-cover object-center opacity-80" 
            priority
          />
        </div>
        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-0 z-30 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <HeroContent />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10 relative bg-black">
        
        <AboutSection />

        <TechStack />
        
        {/* --- PROJECTS SECTION --- */}
        <ProjectsSection />

      </section>

      <ContactSection />

    </div>
  );
}