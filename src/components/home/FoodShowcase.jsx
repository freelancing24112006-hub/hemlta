import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

export default function FoodShowcase() {
  const showcaseItems = [
    {
      title: "पारंपरिक पुरणपोळी थाळी",
      subtitle: "साजूक तूप, खमंग आमटी व कुरडई",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80",
      tag: "पारंपरिक थाळी",
    },
    {
      title: "अस्सल गावराण मटण रस्सा",
      subtitle: "काळ्या मसाल्यातील मटण व भाकरी",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
      tag: "झणझणीत रस्सा",
    },
    {
      title: "उकडीचे मोदक",
      subtitle: "ओला नारळ व सेंद्रिय गुळाचे सारण",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      tag: "सणासुदीचा गोडवा",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#B07A25]"></span>
            <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
              Culinary Gallery
            </span>
            <span className="w-5 h-[2px] bg-[#B07A25]"></span>
          </div>
          <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16]">
            पारंपरिक खाद्यसंस्कृतीची झलक
          </h2>
          <p className="text-sm text-[#6B5545] font-marathi">
            प्रत्येक पदार्थात अनुभवा अस्सल महाराष्ट्रीयन चव आणि मायेचा गोडवा.
          </p>
        </div>

        {/* 3-Column Editorial Presentation with 3D Depth Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8DCB8] hover:border-[#B07A25] shadow-2xs hover:shadow-[0_20px_40px_-10px_rgba(44,30,22,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#FFFDF9]/95 backdrop-blur-xs text-[#8B5E14] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#E8DCB8] shadow-2xs font-marathi">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-['Rozha_One'] text-xl text-[#2C1E16] group-hover:text-[#B07A25] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5545] font-marathi">
                    {item.subtitle}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EFE8DD]">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B07A25] hover:text-[#96651B] transition-colors"
                  >
                    <span>ऑर्डर करा (Explore)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Gallery */}
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF0DB] text-[#2C1E16] border border-[#DCD3C4] hover:border-[#B07A25] text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4 text-[#B07A25]" />
            <span>संपूर्ण खाद्य गॅलरी व रील्स पहा (View Gallery)</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
