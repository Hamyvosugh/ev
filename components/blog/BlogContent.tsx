// components/blog/BlogContent.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { TableOfContents } from './TableOfContents';
import { ShareButtons } from './ShareButtons';
import CodeBlock from './CodeBlock';

// Define TypeScript types for MDX component props
interface MDXComponentProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

// Define interface for the content
interface BlogContentProps {
  content: any; // Using 'any' to avoid type issues with MDXRemoteSerializeResult
  headings: { id: string; text: string; level: number }[];
  slug: string;
  title: string;
}

// Make BlogContent a client component
const BlogContent = ({ content, headings, slug, title }: BlogContentProps) => {
  // Custom MDX components with proper TypeScript types
  const components = {
    h1: (props: MDXComponentProps) => (
      <h1 className="text-3xl font-bold mt-12 mb-6 text-gray-800" {...props} />
    ),
    h2: (props: MDXComponentProps) => (
      <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800" {...props} />
    ),
    h3: (props: MDXComponentProps) => (
      <h3 className="text-xl font-bold mt-10 mb-4 text-gray-800" {...props} />
    ),
    h4: (props: MDXComponentProps) => (
      <h4 className="text-lg font-bold mt-8 mb-3 text-gray-800" {...props} />
    ),
    h5: (props: MDXComponentProps) => (
      <h5 className="text-base font-bold mt-6 mb-2 text-gray-800" {...props} />
    ),
    h6: (props: MDXComponentProps) => (
      <h6 className="text-sm font-bold mt-6 mb-2 text-gray-800" {...props} />
    ),
    p: (props: MDXComponentProps) => {
      // Special handling for children that contain only an img tag
      const children = React.Children.toArray(props.children);
      
      // If the only child is an img, don't wrap it in a p tag to avoid nesting issues
      if (children.length === 1 && 
          React.isValidElement(children[0]) && 
          children[0].type === 'img') {
        return children;
      }
      
      return <p className="mb-6 text-gray-700 leading-relaxed" {...props} />;
    },
    a: (props: MDXComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <Link 
        {...props} 
        href={props.href || "#"}
        className="text-blue-900 hover:underline"
      />
    ),
    ul: (props: MDXComponentProps) => (
      <ul className="mb-6 ml-6 list-disc text-gray-700" {...props} />
    ),
    ol: (props: MDXComponentProps) => (
      <ol className="mb-6 ml-6 list-decimal text-gray-700" {...props} />
    ),
    li: (props: MDXComponentProps) => (
      <li className="mb-2" {...props} />
    ),
    blockquote: (props: MDXComponentProps) => (
      <blockquote className="border-l-4 border-blue-900 pl-4 py-1 mb-6 italic bg-gray-50" {...props} />
    ),
    // For tables
    table: (props: MDXComponentProps) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse bg-white text-sm" {...props} />
      </div>
    ),
    thead: (props: MDXComponentProps) => (
      <thead className="bg-gray-50 border-b border-gray-200" {...props} />
    ),
    tbody: (props: MDXComponentProps) => (
      <tbody className="divide-y divide-gray-200" {...props} />
    ),
    tr: (props: MDXComponentProps) => (
      <tr className="hover:bg-gray-50" {...props} />
    ),
    th: (props: MDXComponentProps) => (
      <th className="px-4 py-3 text-left font-medium text-gray-700" {...props} />
    ),
    td: (props: MDXComponentProps) => (
      <td className="px-4 py-3 text-gray-700" {...props} />
    ),
    // Important: Handle images outside of p tags to avoid hydration issues
    img: ({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      // Make sure src is a valid string for the Image component
      const imgSrc = typeof src === 'string' ? src : '';
      
      return (
        <span className="block my-8">
          <Image
            src={imgSrc}
            alt={alt || ""}
            width={1200} // Explicitly using number for width
            height={600} // Explicitly using number for height
            className="rounded-lg max-w-full mx-auto"
          />
        </span>
      );
    },
    // Use the CodeBlock component for better code highlighting
    code: (props: MDXComponentProps & { className?: string }) => {
      // Check if this is a code block (with language) or inline code
      const match = props.className?.match(/language-(\w+)/);
      
      // Use CodeBlock for fenced code blocks with language
      if (props.className?.includes('language-')) {
        // Pass only the props that CodeBlock expects
        return <CodeBlock className={props.className}>{props.children}</CodeBlock>;
      }
      
      // Inline code
      return <code className="bg-gray-100 text-gray-800 p-1 rounded font-mono text-sm" {...props} />;
    },
    pre: (props: MDXComponentProps) => {
      // We handle most pre formatting in the CodeBlock component
      // This is mostly a fallback
      return <div className="not-prose" {...props} />;
    },
    // For emphasis, strikethrough, etc.
    em: (props: MDXComponentProps) => (
      <em className="italic" {...props} />
    ),
    strong: (props: MDXComponentProps) => (
      <strong className="font-bold" {...props} />
    ),
    del: (props: MDXComponentProps) => (
      <del className="line-through" {...props} />
    ),
    hr: (props: MDXComponentProps) => (
      <hr className="my-8 border-gray-200" {...props} />
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <article className="lg:w-2/3">
        <div className="prose prose-lg max-w-none">
          <MDXRemote 
            {...content} 
            components={components}
          />
        </div>
        
        <hr className="my-10 border-gray-200" />
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Teilen Sie diesen Artikel</h3>
          <ShareButtons slug={slug} title={title} />
        </div>
      </article>
      
      {/* RIGHT SIDEBAR - FIXED WITH PURE CSS/HTML */}
      <div className="lg:w-1/3 relative">
        <div style={{
          position: 'sticky',
          top: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {headings && headings.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Inhaltsverzeichnis</h3>
              <TableOfContents headings={headings} />
            </div>
          )}
          
          <div className="bg-blue-900 text-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Benötigen Sie professionelle Fahrzeugfotografie?</h3>
            <p className="mb-4">Heben Sie Ihr Autohaus mit hochwertigen Bildern hervor, die Kunden begeistern.</p>
            <a href="/kontakt" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300">
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;