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
  title: 'Emoviral – Digitale Lösungen für Autohäuser',
  description: 'Emoviral bietet Webdesign, Fahrzeugfotografie, Social-Media-Management und Werbekampagnen speziell für Autohändler in Deutschland.',
  openGraph: {
    title: 'Emoviral – Digitale Lösungen für Autohäuser',
    description: 'Professionelle Online-Lösungen für Autohäuser und Fahrzeughändler: Webseiten, Fotografie, Marketing & mehr – alles aus einer Hand.',
    images: [
      {
        url: '/images/meta/emoviral.webp', 
        width: 1200,
        height: 630,
        alt: 'Emoviral – Digitale Lösungen für Autohäuser',
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