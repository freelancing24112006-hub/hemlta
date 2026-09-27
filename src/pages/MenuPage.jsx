import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ShoppingBag, X, Sparkles, Filter, ArrowUpDown } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/common/ProductCard';
import Modal from '../components/common/Modal';
import { VegBadge, SpiceLevelBadge } from '../components/common/Badge';

export default function MenuPage() {
  const { products } = useProducts();
  const { cart, cartCount, cartSubtotal, addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();

  // Categories specified in requirements: All, शाकाहारी, मांसाहारी, घरगुती स्पेशल
  const menuCategories = [
    { id: "all", label: "All (सर्व)", marathi: "सर्व पदार्थ" },
    { id: "veg", label: "शाकाहारी", marathi: "शाकाहारी" },
    { id: "non-veg", label: "मांसाहारी", marathi: "मांसाहारी" },
    { id: "specials", label: "घरगुती स्पेशल", marathi: "घरगुती स्पेशल" },
  ];

  // State
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQty, setModalQty] = useState(1);

  // Sync with URL query params
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    const urlFilter = searchParams.get('filter');
    if (urlSearch) setSearchQuery(urlSearch);
    if (urlFilter && ['all', 'veg', 'non-veg', 'specials'].includes(urlFilter)) {
      setActiveCategory(urlFilter);
    }
  }, [searchParams]);

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        // Category Filter
        if (activeCategory === 'veg') {
          if (!item.isVeg) return false;
        } else if (activeCategory === 'non-veg') {
          if (item.isVeg) return false;
        } else if (activeCategory === 'specials') {
          if (!item.isBestseller && item.category !== 'specials' && !item.subcategories?.includes('specials')) {
            return false;
          }
        }

        // Search Query Filter (Marathi & English)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchMarathi = item.nameMarathi?.toLowerCase().includes(q);
          const matchEnglish = item.nameEnglish?.toLowerCase().includes(q);
          const matchDesc = item.descriptionMarathi?.toLowerCase().includes(q) || item.descriptionEnglish?.toLowerCase().includes(q);
          const matchTag = item.tags?.some((t) => t.toLowerCase().includes(q));
          if (!matchMarathi && !matchEnglish && !matchDesc && !matchTag) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'featured') {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
        }
        return 0;
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      
      {/* Clean Light Editorial Header Banner */}
      <section className="bg-white border-b border-[#EFE8DD] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Authentic Homemade Menu
              </span>
            </div>
            <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-[#2C1E16] leading-tight">
              आमचे पारंपरिक मेनू कार्ड
            </h1>
            <p className="text-sm sm:text-base text-[#6B5545] font-marathi">
              शुद्ध साजूक तूप, घरी कुटलेले खमंग मसाले आणि प्रेमाने बनवलेले स्वादिष्ट घरगुती पदार्थ.
            </p>
          </div>
        </div>
      </section>

      {/* Filter, Search & Category Navigation Bar */}
      <div className="sticky top-[61px] z-30 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EFE8DD] shadow-2xs py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            
            {/* Category Filter Pills (All, शाकाहारी, मांसाहारी, घरगुती स्पेशल) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {menuCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#B07A25] text-white shadow-2xs'
                        : 'bg-white text-[#523E30] hover:bg-[#FAF0DB] border border-[#E8DCB8]'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7462] w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="पदार्थ शोधा (Search)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-white border border-[#DCD3C4] rounded-full text-xs sm:text-sm text-[#2C1E16] placeholder-[#8C7462]/70 focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8C7462] hover:text-[#2C1E16]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Selector */}
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-white border border-[#DCD3C4] rounded-full text-xs font-semibold text-[#523E30] focus:outline-none focus:ring-1 focus:ring-[#B07A25] cursor-pointer"
                >
                  <option value="featured">खास पदार्थ (Featured)</option>
                  <option value="price-low">किंमत: कमी ते जास्त</option>
                  <option value="price-high">किंमत: जास्त ते कमी</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-[#6B5545] font-marathi">
          <span>
            <strong>{filteredProducts.length}</strong> पदार्थ उपलब्ध
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="text-[#B07A25] hover:underline font-bold"
            >
              सर्व पदार्थ पहा (Reset filter)
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E8DCB8] max-w-md mx-auto space-y-4 shadow-2xs">
            <div className="text-4xl">🍲</div>
            <h3 className="font-['Rozha_One'] text-xl text-[#2C1E16]">
              कोणताही पदार्थ सापडला नाही
            </h3>
            <p className="text-xs text-[#6B5545] font-marathi">
              कृपया दुसरा शब्द शोधून पहा किंवा फिल्टर रीसेट करा.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2 bg-[#B07A25] text-white text-xs font-bold rounded-xl"
            >
              सर्व पदार्थ दाखवा
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}

      </div>

      {/* Quick View Dish Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.nameMarathi || "Dish Details"}
        subtitle={selectedProduct?.nameEnglish}
      >
        {selectedProduct && (
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF7F2] border border-[#E8DCB8]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.nameMarathi}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <VegBadge isVeg={selectedProduct.isVeg} />
                <SpiceLevelBadge level={selectedProduct.spiceLevel} />
              </div>
              <span className="font-serif text-2xl font-bold text-[#2C1E16]">
                ₹{selectedProduct.price}
              </span>
            </div>

            <p className="text-sm text-[#523E30] font-marathi leading-relaxed">
              {selectedProduct.descriptionMarathi}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-[#EFE8DD]">
              <span className="text-xs text-[#6B5545] font-marathi">
                तयारी वेळ: {selectedProduct.prepTime}
              </span>

              <button
                onClick={() => {
                  addToCart(selectedProduct, modalQty);
                  setSelectedProduct(null);
                }}
                className="px-6 py-2.5 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow-2xs transition-colors"
              >
                कार्टमध्ये जोडा (₹{selectedProduct.price * modalQty})
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Floating Bottom Cart Sticky Bar when cart has items */}
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#2C1E16] text-white rounded-2xl p-4 shadow-xl border border-[#E8DCB8]/20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B07A25] text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#FAF0DB]/80 font-sans">
                  {cartCount} पदार्थ कार्टमध्ये
                </p>
                <p className="text-base font-bold font-serif">
                  एकूण: ₹{cartSubtotal}
                </p>
              </div>
            </div>

            <Link
              to="/cart"
              className="px-5 py-2.5 bg-[#FAF0DB] hover:bg-white text-[#2C1E16] text-xs font-bold rounded-xl shadow-sm transition-colors whitespace-nowrap"
            >
              कार्ट पहा (View Cart) →
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
