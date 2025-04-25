'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Camera, Globe, Share2, PieChart } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible immediately for first render to improve LCP
    setIsVisible(true);
    
    // Use IntersectionObserver only for subsequent animations if needed
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('services-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Fahrzeugfotografie",
      description: "Professionelle Aufnahmen, die Ihre Fahrzeuge im besten Licht präsentieren und Kunden überzeugen.",
      link: "/foto"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Webdesign & Verwaltung",
      description: "Moderne, benutzerfreundliche Autohaus-Websites mit einfacher Verwaltung und optimaler Conversion-Rate.",
      link: "/web"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social-Media-Management",
      description: "Strategische Content-Erstellung und Community-Management für mehr Sichtbarkeit und Engagement.",
      link: "/socialmedia"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Werbekampagnen",
      description: "Gezielte Google- und Amazon-Kampagnen für maximale Reichweite und optimalen Return on Investment.",
      link: "/kampagnen"
    }
  ];

  return (
    <section 
      id="services-section" 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Add loading="eager" to prioritize this content */}
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins"
            id="services-heading"
          >
            Unsere Dienstleistungen
          </h2>
          <div className="h-1 w-32 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-poppins">
            Maßgeschneiderte Lösungen für Autohäuser und Fahrzeughändler, die Ihre Präsenz stärken und Verkäufe steigern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col h-full border border-gray-100 ${
                isVisible ? 'animate-fadeIn' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-blue-900 mb-6 flex justify-center items-center">
                <div className="bg-blue-50 p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center font-poppins">{service.title}</h3>
              <p className="text-gray-600 text-center font-poppins">{service.description}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 text-center">
                <Link 
                  href={service.link} 
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-900 text-white font-medium rounded hover:bg-amber-600 transition-colors duration-300 text-sm w-full"
                >
                  <span>Mehr erfahren</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS file
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.5s ease-out;
// }

export default ServicesSection;