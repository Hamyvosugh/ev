// components/blog/BlogContentWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import BlogContent component
const BlogContent = dynamic(() => import('@/components/blog/BlogContent'), {
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading article content...</div>
});

interface BlogContentWrapperProps {
  content: Record<string, unknown>;
  headings: { id: string; text: string; level: number }[];
  slug: string;
  title: string;
}

export default function BlogContentWrapper(props: BlogContentWrapperProps) {
  return <BlogContent {...props} />;
}