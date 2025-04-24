import React from 'react';
import { Clock, Zap, Users, GraduationCap, Laptop } from 'lucide-react';

const WhyEmoviralSection = () => {
  const highlights = [
    {
      icon: <Clock className="h-6 w-6 text-blue-900" />,
      title: "Remote & flexible Arbeitszeiten",
      description: "Arbeite von wo du willst und wann es für dich am besten passt."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-900" />,
      title: "Kreative Projekte mit echtem Impact",
      description: "Deine Arbeit macht einen Unterschied im digitalen Automobilhandel."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-900" />,
      title: "Junges, ambitioniertes Team",
      description: "Werde Teil eines dynamischen Teams mit flachen Hierarchien."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-900" />,
      title: "Persönliche Weiterentwicklung",
      description: "Wir unterstützen dich bei deinem beruflichen Wachstum."
    },
    {
      icon: <Laptop className="h-6 w-6 text-blue-900" />,
      title: "Arbeiten mit modernen Tools & Technologien",
      description: "Nutze state-of-the-art Technologien und bleibe am Puls der Zeit."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-blue-900 mb-3">2. Warum bei Emoviral arbeiten?</h2>
          <h3 className="text-4xl font-bold text-gray-900">Was uns besonders macht</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-yellow-600"
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-full">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEmoviralSection;