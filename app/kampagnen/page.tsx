import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import SmoothScrollLink from '@/components/global/SmoothScrollLink'

const WerbekampagnenPage = () => {
  // Primary colors from requirements
  const colors = {
    primary: '#0A3D62', // Dark Blue
    accent: '#F9A602', // Gold
    accentSecondary: '#800020', // Burgundy
    text: '#2D2D2D', // Dark gray
    background: '#F8F9FA', // Light gray/almost white
  };

  return (
    <div className="font-['Poppins',sans-serif] text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-opacity-30" style={{ backgroundImage: "url('/api/placeholder/1920/600')", backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay' }}></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.primary }}>
              Gezielte Werbekampagnen für Ihren maximalen Erfolg
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Wir entwickeln und steuern maßgeschneiderte Google- und Amazon-Kampagnen, um Ihre Reichweite zu maximieren und Ihren Return on Investment nachhaltig zu steigern.
              Vertrauen Sie auf datenbasierte Strategien, kreative Anzeigengestaltung und laufende Optimierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SmoothScrollLink href="#contact-form" className="px-6 py-3 rounded font-medium text-white shadow-lg hover:shadow-xl transition-all bg-amber-500" >
                Jetzt Kampagnen-Beratung sichern
              </SmoothScrollLink>

            </div>
          </div>
        </div>
      </section>

      {/* Why Paid Advertising is Important */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
              Warum bezahlte Werbung unverzichtbar ist
            </h2>
            <p className="text-lg text-gray-700">
              In einer Welt voller Informationen hilft gezielte Werbung dabei, genau die richtigen Kunden zur richtigen Zeit zu erreichen.
              Google- und Amazon-Kampagnen ermöglichen schnelle Sichtbarkeit, messbare Ergebnisse und nachhaltiges Wachstum für Ihr Unternehmen.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>Gezielte Sichtbarkeit</h3>
              <p className="text-gray-600">Erreichen Sie genau die Kunden, die bereits nach Ihren Produkten oder Dienstleistungen suchen.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>Messbare Ergebnisse</h3>
              <p className="text-gray-600">Verfolgen Sie genau, wie Ihre Investition in Werbung zu messbaren Ergebnissen für Ihr Unternehmen führt.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>Schnelles Wachstum</h3>
              <p className="text-gray-600">Beschleunigen Sie Ihr Unternehmenswachstum durch strategisch platzierte Werbekampagnen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.background }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.primary }}>
            Unsere Leistungen für Ihren Werbeerfolg
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Kampagnen-Strategie und Zielgruppenanalyse",
              "Erstellung und Gestaltung von Anzeigen (Texte, Bilder, Videos)",
              "Einrichtung und Verwaltung von Google Ads & Amazon Ads",
              "Keyword-Recherche und Optimierung",
              "A/B-Testing und kontinuierliche Kampagnenoptimierung",
              "Auswertung, Reporting und ROI-Analyse"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages of working with Emoviral */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.primary }}>
            Ihre Vorteile mit Emoviral
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Schnellere Resultate durch gezielte Ansprache",
              "Höherer ROI durch datenbasierte Optimierungen",
              "Transparente Kostenkontrolle und Budgetsicherheit",
              "Persönliche Betreuung und individuelle Kampagnenstrategien",
              "Nutzung modernster Analysetools und KI-Unterstützung"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Prices */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.background }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.primary }}>
            Unsere Werbekampagnen-Pakete
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>Starter-Paket</h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold" style={{ color: colors.primary }}>390 €</span>
                  <span className="text-gray-600 ml-1">/ Monat</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {["Kampagnenerstellung + Verwaltung einer Google- oder Amazon-Kampagne", "Monatliches Reporting"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <SmoothScrollLink 
  href='#contact-form' 
  className="w-full block mt-8 px-6 py-3 rounded font-medium text-white text-center" 
  style={{ backgroundColor: colors.primary }}
>
  Jetzt anrufen & starten
</SmoothScrollLink>

              </div>
            </div>
            
            {/* Business Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 hover:shadow-xl transition-all border-2" style={{ borderColor: colors.accent }}>
              <div className="p-8 border-b border-gray-200 relative">
                <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold py-1 px-3 text-white rounded-bl">EMPFOHLEN</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>Business-Paket</h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold" style={{ color: colors.primary }}>690 €</span>
                  <span className="text-gray-600 ml-1">/ Monat</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "Verwaltung mehrerer Kampagnen (Google & Amazon)",
                    "A/B-Tests & Optimierung",
                    "Erweiterte Berichte & Insights"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <SmoothScrollLink 
  href='#contact-form' 
  className="w-full block mt-8 px-6 py-3 rounded font-medium text-white shadow-lg hover:shadow-xl transition-all text-center" 
  style={{ backgroundColor: colors.accent }}
>
  Jetzt anrufen & starten
</SmoothScrollLink>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>Premium-Paket</h3>
                <div className="flex items-end">
                  <span className="text-xl font-medium text-gray-700">Individuelle Preisgestaltung</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "Komplettkampagnen mit Full-Funnel-Strategie",
                    "Multi-Channel-Optimierung",
                    "Laufende Optimierung und Reporting in Echtzeit"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <SmoothScrollLink 
  href='#contact-form' 
  className="w-full block mt-8 px-6 py-3 rounded font-medium border-2 shadow-md hover:shadow-lg transition-all text-center" 
  style={{ borderColor: colors.primary, color: colors.primary }}
>
  Anfrage stellen
</SmoothScrollLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.primary }}>
            Was unsere Kunden über uns sagen
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 mr-4"></div>
              <div>
                <p className="font-medium" style={{ color: colors.primary }}>Markus F.</p>
                <p className="text-sm text-gray-600">Autohaus Müller GmbH</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              „Dank Emoviral konnten wir unsere Sichtbarkeit auf Google in kürzester Zeit verdoppeln und unseren Umsatz auf Amazon signifikant steigern."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.primary }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Bereit für mehr Kunden und mehr Umsatz?
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Starten Sie jetzt mit einer maßgeschneiderten Kampagne auf Google und Amazon!
            Vereinbaren Sie eine kostenlose Erstberatung und lassen Sie uns gemeinsam Ihren Erfolg beschleunigen.
          </p>
          <a href='/beratung' className="px-8 py-4 rounded-lg font-medium text-gray-900 shadow-lg hover:shadow-xl transition-all text-lg" style={{ backgroundColor: colors.accent }}>
            Jetzt Kampagne starten
          </a>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default WerbekampagnenPage;