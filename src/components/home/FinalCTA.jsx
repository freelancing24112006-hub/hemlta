import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';
import brand from '../../config/brand';

export default function FinalCTA() {
  const whatsappMsg = `नमस्कार! मला घरगुती स्वाद मधून आजच्या जेवणासाठी ऑर्डर द्यायची आहे. कृपया मेनू आणि उपलब्धता सांगावी.`;
  const whatsappUrl = `https://wa.me/${brand.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="py-14 sm:py-20 bg-[#2C1E16] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3A2B20] border border-[#E8DCB8]/20 shadow-xs">
          <span className="text-xs font-sans tracking-widest text-[#FAF0DB] uppercase font-semibold">
            {brand.nameMarathi} • {brand.founderNameEnglish}
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] leading-tight max-w-2xl mx-auto">
          तुमच्या घरापर्यंत घरगुती चव ❤️
        </h2>

        {/* Marathi Subtitle */}
        <p className="text-base sm:text-lg text-[#EFE8DD]/90 font-marathi max-w-xl mx-auto leading-relaxed">
          आजच ऑर्डर करा आणि अनुभवा पारंपरिक महाराष्ट्रीयन मसाल्यांचा सुगंध आणि आईच्या हातची खरी माया.
        </p>

        {/* Clean Hours & Service Notice */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#FAF0DB]/80 font-marathi pt-1">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8822B]" />
            दुपारचे जेवण: {brand.hours.lunch}
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8822B]" />
            रात्रीचे जेवण: {brand.hours.dinner}
          </span>
        </div>

        {/* Action Buttons: Explore Menu & Order on WhatsApp with 3D elevation */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <Link
            to="/menu"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#B07A25] hover:bg-[#96651B] text-white font-bold text-sm rounded-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_28px_-6px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-full shadow-[0_10px_20px_-5px_rgba(37,211,102,0.35)] hover:shadow-[0_16px_28px_-6px_rgba(37,211,102,0.45)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Helpline */}
        <p className="text-xs text-[#EFE8DD]/70 font-sans pt-1">
          Direct Helpline:{" "}
          <a href={`tel:${brand.contact.whatsappNumber}`} className="text-[#FAF0DB] font-semibold hover:underline">
            {brand.contact.phone}
          </a>
        </p>

      </div>
    </section>
  );
}
