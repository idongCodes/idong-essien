export const revalidate = 60;
import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { getPostStats } from './actions';
import { blogPosts } from './data';

export const metadata: Metadata = {
  title: "Blog & Insights | Idong Essien",
  description: "Read my latest thoughts on software engineering, AI, and building bespoke web applications.",
  openGraph: {
    title: "Blog & Insights | Idong Essien",
    description: "Read my latest thoughts on software engineering, AI, and building bespoke web applications.",
    url: "https://essien.dev/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  }
};

export default async function BlogPage() {
  const statsPromises = blogPosts.map(post => 
    getPostStats(post.id, post.initialViews, post.initialLikes, post.initialShares)
  );
  
  const statsResults = await Promise.all(statsPromises);
  
  const statsMap = blogPosts.reduce((acc, post, index) => {
    acc[post.id] = statsResults[index];
    return acc;
  }, {} as Record<string, { views: number, likes: number, shares: number }>);

  return <BlogClient initialStats={statsMap} />;
}