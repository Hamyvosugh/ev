'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, X } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // This is the simplest approach - just hardcode the image paths
  // All images in /images/web/slider/* will be displayed
  const images = [
    '/images/web/slider/car1.jpg',
    '/images/web/slider/car2.webp',
    '/images/web/slider/car3.avif',
    '/images/web/slider/car4.jpg',
    '/images/web/slider/car5.webp',
    // Add more images as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fixed fullscreen toggle function with explicit event handler
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event propagation
    
    if (!document.fullscreenElement) {
      if (sliderRef.current) {
        try {
          if (sliderRef.current.requestFullscreen) {
            sliderRef.current.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
          }
        } catch (err) {
          console.error('Fullscreen API error:', err);
        }
      }
    } else {
      try {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(err => {
            console.error(`Error attempting to exit fullscreen: ${err.message}`);
          });
        }
      } catch (err) {
        console.error('Exit fullscreen error:', err);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Einblicke in unsere Webdesign-Projekte</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Entdecken Sie ausgewählte Beispiele unserer Webdesign-Arbeiten für Autohäuser und Fahrzeughändler.
          Jedes Projekt wurde individuell gestaltet und optimal auf die jeweilige Zielgruppe abgestimmt.
        </p>
      </div>

      {/* Slider */}
      <div 
        ref={sliderRef}
        className={`relative overflow-hidden rounded ${
          isFullscreen 
            ? 'fixed inset-0 z-50 bg-black' 
            : 'w-full h-full aspect-video max-h-screen'
        }`}
      >
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows - fixed with z-index and proper pointer events */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 text-white bg-blue-900 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 text-white bg-blue-900 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Fullscreen button - fixed with z-index and proper event handler */}
        <button
          type="button"
          onClick={toggleFullscreen}
          className="absolute p-2 text-white bg-blue-900 rounded-full opacity-70 hover:opacity-100 top-4 right-4 z-20"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>

        {/* Close button in fullscreen mode - fixed with z-index */}
        {isFullscreen && (
          <button
            type="button"
            onClick={toggleFullscreen}
            className="absolute p-2 text-white bg-red-700 rounded-full opacity-70 hover:opacity-100 top-4 left-4 z-20"
            aria-label="Close fullscreen"
          >
            <X size={20} />
          </button>
        )}

        {/* Dots - fixed with z-index */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex 
                  ? 'bg-yellow-500' // Gold accent color for current slide
                  : 'bg-blue-900 opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;