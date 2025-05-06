import React from 'react';
import HeroSection from '@/components/web/hero';
import ServicesIntroduction from '@/components/web/service';
import WebManagement from '@/components/web/mng';
import PricingComponent from '@/components/web/price';
import CTAComponent from '@/components/web/cta';
import CTADemo from '@/components/web/demo';
import ContactForm from '@/components/contact/ContactForm';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Webdesign & Entwicklung für Autohäuser | Emoviral',
  description: 'Wir entwickeln performante, moderne und mobil-optimierte Webseiten speziell für Autohäuser und Fahrzeughändler – inklusive SEO, Wartung und Automatisierung.',
  openGraph: {
    title: 'Webentwicklung für Autohäuser | Emoviral',
    description: 'Maßgeschneiderte Webseiten für Autohäuser – mit Fokus auf Geschwindigkeit, Design, mobile Nutzer und Integration von Fahrzeugdaten.',
    images: [
      {
        url: '/images/home/hero/haerobaner.webp', 
        width: 1200,
        height: 630,
        alt: 'Webdesign für Autohäuser',
      },
    ],
  },
};

export default function Webdesign() {
  return (
    <main className="min-h-screen overflow-x-hidden">
            <Script id="organization-ld-json" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Emoviral",
          "url": "https://emoviral.com",
          "logo": "https://emoviral.com/images/logo/logo-emoviral.png"
        }
        `}
      </Script>
      <div className="px-4 max-w-full mx-auto">
        <HeroSection />
        <ServicesIntroduction />
        <CTADemo />
        <WebManagement />
        <PricingComponent />
        <CTAComponent />
        <ContactForm />
      </div>
    </main>
  );
}