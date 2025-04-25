'use client';
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  isCustomPrice?: boolean;
}

const PricingCard = ({ title, price, features, isPopular = false, isCustomPrice = false }: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${isPopular ? 'border-2 border-yellow-400 relative' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-yellow-400 text-blue-900 font-bold py-1 px-4 rounded-bl-lg text-sm">
            Empfohlen
          </div>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        
        <div className="mt-4 mb-6">
          {isCustomPrice ? (
            <div className="text-gray-700 font-medium">Individuelle Preisgestaltung</div>
          ) : (
            <>
              <span className="text-3xl font-bold text-blue-900">{price} €</span>
              <span className="text-gray-600 ml-1">/ Monat</span>
            </>
          )}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 bg-green-50 p-1 rounded-full flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href='/kontakt' className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
          isPopular 
            ? 'bg-blue-900 hover:bg-blue-800 text-white' 
            : 'bg-blue-50 hover:bg-blue-100 text-blue-900'
        }`}>
          Jetzt anrufen & starten
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const packages = [
    {
      title: "Basis-Paket",
      price: "299",
      features: [
        "10 Beiträge pro Monat (Bild & Text)",
        "Planung und Veröffentlichung",
        "Basis-Community-Management",
        "Monatliches Reporting"
      ]
    },
    {
      title: "Profi-Paket",
      price: "499",
      features: [
        "20 Beiträge pro Monat (inkl. Reels oder kurze Videos)",
        "Aktives Community-Management (Kommentare & Nachrichten)",
        "Kampagnen-Management (z.B. Werbeanzeigen)",
        "Erweiterte Analyse & Optimierung"
      ],
      isPopular: true
    },
    {
      title: "Premium-Paket",
      price: "",
      features: [
        "Maßgeschneiderte Strategie",
        "30+ Beiträge / Monat inkl. Video-Content",
        "Vollständige Betreuung aller Kanäle",
        "Intensive Werbekampagnen + KI-gestützte Tools"
      ],
      isCustomPrice: true
    }
  ];

  return (
    <div className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Unsere Pakete für Ihr Social-Media-Wachstum
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Unsere Betreuung ist individuell auf Ihre Marke, Ihre Ziele und Ihre Zielgruppe abgestimmt. Hier ein Überblick:
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              isPopular={pkg.isPopular}
              isCustomPrice={pkg.isCustomPrice}
            />
          ))}
        </div>

{/* Custom Package Note */}
<div className="mt-16 bg-blue-800 p-6 md:p-8 rounded-xl text-center">
  <h3 className="text-xl text-white font-semibold mb-3">Benötigen Sie eine maßgeschneiderte Lösung?</h3>
  <p className="text-blue-100 mb-6">
    Jedes Unternehmen ist einzigartig. Kontaktieren Sie uns für ein individuelles Angebot, 
    das perfekt auf Ihre spezifischen Anforderungen zugeschnitten ist.
  </p>
  <Link href='/beratung' className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium px-4 py-2 sm:px-6 md:px-8 md:py-3 rounded-lg transition-colors text-sm sm:text-base inline-block w-full sm:w-auto">
    Kostenloses Beratungsgespräch
  </Link>
</div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-blue-100">Zufriedene Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10k+</div>
            <div className="text-blue-100">Erstellte Beiträge</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-100">Kundenzufriedenheit</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-blue-100">Jahre Erfahrung</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;