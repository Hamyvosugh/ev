'use client';
import React from 'react';
import { RefreshCw, Shield, Zap, Search, PlusCircle, Headphones } from 'lucide-react';

const WebManagement = () => {
  // Management service features
  const managementServices = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Regelmäßige Updates",
      description: "Kontinuierliche Aktualisierung von Inhalten und Software"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Technische Wartung",
      description: "Umfassende Sicherheitsupdates und Systemüberwachung"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance-Optimierung",
      description: "Verbesserung der Ladezeiten und Benutzererfahrung"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO-Überwachung",
      description: "Kontinuierliche Anpassungen für bessere Sichtbarkeit"
    },
    {
      icon: <PlusCircle className="w-6 h-6" />,
      title: "Integration neuer Funktionen",
      description: "Erweiterung der Website nach Ihren Bedürfnissen"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Laufende Unterstützung",
      description: "Persönlicher Service und schnelle Hilfe bei Fragen"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side content */}
          <div className="lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Webseiten-Management – Wir kümmern uns um Ihren digitalen Erfolg
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Nach dem Launch ist vor dem Erfolg:
                Wir übernehmen die komplette Pflege, Aktualisierung und Optimierung Ihrer Website, damit Sie sich voll und ganz auf Ihr Geschäft konzentrieren können.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Wussten Sie schon?</h3>
                <p className="text-gray-700">
                  Regelmäßig gewartete Websites erzielen durchschnittlich 50% mehr Conversions und haben eine 
                  um 70% geringere Absprungrate als vernachlässigte Webauftritte.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side cards */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 lg:text-left text-center">
              Unsere Leistungen im Webseiten-Management:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {managementServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:translate-y-px"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-900">{service.icon}</span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">{service.title}</h4>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center lg:text-right">
              <button className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-300 shadow-md hover:shadow-lg">
                Management-Paket anfragen
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom testimonial */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="mr-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 24H6C6 16.268 12.268 10 20 10V14C14.477 14 10 18.477 10 24V34H20V24H14ZM34 24H26C26 16.268 32.268 10 40 10V14C34.477 14 30 18.477 30 24V34H40V24H34Z" fill="#002052"/>
              </svg>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "Die kontinuierliche Betreuung unserer Website durch dieses Team hat unsere Online-Präsenz auf ein neues Niveau gehoben. Wir können uns voll auf unser Kerngeschäft konzentrieren, während sie sicherstellen, dass unsere Website stets optimal läuft und aktuell bleibt."
              </p>
              <div className="flex items-center">
                <span className="font-medium text-gray-900">Michael Schneider</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">Autohaus Schneider GmbH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebManagement;