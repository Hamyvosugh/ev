import React from 'react';
import HeroKarriere from '@/components/karriere/hero';
import AnimatedTextBanner from '@/components/karriere/cta1'
import WhyEmoviralSection from '@/components/karriere/why'
import JobListings from '@/components/karriere/jobs'
import ApplicationForm from '@/components/karriere/berwrben'
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Karriere bei Emoviral | Arbeiten im digitalen Automobilhandel',
  description: 'Werde Teil von Emoviral! Entdecke spannende Jobs in Fahrzeugfotografie, Webdesign, Content Creation & mehr – vor Ort oder remote.',
  openGraph: {
    title: 'Karriere bei Emoviral | Arbeiten im digitalen Automobilhandel',
    description: 'Jetzt bewerben und die digitale Zukunft im Automobilhandel mitgestalten. Flexible Jobs in Fotografie, Web, Content & mehr.',
    images: [
      {
        url: '/images/meta/karriere.webp', 
        width: 1200,
        height: 630,
        alt: 'Karriere bei Emoviral',
      },
    ],
  },
};


export default function karriere() {
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
    <HeroKarriere />
    <AnimatedTextBanner />
    <WhyEmoviralSection />
    <JobListings />
    <ApplicationForm />


 
    </main>
  );
}