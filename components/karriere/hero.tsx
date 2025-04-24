import React from 'react';
import SmoothScrollLink from '@/components/global/SmoothScrollLink'

const HeroKarriere = () => {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content Section - Left Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Werde Teil von Emoviral
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Du suchst nach spannenden Projekten, flexibler Arbeit und kreativer Freiheit?
              Bei uns gestaltest du die digitale Zukunft des Automobilhandels aktiv mit.
            </p>
            <SmoothScrollLink href='#jobs' className="mt-4 px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition duration-300">
              Jetzt bewerben
            </SmoothScrollLink>
          </div>
          
          {/* Image Section - Right Side */}
          <div className="w-full md:w-1/2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/karrier/karrier-emoviral.webp" 
                alt="Karriere bei Emoviral" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKarriere;