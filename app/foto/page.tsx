import React from 'react';
import HeroFoto from '@/components/foto/hero';
import WorkflowComponent from '@/components/foto/workflow';
import PricingComponent from '@/components/foto/price';
import ImageSlider from '@/components/foto/slider';
import CTAComponent from '@/components/beratung/call';
import ContactForm from '@/components/contact/ContactForm';
import PhotographyServices from '@/components/foto/branding';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fahrzeugfotografie für Autohäuser | Emoviral Frankfurt & Umgebung',
  description: 'Professionelle Fahrzeugfotografie direkt bei Ihnen vor Ort – mit über 40 bearbeiteten Bildern pro Fahrzeug. Schnell, hochwertig & zuverlässig.',
  openGraph: {
    title: 'Fahrzeugfotografie für Autohäuser',
    description: 'Hochwertige Fotos für Ihre Website, mobile.de oder Social Media – mit 24h Lieferung und optionalem Upload-Service.',
    images: [
      {
        url: '/images/meta/fotografie.webp',
        width: 1200,
        height: 630,
        alt: 'Fahrzeugfotografie bei Emoviral',
      },
    ],
  },
};



export default function Home() {
  return (
    <main className="min-h-screen p-4">
     <HeroFoto />
     <WorkflowComponent />
     <CTAComponent />
     <ImageSlider />
     <PricingComponent />
     <PhotographyServices />
     <ContactForm />
     <CTAComponent />



 
    </main>
  );
}