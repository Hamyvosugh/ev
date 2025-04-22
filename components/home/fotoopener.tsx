'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Camera } from 'lucide-react';

const LoopingAnimationComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Animation sequences with corresponding images and text
  const sequences = [
    { 
      text: "PROFESSIONELLE",
      secondaryText: "FAHRZEUGFOTOGRAFIE", 
      style: "text-white",
      secondaryStyle: "text-yellow-400", 
      image: "/images/home/car-animation/animi1.webp" // Replace with actual image paths
    },
    { 
      text: "40+ BILDER",
      secondaryText: "PRO FAHRZEUG", 
      style: "text-white",
      secondaryStyle: "text-yellow-400", 
      image: "/images/home/car-animation/animi2.webp"
    },
    { 
      text: "24 STUNDEN",
      secondaryText: "LIEFERZEIT", 
      style: "text-white",
      secondaryStyle: "text-yellow-400", 
      image: "/images/home/car-animation/animi4.webp"
    },
    { 
      text: "FOTOGRAFIE",
      secondaryText: "DIE VERKAUFT", 
      style: "text-white",
      secondaryStyle: "text-yellow-400", 
      image: "/images/home/car-animation/animi3.webp"
    },
  ];

  // Set up animation loop
  useEffect(() => {
    setMounted(true);
    
    // Animation loop timing
    const transitionInterval = 3000; // 3 seconds per slide
    
    // Start the loop
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sequences.length);
    }, transitionInterval);
    
    return () => clearInterval(interval);
  }, [sequences.length]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-full h-screen bg-gray-900"></div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background images that change with each step */}
      <div className="absolute inset-0">
        {sequences.map((seq, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out
              ${currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img 
              src={seq.image} 
              alt={`Vehicle photography ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
          </div>
        ))}
      </div>
      
{/* Text animations */}
<div className="absolute inset-0 flex items-center justify-center z-10 ml-4 md:ml-12">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-full md:max-w-4xl mx-auto overflow-hidden">
      {sequences.map((seq, index) => (
        <div 
          key={index} 
          className={`transition-all duration-700 ease-in-out absolute transform left-0 right-0
            ${currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-7xl font-bold ${seq.style} mb-2 break-words`}>
            {seq.text}
          </h2>
          <h3 className={`text-xl sm:text-2xl md:text-5xl font-bold ${seq.secondaryStyle} break-words`}>
            {seq.secondaryText}
          </h3>
        </div>
      ))}
    </div>
  </div>
</div>
      
      {/* Fixed CTA button in bottom right */}
      <div className="absolute bottom-20 md:bottom-8 right-8 z-20 ml-7 md:ml-0">
      <a href="/foto" className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 group shadow-lg">
  <Camera className="mr-2 h-5 w-5" />
  <span>Jetzt Fahrzeugfotografie buchen</span>
  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
</a>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-2 md:bottom-8 left-8 z-20 ml-6">
        <div className="flex space-x-2">
          {sequences.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-16 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoopingAnimationComponent;