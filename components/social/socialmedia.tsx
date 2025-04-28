'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Type definitions for props
interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  slides: SlideData[];
  autoplaySpeed?: number;
}

const ModernSlider = ({ slides, autoplaySpeed = 5000 }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Automatic slide transition
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, autoplaySpeed);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay, slides.length, autoplaySpeed]);

  // Navigation handlers
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoplay(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoplay(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevSlide();
    }
  };

  // Resume autoplay after inactivity
  useEffect(() => {
    if (!isAutoplay) {
      const timeout = setTimeout(() => {
        setIsAutoplay(true);
      }, 10000);
      
      return () => clearTimeout(timeout);
    }
  }, [isAutoplay, currentSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white rounded-md flex flex-col">
      {/* Slider Container with touch events */}
      <div 
        ref={sliderRef}
        className="relative w-full flex-grow"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image - Made larger and full size on mobile */}
            <div className="relative w-full h-full">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image || '/images/social/insta.webp'})`,
                  aspectRatio: "1/1", // More square aspect ratio for mobile
                }}
              />
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
          aria-label="Vorheriger Slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
          aria-label="Nächster Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Text content below the image - moved out of the image */}
      <div className="w-full px-4 py-3 bg-white">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-poppins mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="text-sm text-gray-700 font-poppins">
          {slides[currentSlide].description}
        </p>
      </div>
      
      {/* Bottom Navigation */}
      <div className="w-full bg-white px-4 py-3 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide 
                ? 'w-8 bg-yellow-500' 
                : 'w-4 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Gehe zu Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Demo data
const demoSlides: SlideData[] = [
  {
    id: 1,
    title: "Instagram Reels, Post, Story",
    description: "Kreative und professionelle Inhalte für Instagram-Feeds, Stories und Reels.",
    image: "/images/social/insta.webp"
  },
  {
    id: 2,
    title: "YouTube Videos und Thumbnails",
    description: "Ansprechende Video-Visuals und Thumbnails für maximale Klickrate auf YouTube.",
    image: "/images/social/youtube.webp"
  },
  {
    id: 3,
    title: "Google Display Ads",
    description: "Effektive Banner und visuelle Anzeigen für Google Display Netzwerke.",
    image: "/images/social/banner.webp"
  },
  {
    id: 4,
    title: "Website Content",
    description: "Visuelle Inhalte für Websites, Blogs und Landing Pages.",
    image: "/images/social/blog.webp"
  },
  {
    id: 5,
    title: "Facebook Cover, Post, Ads",
    description: "Performancestarke Creatives für Facebook-Werbekampagnen.",
    image: "/images/social/facebook.webp"
  }
];

// Demo Component
const SliderDemo = () => {
  return (
    <div className="w-full bg-blue-900 p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute top-0 left-0 h-full w-2 bg-yellow-400"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-yellow-400"></div>
        <div className="absolute bottom-0 right-0 h-full w-1 bg-yellow-400"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gray-200"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gray-200"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gray-200"></div>
        <div className="absolute top-0 left-1/4 h-full w-px bg-gray-200"></div>
        <div className="absolute top-0 left-2/4 h-full w-px bg-gray-200"></div>
        <div className="absolute top-0 left-3/4 h-full w-px bg-gray-200"></div>
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-4 border-yellow-400 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-gray-200 opacity-10"></div>
      </div>
      
      <div className="flex justify-center items-center w-full relative z-10">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          {/* Using different aspect ratio for mobile */}
          <div className="w-full md:h-auto" style={{ aspectRatio: "1/1.2", maxHeight: "90vh" }}>
            <ModernSlider slides={demoSlides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderDemo;