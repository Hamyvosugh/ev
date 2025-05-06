import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AGB | Emoviral – Allgemeine Geschäftsbedingungen',
  description: 'Hier finden Sie die allgemeinen Geschäftsbedingungen von Emoviral für alle angebotenen digitalen Dienstleistungen – fair, transparent und verbindlich.',
  openGraph: {
    title: 'AGB | Emoviral',
    description: 'Unsere Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen im Bereich Webdesign, Fahrzeugfotografie, Marketing und Automatisierung.',
    images: [
      {
        url: '/images/karrier/karrier-emoviral.webp',
        width: 1200,
        height: 630,
        alt: 'AGB Emoviral',
      },
    ],
  },
};

const AGB = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-x-hidden w-full">
      <Script id="organization-ld-json" type="application/ld+json" strategy="afterInteractive">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Emoviral",
  "url": "https://emoviral.com",
  "logo": "https://emoviral.com/images/logo/logo-emoviral.png"
}
`}
</Script>
      <div className="max-w-4xl mx-auto w-full box-border">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 break-words">Allgemeine Geschäftsbedingungen</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-3"></div>
          
          {/* Content Sections */}
          <div className="p-4 md:p-8">
            {/* Section 1 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>1. Geltungsbereich</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die von <span className="font-semibold">Emoviral</span> angeboten und erbracht werden. Mit der Beauftragung gelten diese Bedingungen als akzeptiert.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>2. Leistungen</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Emoviral bietet digitale Dienstleistungen wie Webdesign, Social-Media-Management, Online-Marketing, sowie Fahrzeugfotografie an. Der genaue Leistungsumfang wird individuell mit dem Kunden vereinbart.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>3. Preise und Zahlungsbedingungen</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Alle Preise verstehen sich in Euro und sind nach Absprache fällig. Die Zahlung erfolgt per Überweisung nach Rechnungsstellung, sofern nichts anderes vereinbart wurde.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>4. Urheberrecht & Nutzungsrechte</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Alle erstellten Inhalte (z. B. Designs, Fotos, Texte) bleiben bis zur vollständigen Bezahlung Eigentum von Emoviral. Nach Zahlung erhält der Kunde die vereinbarten Nutzungsrechte.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>5. Stornierung & Rücktritt</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Eine Stornierung ist bis 48 Stunden vor Beginn der Dienstleistung kostenlos möglich. Bei kurzfristiger Absage kann eine Ausfallpauschale erhoben werden.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>6. Haftung</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Emoviral haftet nur bei vorsätzlichem oder grob fahrlässigem Verhalten. Für indirekte Schäden (z. B. entgangener Gewinn) wird keine Haftung übernommen.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>7. Datenschutz</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Es werden keine personenbezogenen Daten gespeichert oder weitergegeben. Details siehe <a href="/Datenschutz" className="text-blue-800 hover:text-blue-600 font-medium">Datenschutzerklärung</a>.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>8. Gerichtsstand</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Gerichtsstand ist, soweit gesetzlich zulässig, Frankfurt am Main. Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
              </div>
            </section>

            {/* Note */}
            <section>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 md:p-4 rounded-r">
                <p className="text-gray-800 font-medium mb-1">📌 Hinweis:</p>
                <p className="text-gray-700">
                  Diese AGB stellen keine Rechtsberatung dar. Für spezielle rechtliche Anforderungen kann es sinnvoll sein, einen Anwalt hinzuzuziehen.
                </p>
              </div>
            </section>
          </div>
          
          {/* Bottom Design Element */}
          <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"></div>
        </div>
      </div>
    </div>
  );
};

export default AGB;