import Link from "next/link";

export default function AboutSection() {
  return (
    // Reduced padding from py-20 to py-10
    <section id="about" className="py-10 w-full border-b border-white/5 scroll-mt-24">
      {/* Heading Changed */}
      <h2 className="text-3xl font-bold text-white mb-8 tracking-tight text-center">
        About <span className="text-sky-blue">Idong</span>
      </h2>

      {/* Content */}
      <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
        <p>
          Idong, short for Idongesit, is a unisex name that originated from the Ibibio and Efik peoples of Southern Nigeria. The name translates to English as &quot;comfort&quot;, but the literal meaning is &quot;healing of heart&quot;.
        </p>

        <p>
          Idong is a first generation Nigerian-American & semi-non-traditional, Freelance, Software Developer. Educational experience includes an undergraduate technical degree in Web Development, university Computer Science courses and a Full-Stack Software Development technical certification. His professional experience includes remotely coaching folks interested in learning technology and transitioning into technical careers, as well as, remote experience collaborating within cross-functional teams as an Associate Software Developer.
        </p>

        <p>
          Other interests include manual transmission vehicles, console gaming, sweets and desserts, dogs, horror TV and movies, soccer, savoury foods and he controversially believes pineapples definitely <strong className="text-white font-bold">DO NOT</strong> belong on pizza.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="#contact" className="bg-sky-blue text-black font-bold py-3 px-10 rounded-full hover:bg-sky-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(135,206,235,0.3)]">
          Hire Me
        </Link>
      </div>
    </section>
  );
}