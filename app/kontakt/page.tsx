// app/kontakt/page.tsx
import ContactCTA from '@/components/contact/ContactCTA';
import ContactForm from '@/components/contact/ContactForm';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Über uns | Emoviral – Digitale Lösungen für Autohäuser',
  description: 'Erfahren Sie mehr über Emoviral, unsere Werte, unser Team und unsere Mission: Digitale Exzellenz für Autohäuser und Fahrzeughändler in Deutschland.',
  openGraph: {
    title: 'Über uns | Emoviral',
    description: 'Lernen Sie das Team von Emoviral kennen und entdecken Sie, wie wir mit innovativen digitalen Lösungen Autohäuser erfolgreicher machen.',
    images: [
      {
        url: '/images/karrier/karrier-emoviral.webp', 
        width: 1200,
        height: 630,
        alt: 'Über Emoviral – Unser Team & unsere Mission',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">

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
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Wir freuen uns auf Ihre Anfrage. Lassen Sie uns gemeinsam Ihr Autohaus digital zum Erfolg führen.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Einsatzgebiet</h3>
<p className="text-gray-600">
  Fahrzeugfotografie: Frankfurt, Hanau und Umgebung<br />
  Digitale Dienstleistungen: deutschlandweit verfügbar
</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600">
                06181 4347066<br />
                0176 47666407<br />
                Mo-Fr: 9:00 - 18:00 Uhr
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Mail</h3>
              <p className="text-gray-600">
                <a href="mailto:hi@emoviral.com" className="hover:text-[#1a365d] transition-colors">
                  hi@emoviral.com <br />
                  hi@emoviral.com
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
              <p className="text-gray-600">
                Mo-Fr: 09:00 - 18:00<br />
                Sa: Nach Vereinbarung<br />
                So: Geschlossen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">Kontaktieren Sie uns</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein individuelles Angebot erhalten? 
              Füllen Sie einfach das folgende Formular aus.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <ContactCTA />
    </main>
  );
}