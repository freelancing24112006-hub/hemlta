import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import ProductCard from '../common/ProductCard';

export default function SignatureSpecials() {
  const { products } = useProducts();

  // Show 4-6 featured signature items
  const specials = products
    .filter((item) => item.isBestseller || item.category === 'specials')
    .slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Today's Specials
              </span>
            </div>
            <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16]">
              आजचे खास पदार्थ
            </h2>
            <p className="text-sm text-[#6B5545] font-marathi mt-1.5 max-w-xl">
              दररोज ताजे तयार केलेले आणि अस्सल घरगुती चवीचे लोकप्रिय महाराष्ट्रीयन पदार्थ.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF0DB] text-[#2C1E16] border border-[#DCD3C4] hover:border-[#B07A25] text-xs sm:text-sm font-semibold shadow-2xs transition-colors shrink-0 self-start md:self-auto"
          >
            <span>संपूर्ण मेनू पहा (View All)</span>
            <ArrowRight className="w-4 h-4 text-[#B07A25]" />
          </Link>
        </div>

        {/* 4 to 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
