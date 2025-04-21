import React from 'react';
import HeroSection from '@/components/web/hero';
import ServicesIntroduction from '@/components/web/service';
import ImageSlider from '@/components/web/slider';
import WebManagement from '@/components/web/mng';
import PricingComponent from '@/components/web/price';
import CTAComponent from '@/components/web/cta';


export default function Home() {
  return (
    <main className="min-h-screen p-4">
    <HeroSection />
    <ServicesIntroduction />
    <ImageSlider />
    <WebManagement />
    <PricingComponent />
    <CTAComponent />
    </main>
  );
}