import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight } from 'lucide-react';
import { Instagram } from '../common/SocialIcons';
import brand from '../../config/brand';
import FounderImageSlot from '../common/FounderImageSlot';

export default function FounderStory() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E8DCB8] shadow-2xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Replaceable Founder Slot */}
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="rounded-2xl overflow-hidden border border-[#E8DCB8] bg-white aspect-[4/5] shadow-xs">
                  <FounderImageSlot
                    className="w-full h-full object-cover"
                    alt={brand.founderNameMarathi}
                  />
                </div>

                {/* Founder Label Plaque */}
                <div className="mt-3 text-center bg-white border border-[#E8DCB8] rounded-xl p-3 shadow-2xs">
                  <p className="font-['Rozha_One'] text-lg text-[#2C1E16]">
                    {brand.founderNameMarathi}
                  </p>
                  <p className="text-xs uppercase font-sans tracking-widest text-[#8B5E14] font-bold mt-0.5">
                    {brand.nameMarathi}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Natural Narrative Story */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#B07A25]"></span>
                <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                  The Founder's Kitchen
                </span>
              </div>

              <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16] leading-tight">
                अस्सल घरगुती चवीची आपुलकी
              </h2>

              {/* Natural Quote */}
              <div className="relative pl-5 border-l-2 border-[#B07A25] text-base sm:text-lg text-[#3A2B20] font-marathi italic leading-relaxed">
                <Quote className="w-5 h-5 text-[#B07A25]/40 absolute -left-2.5 -top-2" />
                "अन्न हे केवळ पोट भरण्यापुरतं नसतं, तर ते खाणाऱ्याच्या मनाला समाधान आणि तृप्ती देणारं असावं. प्रत्येक घासात आईच्या हातच्या प्रेमाची जाणीव व्हावी, हाच माझा प्रामाणिक प्रयत्न असतो."
              </div>

              {/* Realistic story copy */}
              <div className="space-y-3 text-sm sm:text-base text-[#523E30] font-marathi leading-relaxed">
                <p>
                  पारंपरिक महाराष्ट्रीयन स्वयंपाकाची गोडी जपत, ताज्या साहित्यात आणि स्वच्छ वातावरणात बनवलेले पदार्थ थेट तुमच्या घरापर्यंत पोहोचवण्याचा हा छोटासा संकल्प आहे.
                </p>
                <p className="text-sm text-[#6B5545]">
                  तयार मसाल्यांचा किंवा प्रिझर्व्हेटिव्हचा वापर न करता, ऑर्डरनुसार गरमागरम आणि ताजे जेवण तयार केले जाते.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={brand.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF0DB] hover:bg-[#F3E5C2] text-[#8B5E14] border border-[#E8DCB8] text-xs sm:text-sm font-bold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C8822B]" />
                  <span>@{brand.contact.instagramHandle}</span>
                </a>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#B07A25] hover:text-[#96651B] font-bold font-sans"
                >
                  <span>अधिक जाणून घ्या (Read Story)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
