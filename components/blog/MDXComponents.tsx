'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, CopyIcon } from 'lucide-react';

// Define TypeScript types for MDX component props
interface MDXComponentProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

// Custom CodeBlock Component
const CodeBlock = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [copied, setCopied] = React.useState(false);
  
  // Extract language from className (format: language-xxx)
  const displayLanguage = className?.includes('language-') 
    ? className.replace('language-', '') 
    : null;
  
  const content = typeof children === 'string' ? children : '';
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };
  
  return (
    <div className="relative group mb-6">
      {/* Language label */}
      {displayLanguage && (
        <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded-bl font-mono">
          {displayLanguage}
        </div>
      )}
      
      {/* Copy button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      </button>
      
      {/* Code block */}
      <pre className={`bg-gray-800 text-gray-100 p-4 rounded-lg overflow-auto text-sm ${className || ''}`}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

// Function to handle images separately from the component system
export const ImageComponent = ({ src, alt }: { src: string, alt?: string }) => {
  if (!src) return null;
  
  return (
    <div className="my-8 mx-auto">
      <Image
        src={src}
        alt={alt || ""}
        width={1200} 
        height={600}
        className="rounded-lg max-w-full h-auto mx-auto"
      />
    </div>
  );
};

// Export MDX components
export const mdxComponents = {
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
    
    // If the paragraph contains only an image, completely unwrap it
    if (children.length === 1 && 
        React.isValidElement(children[0]) && 
        children[0].type === 'img') {
      // Type assertion with proper interface
      interface ImgProps {
        src: string;
        alt?: string;
      }
      
      const imgChild = children[0] as React.ReactElement<ImgProps>;
      const imgProps = imgChild.props as ImgProps;
      
      return (
        <ImageComponent 
          src={imgProps.src} 
          alt={imgProps.alt || ''} 
        />
      );
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
  // Don't define img component directly - we handle it in the p component
  // This avoids the nesting issue completely
  code: (props: MDXComponentProps & { className?: string }) => {
    // Check if this is a code block (with language) or inline code
    const match = props.className?.match(/language-(\w+)/);
    
    // Use CodeBlock for fenced code blocks with language
    if (props.className?.includes('language-')) {
      return <CodeBlock className={props.className} {...props} />;
    }
    
    // Inline code
    return <code className="bg-gray-100 text-gray-800 p-1 rounded font-mono text-sm" {...props} />;
  },
  pre: (props: MDXComponentProps) => {
    // For pre blocks that don't have code inside them
    if (!React.Children.toArray(props.children).some(child => 
      typeof child === 'object' && child !== null && 'type' in child && child.type === 'code'
    )) {
      return <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-auto mb-6" {...props} />;
    }
    
    // Otherwise, just pass the children through (the code component will handle it)
    return <>{props.children}</>;
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