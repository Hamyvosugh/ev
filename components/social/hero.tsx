import React from 'react';
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const HeroSocial = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background graphic elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-900"></div>
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-red-700"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96">
          <div className="w-full h-full flex items-center justify-center">
            <Instagram className="w-16 h-16 text-blue-900 opacity-20" />
            <Facebook className="w-20 h-20 text-blue-900 opacity-20 absolute top-10 right-10" />
            <Twitter className="w-14 h-14 text-blue-900 opacity-20 absolute bottom-10 left-10" />
            <Linkedin className="w-18 h-18 text-blue-900 opacity-20 absolute bottom-20 right-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-900 leading-tight">
                Mehr Reichweite. <br />
                Mehr Engagement. <br />
                Mehr Erfolg.
              </h1>
              <div className="h-1 w-20 bg-yellow-400 mt-6"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Wir verwandeln Ihre Social-Media-Präsenz in einen echten Kundenmagneten!
              Mit kreativen Inhalten, gezielten Strategien und kontinuierlicher Betreuung bringen wir Ihre Marke auf das nächste Level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-blue-900 text-white font-medium rounded hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-lg">
                Jetzt Social-Media-Beratung sichern
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border-2 border-blue-900 text-blue-900 font-medium rounded hover:bg-blue-50 transition-colors">
                Beispiele ansehen
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 md:p-8 text-white">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-4">
                    <Instagram className="w-8 h-8" />
                    <Facebook className="w-8 h-8" />
                    <Twitter className="w-8 h-8" />
                    <Linkedin className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Instagram Management</div>
                        <div className="text-sm text-blue-100">Strategische Inhalte & Community Building</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-4 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Facebook className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Facebook Marketing</div>
                        <div className="text-sm text-blue-100">Gezielte Kampagnen & Interaktion</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 p-4 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Twitter className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Twitter Präsenz</div>
                        <div className="text-sm text-blue-100">Aktuelle Trends & schnelle Kommunikation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-lg -z-0 opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-700 rounded-full -z-0 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSocial;