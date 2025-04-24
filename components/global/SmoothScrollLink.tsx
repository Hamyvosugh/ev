// components/SmoothScrollLink.tsx
'use client';

import React from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  duration?: number; // مدت زمان اسکرول به میلی‌ثانیه
  style?: React.CSSProperties; // اضافه کردن پراپ style
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  href, 
  children, 
  className = '',
  duration = 1000, // پیش‌فرض 1 ثانیه
  style = {} // مقدار پیش‌فرض خالی
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // حذف # از ابتدای href برای گرفتن id
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // اسکرول سفارشی با حالت ease-in-out
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // تابع ease-in-out
        const easeInOut = (progress: number) => {
          return progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        };
        
        window.scrollTo(0, startPosition + distance * easeInOut(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // اضافه کردن id به URL برای امکان استفاده از دکمه‌های مرورگر
          window.history.pushState({}, '', href);
        }
      }
      
      requestAnimationFrame(animation);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={className}
      style={style} // اضافه کردن style به تگ a
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;