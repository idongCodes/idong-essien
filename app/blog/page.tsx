import { Metadata } from 'next';
import BlogClient from './BlogClient';

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

export default function BlogPage() {
  return <BlogClient />;
}