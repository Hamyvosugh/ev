import React from 'react';
import { Check } from 'lucide-react';

const PricingComponent = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unsere Preise – Transparent und fair
            </h2>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Jede Website ist einzigartig – deshalb erstellen wir individuelle Angebote basierend auf Ihren Anforderungen und Wünschen.
            </p>
          </div>
          
          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Webdesign & Entwicklung */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Webdesign & Entwicklung</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">ab 990 €</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 my-6"></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Responsive Webdesign</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Individuelle Programmierung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Content-Management-System</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>SEO-Grundoptimierung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Fahrzeugdaten-Integration</span>
                  </li>
                </ul>
                
                <div className="text-sm text-blue-200 italic">
                  Preis abhängig vom Projektumfang
                </div>
              </div>
            </div>
            
            {/* Card 2 - Webseiten-Management */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Webseiten-Management</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">ab 49 €</span>
                    <span className="text-sm ml-1">/Monat</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 my-6"></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regelmäßige Updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sicherheits-Updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Performance-Optimierung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>SEO-Überwachung</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Technischer Support</span>
                  </li>
                </ul>
                
                <div className="text-sm text-blue-200 italic">
                  Flexible Laufzeiten verfügbar
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg mb-6">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und Ihr persönliches Angebot.
            </p>
            
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-medium rounded-md transition duration-300 shadow-lg hover:shadow-xl">
              Jetzt kostenlos beraten lassen
            </button>
          </div>
          
          {/* Optional trust elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Zufriedene Kunden</div>
            </div>
            
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Jahre Erfahrung</div>
            </div>
            
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Kundenzufriedenheit</div>
            </div>
            
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;