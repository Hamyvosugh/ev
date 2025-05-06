import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Impressum | Emoviral – Angaben gemäß § 5 TMG',
  description: 'Offizielle Anbieterkennzeichnung gemäß § 5 TMG und § 55 RStV für die Website Emoviral. Kontaktinformationen, Verantwortlichkeit und rechtliche Hinweise.',
  openGraph: {
    title: 'Impressum | Emoviral',
    description: 'Hier finden Sie alle rechtlich relevanten Informationen über Emoviral – transparent, gesetzeskonform und aktuell.',
    images: [
      {
        url: '/images/karrier/karrier-emoviral.webp', // اگه OG خاص نداری از لوگو هم میشه استفاده کرد
        width: 1200,
        height: 630,
        alt: 'Emoviral Impressum',
      },
    ],
  },
};


const Impressum = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">


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
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Impressum</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-3"></div>
          
          {/* Content Sections */}
          <div className="p-8">
            {/* Company Info */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm"></span>
                Angaben gemäß § 5 TMG
              </h2>
              <div className="pl-5 border-l-2 border-gray-200">
                <p className="text-gray-800 text-lg font-medium mb-1">Emoviral</p>
                <p className="text-gray-700 mb-3">Inhaber: Hamy Vosugh</p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm"></span>
                Dienstleistungen
              </h2>
              <div className="pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Webdesign, Content-Management, Online-Marketing, Fahrzeugfotografie und digitale Lösungen für Autohäuser und Fahrzeughändler.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm"></span>
                Kontakt
              </h2>
              <div className="pl-5 border-l-2 border-gray-200 space-y-2">
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0 text-gray-500">Telefon:</div>
                  <Link href="tel:06438-4039867" className="text-blue-800 hover:text-blue-600 font-medium">06181 4347066</Link>
                </div>
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0 text-gray-500">E-Mail:</div>
                  <Link href="mailto:hi@emoviral.com" className="text-blue-800 hover:text-blue-600 font-medium">hi@emoviral.com</Link>
                </div>
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0 text-gray-500">Website:</div>
                  <Link href="https://www.emoviral.com" className="text-blue-800 hover:text-blue-600 font-medium">www.emoviral.com</Link>
                </div>
              </div>
            </section>

            {/* Service Areas */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm"></span>
                Einsatzgebiete
              </h2>
              <div className="pl-5 border-l-2 border-gray-200">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700"><span className="font-medium">Fahrzeugfotografie:</span> Frankfurt, Hanau und Umgebung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700"><span className="font-medium">Digitale Dienstleistungen:</span> deutschlandweit verfügbar</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Tax ID */}
            <section className="mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm"></span>
                Umsatzsteuer-ID
              </h2>
              <div className="pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700">Wird auf Anfrage bzw. auf der Rechnung angegeben.</p>
              </div>
            </section>

            {/* Responsible for Content */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-900 w-2 h-8 mr-3 rounded-sm"></span>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="pl-5 border-l-2 border-gray-200">
                <p className="text-gray-700 mb-1">Hamy Vosugh</p>
                <p className="text-gray-700">Adresse: Frankfurt, Hanau und Umgebung</p>
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

export default Impressum;