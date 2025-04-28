'use client';
import React from 'react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink';

const WorkflowComponent = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-poppins">
            So einfach funktioniert es
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        {/* Workflow Steps - Caption in front of image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Number box */}
            <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center bg-yellow-600 text-white font-bold text-2xl z-20">
              1
            </div>
            
            {/* Full size image in background */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/images/foto/carshoot1.webp" 
                alt="Fotoshooting vor Ort"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top section with image visible */}
            <div className="w-full h-60 relative">
              {/* Intentionally empty to show background image */}
            </div>
            
            {/* Content section on top of the image */}
            <div className="relative z-10 p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Auto Fotoshooting vor Ort</h3>
              <p className="text-gray-600 font-poppins">
              Wir kommen zu Ihrem Autohaus, positionieren die Fahrzeuge perfekt und erstellen über 40 hochwertige Aufnahmen pro Fahrzeug.              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Number box */}
            <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center bg-yellow-600 text-white font-bold text-2xl z-20">
              2
            </div>
            
            {/* Full size image in background */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/images/foto/fotoshoot2.webp" 
                alt="Professionelle Bearbeitung"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top section with image visible */}
            <div className="w-full h-60 relative">
              {/* Intentionally empty to show background image */}
            </div>
            
            {/* Content section on top of the image */}
            <div className="relative z-10 p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Professionelle Bearbeitung</h3>
              <p className="text-gray-600 font-poppins">
                Alle Fahrzeugbilder werden professionell bearbeitet, zugeschnitten und auf Wunsch für spezielle Plattformen (Website, Social Media, Poster) angepasst.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Number box */}
            <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center bg-yellow-600 text-white font-bold text-2xl z-20">
              3
            </div>
            
            {/* Full size image in background */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/images/foto/fotoshoot3.webp" 
                alt="Schnelle Lieferung & Upload"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top section with image visible */}
            <div className="w-full h-60 relative">
              {/* Intentionally empty to show background image */}
            </div>
            
            {/* Content section on top of the image */}
            <div className="relative z-10 p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Schnelle Lieferung & Upload</h3>
              <p className="text-gray-600 font-poppins">
                Sie erhalten die fertigen Autobilder innerhalb von 24 Stunden. Auf Wunsch übernehmen wir auch den direkten Upload auf Ihre Verkaufsplattformen.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <SmoothScrollLink 
            href="#contact-form" 
            className="inline-block px-10 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition duration-300 font-poppins text-lg p-4"
          >
            Jetzt Termin vereinbaren
          </SmoothScrollLink>
        </div>
      </div>
    </div>
  );
};

export default WorkflowComponent;