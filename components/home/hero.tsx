'use client';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white " style={{ height: '60vh', minHeight: '600px' }}>
      {/* Car website illustration */}
      <div className="absolute right-0 top-24 bottom-0 w-2/3 h-full hidden lg:block">
        {/* Browser window frame - moved more to the left and centered vertically */}
        <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-96 h-80  bg-gray-50 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
             style={{
               transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10 - 50}%) rotate(-2deg)`,
               transition: 'transform 0.3s ease-out'
             }}>
          {/* Browser header */}
          <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 ">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto h-5 w-64  bg-white rounded-full flex items-center justify-center text-xs text-gray-400">www.autohaus-digital.de</div>
          </div>
          
          {/* Website content with image placeholder instead of car graphic */}
          <div className="p-4">
            {/* Website nav */}
            <div className="h-6 flex space-x-4 mb-4">
              <div className="w-12 h-3 bg-blue-900 rounded-sm"></div>
              <div className="w-12 h-3 bg-gray-200 rounded-sm"></div>
              <div className="w-12 h-3 bg-gray-200 rounded-sm"></div>
              <div className="w-12 h-3 bg-gray-200 rounded-sm"></div>
            </div>
            
            {/* Car image placeholder */}
            <div className="h-24 bg-blue-50 mb-4 overflow-hidden relative rounded-sm ">
              <img 
                src="/images/home/hero/car-hero-mockup.webp" 
                alt="Car placeholder" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Content blocks */}
            <div className="space-y-3">
              <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded-sm"></div>
              <div className="h-3 w-4/6 bg-gray-200 rounded-sm"></div>
            </div>
            
            {/* Grid of cars - image placeholders */}
            <div className="mt-4 grid grid-cols-3 gap-2 ">
              <div className="h-10 bg-gray-100 rounded-sm overflow-hidden">
                <img src="/images/home/hero/aus1.webp" alt="Car thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 bg-gray-100 rounded-sm overflow-hidden">
                <img src="/images/home/hero/aus02.webp" alt="Car thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 bg-gray-100 rounded-sm overflow-hidden">
                <img src="/images/home/hero/aus01.webp" alt="Car thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 bg-gray-100 rounded-sm overflow-hidden">
                <img src="/api/placeholder/100/40" alt="Car thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 bg-gray-100 rounded-sm overflow-hidden">
                <img src="/api/placeholder/100/40" alt="Car thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 bg-gray-100 rounded-sm overflow-hidden ">
                <img src="/api/placeholder/100/40" alt="Car thumbnail" className="w-full h-full object-cover " />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile device - repositioned more to the left and in the vertical center */}
        <div className="absolute  right-1/2  bottom-1/3 w-32 h-64 bg-gray-800 rounded-xl shadow-xl overflow-hidden "
             style={{
               transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(5deg)`,
               transition: 'transform 0.3s ease-out '
             }}>
          <div className="h-4 w-16  bg-gray-900 mx-auto  rounded-b-xl"></div>
          <div className="h-full bg-gray-100 m-1 mt-0 rounded-lg overflow-hidden ">
            {/* Mobile screen content */}
            <div className="h-6 bg-blue-900 w-full "></div>
            <div className="p-2">
              {/* Mobile car image placeholder */}
              <div className="h-20  bg-blue-50 mb-2 overflow-hidden relative rounded-sm ">
                <img 
                  src="/images/home/hero/aus05.webp" 
                  alt="Mobile car placeholder" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 mb-2">
                <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                <div className="h-2 w-5/6 bg-gray-200 rounded-sm"></div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-8 bg-gray-100 rounded-sm overflow-hidden">
                  <img src="/images/home/hero/car1.webp" alt="Car thumbnail mobile" className="w-full h-full object-cover" />
                </div>
                <div className="h-8 bg-gray-100 rounded-sm overflow-hidden">
                  <img src="/images/home/hero/car2.webp" alt="Car thumbnail mobile" className="w-full h-full object-cover" />
                </div>
                <div className="h-8 bg-gray-100 rounded-sm overflow-hidden">
                  <img src="/images/home/hero/car4.webp" alt="Car thumbnail mobile" className="w-full h-full object-cover" />
                </div>
                <div className="h-8 bg-gray-100 rounded-sm overflow-hidden">
                  <img src="/images/home/hero/car3.webp" alt="Car thumbnail mobile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Camera icon element - repositioned */}
        <div className="absolute right-1/4 top-1/3 w-16 h-16 bg-blue-50 rounded-full shadow-md flex items-center justify-center"
             style={{
               transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
               transition: 'transform 0.3s ease-out'
             }}>
          <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Social media icons - repositioned */}
        <div className="absolute right-1/3 bottom-1/4 flex space-x-3"
             style={{
               transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
               transition: 'transform 0.3s ease-out'
             }}>
          <div className="w-8 h-8 rounded-full bg-blue-900 bg-opacity-20 flex items-center justify-center text-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-red-800 bg-opacity-20 flex items-center justify-center text-red-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Main content container with increased padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="py-16">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Decorative accent line */}
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-red-800 mb-8"></div>
            
            {/* Main headline with refined spacing */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
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
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center">
                  Jetzt Beratung anfordern
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              
              <button className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-200 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Mehr erfahren</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-800 to-blue-900"></div>
    </div>
  );
};

export default HeroSection;