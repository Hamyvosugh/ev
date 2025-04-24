import React from 'react';
import HeroSocial from '@/components/social/hero';
import WhyChooseUs from '@/components/social/why';
import Pricing from '@/components/social/price';
import CTAComponent from '@/components/social/cta';
import SliderDemo from '@/components/social/socialmedia';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management für Autohäuser | Emoviral',
  description: 'Professionelle Betreuung Ihrer Social-Media-Kanäle – von Content Creation über Strategie bis zu Werbekampagnen. Sichtbarkeit, Engagement & Kundenbindung für Autohäuser.',
  openGraph: {
    title: 'Social Media für Autohäuser mit Emoviral',
    description: 'Instagram, Facebook, YouTube & mehr – wir verwandeln Ihre Profile in Kundenmagneten mit Strategie, Design & Performance.',
    images: [
      {
        url: '/images/meta/socialmedia.webp', 
        width: 1200,
        height: 630,
        alt: 'Social Media Management für Autohäuser',
      },
    ],
  },
};



export default function Home() {
  return (
    <main className="min-h-screen p-4">
    <HeroSocial />
    <SliderDemo />
    <WhyChooseUs />
    <Pricing />
    <CTAComponent />
    
    </main>
  );
}