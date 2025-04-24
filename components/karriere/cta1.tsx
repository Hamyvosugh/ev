'use client';
import React, { useEffect, useState } from 'react';

const AnimatedTextBanner = () => {
  const [position, setPosition] = useState(0);
  const text = "„Wir freuen uns auf deine Bewerbung – ganz egal ob kreativ, techy oder organisatorisch.";
  
  useEffect(() => {
    const animationSpeed = 20; // Lower value = faster animation
    const resetPosition = -2000; // Point at which text resets
    
    const animate = () => {
      setPosition(prevPosition => {
        // Reset position when text has scrolled out of view
        if (prevPosition <= resetPosition) {
          return window.innerWidth;
        }
        // Move text to the left
        return prevPosition - 1;
      });
    };
    
    const animationInterval = setInterval(animate, animationSpeed);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  return (
    <div className="w-full bg-blue-900 py-4 overflow-hidden">
      <div className="relative h-8 flex items-center">
        <div 
          className="absolute whitespace-nowrap text-lg md:text-xl font-medium text-white"
          style={{ transform: `translateX(${position}px)` }}
        >
          {text}
          <span className="inline-block mx-16">•</span>
          {text}
          <span className="inline-block mx-16">•</span>
          {text}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextBanner;