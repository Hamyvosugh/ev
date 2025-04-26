// lib/mdx.ts
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import { remark } from 'remark';

interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headings from MDX/Markdown content for table of contents
 */
export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  
  const tree = remark().parse(content);
  
  visit(tree, 'heading', (node) => {
    const text = toString(node);
    const level = node.depth;
    
    // Create slug from heading text
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove non-word chars
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    
    headings.push({ id, text, level });
  });
  
  return headings;
}

/**
 * Extracts the first image from MDX/Markdown content
 * Useful for SEO and previews
 */
export function extractFirstImage(content: string): string | null {
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(imageRegex);
  
  return match ? match[1] : null;
}

/**
 * Calculates the estimated reading time for the content
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

/**
 * Extracts plain text from markdown for excerpts
 */
export function extractPlainText(content: string, maxLength = 160): string {
  // Remove all markdown formatting
  let plainText = content
    .replace(/#+\s+(.*?)\n/g, '') // Remove headings
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // Replace links with just the text
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold formatting
    .replace(/(\*|_)(.*?)\1/g, '$2') // Remove italic formatting
    .replace(/~~(.*?)~~/g, '$1') // Remove strikethrough
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\n+/g, ' ') // Replace multiple newlines with spaces
    .trim();
  
  // Truncate if needed
  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength) + '...';
  }
  
  return plainText;
}