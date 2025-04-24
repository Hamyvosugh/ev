'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

// Define TypeScript interfaces
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  fullImage: string;
}

const PortfolioShowcase: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<PortfolioItem | null>(null);
  
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Autohaus Premium Website',
      description: 'Moderne Webdesign-Lösung für ein Luxus-Autohaus mit Online-Terminbuchung.',
      tags: ['Webdesign', 'E-Commerce', 'Autohaus'],
      thumbnail: '/images/web/web01.webp',
      fullImage: '/images/web/web01.webp',
    },

    {
      id: 2,
      title: 'Fahrzeugfotografie Portfolio',
      description: 'Professionelles Portfolio für Autofotografie mit integriertem Bilderkatalog.',
      tags: ['Fotografie', 'Portfolio', 'Fahrzeuge'],
      thumbnail: '/images/web/web04.webp',
      fullImage: '/images/web/web04.webp',
    },
    {
      id: 3,
      title: 'Automesse Landingpage',
      description: 'Eventwebsite für Automessen mit Ausstellerinformationen und Besucherregistrierung.',
      tags: ['Event', 'Landingpage', 'Messe'],
      thumbnail: '/images/web/web05.png',
      fullImage: '/images/web/web05.png',
    },
    {
      id: 4,
      title: 'Fahrzeugmarktplatz',
      description: 'Online-Marktplatz für Fahrzeughändler mit detaillierter Fahrzeugpräsentation.',
      tags: ['Marktplatz', 'E-Commerce', 'Handel'],
      thumbnail: '/api/placeholder/600/400',
      fullImage: '/api/placeholder/1920/1080',
    },
    {
      id: 5,
      title: 'Autohändler CMS',
      description: 'Content-Management-System für Autohändler zur Verwaltung von Fahrzeugbestand.',
      tags: ['Dashboard', 'CMS', 'Verwaltung'],
      thumbnail: '/api/placeholder/600/400',
      fullImage: '/api/placeholder/1920/1080',
    },
    {
      id: 6,
      title: 'Autohändler Skyline',
      description: 'Content-Management-System für Autohändler zur Verwaltung von Fahrzeugbestand.',
      tags: ['Dashboard', 'CMS', 'Verwaltung'],
      thumbnail: '/images/web/skyline.webp',
      fullImage: '/images/web/skyline.webp',
    },
  ];

  const openFullscreen = (item: PortfolioItem): void => {
    setSelectedSample(item);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = (): void => {
    setSelectedSample(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans p-4 md:p-14">
      <div className="py-8">
        <h2 className="text-3xl font-bold text-gray-800 ">Einblicke in unsere Webdesign-Projekte</h2>
        <p className="text-gray-600 mt-4">
          Entdecken Sie ausgewählte Beispiele unserer Webdesign-Arbeiten für Autohäuser und Fahrzeughändler.
        </p>
      </div>

      {/* Portfolio Content */}
      <div className="py-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Referenzen</h2>
          <p className="text-gray-600 max-w-3xl">
            Klicken Sie auf ein Projekt, um die vollständige Ansicht zu öffnen und mehr Details zu erfahren.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => openFullscreen(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Zum Vergrößern klicken</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-900 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="mt-6 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    openFullscreen(item);
                  }}
                >
                  Details ansehen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedSample && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col overflow-y-auto">
          <div className="sticky top-0 w-full flex justify-between items-center p-4 bg-gray-900/80 backdrop-blur-sm z-10">
            <div className="text-white">
              <h3 className="text-xl font-bold">{selectedSample.title}</h3>
            </div>
            <button 
              onClick={closeFullscreen}
              className="text-white p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              aria-label="Close fullscreen view"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-8">
            <div className="w-full max-w-7xl bg-white rounded-lg overflow-hidden shadow-2xl mb-8">
              {/* Browser-like frame */}
              <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 flex-1 bg-white rounded-full px-4 py-1 text-sm text-gray-500 truncate">
                  emoviral.com/{selectedSample.title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
              
              {/* Website preview image */}
              <img 
                src={selectedSample.fullImage} 
                alt={`Vollansicht von ${selectedSample.title}`}
                className="w-full h-auto"
              />
            </div>
            
            {/* Project details */}
            <div className="w-full max-w-4xl bg-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedSample.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{selectedSample.description}</p>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-bold text-lg mb-4">Projektdetails</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-900">Eigenschaften</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Responsive Design für alle Geräte</li>
                      <li>• Optimiert für Suchmaschinen</li>
                      <li>• Schnelle Ladezeiten</li>
                      <li>• Intuitive Benutzeroberfläche</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Technologien</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Next.js</li>
                      <li>• Tailwind CSS</li>
                      <li>• TypeScript</li>
                      <li>• Responsive Framework</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-blue-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSample.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-900 text-white px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={closeFullscreen}
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors mb-8"
            >
              Zurück zur Übersicht
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioShowcase;