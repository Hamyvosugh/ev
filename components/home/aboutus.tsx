'use client';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about-section" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-amber-500 rounded-full opacity-10 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Über <span className="text-amber-500">Emoviral</span>
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="mb-6 font-poppins">
                Emoviral ist Ihr zuverlässiger Partner für die Digitalisierung im Automobilhandel.
                Wir kombinieren modernes Webdesign, zielgerichtetes Content-Management und innovative 
                Marketinglösungen, um Autohäuser und Fahrzeughändler online erfolgreicher zu machen.
              </p>
              <p className="mb-6 font-poppins">
                Unser Fokus liegt auf Qualität, Effizienz und messbaren Ergebnissen.
              </p>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="/kontakt" className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-lg inline-flex items-center">
                Kontakt aufnehmen
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a href="/beratung" className="px-6 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white hover:text-blue-900 transition-colors duration-300 inline-flex items-center">
              Beratung anfordern
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="text-amber-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-poppins">Erfahrung</span>
              </div>
              <div className="flex items-center">
                <div className="text-amber-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-poppins">Innovation</span>
              </div>
              <div className="hidden md:flex items-center">
                <div className="text-amber-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-poppins">Qualität</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-700 to-blue-600 rounded-full shadow-2xl flex items-center justify-center p-6">
                <div className="w-full h-full bg-blue-800 rounded-full flex items-center justify-center p-6">
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-full opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-600 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;