import HeroSection2 from '@/components/home/hero2';
import React from 'react';
import ServicesSection from '@/components/home/service';
import CTASection from '@/components/home/cta';
import FAQSection from '@/components/home/fag';
import AboutSection from '@/components/home/aboutus';
import VehiclePhotographyIntro from '@/components/home/fotoopener'
import ContactForm from '@/components/contact/ContactForm';
import CTAComponent from '@/components/beratung/call'


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