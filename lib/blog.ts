// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMeta } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter(file => 
    file.endsWith('.md') || file.endsWith('.mdx')
  );
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const readingTime = calculateReadingTime(content);
  
  return {
    slug: realSlug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    formattedDate: formatDate(data.date),
    author: data.author,
    coverImage: data.coverImage,
    category: data.category,
    tags: data.tags || [],
    content,
    readingTime,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  // Return posts without content field
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return posts.map(({ content, ...rest }) => rest);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categoriesSet = new Set(posts.map(post => post.category));
  return Array.from(categoriesSet);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet);
}

// Helper to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

// Helper to format date
function formatDate(dateString: string): string {
  try {
    // Handle ISO string format or other standard formats
    const date = new Date(dateString);
    
    // Check if date is valid before formatting
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}, returning as is`);
      return dateString;
    }
    
    // Format for German locale (since your website is in German)
    return new Intl.DateTimeFormat('de-DE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  } catch (error) {
    console.error(`Error formatting date: ${dateString}`, error);
    return dateString; // Return the original string if formatting fails
  }
}