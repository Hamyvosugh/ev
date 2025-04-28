'use client';
import React from 'react';
import { Check, Instagram, Upload, Image } from 'lucide-react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink'


const PricingComponent = () => {
  return (
    <div className="w-full bg-blue-600 py-20 px-4 relative overflow-hidden">
      {/* Background shapes and lines */}
      <div className="absolute inset-0 opacity-10">
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
               backgroundSize: '100px 100px'
             }}>
        </div>
        
        {/* Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 -translate-y-1/3 opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full -translate-x-1/3 translate-y-1/3 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-900 rounded-full opacity-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
          Unsere KFZ-Bildservice-Pakete und Preise
          </h2>
          <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="flex justify-center">
          {/* Main Package - Now Centered */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-lg w-full relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 text-sm font-bold py-2 px-4 rounded-bl-xl">
              Beliebt
            </div>
            <div className="bg-blue-900 py-8 px-6">
              <h3 className="text-2xl font-bold text-white mb-1 font-poppins">Standard-Paket</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white font-poppins">50 €</span>
                <span className="text-white text-lg ml-2 font-poppins">pro Fahrzeug</span>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-poppins">Vor-Ort-Fotoshooting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-poppins">Über 40 Aufnahmen pro Fahrzeug</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-poppins">Professionelle Bearbeitung und Zuschnitt</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-poppins">Lieferung innerhalb von 24 Stunden</span>
                </li>
              </ul>
              
              <div className="mt-8">
              <SmoothScrollLink 
  href='#contact-form' 
  className="w-full block py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 font-poppins text-center"
>
  Jetzt buchen
</SmoothScrollLink>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Services - Now with enhanced visibility */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 font-poppins col-span-full text-center bg-white py-3 px-6 rounded-lg shadow-md">Zusatzleistungen</h3>
          
          {/* Social Media Package */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-blue-900 font-poppins mb-1">Social Media Paket</p>
              <p className="text-yellow-500 font-bold font-poppins">+10 €</p>
            </div>
          </div>
          
          {/* Direct Upload */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-blue-900 font-poppins mb-1">Direkter Upload auf Ihre Plattformen</p>
              <p className="text-yellow-500 font-bold font-poppins">+3 € pro Fahrzeug</p>
            </div>
          </div>
          
          {/* Banner & Poster Design */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Image className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-blue-900 font-poppins mb-1">Banner- & Posterdesign</p>
              <p className="text-yellow-500 font-bold font-poppins">ab 10 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;