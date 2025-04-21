'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function AnimatedScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // show button when page is scrolled more than 300px
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-8 right-8 z-50 
        p-4 rounded-full
        bg-[#003366] hover:bg-[#002244]
        text-white
        transition-all duration-300 ease-in-out
        shadow-lg hover:shadow-xl
        transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
        ${isHovered ? 'scale-110' : 'scale-100'}
        flex items-center justify-center
      `}
      aria-label="Nach oben scrollen"
    >
      <ArrowUp 
        className={`
          w-6 h-6 
          transition-transform duration-300
          ${isHovered ? 'translate-y-[-4px]' : 'translate-y-0'}
        `}
      />
    </button>
  );
}