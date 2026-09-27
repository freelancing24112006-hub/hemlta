import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import brand from '../config/brand';
import FounderImageSlot from '../components/common/FounderImageSlot';

export default function AboutPage() {
  const principles = [
    {
      title: "स्वतः घरी कुटलेले मसाले",
      desc: "धने, जिरे, लवंग, दालचिनी आणि काळा मसाला घरीच खमंग भाजून पारंपरिक पद्धतीने तयार केला जातो.",
      icon: Sparkles,
    },
    {
      title: "दररोज ताजी तयारी",
      desc: "शिल्लक अन्न न ठेवता, प्रत्येक ऑर्डरसाठी लागणारे जेवण त्याच दिवशी ताजे शिजवले जाते.",
      icon: Leaf,
    },
    {
      title: "घरगुती स्वच्छता",
      desc: "आपल्या स्वतःच्या घरासारखीच भांडी, हात आणि स्वयंपाकघराची अत्यंत सुरक्षित स्वच्छता.",
      icon: ShieldCheck,
    },
    {
      title: "मायेची आपुलकी",
      desc: "आईच्या हातच्या सात्विक जेवणाची गोडी आणि प्रत्येक घासात ग्राहकाला मिळणारे तृप्त समाधान.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-20">
      
      {/* Editorial Header */}
      <section className="bg-white border-b border-[#EFE8DD] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Our Story & Kitchen
              </span>
            </div>
            <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-[#2C1E16] leading-tight">
              आमच्या स्वयंपाकघराची गोष्ट
            </h1>
            <p className="text-sm sm:text-base text-[#6B5545] font-marathi">
              {brand.descriptionMarathi}
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Authentic Homemade Tradition
              </span>
            </div>

            <h2 className="font-['Rozha_One'] text-2xl sm:text-4xl text-[#2C1E16] leading-tight">
              घरच्या चवीतला साधेपणा आणि अस्सल आपुलकी
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#523E30] font-marathi leading-relaxed">
              <p>
                <strong>"{brand.nameMarathi}"</strong> ची संकल्पना एका साध्या विचारातून जन्माला आली — प्रत्येकाला बाहेर हॉटेलमध्ये जेवताना घरच्या जेवणाची आठवण येते. पोटाला त्रास न देणारे, पचायला हलके आणि मन तृप्त करणारे जेवण प्रत्येकाला मिळायला हवे.
              </p>
              <p>
                सौ. हेमलता देसले यांच्या देखरेखीखाली प्रत्येक पदार्थात पारंपरिक चवीचे आणि स्वयंपाकाचे नियम पाळले जातात. काळा मसाला असो, पुरणपोळीचे मऊ पुरण असो वा झणझणीत रस्सा — सर्व साहित्य स्वतः घरी कुटून व स्वच्छ करून वापरले जाते.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs sm:text-sm font-bold rounded-full shadow-2xs transition-colors"
              >
                <span>आजचा मेनू पहा (Explore Menu)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Replaceable Founder Slot */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto">
              <div className="rounded-2xl overflow-hidden border border-[#E8DCB8] bg-white aspect-[4/5] shadow-xs">
                <FounderImageSlot
                  className="w-full h-full object-cover"
                  alt={brand.founderNameMarathi}
                />
              </div>

              <div className="mt-3 text-center bg-white border border-[#E8DCB8] rounded-xl p-3 shadow-2xs">
                <p className="font-['Rozha_One'] text-base text-[#2C1E16]">
                  {brand.founderNameMarathi}
                </p>
                <p className="text-[11px] uppercase font-sans tracking-wider text-[#8B5E14] font-semibold">
                  {brand.nameMarathi} Kitchen
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Preparation (Clean Light Cards) */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#2C1E16]">
              आमची स्वयंपाक घरातील तत्त्वे
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5545] font-marathi">
              शुद्धता, स्वच्छता आणि पारंपरिक पद्धतीचे काटेकोर पालन.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E8DCB8] shadow-2xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0DB] border border-[#E8DCB8] flex items-center justify-center text-[#8B5E14]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-['Rozha_One'] text-lg text-[#2C1E16]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#523E30] font-marathi leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
}
