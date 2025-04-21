import HeroSection from '@/components/home/hero';
import React from 'react';
import ServicesSection from '@/components/home/service';
import CTASection from '@/components/home/cta';
import FAQSection from '@/components/home/fag';
import AboutSection from '@/components/home/aboutus';

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
    

 
    </main>
  );
}