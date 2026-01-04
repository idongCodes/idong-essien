import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      
      {/* Back to Home Link */}
      <div className="w-full max-w-4xl mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      <div className="max-w-4xl w-full text-center space-y-12">
        
        {/* Header */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          The <span className="text-sky-blue">Blog</span>
        </h1>
        
        {/* Empty State Card */}
        <div className="p-16 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-6">
          <div className="text-6xl mb-4">✍️</div>
          <h2 className="text-2xl font-bold text-white">Content Loading...</h2>
          <p className="text-lg text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
            I'm currently crafting tutorials, tech insights, and behind-the-scenes stories of my latest projects. Check back soon!
          </p>
        </div>

      </div>
    </div>
  );
}