import HeroSection from '@/components/home/hero';
import React from 'react';
import ServicesSection from '@/components/home/service';
import CTASection from '@/components/home/cta';
import FAQSection from '@/components/home/fag';
import AboutSection from '@/components/home/aboutus';
import VehiclePhotographyIntro from '@/components/home/fotoopener'

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <VehiclePhotographyIntro />
      <FAQSection />
      <CTASection />
    

 
    </main>
  );
}