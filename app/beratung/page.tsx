// app/beratung/page.tsx
import ContactForm from '@/components/contact/ContactForm';
import { Coffee, Users, Lightbulb, Target } from 'lucide-react';
import CTAComponent from '@/components/beratung/call2';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kostenlose Beratung | Emoviral – Digitale Strategien für Autohäuser',
  description: 'Fordern Sie jetzt Ihre kostenlose Erstberatung an. Wir analysieren Ihre digitale Präsenz und zeigen Ihnen, wie Sie online mehr Kunden erreichen.',
  openGraph: {
    title: 'Kostenlose Beratung bei Emoviral',
    description: 'Unverbindliche Erstberatung für Autohäuser und Fahrzeughändler – persönlich, professionell und lösungsorientiert.',
    images: [
      {
        url: '/images/meta/beratung.webp', 
        width: 1200,
        height: 630,
        alt: 'Digitale Beratung für Autohäuser',
      },
    ],
  },
};


export default function BeratungPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20 mt-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Beratung</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professionelle Beratung für Ihr Autohaus. Wir helfen Ihnen, Ihre Präsenz zu optimieren und Ihre Verkäufe zu steigern.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Warum eine Beratung wichtig ist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Individuelle Lösungen</h3>
              <p className="text-gray-600">
                Maßgeschneiderte Strategien für Ihr Autohaus und Ihre spezifischen Bedürfnisse
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Ansätze</h3>
              <p className="text-gray-600">
                Aktuelle Trends und bewährte Methoden für maximalen Erfolg
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Persönliche Betreuung</h3>
              <p className="text-gray-600">
                Direkter Kontakt und enge Zusammenarbeit mit unseren Experten
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unverbindliches Erstgespräch</h3>
              <p className="text-gray-600">
                Kostenlose Erstberatung, um Ihre Anforderungen zu verstehen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Unsere Beratungsleistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Digital-Strategie</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Website-Konzeption und -Optimierung
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Online-Marketing-Strategien
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Social-Media-Planung
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Fotografie-Beratung</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Konzeption für Fahrzeugaufnahmen
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Bildbearbeitungs-Workflows
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Markenkonformes Bildmaterial
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Business-Optimierung</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Prozessoptimierung
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Vertriebsstrategien
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8860b] mr-2">•</span>
                  Kundenbindungskonzepte
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Der Beratungsprozess</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#b8860b] text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Erstgespräch</h3>
                  <p className="text-gray-600">Wir lernen Sie und Ihr Autohaus kennen, verstehen Ihre Ziele und Herausforderungen.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#b8860b] text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse</h3>
                  <p className="text-gray-600">Detaillierte Untersuchung Ihrer aktuellen Situation und Potenziale.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#b8860b] text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Konzepterstellung</h3>
                  <p className="text-gray-600">Entwicklung einer maßgeschneiderten Strategie mit konkreten Handlungsempfehlungen.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#b8860b] text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Umsetzungsbegleitung</h3>
                  <p className="text-gray-600">Optional: Wir unterstützen Sie bei der Implementierung der Strategie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTAComponent />
      {/* Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">Jetzt Beratungstermin vereinbaren</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Füllen Sie das folgende Formular aus, und wir melden uns innerhalb von 24 Stunden bei Ihnen, um einen Termin für Ihr kostenloses Erstgespräch zu vereinbaren.
            </p>
            <ContactForm />
          </div>
        </div>
       
      </section>
    </main>
  );
}