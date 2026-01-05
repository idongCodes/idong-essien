"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  FaArrowLeft, FaTimes, FaShareAlt, FaCalendarAlt, 
  FaClock, FaCheck, FaUser, FaEye, FaThumbsUp 
} from "react-icons/fa"; 
import BlogTypewriter from "@/components/BlogTypewriter"; // <--- RESTORED THIS IMPORT

// --- 1. BLOG DATA (With Likes) ---
const blogPosts = [
  {
    id: "the-great-rewiring-coding-in-the-age-of-ai",
    title: "The Great Rewiring: Coding in the Age of Artificial Intelligence",
    headline: "An honest look at the anxiety, the hype, and the unavoidable reality of AI-assisted engineering.",
    date: "Jan 5, 2026",
    author: "Essien, Idong",
    readTime: "10 min read",
    initialViews: 1204,
    initialShares: 42,
    initialLikes: 156,
    content: (
      <>
        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Atmosphere: A Mix of Awe and Existential Dread</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Walk into any coffee shop in San Francisco, join a Reddit thread, or browse Twitter/X, and the mood among technologists is palpable. It is a strange cocktail of <strong>superpowered productivity</strong> and <strong>low-grade existential dread</strong>.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          For decades, software engineers were the "automators"—the ones who wrote the scripts to replace manual labor. Now, for the first time, we are staring at the tool that automates <em>us</em>.
        </p>
        <div className="bg-zinc-900/50 p-6 rounded-xl border-l-4 border-sky-blue mb-8">
          <p className="text-gray-400 italic">
            "The barrier to entry has dropped, but the barrier to mastery has skyrocketed. We are all feeling a heightened form of Imposter Syndrome: Is it me writing this code, or is it the LLM?"
          </p>
        </div>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">Why Do We Feel This Way?</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The anxiety stems from the rapid commoditization of "syntax." Historically, a developer's value was tied to their ability to recall syntax and write boilerplate functions. AI has reduced the cost of that specific skill to near zero.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Seniors worry about the flood of AI-generated spaghetti code they'll have to maintain. Juniors worry about how they'll ever learn the fundamentals if the AI solves the "easy problems" that used to be their training ground.
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Pros: The Superpower of Adaptation</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Despite the fear, the developers leaning into this shift are experiencing a golden era of productivity.
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>Velocity:</strong> What used to take 4 hours of reading documentation now takes 15 minutes of prompting and refining.</li>
          <li><strong>Focus on Architecture:</strong> We spend less time fighting with CSS centering and regex, and more time thinking about system design, data flow, and user experience.</li>
          <li><strong>The "Full Stack" Expansion:</strong> Backend devs can now write competent frontend code, and vice versa, because the AI handles the nuances of the unfamiliar framework.</li>
        </ul>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Cons: The Trap of Convenience</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          However, the dangers are real.
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>The Illusion of Competence:</strong> It is easy to generate code that runs but is fundamentally insecure or unoptimized. If you don't understand <em>what</em> the AI wrote, you cannot debug it when it breaks.</li>
          <li><strong>The "Junior Gap":</strong> If we automate away the grunt work, we remove the ladder that juniors climb to become seniors. We risk a future with highly productive architects and no one to replace them.</li>
          <li><strong>Erosion of Deep Thinking:</strong> Over-reliance on "tab-complete" can atrophy our ability to hold complex logic structures in our heads.</li>
        </ul>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">Adapt or Fade: The Career Reality</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Is it important to adapt? <strong>Yes. It is non-negotiable.</strong>
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Will developers who don't adapt be okay? In the short term, perhaps. There is plenty of legacy code to maintain. But in the long term, refusing to use AI will be akin to a mathematician refusing to use a calculator. You <em>can</em> do it, but you will be outpaced by those who treat AI as an exoskeleton for their mind.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The developers who thrive will not be "coders"—they will be <strong>"Product Engineers."</strong> They will be valued not for how many lines they type, but for how effectively they can orchestrate AI tools to solve business problems.
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Next 5 Years: A Prediction</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Where is this going?
        </p>
        <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
          <li><strong>Coding becomes Reviewing:</strong> We will write less code from scratch and spend 80% of our time auditing, tweaking, and integrating AI-generated modules.</li>
          <li><strong>Natural Language as Syntax:</strong> The hottest programming language in 2030 won't be Rust or Python—it will be English (or your native tongue). The ability to articulate a problem clearly will be the primary skill.</li>
          <li><strong>Hyper-Personalized Software:</strong> With the cost of coding dropping, we will see a surge in "micro-software"—apps built for niche use cases or even single individuals, created in hours, not months.</li>
        </ol>

        <p className="text-gray-300 font-bold mt-8 border-t border-white/10 pt-6">
          The sky isn't falling, but the ground is shifting. The best time to learn to surf was yesterday. The second best time is now.
        </p>
      </>
    )
  },
  {
    id: "the-art-of-shipping-how-i-built-and-un-built-my-digital-home", 
    title: "The Art of Shipping: How I Built (and Un-Built) My Digital Home",
    headline: "A developer’s journey through Next.js, mobile UX struggles, and the humbling lesson that \"less is often more.\"",
    date: "Jan 4, 2026",
    author: "Essien, Idong",
    readTime: "7 min read",
    initialViews: 892,
    initialShares: 18,
    initialLikes: 94,
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

// --- 2. BLOG LIST COMPONENT ---
function BlogList() {
  const [showContent, setShowContent] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [copied, setCopied] = useState(false);
  
  // STATE: Holds dynamic stats (Views, Shares, Likes)
  const [postStats, setPostStats] = useState(() => {
    const initialStats: Record<string, { views: number; shares: number; likes: number }> = {};
    blogPosts.forEach(post => {
      initialStats[post.id] = { 
        views: post.initialViews, 
        shares: post.initialShares,
        likes: post.initialLikes 
      };
    });
    return initialStats;
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const postId = searchParams.get('id');
    if (postId) {
      const post = blogPosts.find(p => p.id === postId);
      if (post) {
        setSelectedPost(post);
        setShowContent(true); 
        incrementView(postId);
      }
    }
  }, [searchParams]);

  // --- STATS HELPERS ---
  const incrementView = (id: string) => {
    setPostStats(prev => ({
      ...prev,
      [id]: { ...prev[id], views: prev[id].views + 1 }
    }));
  };

  const incrementShare = (id: string) => {
    setPostStats(prev => ({
      ...prev,
      [id]: { ...prev[id], shares: prev[id].shares + 1 }
    }));
  };

  const incrementLike = (id: string) => {
    setPostStats(prev => ({
      ...prev,
      [id]: { ...prev[id], likes: prev[id].likes + 1 }
    }));
  };

  // --- ACTIONS ---
  const openPost = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    incrementView(post.id); 
    router.push(`/blog?id=${post.id}`, { scroll: false });
  };

  const closePost = () => {
    setSelectedPost(null);
    setCopied(false);
    router.push('/blog', { scroll: false });
  };

  const handleShare = async (post: typeof blogPosts[0]) => {
    incrementShare(post.id);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${origin}/blog?id=${post.id}`;
    
    const shareData = {
      title: post.title,
      text: post.headline,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) { console.log("Error sharing", err); }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      } catch (err) { alert("Could not copy link."); }
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
          
          <div className={`transition-opacity duration-1000 ease-in flex flex-col items-center gap-12 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto text-center">
              Exploring the intersection of code, creativity, and continuous learning.
            </p>

            {/* --- GRID --- */}
            <div className="w-full grid grid-cols-1 gap-6">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={() => openPost(post)} 
                  className="group cursor-pointer p-8 rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-sky-blue/30 transition-all duration-300 shadow-xl"
                >
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
                      {/* STATS ON CARD */}
                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                        <FaEye /> {postStats[post.id]?.views.toLocaleString()}
                      </div>
                      
                      {/* LIKE BUTTON ON CARD (Interactive!) */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Stop card from opening
                          incrementLike(post.id);
                        }}
                        className="flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors"
                      >
                        <FaThumbsUp /> {postStats[post.id]?.likes.toLocaleString()}
                      </button>

                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                        <FaShareAlt /> {postStats[post.id]?.shares.toLocaleString()}
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
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closePost}></div>

          <div className="relative w-full max-w-3xl h-full md:h-auto md:max-h-[85vh] bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            
            <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-start gap-4 bg-black/20">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-widest text-sky-blue mb-3">
                  <span className="whitespace-nowrap">{selectedPost.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="whitespace-nowrap">{selectedPost.author}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="whitespace-nowrap">{selectedPost.readTime}</span>
                  
                  <span className="hidden sm:inline text-gray-600">|</span>
                  
                  {/* HEADER STATS */}
                  <span className="flex items-center gap-1 text-gray-400">
                     <FaEye /> {postStats[selectedPost.id]?.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                     <FaThumbsUp /> {postStats[selectedPost.id]?.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                     <FaShareAlt /> {postStats[selectedPost.id]?.shares.toLocaleString()}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
              <button onClick={closePost} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <p className="text-xl text-gray-300 font-light mb-8 italic border-l-2 border-sky-blue pl-4">
                {selectedPost.headline}
              </p>
              <div className="prose prose-invert max-w-none">
                {selectedPost.content}
              </div>
            </div>

            {/* MODAL ACTIONS FOOTER */}
            <div className="p-4 md:p-6 border-t border-white/10 bg-black/20 flex flex-wrap gap-4 justify-end">
              
              {/* BIG LIKE BUTTON */}
              <button 
                onClick={() => incrementLike(selectedPost.id)}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10 active:scale-95"
              >
                <FaThumbsUp /> Like ({postStats[selectedPost.id]?.likes.toLocaleString()})
              </button>

              <button 
                onClick={() => handleShare(selectedPost)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(135,206,235,0.3)] ${
                  copied ? "bg-green-500 text-white" : "bg-sky-blue text-black hover:bg-sky-400"
                }`}
              >
                {copied ? <FaCheck /> : <FaShareAlt />}
                {copied ? "Link Copied!" : "Share Article"}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <BlogList />
    </Suspense>
  );
}