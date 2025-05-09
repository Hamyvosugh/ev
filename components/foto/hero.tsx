'use client';
import React from 'react';
import { Clock, Shield, Award } from 'lucide-react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink'
import ScrollButton from '@/components/global/Scroll100vh'

const HeroFoto = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Image with enhanced mobile coverage */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/images/foto/carfototake.webp")', 
          backgroundPosition: '50% 50%',
          height: '100vh',
          width: '100vw',
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4  sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center md:-translate-y-20 translate-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-poppins break-words">
            Professionelle Fahrzeugfotografie 
          </h1>
          
          <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg mb-8 w-full box-border">
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 font-poppins">
              Überlassen Sie uns die Arbeit – von der Aufnahme bis zur Bearbeitung.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 font-poppins">
              Wir kommen direkt zu Ihrem Autohaus, fotografieren Ihre Fahrzeuge professionell und liefern innerhalb von 24 Stunden perfekte Fahrzeugbilder – komplett bearbeitet und einsatzbereit.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              <SmoothScrollLink href="#contact-form" className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition duration-300 font-poppins w-full sm:w-auto">
                Service buchen
              </SmoothScrollLink>
              <ScrollButton className="px-8 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-medium rounded-md transition duration-300 font-poppins w-full sm:w-auto">
                Wie funktioniert es?
              </ScrollButton>
            </div>
          </div>
          
          {/* Key points with Lucide icons - now with white text and no background */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap w-full">
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" />
              <p className="font-bold text-white font-poppins whitespace-normal">24h Lieferung</p>
            </div>
            
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" />
              <p className="font-bold text-white font-poppins whitespace-normal">Sorgenfreie Abwicklung</p>
            </div>
            
            <div className="flex items-center">
              <Award className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" />
              <p className="font-bold text-white font-poppins whitespace-normal">Höchste Qualität</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFoto;