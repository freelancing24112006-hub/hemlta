import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import brand from '../../config/brand';

export default function BrandIntro() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Section: Left = food image, Right = brand intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Food Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DCB8] shadow-sm bg-[#FAF7F2] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80"
                  alt="Traditional Homemade Maharashtrian Cooking"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Minimal Clean Quality Tag */}
              <div className="absolute -bottom-4 right-4 bg-[#FFFDF9] border border-[#E8DCB8] p-3.5 rounded-xl shadow-xs max-w-[200px]">
                <p className="text-xs font-bold text-[#8B5E14] font-marathi">
                  घरगुती मसाले व साजूक तूप
                </p>
                <p className="text-[11px] text-[#6B5545] font-sans mt-0.5">
                  No artificial colors or preservatives
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Short Brand Introduction */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                About Gharguti Swad
              </span>
            </div>

            <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16] leading-tight">
              घरच्या चवीतला खासपणा
            </h2>

            <div className="space-y-4 text-[#523E30] font-marathi text-base leading-relaxed">
              <p>
                हॉटेलच्या कृत्रिम चवीपेक्षा वेगळं, घरच्या स्वयंपाकघरात तयार केलेलं सात्विक आणि चविष्ट जेवण प्रत्येकाला मिळावं, या विचारातून <strong>"{brand.nameMarathi}"</strong> ची सुरुवात झाली.
              </p>
              <p className="text-sm text-[#6B5545]">
                आमच्याकडे रोजच्या जेवणासाठी लागणारे मसाले घरीच खमंग भाजून आणि कुटून तयार केले जातात. भाज्या, डाळी आणि तेलाची निवड करताना दर्जा आणि स्वच्छतेची काटेकोर काळजी घेतली जाते.
              </p>
            </div>

            {/* Simple realistic benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "दररोज ताजे तयार केलेले जेवण",
                "स्वतः घरी कुटलेले अस्सल मसाले",
                "घरगुती पद्धतीची स्वच्छता",
                "कमी-जास्त तिखटाची वैयक्तिक सोय",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#E7F3EC] text-[#3D6B52] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-medium font-marathi text-[#2C1E16]">{item}</span>
                </div>
              ))}
            </div>

            {/* Link to About */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B07A25] hover:text-[#96651B] transition-colors font-sans"
              >
                <span>आमच्या स्वयंपाकाबद्दल अधिक जाणून घ्या (Read Story)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
