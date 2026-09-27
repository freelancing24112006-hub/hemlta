import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Home, Leaf, ShieldCheck, Heart } from 'lucide-react';
import { Instagram, WhatsApp } from '../common/SocialIcons';
import brand from '../../config/brand';

export default function HeroSection() {
  // 4 circular trust badges from the reference design
  const trustFeatures = [
    {
      icon: <Home className="w-5 h-5 text-[#F3B748]" />,
      label: "घरगुती चव",
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#F3B748]" />,
      label: "ताजे घटक",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F3B748]" />,
      label: "स्वच्छता व गुणवत्ता",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#F3B748]" />,
      label: "प्रेमाने बनवलेले",
    },
  ];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#140C07] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 select-none">
      
      {/* ============================================================= */}
      {/* CLEAN PHOTOGRAPHIC SCENE (Chef & Table Spread - No Burned Text)*/}
      {/* ============================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero-clean-bg.jpg"
          alt="Hemlata Desale - Homemade Indian Cuisine"
          className="w-full h-full object-cover object-[center_right] sm:object-right-center"
          loading="eager"
        />

        {/* Soft, natural side vignette for text legibility (No harsh black cuts) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent sm:w-[62%] pointer-events-none"></div>
        {/* Soft bottom table vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none"></div>
      </div>

      {/* ============================================================= */}
      {/* REAL EDITORIAL CONTENT (Left Column: Heading, Copy, Buttons)  */}
      {/* ============================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-10">
        <div className="max-w-2xl space-y-6 sm:space-y-7">
          
          {/* Top Brand Label with Amber Accent Rule */}
          <div className="flex items-center gap-3.5">
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#D98E2A]"></span>
            <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.3em] uppercase text-[#E5A93C]">
              {brand.founderNameEnglish}
            </span>
          </div>

          {/* Main Marathi Heading with Golden Heart & Swoosh Underline */}
          <div className="space-y-2">
            <h1 className="font-['Rozha_One'] text-4xl sm:text-5xl lg:text-[4.25rem] text-white leading-[1.12] tracking-tight">
              घरगुती चवीचा <br />
              <span className="text-[#F3B748] inline-flex items-center gap-2 sm:gap-3 drop-shadow-[0_2px_14px_rgba(243,183,72,0.38)]">
                <span>अस्सल अनुभव</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl text-[#F3B748] font-normal leading-none transform -translate-y-1">
                  ♡
                </span>
              </span>
            </h1>

            {/* Curved Golden Underline Swoosh */}
            <svg
              className="w-48 sm:w-64 h-3.5 text-[#F3B748]/85 drop-shadow-sm"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C45 2 155 2 198 9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Supporting Copy */}
          <p className="font-['Noto_Sans_Devanagari'] text-base sm:text-lg lg:text-xl text-[#FAF0DB]/95 font-medium leading-relaxed max-w-lg">
            प्रेमाने बनवलेले घरगुती पदार्थ, <br className="hidden sm:inline" />
            आता तुमच्या जवळ.
          </p>

          {/* CTAs: Explore Menu & Order Now (Real Interactive Buttons) */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
            
            {/* Button 1: Solid Warm Amber/Gold Pill Button */}
            <Link
              to="/menu"
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#D98E2A] to-[#F3B748] hover:from-[#C47B1E] hover:to-[#E5A737] text-[#1C120C] font-bold text-sm sm:text-base shadow-lg hover:shadow-[0_8px_25px_rgba(243,183,72,0.4)] transition-all duration-200 flex items-center gap-2 group transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Button 2: Crisp Transparent Outline Pill with Cart Icon */}
            <Link
              to="/menu?filter=all"
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-black/35 hover:bg-white/10 text-white hover:text-[#F3B748] border border-white/80 hover:border-[#F3B748] font-semibold text-sm sm:text-base shadow-sm backdrop-blur-xs transition-all duration-200 flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Order Now</span>
              <ShoppingCart className="w-4 h-4 text-[#F3B748]" />
            </Link>

          </div>

        </div>
      </div>

      {/* ============================================================= */}
      {/* REAL BOTTOM TRUST FEATURES BAR: 4 Circular Badges & Follow Us */}
      {/* ============================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-4 border-t border-[#F3B748]/25 pt-5 sm:pt-6">
          
          {/* 4 Circular Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full md:w-auto">
            {trustFeatures.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                {/* Circular Gold Outline Container */}
                <div className="w-12 h-12 rounded-full border border-[#F3B748]/60 bg-[#1C120C]/80 backdrop-blur-xs flex items-center justify-center mb-2 shadow-xs group-hover:border-[#F3B748] group-hover:scale-105 group-hover:bg-[#F3B748]/10 transition-all duration-200">
                  {item.icon}
                </div>
                {/* Marathi Label */}
                <span className="font-['Noto_Sans_Devanagari'] text-xs sm:text-sm font-semibold text-[#FAF0DB] leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side: Follow Us with Instagram & WhatsApp */}
          <div className="flex items-center gap-3.5 self-center md:self-end pb-1">
            <span className="text-xs sm:text-sm font-sans font-medium text-[#FAF0DB]/90">
              Follow Us
            </span>
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href={brand.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F3B748]/60 bg-[#1C120C]/80 hover:bg-[#F3B748]/20 hover:border-[#F3B748] text-[#F3B748] flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
                aria-label="Follow on Instagram"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={brand.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F3B748]/60 bg-[#1C120C]/80 hover:bg-[#F3B748]/20 hover:border-[#F3B748] text-[#F3B748] flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <WhatsApp className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
