'use client';
import React from 'react';
import { CheckCircle, Monitor, Search, Zap, Palette, Settings, Database, Cpu, Link, Bot } from 'lucide-react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink';

const ServicesIntroduction = () => {
  // Service features data for the table
  const serviceFeatures = [
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Responsives Design",
      description: "Perfekt auf allen Geräten"
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Suchmaschinen- optimierung (SEO)",
      description: "Bessere Sichtbarkeit bei Google"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Schnelle Ladezeiten",
      description: "Für ein optimales Nutzererlebnis"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Individuelle Gestaltung",
      description: "Abgestimmt auf Ihre Marke"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Einfache Verwaltung",
      description: "Intuitives Content-Management-System (CMS)"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Integration von Fahrzeugdaten",
      description: "Inklusive Online-Shop-Funktionalität"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Automatisierungen",
      description: "Z.B. automatische Fahrzeugübertragung oder Lead-Management"
    },
    {
      icon: <Link className="w-5 h-5" />,
      title: "API-Anbindungen",
      description: "Nahtlose Verbindung zu externen Plattformen"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "KI-gestützte Funktionen",
      description: "Smarte Empfehlungen und Analysen"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "Intelligente virtuelle Assistenten",
      description: "Z.B. Chatbots für Kundenanfragen"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Webdesign & Entwicklung – Maßgeschneiderte, zukunftsorientierte Websites für Autohäuser
          </h2>
          
          <p className="text-lg text-gray-700">
            Wir entwickeln moderne, benutzerfreundliche und leistungsstarke Websites, die speziell auf die Bedürfnisse von Autohäusern und Fahrzeughändlern zugeschnitten sind.
          </p>
        </div>
        
        {/* Modern Features Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <div className="px-6 py-4 bg-blue-900 text-white">
            <h3 className="text-xl font-semibold">Unsere Webseiten überzeugen durch:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="divide-y divide-gray-200">
              {serviceFeatures.slice(0, 5).map((feature, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition duration-150">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-900">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="divide-y divide-gray-200">
              {serviceFeatures.slice(5, 10).map((feature, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition duration-150">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-900">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
        <SmoothScrollLink href="#contact-form" className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-300 shadow-md hover:shadow-lg inline-flex items-center">
             Unverbindliches Beratungsgespräch vereinbaren 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </SmoothScrollLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroduction;