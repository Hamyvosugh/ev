// components/blog/BlogContent.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { TableOfContents } from './TableOfContents';
import { ShareButtons } from './ShareButtons';

// Define TypeScript types for MDX component props
interface MDXComponentProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

// Define MDX components with proper TypeScript types
const components = {
  h2: (props: MDXComponentProps) => (
    <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800" {...props} />
  ),
  h3: (props: MDXComponentProps) => (
    <h3 className="text-xl font-bold mt-10 mb-4 text-gray-800" {...props} />
  ),
  p: (props: MDXComponentProps) => (
    <p className="mb-6 text-gray-700 leading-relaxed" {...props} />
  ),
  a: (props: MDXComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // Always open external links in a new tab
    const isExternal = props.href?.startsWith('http');
    
    return (
      <a 
        {...props} 
        href={props.href || "#"}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-blue-900 font-bold hover:underline"
      >
        {props.children}
      </a>
    );
  },
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
  // The img component is causing the hydration error
  // Instead of nesting a div inside a p tag, we'll replace the entire p > img with our custom component
  img: ({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // Make sure src is a valid string for the Image component
    const imgSrc = typeof src === 'string' ? src : '';
    
    return (
      <div className="relative h-96 w-full my-8">
        <Image
          fill
          src={imgSrc}
          alt={alt || ""}
          className="object-contain"
        />
      </div>
    );
  },
  code: (props: MDXComponentProps) => (
    <code className="bg-gray-100 text-gray-800 p-1 rounded" {...props} />
  ),
  pre: (props: MDXComponentProps) => (
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-auto mb-6" {...props} />
  ),
};

interface BlogContentProps {
  // Use MDXRemoteSerializeResult type or a proper type that can be spread
  content: Record<string, unknown>;
  headings: { id: string; text: string; level: number }[];
  slug: string;
  title: string;
}

// Make BlogContent a client component
const BlogContent = ({ content, headings, slug, title }: BlogContentProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <article className="lg:w-2/3">
        <div className="prose prose-lg max-w-none">
          <MDXRemote compiledSource={''} scope={undefined} frontmatter={undefined} {...content} components={components} />
        </div>
        
        <hr className="my-10 border-gray-200" />
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Teilen Sie diesen Artikel</h3>
          <ShareButtons slug={slug} title={title} />
        </div>
      </article>
      
      <aside className="lg:w-1/3 space-y-8">
        <div className="sticky top-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Inhaltsverzeichnis</h3>
            <TableOfContents headings={headings} />
          </div>
          
          <div className="bg-blue-900 text-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Bereit, Ihren Fahrzeugverkauf auf das nächste Level zu bringen?</h3>
            <p className="mb-4">Das Team von Emoviral unterstützt Sie mit professionellen Websites, beeindruckender Fahrzeugfotografie und smarter Vermarktung. Kontaktieren Sie uns noch heute und machen Sie den ersten Schritt zum Erfolg!</p>
            <a href="/kontakt" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300">
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogContent;