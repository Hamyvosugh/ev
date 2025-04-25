// components/blog/RelatedPosts.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMeta } from '@/types/blog';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
  currentSlug: string;
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  // Filter out current post and limit to 3 related posts
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);
    
  if (relatedPosts.length === 0) return null;
  
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Verwandte Artikel</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-900 transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}