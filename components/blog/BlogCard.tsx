// components/blog/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMeta } from '@/types/blog';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <span>{post.formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-900 transition-colors duration-300">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-900 font-medium text-sm hover:underline"
          >
            Weiterlesen →
          </Link>
        </div>
      </div>
    </div>
  );
}