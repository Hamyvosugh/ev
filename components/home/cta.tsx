'use client';
import { useState, useEffect } from 'react';
import ScrollButton from '@/components/global/ScrollButton'

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="cta-section" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -left-16 w-80 h-80 bg-blue-700 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-blue-600 rounded-full opacity-20"></div>
        
        {/* Abstract lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M0,50 L100,50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M50,0 L50,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M100,0 L0,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left content area - 3 columns */}
            <div className="p-8 lg:p-12 col-span-3 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-poppins">
                Bereit, Ihr Autohaus auf das nächste Level zu bringen?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 font-poppins">
                Kontaktieren Sie uns für eine kostenlose Erstberatung und starten Sie Ihren digitalen Erfolg.
              </p>
              
              <div>
                <ScrollButton
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg"
                >
                  Jetzt Kontakt aufnehmen
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ScrollButton>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="text-amber-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-poppins">Kostenlose Erstberatung</span>
                </div>
                <div className="flex items-center">
                  <div className="text-amber-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-poppins">Schnelle Umsetzung</span>
                </div>
                <div className="flex items-center">
                  <div className="text-amber-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-poppins">Nachweisbare Ergebnisse</span>
                </div>
              </div>
            </div>
            
            {/* Right visual area - 2 columns */}
            <div className="col-span-2 bg-blue-900 relative hidden lg:block">
              {/* Abstract visual element representing digital automotive services */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central element */}
                  <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-xl transform rotate-12 opacity-80"></div>
                  <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-xl transform -rotate-12 opacity-80"></div>
                  
                  {/* Vehicle silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <svg className="w-4/5 h-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M85,30 C85,25 82,20 75,20 L65,20 L60,10 L25,10 L20,20 L15,20 C8,20 5,25 5,30 L5,35 C5,38 8,40 10,40 L15,40 C15,45 20,45 20,40 L70,40 C70,45 75,45 75,40 L80,40 C82,40 85,38 85,35 Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
                      <circle cx="20" cy="40" r="5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
                      <circle cx="70" cy="40" r="5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
                      <path d="M25,20 L65,20" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
                      <path d="M35,15 L55,15" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
                    </svg>
                  </div>
                  
                  {/* Digital elements - dots, lines and screens */}
                  <div className="absolute top-1/4 right-1/3 w-16 h-8 rounded bg-amber-500 opacity-20 flex items-center justify-center">
                    <div className="w-14 h-6 rounded bg-blue-200 opacity-30"></div>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/4 w-20 h-8 rounded bg-blue-400 opacity-20 flex items-center justify-center">
                    <div className="w-18 h-6 rounded bg-amber-200 opacity-30"></div>
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M30,30 L40,20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                    <path d="M60,30 L70,20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                    <path d="M30,70 L40,60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                    <path d="M60,70 L70,60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                  </svg>
                  
                  {/* Animated elements */}
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  
                  {/* Floating graph/stats element */}
                  <div className="absolute bottom-10 left-10 w-24 h-16 bg-blue-700 bg-opacity-50 rounded p-2">
                    <div className="w-full h-1 bg-white bg-opacity-30 rounded mb-1"></div>
                    <div className="w-3/4 h-1 bg-white bg-opacity-30 rounded mb-1"></div>
                    <div className="w-1/2 h-1 bg-white bg-opacity-30 rounded mb-1"></div>
                    <div className="w-3/4 h-1 bg-white bg-opacity-30 rounded mb-1"></div>
                    <div className="w-full h-1 bg-white bg-opacity-30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;