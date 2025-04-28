// components/blog/BlogHeader.tsx
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
    <div className="mb-12">
      <div className="relative h-[550px] md:h-[500px] w-full mb-8 rounded-xl overflow-hidden ">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 md:p-12 w-full">
            <div className="flex items-center gap-2 md:mb-4 -mb-12">
              <span className="bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full ">
                {post.category}
              </span>
              <span className="px-2 text-white/80">•</span>
              <span className="text-white/80 bg-blue-900 py-1.5 px-2 rounded-2xl text-sm">{post.readingTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-normal pt-16">
           <span className="bg-black/90 md:bg-black/60 text-white px-3 py-2 rounded-md inline-block">
           {post.title}
           </span>
           </h1>
            <p className="text-white bg-black/90 md:bg-black/60 p-2  md:text-lg mb-6 max-w-3xl">
              {post.excerpt}
            </p>
            <div className="flex items-center">
              <div className="bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center text-white font-medium mr-3">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-medium">{post.author}</div>
                <div className="text-white/70 text-sm">{timeAgo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 flex-wrap mb-8">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}