import React from 'react';
import HeroFoto from '@/components/foto/hero'
import WorkflowComponent from '@/components/foto/workflow';
import PricingComponent from '@/components/foto/price';
import ImageSlider from '@/components/foto/slider';


export default function Home() {
  return (
    <main className="min-h-screen p-4">
     <HeroFoto />
     <WorkflowComponent />
     <ImageSlider />
     <PricingComponent />



 
    </main>
  );
}