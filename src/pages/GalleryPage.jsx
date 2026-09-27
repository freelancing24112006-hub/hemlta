import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Eye, ArrowUpRight, ArrowRight, Camera, ZoomIn } from 'lucide-react';
import { Instagram } from '../components/common/SocialIcons';
import { galleryItems, instagramReels } from '../data/galleryData';
import brand from '../config/brand';
import Modal from '../components/common/Modal';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeReel, setActiveReel] = useState(null);

  const categories = [
    { id: 'all', label: 'सर्व फोटो (All)' },
    { id: 'sweets', label: 'पुरणपोळी व मोदक' },
    { id: 'nonveg', label: 'मांसाहारी थाळी' },
    { id: 'veg', label: 'शाकाहारी' },
    { id: 'snacks', label: 'स्नॅक्स' },
  ];

  const filteredImages = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      
      {/* Header */}
      <section className="bg-white border-b border-[#EFE8DD] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Visual Gallery & Reels
              </span>
            </div>
            <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-[#2C1E16] leading-tight">
              खाद्य गॅलरी आणि किचन रील्स
            </h1>
            <p className="text-sm sm:text-base text-[#6B5545] font-marathi">
              आमच्या स्वयंपाकघरातील ताजी तयारी, अस्सल पदार्थांची मांडणी आणि Instagram व्हिडिओज.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-16">
        
        {/* Photo Gallery Section */}
        <div className="space-y-8">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#B07A25] text-white shadow-2xs'
                    : 'bg-white text-[#523E30] border border-[#E8DCB8] hover:bg-[#FAF0DB]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCB8] hover:border-[#B07A25] shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FFFDF9] text-[#8B5E14] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#E8DCB8] shadow-2xs font-marathi">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-['Rozha_One'] text-lg text-[#2C1E16] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B5545] font-marathi line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Instagram Reels Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCB8] shadow-2xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#8B5E14] font-bold uppercase tracking-wider mb-1">
                <Instagram className="w-4 h-4 text-[#C8822B]" />
                <span>Video Stories</span>
              </div>
              <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#2C1E16]">
                किचन रील्स (@{brand.contact.instagramHandle})
              </h2>
            </div>

            <a
              href={brand.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF0DB] hover:bg-[#F3E5C2] text-[#8B5E14] border border-[#E8DCB8] text-xs font-bold transition-colors shrink-0 self-start sm:self-auto"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {instagramReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveReel(reel)}
                className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-[#2C1E16] border border-[#E8DCB8] hover:border-[#B07A25] shadow-2xs cursor-pointer"
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-xs border border-white/50 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#B07A25] transition-all">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 text-white space-y-1">
                  <p className="text-xs font-marathi font-bold line-clamp-2 leading-snug">
                    {reel.title}
                  </p>
                  <p className="text-[10px] text-white/70 font-sans">
                    {reel.views} views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for Full Image View */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title || "Dish View"}
        subtitle={selectedImage?.categoryLabel}
      >
        {selectedImage && (
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-[#523E30] font-marathi">
              {selectedImage.description}
            </p>
            <div className="pt-2 flex justify-end">
              <Link
                to="/menu"
                className="px-5 py-2.5 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow-2xs"
              >
                मेनूमध्ये हा पदार्थ शोधा
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal for Reel View */}
      <Modal
        isOpen={!!activeReel}
        onClose={() => setActiveReel(null)}
        title={activeReel?.title || "Reel"}
        subtitle={`@${brand.contact.instagramHandle}`}
      >
        {activeReel && (
          <div className="space-y-4 text-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/14] max-w-xs mx-auto bg-black">
              <img
                src={activeReel.thumbnail}
                alt={activeReel.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-white space-y-3">
                <a
                  href={brand.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram वर पहा</span>
                </a>
              </div>
            </div>
            <p className="text-xs font-marathi text-[#523E30]">{activeReel.title}</p>
          </div>
        )}
      </Modal>

    </div>
  );
}
