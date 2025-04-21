'use client';
import React from 'react';
import { Check, Instagram, Upload, Image } from 'lucide-react';

const PricingComponent = () => {
  return (
    <div className="w-full bg-blue-600 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Unsere Pakete und Preise
          </h2>
          <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="flex justify-center">
          {/* Main Package - Now Centered */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-lg w-full">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 text-sm font-bold py-2 px-4 rounded-bl-xl">
                Beliebt
              </div>
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
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 font-poppins">
                  Jetzt buchen
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Services - Now Below as Additional Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 font-poppins col-span-full text-center">Zusatzleistungen</h3>
          
          {/* Social Media Package */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-white font-poppins mb-1">Social Media Paket</p>
              <p className="text-yellow-400 font-bold font-poppins">+10 €</p>
            </div>
          </div>
          
          {/* Direct Upload */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-white font-poppins mb-1">Direkter Upload auf Ihre Plattformen</p>
              <p className="text-yellow-400 font-bold font-poppins">+3 € pro Fahrzeug</p>
            </div>
          </div>
          
          {/* Banner & Poster Design */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Image className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-white font-poppins mb-1">Banner- & Posterdesign</p>
              <p className="text-yellow-400 font-bold font-poppins">ab 10 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;