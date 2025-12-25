import Image from "next/image";
import HeroContent from "@/components/HeroContent"; // Import the new wrapper

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        
        {/* Layer 2: Image with Radial Fade */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
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

        {/* Layer 3: Blur */}
        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>
        
        {/* Layer 4: Content Area */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            
            {/* The Orchestrated Text Component */}
            <HeroContent />

          </div>
        </div>

      </section>

      {/* --- Main Content Area --- */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 w-full z-40 relative">
        <div className="py-20 text-center text-gray-500">
          <p>More content coming soon...</p>
        </div>
      </section>

    </div>
  );
}