import Image from 'next/image';
import { formatDistance } from 'date-fns';
import { de } from 'date-fns/locale';
import { BlogPost } from '@/types/blog';

interface BlogHeaderProps {
  post: BlogPost;
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const publishedDate = new Date(post.date);
  const timeAgo = formatDistance(publishedDate, new Date(), { 
    addSuffix: true,
    locale: de
  });

  return (
    <div className="mb-12 w-full overflow-x-hidden">
      <div className="relative h-[550px] md:h-[500px] w-full mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 md:p-12 w-full">
            {/* Category and reading time - now positioned properly */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="px-2 text-white/80">•</span>
              <span className="text-white/80 bg-blue-900 py-1.5 px-2 rounded-2xl text-sm">
                {post.readingTime}
              </span>
            </div>
            
            {/* Title with better wrapping */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-black/90 md:bg-black/60 text-white px-3 py-2 rounded-md inline leading-relaxed box-decoration-clone">
                {post.title}
              </span>
            </h1>
            
            {/* Excerpt with proper wrapping */}
            <p className="text-white bg-black/90 md:bg-black/60 p-2 text-sm sm:text-base md:text-lg mb-6 max-w-3xl leading-relaxed box-decoration-clone">
              {post.excerpt}
            </p>
            
            {/* Author info */}
            <div className="flex items-center">
              <div className="bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate">{post.author}</div>
                <div className="text-white/70 text-sm truncate">{timeAgo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-1 flex-wrap mb-8 px-2">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mb-1">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}