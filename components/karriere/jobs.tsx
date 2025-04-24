'use client';
import React, { useState } from 'react';
import { MapPin, Clock, FileText, ChevronDown, ChevronUp, Camera, Brush, Layout, Monitor, Scissors } from 'lucide-react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink'


const JobListings = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    if (expandedJob === index) {
      setExpandedJob(null);
    } else {
      setExpandedJob(index);
    }
  };

  const jobs = [
    {
      icon: <Camera className="h-8 w-8" />,
      emoji: "📸",
      title: "Fahrzeugfotograf:in Frankfurt",
      type: "Teilzeit / Freelance",
      location: "Frankfurt am Main",
      worktime: "flexibel, auf Abruf",
      shortDesc: "Du fotografierst Fahrzeuge direkt beim Autohaus vor Ort – professionell, schnell und zuverlässig.",
      longDesc: "Als Fahrzeugfotograf:in in Frankfurt bist du verantwortlich für die professionelle Darstellung von Fahrzeugen für unsere Autohauspartner. Du arbeitest eigenständig vor Ort und setzt mit deinem Auge für Details und Komposition jedes Fahrzeug perfekt in Szene.",
      requirements: [
        "Erfahrung in der Produkt- oder Automobilfotografie",
        "Eigene Kameraausrüstung (DSLR/Systemkamera)",
        "Flexibilität und Zuverlässigkeit",
        "Führerschein Klasse B",
        "Sicherer Umgang mit Bildbearbeitungssoftware"
      ],
      benefits: [
        "Wettbewerbsfähige Vergütung pro fotografiertem Fahrzeug",
        "Flexible Zeiteinteilung",
        "Regelmäßige Aufträge",
        "Eigenverantwortliches Arbeiten"
      ]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      emoji: "📸",
      title: "Fahrzeugfotograf:in Hanau",
      type: "Teilzeit / Freelance",
      location: "Hanau & Umgebung",
      worktime: "flexibel, auf Abruf",
      shortDesc: "Du sorgst mit deinem Blick fürs Detail für hochwertige Fahrzeugbilder, die im Web überzeugen.",
      longDesc: "In dieser Rolle fotografierst du Fahrzeuge bei unseren Partnerhändlern in Hanau und Umgebung. Mit deinem fotografischen Können und Gespür für die richtigen Blickwinkel schaffst du Aufnahmen, die potenzielle Käufer begeistern.",
      requirements: [
        "Nachweisbare Erfahrung in der Fotografie, idealerweise mit Fahrzeugen",
        "Verständnis für die digitale Präsentation von Produkten",
        "Eigene Kameraausrüstung und Transportmöglichkeit",
        "Selbstständige und strukturierte Arbeitsweise",
        "Grundkenntnisse in Bildbearbeitung"
      ],
      benefits: [
        "Attraktive Vergütung pro Shooting",
        "Langfristige Zusammenarbeit",
        "Weiterbildungsmöglichkeiten im Bereich Automotive-Fotografie",
        "Teil eines innovativen Teams werden"
      ]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      emoji: "📸",
      title: "Fahrzeugfotograf:in Offenbach",
      type: "Teilzeit / Freelance",
      location: "Offenbach am Main",
      worktime: "flexibel, auf Abruf",
      shortDesc: "Du bringst Fahrzeuge ins perfekte Licht – von Außenaufnahmen bis Interieur-Details.",
      longDesc: "Als Fahrzeugfotograf:in in Offenbach erstellst du hochwertige Bildserien, die sowohl das Exterieur als auch das Interieur der Fahrzeuge optimal präsentieren. Du arbeitest mit verschiedenen Autohäusern zusammen und sorgst dafür, dass jedes Fahrzeug durch deine Bilder bestmöglich zur Geltung kommt.",
      requirements: [
        "Leidenschaft für Fotografie und Automobil",
        "Technisches Verständnis für Kameraequipment und Beleuchtung",
        "Mobilität und zeitliche Flexibilität",
        "Erfahrung in der Produktfotografie",
        "Kreatives Auge für Bildkomposition"
      ],
      benefits: [
        "Faire Bezahlung pro Auftrag",
        "Kontinuierliche Aufträge",
        "Professionelle Weiterentwicklung",
        "Einblick in die Automobilbranche"
      ]
    },
    {
      icon: <Layout className="h-8 w-8" />,
      emoji: "🎨",
      title: "Content Creator / Social Media Manager:in",
      type: "Teilzeit / Remote",
      location: "deutschlandweit / remote",
      worktime: "flexibel, ca. 15-20h/Woche",
      shortDesc: "Erstelle spannende Inhalte für Social Media, plane Kampagnen und bring unsere Marke kreativ nach vorne.",
      longDesc: "Als Content Creator und Social Media Manager:in entwickelst du kreative Inhalte für unsere Social-Media-Kanäle und die unserer Kunden. Du konzipierst Kampagnen, erstellst ansprechende Beiträge und analysierst deren Performance, um unsere Online-Präsenz kontinuierlich zu optimieren.",
      requirements: [
        "Erfahrung im Community Management und Content Creation",
        "Kreatives Storytelling und exzellente Schreibfähigkeiten",
        "Sicherer Umgang mit gängigen Social Media Plattformen",
        "Grundkenntnisse in Bildbearbeitung und Grafikdesign",
        "Affinität zur Automobilbranche von Vorteil"
      ],
      benefits: [
        "Vollständig remote mit flexiblen Arbeitszeiten",
        "Kreative Freiheit bei der Content-Erstellung",
        "Modernste Tools und Ressourcen",
        "Möglichkeit zur Mitgestaltung der Marketingstrategie"
      ]
    },
    {
      icon: <Brush className="h-8 w-8" />,
      emoji: "🖌️",
      title: "Grafikdesigner:in / UI Designer:in",
      type: "Freelance / Projektbasis",
      location: "remote oder Frankfurt",
      worktime: "projektbasiert",
      shortDesc: "Designs für Websites, Poster, Social Media und Werbekampagnen – modern, clean und zielgruppengerecht.",
      longDesc: "Als Grafikdesigner:in/UI Designer:in bei Emoviral gestaltest du visuelle Elemente für verschiedene Medien – von Websites über Print-Materialien bis hin zu Social-Media-Kampagnen. Deine Designs spiegeln die Identität unserer Kunden wider und helfen ihnen, sich im digitalen Raum zu differenzieren.",
      requirements: [
        "Portfolio mit relevanten Designprojekten",
        "Sehr gute Kenntnisse in Adobe Creative Suite oder vergleichbaren Tools",
        "Erfahrung im UI/UX Design für responsive Websites",
        "Verständnis für Brand Identity und visuelle Kommunikation",
        "Fähigkeit, Kundenfeedback effektiv umzusetzen"
      ],
      benefits: [
        "Attraktive Projektbezogene Vergütung",
        "Vielseitige Designprojekte",
        "Langfristige Zusammenarbeit möglich",
        "Flexibles Arbeiten von überall"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      emoji: "💻",
      title: "Webentwickler:in (Next.js, Tailwind)",
      type: "Teilzeit / Remote",
      location: "remote",
      worktime: "flexibel",
      shortDesc: "Du entwickelst performante Websites mit modernsten Technologien für Autohäuser in ganz Deutschland.",
      longDesc: "Als Webentwickler:in bist du verantwortlich für die Umsetzung moderner, leistungsstarker Websites für unsere Kunden aus der Automobilbranche. Mit deinem Know-how in Next.js und Tailwind CSS erschaffst du benutzerfreundliche, responsive Webauftritte, die technisch auf dem neuesten Stand sind.",
      requirements: [
        "Nachweisbare Erfahrung mit Next.js und Tailwind CSS",
        "Fundierte Kenntnisse in React, TypeScript und modernem JavaScript",
        "Verständnis für Performance-Optimierung und SEO",
        "Erfahrung mit Git-basierten Workflows",
        "Eigenständige und lösungsorientierte Arbeitsweise"
      ],
      benefits: [
        "100% Remote-Arbeit mit flexibler Zeiteinteilung",
        "Arbeit mit modernsten Technologien",
        "Flache Hierarchien und direkte Kommunikation",
        "Möglichkeit zur fachlichen Weiterentwicklung"
      ]
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      emoji: "✂️",
      title: "Foto-Editor:in & Postproduktion",
      type: "Mini-Job / Remote",
      location: "remote",
      worktime: "10–15h/Woche",
      shortDesc: "Professionelle Bearbeitung unserer Fahrzeugbilder – Farbkorrektur, Zuschnitt & Retusche für Web & Print.",
      longDesc: "In dieser Position bearbeitest du Fahrzeugfotos unserer Fotografen für die Verwendung auf Websites, in Katalogen und für Marketingmaterialien. Du optimierst Lichtverhältnisse, korrigierst Farben, entfernst störende Elemente und sorgst für ein konsistentes, hochwertiges Erscheinungsbild aller Bilder.",
      requirements: [
        "Erfahrung in der professionellen Bildbearbeitung",
        "Sicherer Umgang mit Adobe Photoshop und Lightroom",
        "Präzises Arbeiten und Blick fürs Detail",
        "Verständnis für die optimale Präsentation von Fahrzeugen",
        "Zuverlässige und termingerechte Arbeitsweise"
      ],
      benefits: [
        "Vollständig ortsunabhängiges Arbeiten",
        "Regelmäßiger Bildzufluss",
        "Faire Stunden- oder Bildvergütung",
        "Möglichkeit zur langfristigen Zusammenarbeit"
      ]
    }
  ];

  return (
    <section id='jobs' className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Aktuelle Rollen</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-blue-50 p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <p className="text-blue-800 font-medium">{job.type}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleJob(index)}
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    aria-label={expandedJob === index ? "Weniger anzeigen" : "Mehr anzeigen"}
                  >
                    {expandedJob === index ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col space-y-4 text-black">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-900 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Standort:</strong> {job.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-900 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Arbeitszeit:</strong> {job.worktime}</span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-900 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Kurzbeschreibung:</strong>
                      <p className="mt-1">{job.shortDesc}</p>
                    </div>
                  </div>
                </div>
                
                {expandedJob === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 transition-all duration-300">
                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Aufgabenbeschreibung</h4>
                      <p className="text-gray-700">{job.longDesc}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Was wir erwarten</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Was wir bieten</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <SmoothScrollLink href='#bewerbung' className="mt-4 px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition duration-300">
                      Jetzt bewerben
                    </SmoothScrollLink>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;