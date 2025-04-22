// app/kontakt/page.tsx
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactCTA from '@/components/contact/ContactCTA';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
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
                06438 4039867<br />
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
                <a href="mailto:hi@hamyvosugh.com" className="hover:text-[#1a365d] transition-colors">
                  hi@emoviral.com <br />
                  hi@hamyvosugh.com
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

      {/* Map Section (Optional) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Unser Einzugsgebiet</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              {/* Google Maps view showing Hanau and Frankfurt area */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d204621.76474379862!2d8.763189!3d50.107145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1650000000000!5m2!1sde!2sde"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-gray-600 mt-4 text-center">Wir bedienen die gesamte Region Frankfurt am Main und Hanau.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </main>
  );
}