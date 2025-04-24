import type { Metadata } from 'next';

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