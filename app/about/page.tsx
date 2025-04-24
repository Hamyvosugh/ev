import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <div className="font-[Poppins] text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#0a2e4a] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e4a]/90 to-[#0a2e4a]/70"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wir gestalten die digitale Zukunft des Automobilhandels
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bei Emoviral kombinieren wir Leidenschaft für Technologie mit tiefem Branchenwissen.
              Unser Ziel: Autohäusern und Fahrzeughändlern mit modernen digitalen Lösungen zu nachhaltigem Erfolg zu verhelfen.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0a2e4a]">
              Unsere Mission
            </h2>
            <p className="text-xl leading-relaxed">
              Wir glauben daran, dass die Zukunft des Automobilhandels online entschieden wird.
              Deshalb entwickeln wir innovative, leistungsstarke und maßgeschneiderte Lösungen, die unsere Kunden erfolgreicher, sichtbarer und effizienter machen.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0a2e4a] text-center">
              Wofür Emoviral steht
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0a2e4a] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Qualität</h3>
                    <p>Wir liefern nur Ergebnisse, auf die wir stolz sind.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0a2e4a] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Innovation</h3>
                    <p>Immer einen Schritt voraus mit neuesten Technologien.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0a2e4a] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Partnerschaft</h3>
                    <p>Echte Zusammenarbeit auf Augenhöhe.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0a2e4a] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Transparenz</h3>
                    <p>Klare Kommunikation und faire Prozesse.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0a2e4a] p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Ergebnisorientierung</h3>
                    <p>Unser Erfolg ist Ihr Erfolg.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0a2e4a]">
              Das Team hinter Emoviral
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ein Netzwerk aus kreativen Köpfen, Technikexperten und Marketingprofis – vereint durch die Leidenschaft für digitale Exzellenz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#0a2e4a]/10 flex items-center justify-center">
                  <img src="/images/team/hamy.webp" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Hamy Vosugh</h3>
              <p className="text-[#0a2e4a] mb-2">CEO & Strategy Director</p>
              <p className="text-gray-600 text-sm">10+ Jahre Erfahrung in der Automobilbranche</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#0a2e4a]/10 flex items-center justify-center">
                  <img src="/images/team/sar.webp" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Julia Weber</h3>
              <p className="text-[#0a2e4a] mb-2">Creative Director</p>
              <p className="text-gray-600 text-sm">Spezialistin für Automotive-Fotografie</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#0a2e4a]/10 flex items-center justify-center">
                  <img src="/images/team/am.webp" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Thomas Bauer</h3>
              <p className="text-[#0a2e4a] mb-2">Technical Lead</p>
              <p className="text-gray-600 text-sm">Experte für Web-Entwicklung und Online-Shops</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#0a2e4a]/10 flex items-center justify-center">
                  <img src="/images/team/sar22.webp" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Lisa Hoffmann</h3>
              <p className="text-[#0a2e4a] mb-2">Marketing Strategist</p>
              <p className="text-gray-600 text-sm">Spezialistin für Social Media & Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Emoviral */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0a2e4a] text-center">
              Warum Emoviral der richtige Partner ist
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-[#b8860b] p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p>Spezialisierung auf Autohäuser und Fahrzeughändler</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#b8860b] p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p>Kombination aus Webdesign, Marketing und Automatisierung</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#b8860b] p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p>Persönlicher Service und schnelle Reaktionszeiten</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#b8860b] p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p>Maßgeschneiderte Lösungen, keine Standardpakete</p>
                </div>
                
                <div className="flex items-start md:col-span-2">
                  <div className="bg-[#b8860b] p-2 rounded-full mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p>Leidenschaft für messbare Resultate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a2e4a] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lassen Sie uns gemeinsam Ihre digitale Erfolgsgeschichte schreiben
            </h2>
            <p className="text-xl mb-10">
              Sie möchten Ihr Autohaus digital stärken und neue Kunden gewinnen?
              Kontaktieren Sie uns für ein unverbindliches Kennenlerngespräch.
            </p>
            <Link href="/kontakt" className="inline-flex items-center px-8 py-4 bg-[#b8860b] hover:bg-[#a07608] text-white font-bold rounded-lg transition-colors duration-300">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;