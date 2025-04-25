// components/blog/TableOfContents.tsx
"use client";

import React, { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Track the active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean);
      
      // Find the heading that's currently at the top of the viewport
      const visibleHeadings = headingElements.filter(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 200;
      });
      
      if (visibleHeadings.length > 0) {
        // Get the ID of the first visible heading
        const id = visibleHeadings[0]?.id || '';
        setActiveId(id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element with a small offset
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // If no headings, don't render the component
  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="toc">
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`${heading.level === 2 ? 'ml-0' : 'ml-4'}`}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left hover:text-blue-900 transition-colors duration-200 ${
                activeId === heading.id 
                  ? 'text-blue-900 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}