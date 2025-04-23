'use client';
import { useState, useEffect } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('faq-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const toggleAccordion = (tabIndex: number, accordionIndex: number) => {
    const key = `${tabIndex}-${accordionIndex}`;
    setOpenAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isAccordionOpen = (tabIndex: number, accordionIndex: number) => {
    const key = `${tabIndex}-${accordionIndex}`;
    return openAccordions[key] || false;
  };

  const tabs = [
    {
      title: "Allgemeine Fragen",
      faqs: [
        {
          question: "Bieten Sie maßgeschneiderte Websites speziell für Autohäuser an?",
          answer: "Ja, wir erstellen individuelle Websites, die perfekt auf die Bedürfnisse von Autohäusern und Fahrzeughändlern abgestimmt sind."
        },
        {
          question: "Wie lange dauert die Umsetzung eines Projekts?",
          answer: "Je nach Umfang dauert die Umsetzung in der Regel zwischen 2 und 6 Wochen."
        },
        {
          question: "Können Sie auch die Inhalte und das Marketing für mein Autohaus übernehmen?",
          answer: "Absolut! Wir bieten umfassende Dienstleistungen für Content-Management, Social-Media-Management und Werbekampagnen an."
        },
        {
          question: "Sind Ihre Lösungen mobilfreundlich und suchmaschinenoptimiert?",
          answer: "Ja, alle unsere Projekte sind für Mobilgeräte optimiert und nach aktuellen SEO-Standards aufgebaut."
        },
        {
          question: "Wie läuft die Zusammenarbeit ab?",
          answer: "Nach einer kostenlosen Erstberatung erstellen wir ein individuelles Konzept und begleiten Sie während der gesamten Umsetzung persönlich."
        }
      ]
    },
    {
      title: "Spezifische Dienstleistungen",
      faqs: [
        {
          question: "Bieten Sie professionelle Fahrzeugfotografie an?",
          answer: "Ja, wir erstellen hochwertige Fahrzeugfotos und liefern die bearbeiteten Bilder innerhalb von 24 Stunden. Auf Wunsch übernehmen wir auch direkt den Upload auf Ihre Plattformen."
        },
        {
          question: "Können Sie Automatisierungen wie die Übertragung von Inseraten von mobile.de umsetzen?",
          answer: "Ja, wir entwickeln individuelle Automatisierungslösungen, inklusive automatisierter Übertragung von Fahrzeuginseraten von mobile.de auf Ihre eigene Website sowie viele weitere Prozesse."
        },
        {
          question: "Erstellen Sie auch Online-Shops für den Fahrzeughandel?",
          answer: "Ja, wir entwickeln leistungsstarke Online-Shops speziell für den Automobilbereich, inklusive Automatisierung und Optimierung für eine maximale Conversion-Rate."
        },
        {
          question: "Unterstützen Sie auch beim E-Mail-Marketing?",
          answer: "Ja, wir erstellen moderne HTML-Newsletter-Designs und übernehmen das komplette E-Mail-Marketing, um Ihre Reichweite und Kundenbindung zu steigern."
        }
      ]
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Häufig gestellte Fragen</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-poppins">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen für Autohäuser und Fahrzeughändler.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Tab navigation */}
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            {tabs.map((tab, tabIndex) => (
              <button
                key={tabIndex}
                onClick={() => setActiveTab(tabIndex)}
                className={`py-4 px-6 font-medium text-md font-poppins transition-colors duration-300 focus:outline-none ${
                  activeTab === tabIndex 
                    ? 'text-blue-900 border-b-2 border-blue-900' 
                    : 'text-gray-500 hover:text-blue-900'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab content - Accordions */}
          <div className="bg-white rounded-2xl">
            <div className="max-w-3xl mx-auto">
              {tabs[activeTab].faqs.map((faq, accordionIndex) => (
                <div 
                  key={accordionIndex}
                  className={`mb-4 border-b border-gray-100 pb-4 ${
                    accordionIndex === tabs[activeTab].faqs.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(activeTab, accordionIndex)}
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                  >
                    <h3 className="font-semibold text-gray-900 pr-8 font-poppins text-lg">{faq.question}</h3>
                    <div className={`flex-shrink-0 h-6 w-6 text-gray-400 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300 ${
                      isAccordionOpen(activeTab, accordionIndex) ? 'transform rotate-180 bg-blue-900 border-blue-900 text-white' : 'bg-white'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isAccordionOpen(activeTab, accordionIndex) 
                      ? 'max-h-96 opacity-100 pb-4' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-600 font-poppins">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 mb-6 font-poppins">
            Haben Sie weitere Fragen oder möchten Sie ein persönliches Gespräch?
          </p>
          <a 
            href="/kontakt" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            Kontakt aufnehmen
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;