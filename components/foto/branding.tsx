import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Users, Store, ArrowRight } from 'lucide-react';

const PhotographyServices = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professionelle <span className="text-blue-900">Fahrzeugfotografie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hochwertige Bilder, die Emotionen wecken und Fahrzeuge verkaufen
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Content */}
          <div className="space-y-8 p-2">
            <div className="inline-block bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-md mb-4">
              AUTOHAUS & TEAM
            </div>
            <h3 className="text-3xl font-bold text-gray-800 leading-tight">
              Mehr als nur Fahrzeugfotos: Wir bringen Ihre Marke zum Strahlen
            </h3>
            <p className="text-gray-600 text-lg">
              Professionelle Fotos Ihrer Verkaufsräume und Ihres Teams stärken das 
              Vertrauen Ihrer Kunden noch bevor sie Ihr Autohaus betreten. Wir inszenieren 
              nicht nur Ihre Fahrzeuge perfekt, sondern auch Ihre Ausstellungsräume, 
              Ihre Atmosphäre und Ihre Verkaufsberater.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-900 rounded-full p-1 text-white mr-3 mt-1">
                  <Users size={16} />
                </div>
                <span className="text-gray-700">Authentische Teambilder für mehr Nähe und Persönlichkeit</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-900 rounded-full p-1 text-white mr-3 mt-1">
                  <Store size={16} />
                </div>
                <span className="text-gray-700">Eindrucksvolle Aufnahmen Ihrer Ausstellung für einen starken Markenauftritt</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-900 rounded-full p-1 text-white mr-3 mt-1">
                  <Camera size={16} />
                </div>
                <span className="text-gray-700">Emotionale Momente, die Vertrauen schaffen</span>
              </li>
            </ul>
            
            <p className="text-lg font-semibold text-gray-800">
              Zeigen Sie, wer Sie sind – mit Bildern, die begeistern und verkaufen.
            </p>
            
            <Link 
              href="/kontakt" 
              className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-300"
            >
              Beratungstermin vereinbaren
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          {/* Right Side - Image Gallery */}
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg h-64 relative">
                <Image 
                  src="/images/foto/branding/nam-03.webp" 
                  alt="Autohaus Innenansicht" 
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-40 relative">
                <Image 
                  src="/images/foto/branding/nam-01.webp" 
                  alt="Verkaufsberater im Gespräch" 
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden shadow-lg h-40 relative">
                <Image 
                  src="/images/foto/branding/nam-04.webp" 
                  alt="Autohaus Team" 
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 relative">
                <Image 
                  src="/images/foto/branding/nam-02.webp" 
                  alt="Fahrzeugausstellung" 
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Vehicle Photography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-2">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/foto/branding/nam-06.webp" 
                alt="Professionelle Fahrzeugfotografie" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent">
                <div className="absolute top-6 left-6 right-6 pt-2">
                  <div className="text-white text-sm font-bold bg-yellow-500 inline-block px-3 py-1 rounded-md mb-2 top-2">
                    FAHRZEUGE PERFEKT IN SZENE SETZEN
                  </div>

                  <p className="text-white font-medium p-2 inset-0 bg-black opacity-60">

                  Wir fotografieren Fahrzeuge in einer Weise, die Emotionen weckt und zum Kauf anregt
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center text-white p-4 shadow-lg transform rotate-12">
              <span className="text-center font-bold">100% mehr Klicks*</span>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-block bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-md mb-4">
              EINZELFAHRZEUGE
            </div>
            <h3 className="text-3xl font-bold text-gray-800 leading-tight">
              Professionelle Fahrzeugfotografie, die den Unterschied macht
            </h3>
            <p className="text-gray-600 text-l p-2">
              Mit unserer spezialisierten Fahrzeugfotografie heben wir Ihr Angebot von der Konkurrenz ab. 
              Wir inszenieren jedes Fahrzeug optimal und sorgen dafür, dass potenzielle Käufer sich 
              sofort in das Fahrzeug verlieben.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Unsere Fahrzeugfotografie umfasst:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="text-blue-900">✓</div>
                  <span className="text-gray-700">Außenaufnahmen aus allen Perspektiven</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-900">✓</div>
                  <span className="text-gray-700">Detaillierte Innenraumaufnahmen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-900">✓</div>
                  <span className="text-gray-700">Ausstattungsdetails & Highlights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-900">✓</div>
                  <span className="text-gray-700">Professionelle Bildbearbeitung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-900">✓</div>
                  <span className="text-gray-700">Optimierung für Webseiten & Portale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-900">✓</div>
                  <span className="text-gray-700">Schnelle Lieferung der Aufnahmen</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-300"
              >
                Jetzt anfragen
                <ArrowRight size={18} className="ml-2" />
              </Link>

            </div>
            
            <p className="text-xs text-gray-500">
              * Basierend auf einer internen Studie mit Autohäusern, die von unserer Standard- auf unsere Premium-Fotografie umgestiegen sind.
            </p>
          </div>
        </div>
        
         ￼

        {/* Testimonial Section */}
        <div className="mt-24 rounded-xl overflow-hidden shadow-xl" style={{ backgroundColor: '#92c3bc' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-10 lg:col-span-2 flex items-center">
              <div className="text-white">
                <h2 className='text-3xl font-bold text-white'>Studienergebnisse zur Wirkung von Fahrzeugbildern</h2>
                <h3 className='text-2xl mb-2 mt-6'> Eine repräsentative Umfrage von AutoScout24 und INNOFACT zeigt:</h3>
                <div className="text-xl text-black font-medium mb-8">
                  <li>50 % der Befragten können sich vorstellen, ein Auto vollständig online zu kaufen – jedoch nur, wenn die Fahrzeugbilder aussagekräftig sind.</li>
                  <li>64 % legen Wert auf Fotos aus verschiedenen Perspektiven.</li>
                  <li>55 % wünschen sich detaillierte Innenraumbilder.</li>
                  <li>55 % erwarten eine genaue Dokumentation von Schäden</li>
                </div>
                <div>
                  <p className="text-white">Diese Zahlen verdeutlichen, dass professionelle Fahrzeugfotografie nicht nur die Sichtbarkeit erhöht, sondern auch die Kaufentscheidung maßgeblich beeinflusst.</p>
                </div>
                <Link href="https://innofact-marktforschung.de/autoscout24-studie-fahrzeugbilder-essenziell-beim-kompletten-online-gebrauchtwagenkauf/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className=" inline-flex items-center px-2 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors" title="AutoScout24-Studie: Fahrzeugbilder essenziell beim kompletten Online-Gebrauchtwagenkauf">Quelle <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-auto">
              <Image 
                src="/images/foto/branding/car-mobile.webp" 
                alt="Autohaus Testimonial" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Bereit, Ihre Fahrzeuge und Ihr Autohaus ins beste Licht zu rücken?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch oder fordern Sie ein individuelles Angebot an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors duration-300"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href="/beratung" 
              className="inline-flex items-center justify-center border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              Angebot anfordern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyServices;