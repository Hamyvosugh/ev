// lib/mdx.ts
/**
 * Extracts headings from markdown content for table of contents
 * @param content The markdown content
 * @returns Array of heading objects with id, text and level
 */
export function extractHeadings(content: string): Array<{ id: string; text: string; level: number }> {
    // Match all headings (## Heading) in the markdown content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const headings: Array<{ id: string; text: string; level: number }> = [];
    
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length; // Number of # characters
      const text = match[2].trim();
      
      // Create slug from heading text for the id
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      // Only include h2 and h3 headings
      if (level === 2 || level === 3) {
        headings.push({ id, text, level });
      }
    }
    
    return headings;
  }
  
  /**
   * Format a date string to a human-readable format
   * @param dateString Date string in ISO format
   * @returns Formatted date string
   */
  export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    // Format for German locale
    return new Intl.DateTimeFormat('de-DE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }
  
  /**
   * Calculate estimated reading time for an article
   * @param content The markdown content
   * @returns Reading time in minutes
   */
  export function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    return `${readingTime} min Lesezeit`;
  }