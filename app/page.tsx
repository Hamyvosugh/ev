import HeroSection2 from '@/components/home/hero2';
import React from 'react';
import ServicesSection from '@/components/home/service';
import CTASection from '@/components/home/cta';
import FAQSection from '@/components/home/fag';
import AboutSection from '@/components/home/aboutus';
import VehiclePhotographyIntro from '@/components/home/fotoopener';
import ContactForm from '@/components/contact/ContactForm';
import CTAComponent from '@/components/beratung/call';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emoviral – Digitale Systeme für Marketing, Vertrieb & Skalierung',
  description:
    'Emoviral entwickelt maßgeschneiderte Websites, Web-Applikationen, Marketing-Systeme und Automatisierungen für Unternehmen in Deutschland, die digital skalieren wollen.',
  openGraph: {
    title: 'Emoviral – Digitale Systeme für Marketing, Vertrieb & Skalierung',
    description:
      'Individuelle Web-Architektur, digitales Marketing, Lead-Generierung, Automatisierung und KI-Integration – entwickelt für messbares Wachstum.',
    images: [
      {
        url: '/images/meta/emoviral.webp',
        width: 1200,
        height: 630,
        alt: 'Emoviral – Digitale Systeme für Unternehmen',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <HeroSection2 />
      <ServicesSection />
      <AboutSection />
      <VehiclePhotographyIntro />
      <CTAComponent />
      <FAQSection />
      <CTASection />
      <ContactForm />

 
    </main>
  );
}