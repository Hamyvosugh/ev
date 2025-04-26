// components/blog/BlogContentWrapper.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import BlogContent component with loading fallback
const BlogContent = dynamic(() => import('@/components/blog/BlogContent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-pulse text-center">
        <div className="h-8 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
        <div className="h-4 w-full max-w-3xl bg-gray-200 rounded mb-2.5"></div>
        <div className="h-4 w-full max-w-3xl bg-gray-200 rounded mb-2.5"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mb-8 mx-auto"></div>
        <div className="text-gray-500">Artikel wird geladen...</div>
      </div>
    </div>
  )
});

interface BlogContentWrapperProps {
  content: Record<string, unknown>;
  headings: { id: string; text: string; level: number }[];
  slug: string;
  title: string;
}

export default function BlogContentWrapper(props: BlogContentWrapperProps) {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading article content...</div>}>
      <BlogContent {...props} />
    </Suspense>
  );
}