// components/blog/CodeBlock.tsx
"use client";

import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [copied, setCopied] = useState(false);
  
  // Extract language from className (format: language-xxx)
  const displayLanguage = className?.includes('language-') 
    ? className.replace('language-', '') 
    : null;
  
  const content = React.Children.toArray(children).join('');
  
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

export default CodeBlock;