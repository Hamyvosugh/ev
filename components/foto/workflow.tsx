'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const WorkflowComponent = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-poppins">
            So einfach funktioniert es
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="group relative bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-yellow-600 text-white font-bold rounded-br-xl z-10">
              1
            </div>
            {/* Image Container */}
            <div className="h-64 relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Fotoshooting vor Ort"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Fotoshooting vor Ort</h3>
              <p className="text-gray-600 font-poppins">
                Wir kommen zu Ihrem Standort, positionieren die Fahrzeuge perfekt und erstellen über 40 hochwertige Aufnahmen pro Fahrzeug.
              </p>
            </div>
          </div>

          {/* Step 2 with right chevron connector */}
          <div className="group relative bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-yellow-600 text-white font-bold rounded-br-xl z-10">
              2
            </div>
            {/* Connector (visible only on desktop) */}
            <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2">
              <ChevronRight className="w-8 h-8 text-yellow-600" />
            </div>
            {/* Image Container */}
            <div className="h-64 relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Professionelle Bearbeitung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Professionelle Bearbeitung</h3>
              <p className="text-gray-600 font-poppins">
                Alle Bilder werden professionell bearbeitet, zugeschnitten und auf Wunsch für spezielle Plattformen (Website, Social Media, Poster) angepasst.
              </p>
            </div>
          </div>

          {/* Step 3 with right chevron connector */}
          <div className="group relative bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-yellow-600 text-white font-bold rounded-br-xl z-10">
              3
            </div>
            {/* Connector (visible only on desktop) */}
            <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2">
              <ChevronRight className="w-8 h-8 text-yellow-600" />
            </div>
            {/* Image Container */}
            <div className="h-64 relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Schnelle Lieferung & Upload"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Schnelle Lieferung & Upload</h3>
              <p className="text-gray-600 font-poppins">
                Sie erhalten die fertigen Bilder innerhalb von 24 Stunden. Auf Wunsch übernehmen wir auch den direkten Upload auf Ihre Verkaufsplattformen.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition duration-300 font-poppins">
            Jetzt Termin vereinbaren
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowComponent;