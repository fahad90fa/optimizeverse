
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import PlansSection from '@/components/home/PlansSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ValorantPromo from '@/components/home/ValorantPromo';

const Index = () => {
  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PlansSection />
        <TestimonialsSection />
        <ValorantPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
