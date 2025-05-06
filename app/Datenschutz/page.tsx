import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Emoviral',
  description: 'Informationen zum Datenschutz bei Emoviral – keine Cookies, kein Tracking, keine Speicherung von IP-Adressen. Transparenz und Sicherheit für unsere Nutzer.',
  openGraph: {
    title: 'Datenschutz bei Emoviral',
    description: 'Erfahren Sie, wie wir Ihre Daten schützen und warum Datenschutz für uns selbstverständlich ist – klar, einfach und transparent.',
    images: [
      {
        url: '/images/meta/datenschutz.webp',
        width: 1200,
        height: 630,
        alt: 'Datenschutz bei Emoviral',
      },
    ],
  },
};

const Datenschutz = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 break-words">Datenschutzerklärung</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-3"></div>
          
          {/* Content Sections */}
          <div className="p-4 md:p-8">
            {/* Introduction */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>Datenschutz</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Auf unserer Website <span className="font-semibold">werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet</span>. Wir verwenden <span className="font-semibold">keine Cookies</span>, betreiben <span className="font-semibold">kein Tracking</span> und erfassen <span className="font-semibold">keine IP-Adressen</span> unserer Besucher.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>Erhebung von Daten</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Beim Besuch unserer Website werden keine personenbezogenen Daten automatisch gespeichert oder ausgewertet. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht.
                </p>
              </div>
            </section>

            {/* External Links */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>Externe Links</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Unsere Website kann Links zu externen Websites enthalten. Für deren Inhalte und Datenschutzpraktiken übernehmen wir keine Verantwortung.
                </p>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>Änderungen dieser Datenschutzerklärung</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen anzupassen.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 flex items-start break-words">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm flex-shrink-0"></span>
                <span>Kontakt</span>
              </h2>
              <div className="pl-3 md:pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Bei Fragen zum Datenschutz können Sie uns jederzeit unter folgender E-Mail-Adresse kontaktieren: 
                  <Link href="mailto:hi@emoviral.com" className="text-blue-800 hover:text-blue-600 font-medium ml-1 break-all">hi@emoviral.com</Link>
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

export default Datenschutz;