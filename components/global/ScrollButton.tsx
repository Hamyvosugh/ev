'use client';

import React, { ReactNode } from 'react';

interface ScrollButtonProps {
  children: ReactNode;
  className?: string;
}

const ScrollButton = ({ children, className }: ScrollButtonProps) => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.7,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={className}
      onClick={handleScroll}
    >
      {children}
    </button>
  );
};

export default ScrollButton;