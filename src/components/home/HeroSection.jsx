import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Home, Leaf, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Instagram, WhatsApp } from '../common/SocialIcons';
import brand from '../../config/brand';

export default function HeroSection() {
  // 4 circular trust badges
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
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#140C07] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 select-none">
      
      {/* ============================================================= */}
      {/* DESKTOP BACKGROUND SCENE (Chef & Table Spread on right, dark vignette on left) */}
      {/* ============================================================= */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero-clean-bg.jpg"
          alt="Hemlata Desale - Homemade Indian Cuisine"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Soft, natural side vignette on left for desktop typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140C07] via-[#140C07]/80 to-transparent w-[56%] pointer-events-none"></div>
        {/* Soft bottom table vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#140C07]/90 via-[#140C07]/40 to-transparent pointer-events-none"></div>
      </div>

      {/* ============================================================= */}
      {/* DESKTOP CONTENT VIEW (Large screens >= 1024px)                 */}
      {/* ============================================================= */}
      <div className="hidden lg:block relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-2xl space-y-7">
          
          {/* Top Brand Label with Amber Accent Rule */}
          <div className="flex items-center gap-3.5">
            <span className="w-12 h-[1.5px] bg-[#D98E2A]"></span>
            <span className="text-sm font-sans font-bold tracking-[0.3em] uppercase text-[#E5A93C]">
              {brand.founderNameEnglish}
            </span>
          </div>

          {/* Main Marathi Heading with Golden Heart & Swoosh Underline */}
          <div className="space-y-2">
            <h1 className="font-['Rozha_One'] text-5xl lg:text-[4.25rem] text-white leading-[1.12] tracking-tight">
              घरगुती चवीचा <br />
              <span className="text-[#F3B748] inline-flex items-center gap-3 drop-shadow-[0_2px_14px_rgba(243,183,72,0.38)]">
                <span>अस्सल अनुभव</span>
                <span className="text-4xl lg:text-5xl text-[#F3B748] font-normal leading-none transform -translate-y-1">
                  ♡
                </span>
              </span>
            </h1>

            {/* Curved Golden Underline Swoosh */}
            <svg
              className="w-64 h-3.5 text-[#F3B748]/85 drop-shadow-sm"
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
          <p className="font-['Noto_Sans_Devanagari'] text-lg lg:text-xl text-[#FAF0DB]/95 font-medium leading-relaxed max-w-lg">
            प्रेमाने बनवलेले घरगुती पदार्थ, <br />
            आता तुमच्या जवळ.
          </p>

          {/* CTAs: Explore Menu & Order Now */}
          <div className="pt-2 flex items-center gap-5">
            <Link
              to="/menu"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D98E2A] to-[#F3B748] hover:from-[#C47B1E] hover:to-[#E5A737] text-[#1C120C] font-bold text-base shadow-lg hover:shadow-[0_8px_25px_rgba(243,183,72,0.4)] transition-all duration-200 flex items-center gap-2 group transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/menu?filter=all"
              className="px-8 py-4 rounded-full bg-black/35 hover:bg-white/10 text-white hover:text-[#F3B748] border border-white/80 hover:border-[#F3B748] font-semibold text-base shadow-sm backdrop-blur-xs transition-all duration-200 flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Order Now</span>
              <ShoppingCart className="w-4 h-4 text-[#F3B748]" />
            </Link>
          </div>

        </div>
      </div>

      {/* ============================================================= */}
      {/* MOBILE & TABLET DEDICATED CLEAN UI/UX (Screens < 1024px)       */}
      {/* ============================================================= */}
      <div className="block lg:hidden relative z-10 px-4 sm:px-6 w-full py-4 space-y-6">
        
        {/* Top Typography & Heading */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#D98E2A]"></span>
            <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-[#E5A93C]">
              {brand.founderNameEnglish}
            </span>
            <span className="w-8 h-[1.5px] bg-[#D98E2A] sm:hidden"></span>
          </div>

          <h1 className="font-['Rozha_One'] text-3xl sm:text-4xl text-white leading-tight tracking-tight">
            घरगुती चवीचा{' '}
            <span className="text-[#F3B748] inline-flex items-center gap-1.5 drop-shadow-[0_2px_10px_rgba(243,183,72,0.35)]">
              <span>अस्सल अनुभव</span>
              <span className="text-2xl sm:text-3xl text-[#F3B748] font-normal">♡</span>
            </span>
          </h1>

          {/* Underline Swoosh */}
          <div className="flex justify-center sm:justify-start">
            <svg
              className="w-48 sm:w-56 h-3 text-[#F3B748]/85 drop-shadow-sm"
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

          <p className="font-['Noto_Sans_Devanagari'] text-sm sm:text-base text-[#FAF0DB]/90 font-medium">
            प्रेमाने बनवलेले घरगुती पदार्थ, आता तुमच्या जवळ.
          </p>
        </div>

        {/* DEDICATED VISUAL SHOWCASE: HEMLATA TAI & HER SIGNATURE DISHES */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3B748]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] aspect-[16/11] bg-[#1E110A] group">
          {/* Focused clearly on Tai & the thali dishes */}
          <img
            src="/images/hero-clean-bg.jpg"
            alt="हेमलता देसले - घरगुती स्वाद"
            className="w-full h-full object-cover object-[73%_25%]"
            loading="eager"
          />

          {/* Subtle soft edge gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none"></div>

          {/* Top Floating Badge */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <div className="bg-black/60 backdrop-blur-md border border-[#F3B748]/50 text-[#F3B748] px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3 text-[#F3B748]" />
              <span>१००% अस्सल घरगुती चव</span>
            </div>
          </div>

          {/* Bottom Founder Identity Pill */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between bg-[#140C07]/80 backdrop-blur-md border border-[#F3B748]/30 rounded-xl px-3 py-2 shadow-lg">
            <div>
              <p className="font-['Rozha_One'] text-white text-xs sm:text-sm leading-tight">
                हेमलता देसले
              </p>
              <p className="text-[10px] text-[#F3B748] font-sans font-medium">
                Founder & Master Chef
              </p>
            </div>
            <span className="text-[10px] font-marathi text-[#FAF0DB]/90 bg-[#F3B748]/15 border border-[#F3B748]/30 px-2 py-0.5 rounded-full">
              पारंपरिक स्वाद
            </span>
          </div>
        </div>

        {/* CTA Buttons for Mobile */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <Link
            to="/menu"
            className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#D98E2A] to-[#F3B748] active:from-[#C47B1E] active:to-[#E5A737] text-[#1C120C] font-bold text-sm shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-98"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/menu?filter=all"
            className="w-full py-3 px-4 rounded-full bg-[#1C120C]/90 active:bg-white/10 text-white border border-[#F3B748]/70 font-semibold text-sm shadow-sm backdrop-blur-xs flex items-center justify-center gap-1.5 transition-transform active:scale-98"
          >
            <span>Order Now</span>
            <ShoppingCart className="w-4 h-4 text-[#F3B748]" />
          </Link>
        </div>

      </div>

      {/* ============================================================= */}
      {/* BOTTOM TRUST FEATURES BAR: 4 Badges & Follow Us               */}
      {/* ============================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-4 border-t border-[#F3B748]/25 pt-4 sm:pt-6">
          
          {/* 4 Circular Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 lg:gap-12 w-full md:w-auto">
            {trustFeatures.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center sm:flex-col sm:justify-center gap-2.5 sm:gap-0 p-2 sm:p-0 rounded-xl bg-[#1C120C]/40 sm:bg-transparent border border-[#F3B748]/15 sm:border-none text-left sm:text-center group cursor-default"
              >
                {/* Circular Gold Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#F3B748]/60 bg-[#1C120C]/80 backdrop-blur-xs flex items-center justify-center sm:mb-2 shadow-xs shrink-0 group-hover:border-[#F3B748] group-hover:scale-105 transition-all duration-200">
                  {item.icon}
                </div>
                {/* Marathi Label */}
                <span className="font-['Noto_Sans_Devanagari'] text-xs sm:text-sm font-semibold text-[#FAF0DB] leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Follow Us with Instagram & WhatsApp */}
          <div className="flex items-center justify-between sm:justify-end gap-3.5 w-full md:w-auto self-center md:self-end pb-1 pt-2 sm:pt-0 border-t border-white/5 sm:border-none">
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
