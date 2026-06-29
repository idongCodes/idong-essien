"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaArrowLeft, FaShareAlt, FaCalendarAlt, 
  FaClock, FaUser, FaEye, FaThumbsUp 
} from "react-icons/fa"; 
import BlogTypewriter from "@/components/BlogTypewriter";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "./data";

export default function BlogList({ initialStats }: { initialStats: Record<string, { views: number, likes: number, shares: number }> }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-4 md:px-8 flex flex-col items-center relative">
      
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
          
          <div className={`transition-opacity duration-1000 ease-in flex flex-col items-center gap-12 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto text-center">
              Exploring the intersection of code, creativity, and continuous learning.
            </p>

            <div className="w-full grid grid-cols-1 gap-6">
              {blogPosts.map((post) => (
                <FadeIn key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                    <div className="group cursor-pointer p-8 rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-sky-blue/30 transition-all duration-300 shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt /> {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-sky-blue">
                                <FaUser /> {post.author}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                            <FaEye /> {initialStats[post.id]?.views.toLocaleString() || post.initialViews.toLocaleString()}
                          </div>
                          
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                            <FaThumbsUp /> {initialStats[post.id]?.likes.toLocaleString() || post.initialLikes.toLocaleString()}
                          </div>

                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                            <FaShareAlt /> {initialStats[post.id]?.shares.toLocaleString() || post.initialShares.toLocaleString()}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <FaClock /> {post.readTime}
                          </div>
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
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}