export const revalidate = 60;
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  FaArrowLeft, FaCalendarAlt, FaClock, FaUser, FaEye, FaThumbsUp, FaShareAlt
} from "react-icons/fa"; 
import { blogPosts } from '../data';
import ShareLikeButtons from './ShareLikeButtons';
import { getPostStats } from '../actions';
import ViewTracker from '../ViewTracker';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.id === resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found | Idong Essien' };
  }

  return {
    title: `${post.title} | Idong Essien`,
    description: post.headline,
    openGraph: {
      title: post.title,
      description: post.headline,
      type: 'article',
      url: `https://essien.dev/blog/${post.id}`,
      authors: [post.author],
      publishedTime: post.date,
    }
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Fetch real stats from Vercel KV (falls back to initial values if KV not configured)
  const stats = await getPostStats(post.id, post.initialViews, post.initialLikes, post.initialShares);

  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      <ViewTracker slug={post.id} />
      
      <div className="w-full max-w-3xl mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>

      <article className="w-full max-w-3xl bg-zinc-900/50 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        <header className="p-8 md:p-12 border-b border-white/10 bg-black/40">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-bold uppercase tracking-widest text-sky-blue">
            <span className="flex items-center gap-2"><FaCalendarAlt /> {post.date}</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-2"><FaUser /> {post.author}</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-2"><FaClock /> {post.readTime}</span>
            
            <div className="w-full h-px bg-white/10 my-2 sm:hidden"></div>
            
            <span className="flex items-center gap-2 text-gray-400">
               <FaEye /> {stats.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
               <FaThumbsUp /> {stats.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
               <FaShareAlt /> {stats.shares.toLocaleString()}
            </span>
          </div>
        </header>

        <div className="p-8 md:p-12 prose prose-invert prose-lg max-w-none prose-a:text-sky-blue hover:prose-a:text-sky-400">
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 italic border-l-4 border-sky-blue pl-6 leading-relaxed">
            {post.headline}
          </p>
          <div className="text-gray-300 space-y-6 leading-loose">
            {post.content}
          </div>
        </div>

        <footer className="p-6 md:p-8 border-t border-white/10 bg-black/40 flex justify-end">
          <ShareLikeButtons 
            postId={post.id} 
            title={post.title} 
            headline={post.headline} 
            initialLikes={stats.likes} 
          />
        </footer>
      </article>

    </div>
  );
}
