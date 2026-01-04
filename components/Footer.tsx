import Link from "next/link";

export default function Footer() {
  return (
    // Updated: pt-6 pb-28 for mobile (clears nav), md:py-6 for desktop (standard)
    <footer className="w-full bg-black border-t border-white/10 pt-6 pb-28 md:py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col gap-2 items-center justify-center text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
          
          <p className="text-gray-300 flex items-center gap-2">
            Built by
            <Link 
              href="https://github.com/idongCodes" 
              target="_blank"
              className="text-sky-blue font-bold hover:text-white transition-colors"
            >
              @idongCodes
            </Link>
            <span className="text-lg">👨‍💻</span>
          </p>

          {/* Admin Login Link - Styled to be subtle/hidden */}
          <Link 
            href="/admin" 
            className="mt-4 text-[10px] uppercase tracking-widest text-zinc-800 hover:text-zinc-500 transition-colors"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}