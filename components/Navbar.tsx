import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-blue/50">
            <Image 
              src="/favicon.jpeg" 
              alt="Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Idong<span className="text-sky-blue">Essien</span>
          </span>
        </Link>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-sky-blue transition-colors">Home</Link>
          <Link href="/about" className="hover:text-sky-blue transition-colors">About</Link>
          <Link href="/contact" className="hover:text-sky-blue transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Menu Icon (Visible on mobile) */}
        {/* We can wire this up later, but the layout is ready for it */}
        <button className="md:hidden text-gray-300">
           ☰
        </button>

      </div>
    </nav>
  );
}