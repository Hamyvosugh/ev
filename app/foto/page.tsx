import React from 'react';
import HeroFoto from '@/components/foto/hero';
import WorkflowComponent from '@/components/foto/workflow';
import PricingComponent from '@/components/foto/price';
import ImageSlider from '@/components/foto/slider';
import CTAComponent from '@/components/beratung/call';
import ContactForm from '@/components/contact/ContactForm';
import PhotographyServices from '@/components/foto/branding';
import type { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Fahrzeugfotografie in Frankfurt, Hanau & Main-Kinzig | Emoviral',
  description: 'Emoviral bietet professionelle Automobilfotografie für Autohäuser und Händler. Einfache Autoaufnahmen, hochwertige Fahrzeugbilder-Nachbearbeitung und schnelle Lieferung Ihrer Autofotos.',
  openGraph: {
    title: 'Professionelle Fahrzeugfotografie in Frankfurt & Main-Kinzig | Emoviral',
    description: 'Mit unserer Erfahrung in der Autofotografie liefern wir Ihnen Fahrzeugbilder, die Ihre Angebote auf mobile.de und Social Media optimal hervorheben – innerhalb von 24 Stunden im gesamten Main-Kinzig-Kreis.',
    images: [
      {
        url: '/images/meta/fotografie.webp',
        width: 1200,
        height: 630,
        alt: 'Professionelle Fahrzeugfotografie bei Emoviral Frankfurt',
      },
    ],
  },
};




export default function Fahrzeugfotografie() {
  return (
    <main className="min-h-screen p-4">
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