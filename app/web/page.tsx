import React from 'react';
import HeroSection from '@/components/web/hero';
import ServicesIntroduction from '@/components/web/service';
import ImageSlider from '@/components/web/slider';
import WebManagement from '@/components/web/mng';
import PricingComponent from '@/components/web/price';
import CTAComponent from '@/components/web/cta';
import PortfolioShowcase from '@/components/web/ui';
import type { Metadata } from 'next';

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



export default function Home() {
  return (
    <main className="min-h-screen p-4">
    <HeroSection />
    <ServicesIntroduction />
    <PortfolioShowcase />
    <ImageSlider />
    <WebManagement />
    <PricingComponent />
    <CTAComponent />
    </main>
  );
}