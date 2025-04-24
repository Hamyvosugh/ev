'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Fahrzeugfotografie",
      description: "Professionelle Aufnahmen, die Ihre Fahrzeuge im besten Licht präsentieren und Kunden überzeugen.",
      link: "/foto"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Webdesign & Verwaltung",
      description: "Moderne, benutzerfreundliche Autohaus-Websites mit einfacher Verwaltung und optimaler Conversion-Rate.",
      link: "/web"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "Social-Media-Management",
      description: "Strategische Content-Erstellung und Community-Management für mehr Sichtbarkeit und Engagement.",
      link: "/socialmedia"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Werbekampagnen",
      description: "Gezielte Google- und Amazon-Kampagnen für maximale Reichweite und optimalen Return on Investment.",
      link: "/kampagnen"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Unsere Dienstleistungen</h2>
          <div className="h-1 w-32 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-poppins">
            Maßgeschneiderte Lösungen für Autohäuser und Fahrzeughändler, die Ihre Präsenz stärken und Verkäufe steigern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-xl p-8 transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } hover:shadow-2xl hover:-translate-y-1 border border-gray-100 flex flex-col h-full`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-blue-900 mb-6 flex justify-center items-center">
                <div className="bg-blue-50 p-3 rounded-full">{service.icon}</div>
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

export default ServicesSection;