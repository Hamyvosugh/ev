import React from 'react';
import HeroSocial from '@/components/social/hero';
import WhyChooseUs from '@/components/social/why';
import Pricing from '@/components/social/price';
import CTAComponent from '@/components/social/cta';


export default function Home() {
  return (
    <main className="min-h-screen p-4">
    <HeroSocial />
    <WhyChooseUs />
    <Pricing />
    <CTAComponent />
    </main>
  );
}