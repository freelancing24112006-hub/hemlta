import React from 'react';
import { Home, Leaf, ShieldCheck, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "घरगुती चव",
      subtitle: "Authentic Home Taste",
      description: "कोणत्याही कृत्रिम रंगांशिवाय किंवा प्रिझर्व्हेटिव्हशिवाय आईच्या हातच्या साध्या-सोप्या पारंपरिक पद्धतीने तयार केलेले जेवण.",
      icon: Home,
    },
    {
      title: "ताजे घटक",
      subtitle: "Fresh Ingredients",
      description: "बाजारातून आणलेल्या ताज्या भाज्या आणि स्वतः घरी भाजून कुटलेले अस्सल मसाले.",
      icon: Leaf,
    },
    {
      title: "स्वच्छ तयारी",
      subtitle: "Clean Preparation",
      description: "आपल्या स्वतःच्या घरासारखीच अत्यंत स्वच्छ, सुरक्षित आणि आटोपशीर स्वयंपाकघरातील तयारी.",
      icon: ShieldCheck,
    },
    {
      title: "प्रेमाने बनवलेले",
      subtitle: "Made with Love",
      description: "प्रत्येक घासात आईच्या मायेची गोडी आणि जेवल्यानंतर तृप्ती देणारा अस्सल अनुभव.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#B07A25]"></span>
            <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
              Why Choose Us
            </span>
            <span className="w-5 h-[2px] bg-[#B07A25]"></span>
          </div>
          <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16]">
            का निवडाल घरगुती स्वाद?
          </h2>
          <p className="text-sm text-[#6B5545] font-marathi">
            हॉटेलच्या जेवणापेक्षा वेगळे, आरोग्यदायी आणि पारंपरिक घरगुती जेवणाचा विश्वास.
          </p>
        </div>

        {/* Four Simple Benefits with Minimal Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#E8DCB8] hover:border-[#B07A25] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0DB] border border-[#E8DCB8] flex items-center justify-center text-[#8B5E14] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Benefit Title */}
                  <h3 className="font-['Rozha_One'] text-xl text-[#2C1E16] mb-1">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#8B5E14] mb-2.5">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#523E30] font-marathi leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
