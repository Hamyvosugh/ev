// components/blog/MdxImage.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface MdxImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function MdxImage({ src, alt = "", className = "" }: MdxImageProps) {
  // Make sure src is a valid string for the Image component
  const imgSrc = typeof src === 'string' ? src : '';
  
  if (!imgSrc) {
    return null;
  }
  
  return (
    <div className="relative h-96 w-full my-8">
      <Image
        fill
        src={imgSrc}
        alt={alt}
        className={`object-contain ${className}`}
      />
    </div>
  );
}