'use client';
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  // Define types first
  type SliderData = {
    slider1: string[];
    slider2: string[];
    slider3: string[];
  };
  
  type SliderId = keyof SliderData;
  
  // State for tracking which slider is in fullscreen mode
  const [fullscreenSlider, setFullscreenSlider] = useState<SliderId | null>(null);
  
  // State for current image index for each slider
  const [currentIndexes, setCurrentIndexes] = useState<Record<SliderId, number>>({
    slider1: 0,
    slider2: 0,
    slider3: 0
  });

  // Mock image arrays - in a real application, you would replace these with actual image paths
  const sliders: SliderData = {
    slider1: Array.from({ length: 15 }, (_, i) => `/images/fahrzeuge/aussen/aus${(i+1).toString().padStart(2, '0')}.webp`),
    slider2: Array.from({ length: 23 }, (_, i) => `/images/fahrzeuge/innen/inn${(i+1).toString().padStart(2, '0')}.webp`),
    slider3: Array.from({ length: 11 }, (_, i) => `/images/fahrzeuge/details/det${(i+1).toString().padStart(2, '0')}.webp`)
  };

  // Slider titles
  const sliderTitles: Record<SliderId, string> = {
    slider1: "Außenaufnahmen",
    slider2: "Innenraumbilder",
    slider3: "Detailaufnahmen"
  };

  // Function to navigate to the next image
  const nextImage = (sliderId: SliderId) => {
    setCurrentIndexes((prev) => {
      const newIndexes = { ...prev };
      newIndexes[sliderId] = (prev[sliderId] + 1) % sliders[sliderId].length;
      return newIndexes;
    });
  };

  // Function to navigate to the previous image
  const prevImage = (sliderId: SliderId) => {
    setCurrentIndexes((prev) => {
      const newIndexes = { ...prev };
      newIndexes[sliderId] = (prev[sliderId] - 1 + sliders[sliderId].length) % sliders[sliderId].length;
      return newIndexes;
    });
  };

  // Function to open fullscreen mode
  const openFullscreen = (sliderId: SliderId) => {
    setFullscreenSlider(sliderId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when fullscreen is active
  };

  // Function to close fullscreen mode
  const closeFullscreen = () => {
    setFullscreenSlider(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle keyboard events for fullscreen navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullscreenSlider) return;
      
      switch (e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          prevImage(fullscreenSlider);
          break;
        case 'ArrowRight':
          nextImage(fullscreenSlider);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenSlider]);

  // Helper function to explicitly handle button clicks with proper typing
  const handlePrevClick = (sliderId: SliderId) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    prevImage(sliderId);
  };

  const handleNextClick = (sliderId: SliderId) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    nextImage(sliderId);
  };

  const handleFullscreenClick = (sliderId: SliderId) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openFullscreen(sliderId);
  };

  return (
    <div className="w-full bg-gray-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Einblicke in unsere Fahrzeugfotografie
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Entdecken Sie die Qualität unserer Arbeit in der Praxis.
            Hier sehen Sie eine Auswahl unserer Fahrzeugfotos – mit Fokus auf Details, Perspektive und perfekter Präsentation.
            Alle Bilder wurden professionell vor Ort aufgenommen, sorgfältig bearbeitet und innerhalb von 24 Stunden geliefert.
          </p>
        </div>

        {/* Sliders section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.keys(sliders) as SliderId[]).map((sliderId) => (
            <div key={sliderId} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={sliders[sliderId][currentIndexes[sliderId]]} 
                    alt={`${sliderTitles[sliderId]} ${currentIndexes[sliderId] + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  />
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={handlePrevClick(sliderId)} 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-50"
                    aria-label="Vorheriges Bild"
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleNextClick(sliderId)} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-50"
                    aria-label="Nächstes Bild"
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Fullscreen button */}
                  <button 
                    onClick={handleFullscreenClick(sliderId)} 
                    className="absolute right-2 bottom-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    aria-label="Vollbildansicht"
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </button>
                </div>

                {/* Caption bar */}
                <div className="p-4 bg-blue-900 text-white">
                  <h3 className="font-bold">{sliderTitles[sliderId]}</h3>
                  <p className="text-sm text-blue-200">
                    Bild {currentIndexes[sliderId] + 1} von {sliders[sliderId].length}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen overlay */}
      {fullscreenSlider && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            {/* Close button */}
            <button 
              onClick={closeFullscreen} 
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
              aria-label="Vollbildansicht schließen"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fullscreen image */}
            <img 
              src={sliders[fullscreenSlider][currentIndexes[fullscreenSlider]]} 
              alt={`${sliderTitles[fullscreenSlider]} im Vollbild`}
              className="max-h-screen max-w-screen p-4 object-contain"
            />

            {/* Fullscreen navigation */}
            <div className="absolute inset-x-0 bottom-8 flex justify-between items-center px-8">
              <button 
                onClick={() => prevImage(fullscreenSlider)} 
                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="Vorheriges Bild"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                {currentIndexes[fullscreenSlider] + 1} / {sliders[fullscreenSlider].length}
              </div>

              <button 
                onClick={() => prevImage(fullscreenSlider)} 
                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="Nächstes Bild"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;