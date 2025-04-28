'use client';
import { useState, useEffect } from 'react';
import ScrollButton from '@/components/global/ScrollButton'
import Link from 'next/link';

const HeroSection2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden" style={{ height: '60vh', minHeight: '600px' }}>
      {/* Background graphic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-900 opacity-5 transform -skew-y-6 origin-top-right"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-64 bg-yellow-500 opacity-5 transform skew-y-3 origin-bottom-right"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full ">
          <div className={`flex flex-col justify-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Decorative accent line */}
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-red-800 mb-8"></div>
            
            {/* Main headline with refined spacing */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight ">
              <span className="block">Digitale</span>
              <span className="block relative">
                Lösungen
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-900"></span>
              </span>
              <span className="block mt-4">für den Erfolg</span>
              <span className="block text-blue-900">Ihres Autohauses.</span>
            </h1>
            
            {/* Subheadline with enhanced styling and spacing */}
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl leading-relaxed">
              Webdesign, Content-Management und Marketing – alles aus einer Hand für Ihren maximalen Online-Erfolg.
            </p>
            
            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/beratung' className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center">
                  Jetzt Beratung anfordern
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              
              <ScrollButton className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-200 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Mehr erfahren</span>
              </ScrollButton>
            </div>
          </div>
          
          {/* Professional visual element */}
          <div className={`hidden lg:flex items-center justify-center relative transition-all duration-1200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {/* Main image frame */}
            <div className="relative w-full max-w-md">
              {/* Professional car image */}
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/home/hero/haerobaner.webp" 
                  alt="Professional car service" 
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-20"></div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 w-64">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-50">
                    <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Zufriedene Kunden</p>
                    <p className="text-gray-900 font-bold text-xl">500+</p>
                  </div>
                </div>
              </div>
              
              {/* Feature tag */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                Premium Service
              </div>
            </div>
            
            {/* Decorative elements 
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-950 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-yellow-50 rounded-full"></div>
            <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-blue-900 rounded-full"></div>*/}
          </div>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-800 to-blue-900"></div>
    </div>
  );
};

export default HeroSection2;