import React from 'react';
import HeroFoto from '@/components/foto/hero'
import WorkflowComponent from '@/components/foto/workflow';
import PricingComponent from '@/components/foto/price';
import ImageSlider from '@/components/foto/slider';
import CTAComponent from '@/components/beratung/call'
import ContactForm from '@/components/contact/ContactForm';


export default function Home() {
  return (
    <main className="min-h-screen p-4">
     <HeroFoto />
     <WorkflowComponent />
     <CTAComponent />
     <ImageSlider />
     <PricingComponent />
     <ContactForm />
     <CTAComponent />



 
    </main>
  );
}