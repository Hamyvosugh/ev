// components/web/demo.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CTADemo = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-blue-900 text-white p-8 md:p-12 my-12 shadow-xl">
      {/* Creative background lines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-gradient-to-r from-blue-400 via-blue-200 to-transparent"
            style={{
              top: `${10 + i * 10}%`,
              left: '0',
              right: '-20%',
              transform: `rotate(${i % 2 === 0 ? '2' : '-2'}deg)`,
            }}
          />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent"
            style={{
              left: `${15 + i * 25}%`,
              top: '0',
              bottom: '0',
              transform: `skewX(${i % 2 === 0 ? '20' : '-20'}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-8">
        {/* Text content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Einen echten Einblick bekommen?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Sehen Sie sich jetzt ein Beispielprojekt an:
          </p>
          <p className="text-base md:text-lg opacity-90 mb-8">
            Eine komplette Website, die wir für ein Autohaus entwickelt haben – modern, schnell, mobiloptimiert und verkaufsstark.
          </p>
          <a 
            href="https://demo01.emoviral.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Demo jetzt ansehen
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Image container */}
        <div className="flex-1 relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent pointer-events-none z-10"></div>
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/web/demo.avif" 
                alt="Demo Website Preview" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 font-bold py-1 px-3 rounded-bl-lg">
              Demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTADemo;