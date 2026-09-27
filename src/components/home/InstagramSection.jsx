import React, { useState } from 'react';
import { Play, ArrowUpRight, Volume2 } from 'lucide-react';
import { Instagram } from '../common/SocialIcons';
import brand from '../../config/brand';
import Modal from '../common/Modal';

export default function InstagramSection() {
  const [activeReel, setActiveReel] = useState(null);

  // Sample placeholder reels representing authentic kitchen preparation videos
  const placeholderReels = [
    {
      id: "reel-1",
      title: "गरमागरम पुरणपोळी व कटाची आमटी कशी बनते?",
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
      views: "12.4K",
      category: "पुरणपोळी स्पेशल"
    },
    {
      id: "reel-2",
      title: "अस्सल गावराण मटण रस्सा - पारंपरिक खान्देशी मसाला",
      duration: "0:52",
      thumbnail: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
      views: "18.1K",
      category: "गावराण रस्सा"
    },
    {
      id: "reel-3",
      title: "उकडीच्या मोदकांचे सारण आणि सुरेख पाकळ्यांची कला",
      duration: "0:38",
      thumbnail: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      views: "9.6K",
      category: "सणासुदीचा गोडवा"
    },
    {
      id: "reel-4",
      title: "चुलीवर भाजलेली बाजरी भाकरी आणि खमंग लसूण ठेचा",
      duration: "0:40",
      thumbnail: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
      views: "14.2K",
      category: "पिठलं भाकरी"
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Instagram Reels Showcase
              </span>
            </div>
            <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16]">
              किचनमधील रील्स व व्हिडिओ
            </h2>
            <p className="text-sm text-[#6B5545] font-marathi mt-1 max-w-xl">
              कसे बनतात आमचे अस्सल पदार्थ? ताज्या तयारीचे व्हिडिओ पाहण्यासाठी फॉलो करा.
            </p>
          </div>

          <a
            href={brand.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF0DB] text-[#2C1E16] border border-[#DCD3C4] hover:border-[#B07A25] text-xs sm:text-sm font-semibold shadow-2xs transition-colors shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#C8822B]" />
            <span>@{brand.contact.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8C7462]" />
          </a>
        </div>

        {/* 4-Column Reels Grid (9:16 Aspect Ratio) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {placeholderReels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-[#2C1E16] border border-[#E8DCB8] hover:border-[#B07A25] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {/* Thumbnail Image */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                loading="lazy"
              />

              {/* Natural Dark Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30"></div>

              {/* Top Reel Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-sans">
                  <Instagram className="w-3 h-3 text-[#F7D78A]" />
                  <span>Reel</span>
                </span>
                <span className="text-[10px] bg-black/50 px-1.5 py-0.5 rounded font-mono">
                  {reel.duration}
                </span>
              </div>

              {/* Center Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-xs border border-white/50 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#B07A25] transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 text-white space-y-1">
                <span className="text-[10px] uppercase font-sans text-[#F7D78A] font-semibold">
                  {reel.category}
                </span>
                <p className="text-xs font-marathi font-bold line-clamp-2 leading-snug text-[#FAF7F2]">
                  {reel.title}
                </p>
                <p className="text-[11px] text-white/70 font-sans pt-0.5">
                  {reel.views} views
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Reel Preview */}
        <Modal
          isOpen={!!activeReel}
          onClose={() => setActiveReel(null)}
          title={activeReel?.title || "Instagram Reel Preview"}
          subtitle={`@${brand.contact.instagramHandle}`}
        >
          {activeReel && (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[9/14] max-w-xs mx-auto bg-black shadow-lg">
                <img
                  src={activeReel.thumbnail}
                  alt={activeReel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 text-white space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#B07A25] flex items-center justify-center text-white shadow-md">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <p className="text-xs font-marathi">
                    Instagram वर संपूर्ण व्हिडिओ आणि आवाज प्ले करा:
                  </p>
                  <a
                    href={brand.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Watch on Instagram</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF7F2] border border-[#E8DCB8] p-4 rounded-xl text-xs text-[#2C1E16] font-marathi">
                <p className="font-bold">{activeReel.title}</p>
                <p className="text-[#6B5545] mt-0.5">@{brand.contact.instagramHandle} • {activeReel.views} views</p>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
