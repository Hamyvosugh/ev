'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink';
import ScrollButton from '@/components/global/Scroll100vh';


const HeroSection = () => {
  const scrollToNextSection = () => {
    // This would scroll to the next section in your actual implementation
    console.log('Scrolling to portfolio section');
  };

  return (
    <div className="relative w-full md:h-screen bg-gray-50 overflow-hidden md:-mt-28 ">
      {/* Background with subtle pattern and darker right side similar to screenshot */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-900/90 " style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 32, 63, 0.03) 2%, transparent 0%), 
                            radial-gradient(circle at 75px 75px, rgba(0, 32, 63, 0.03) 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      {/* Car image element - positioned on the right side */}
      <div className="absolute right-0 bottom-0 w-1/2 h-auto z-0 hidden md:block">
        <img 
          src="/images/web/carhero.png" 
          alt="Premium Auto" 
          className="object-contain object-right-bottom"
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center ">
        <div className="max-w-3xl">
          {/* Small decorative element */}
          <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight   ">
            Ihr professioneller Webauftritt für den Automobilhandel
          </h1>
          
          {/* Subheading/paragraph */}
          <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
            Wir gestalten und entwickeln moderne, leistungsstarke Websites speziell für Autohäuser und Fahrzeughändler – inklusive vollständiger Verwaltung und kontinuierlicher Optimierung.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 ">
          <SmoothScrollLink href="#contact-form" className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-300 shadow-lg hover:shadow-xl">
              Jetzt Beratung anfordern
            </SmoothScrollLink>
            
            <ScrollButton
              
              className="px-8 py-4 bg-white border-2 border-blue-900 text-blue-900 font-medium rounded-md transition duration-300 hover:bg-gray-100 flex items-center justify-center gap-2 group"
            >
              Beispiele ansehen
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </ScrollButton>
          </div>
          
          {/* Trust indicators */}
          <div className=" mt-16 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Maßgeschneiderte Lösungen</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Professionelles Design</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Kontinuierliche Betreuung</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <ScrollButton
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col text-blue-950  items-center animate-bounce hidden md:flex z-50">
        Mehr entdecken 
        <ChevronDown className="w-6 h-6 text-blue-900" />
      </ScrollButton>
    </div>
  );
};

export default HeroSection;