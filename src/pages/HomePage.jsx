import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandIntro from '../components/home/BrandIntro';
import SignatureSpecials from '../components/home/SignatureSpecials';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FoodShowcase from '../components/home/FoodShowcase';
import FounderStory from '../components/home/FounderStory';
import ReviewsSection from '../components/home/ReviewsSection';
import InstagramSection from '../components/home/InstagramSection';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandIntro />
      <SignatureSpecials />
      <WhyChooseUs />
      <FoodShowcase />
      <FounderStory />
      <ReviewsSection />
      <InstagramSection />
      <FinalCTA />
    </div>
  );
}
