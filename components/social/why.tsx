'use client';
import React from 'react';
import { 
  Clock, 
  Star, 
  Target, 
  Palette, 
  TrendingUp, 
  Users,
  Check
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-blue-900" />,
      title: "Zeitersparnis",
      description: "Wir kümmern uns um alles, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
    },
    {
      icon: <Star className="w-12 h-12 text-blue-900" />,
      title: "Professionelle Markenpräsenz",
      description: "Ein konsistenter und starker Auftritt auf allen Plattformen."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-900" />,
      title: "Gezielte Strategien",
      description: "Mehr Reichweite, mehr Engagement, mehr Kunden."
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-900" />,
      title: "Kreative Inhalte",
      description: "Individuell auf Ihre Zielgruppe zugeschnitten."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-900" />,
      title: "Kontinuierliche Optimierung",
      description: "Basierend auf Daten, Trends und KI-Technologien."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-900" />,
      title: "Persönliche Betreuung",
      description: "Individuelle Strategien und direkte Kommunikation."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Side - Visual Element */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="relative">
              {/* Main Image/Graphic */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 shadow-xl relative z-10">
                <div className="text-white text-lg font-semibold mb-4">Emoviral sorgt für Ihren Erfolg</div>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white text-black bg-opacity-10 p-3 rounded">
                      <div className="bg-yellow-400 p-1 rounded-full">
                        <Check className="w-4 h-4 text-blue-900" />
                      </div>
                      <span>{benefit.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-white text-center p-4 border border-white border-opacity-20 rounded-lg">
                  <div className="font-bold text-xl mb-2">Emoviral</div>
                  <div className="text-sm">Ihr Partner für erfolgreiches Social-Media-Management</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-lg -z-0 opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-700 rounded-full -z-0 opacity-70"></div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Warum Emoviral für Ihr Social-Media-Management?
            </h2>
            <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-10">
              In der schnelllebigen Welt der sozialen Medien benötigen Sie einen verlässlichen Partner, 
              der Ihre Online-Präsenz auf das nächste Level hebt. Mit Emoviral profitieren Sie von:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-2 rounded-full">
                  <Check className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">100% auf Ihre Bedürfnisse zugeschnitten</h4>
                  <p className="text-gray-600">
                    Jede Social-Media-Strategie wird individuell auf Ihre Marke, Ihre Zielgruppe und Ihre 
                    Geschäftsziele angepasst. Keine Standardlösungen, sondern maßgeschneiderte Konzepte für Ihren Erfolg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;