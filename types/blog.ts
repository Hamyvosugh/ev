// types/blog.ts
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    formattedDate?: string;
    author: string;
    coverImage: string;
    category: string;
    tags: string[];
    content: string;
    readingTime?: string;
  }
  
  export interface BlogPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    formattedDate?: string;
    author: string;
    coverImage: string;
    category: string;
    tags: string[];
    readingTime?: string;
  }