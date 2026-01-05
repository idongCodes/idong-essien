"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaTimes, FaShareAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import BlogTypewriter from "@/components/BlogTypewriter";

// --- 1. BLOG DATA ---
const blogPosts = [
  {
    id: 1,
    title: "The Art of Shipping: How I Built (and Un-Built) My Digital Home",
    headline: "A developer’s journey through Next.js, mobile UX struggles, and the humbling lesson that \"less is often more.\"",
    date: "Jan 4, 2026",
    readTime: "7 min read",
    content: (
      <>
        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Vision: Why Build This?</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          In a world of LinkedIn profiles and generic PDF resumes, I realized that as a software developer, "telling" people what I can do isn't enough—I need to <em>show</em> them.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The <strong>"Big Why"</strong> behind this project was ownership. I needed a slice of the internet that was distinctly <em>Idong Essien</em>—not a template, but a codebase I crafted line-by-line. The goal was to build a centralized hub that serves two distinct audiences:
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>Employers:</strong> Who need to see clean code, live deployments, and a modern tech stack.</li>
          <li><strong>Clients:</strong> Who need to see a "Freelance Developer" they can trust to build their business solutions.</li>
        </ul>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Ultimately, deploying this to the public web was about <strong>credibility</strong>. It transforms me from "someone who knows code" to "someone who ships products."
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Stack: Choosing Our Weapons</h4>
        <p className="text-gray-400 italic mb-6 border-l-4 border-sky-blue pl-4 py-2 bg-white/5">
          (And yes, you’ll notice I keep saying "we." That’s because this entire project was peer-programmed with Google’s Gemini. I brought the vision and the debugging grit; Gemini brought the syntax and the infinite patience!)
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We didn't just grab off-the-shelf tools; we chose a stack optimized for performance, scalability, and developer experience.
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>Next.js 16 (App Router):</strong> We chose Next.js for its server-side rendering capabilities, ensuring the site is blazing fast and SEO-friendly.</li>
          <li><strong>TypeScript:</strong> JavaScript is great, but TypeScript is safe. We used it to catch errors early—preventing silly bugs like passing a number where a string was expected.</li>
          <li><strong>Tailwind CSS:</strong> For styling, Tailwind allowed us to build a "Mobile First" design without fighting cascading style sheets.</li>
          <li><strong>Vercel:</strong> We deployed here because it’s the native home of Next.js, making the "push-to-deploy" pipeline seamless.</li>
        </ul>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Battle Scars: Technical Hiccups & Resolutions</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          No project is without its headaches. This build had three major technical hurdles that tested our problem-solving skills.
        </p>
        
        <div className="space-y-6">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <h5 className="font-bold text-sky-blue mb-2">1. The "Google Voice" Trap (Authentication)</h5>
            <p className="text-gray-400 text-sm">
              <strong>Problem:</strong> We tried an "Email-to-SMS" hack using <code>nodemailer</code> to send texts via carrier gateways. It failed miserably.<br/>
              <strong>Fix:</strong> We learned Google Voice doesn't support email gateways. We pivoted to <strong>Twilio</strong>, the industry standard.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <h5 className="font-bold text-sky-blue mb-2">2. The "It Works on My Machine" Error</h5>
            <p className="text-gray-400 text-sm">
              <strong>Problem:</strong> The SMS login worked locally but crashed in production.<br/>
              <strong>Fix:</strong> We realized Vercel doesn’t know our local secrets. We manually injected environment variables into the Vercel dashboard.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <h5 className="font-bold text-sky-blue mb-2">3. The Mobile Dropdown UX</h5>
            <p className="text-gray-400 text-sm">
              <strong>Problem:</strong> The "Actions" dropdown was getting chopped off on mobile screens.<br/>
              <strong>Fix:</strong> We removed <code>overflow-hidden</code> from the container and used adaptive positioning (anchor left on mobile, right on desktop).
            </p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Pivot: The Hardest Lesson Learned</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The biggest technical lesson wasn't about code—it was about <strong>Scope Creep</strong>.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We spent days building a robust authentication system and Admin Dashboard. But then we paused and asked: <em>"Do I really need to edit my 'About Me' section from my phone while buying groceries?"</em> The answer was <strong>no</strong>.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>The Resolution:</strong> We made the bold executive decision to delete the entire Admin route.
          <br/>
          <strong>The Lesson:</strong> <strong>Simplicity scales better than complexity.</strong> By returning to a static site, we removed security vulnerabilities and focused on user experience.
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">Looking Forward</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          This project proved that I can handle the full lifecycle of software development. For future projects, I will carry forward the <strong>"Mobile First"</strong> discipline and the <strong>"YAGNI" (You Ain't Gonna Need It)</strong> principle.
        </p>
        <p className="text-gray-300 font-bold">
          The site is now live, fast, and lightweight. It is "Thoughts.Compiled()"—ready for the world.
        </p>
      </>
    )
  }
];

export default function BlogPage() {
  const [showContent, setShowContent] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  // Share Functionality
  const handleShare = async (post: typeof blogPosts[0]) => {
    const shareData = {
      title: post.title,
      text: post.headline,
      url: window.location.href, // In a real app, this would be a specific slug
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      alert("Link copied to clipboard! (Simulation)");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-4 md:px-8 flex flex-col items-center relative">
      
      {/* Back to Home Link */}
      <div className="w-full max-w-4xl mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      <div className="max-w-4xl w-full space-y-12">
        
        <div className="text-center space-y-6">
          <BlogTypewriter onComplete={() => setShowContent(true)} />
          
          <div 
            className={`transition-opacity duration-1000 ease-in flex flex-col items-center gap-12 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto text-center">
              Exploring the intersection of code, creativity, and continuous learning.
            </p>

            {/* --- BLOG CARDS GRID --- */}
            <div className="w-full grid grid-cols-1 gap-6">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer p-8 rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-sky-blue/30 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt /> {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock /> {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-sky-blue transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 font-light leading-relaxed">
                    {post.headline}
                  </p>

                  <div className="mt-6 flex items-center text-sky-blue text-sm font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Read Story &rarr;
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* --- READING MODAL --- */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl h-full md:h-auto md:max-h-[85vh] bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-start gap-4 bg-black/20">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-sky-blue mb-3">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
              
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <p className="text-xl text-gray-300 font-light mb-8 italic border-l-2 border-sky-blue pl-4">
                {selectedPost.headline}
              </p>
              <div className="prose prose-invert max-w-none">
                {selectedPost.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 border-t border-white/10 bg-black/20 flex justify-end">
              <button 
                onClick={() => handleShare(selectedPost)}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-sky-blue text-black font-bold hover:bg-sky-400 transition-colors shadow-[0_0_15px_rgba(135,206,235,0.3)]"
              >
                <FaShareAlt /> Share Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}