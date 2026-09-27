import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { initialReviews, reviewSummary } from '../../data/reviewsData';

export default function ReviewsSection() {
  // Top 3 sample reviews for home page showcase
  const featuredReviews = initialReviews.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Customer Testimonials
              </span>
            </div>
            <h2 className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#2C1E16]">
              ग्राहकांच्या प्रतिक्रिया
            </h2>
            <p className="text-sm text-[#6B5545] font-marathi mt-1 max-w-xl">
              आमच्या प्रत्येक पदार्थाला मिळालेला ग्राहकांचा प्रतिसाद आणि समाधान.
            </p>
          </div>

          {/* Clean Rating Badge */}
          <div className="bg-[#FAF7F2] border border-[#E8DCB8] rounded-xl p-3.5 flex items-center gap-3.5 shrink-0 self-start md:self-auto">
            <div className="w-10 h-10 rounded-lg bg-[#B07A25] text-white flex flex-col items-center justify-center font-bold text-sm leading-tight">
              <span>{reviewSummary.averageRating}</span>
              <span className="text-[8px] opacity-80">/ 5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C8822B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#6B5545] font-sans mt-0.5">
                आधारित <strong>{reviewSummary.totalReviewsCount}+</strong> समाधानी ग्राहक
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#E8DCB8] hover:border-[#B07A25] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C8822B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C7462] font-marathi">{rev.date}</span>
                </div>

                {/* Dish Tag */}
                {rev.dishReviewed && (
                  <div className="inline-block bg-[#FAF0DB] text-[#8B5E14] text-[11px] font-semibold px-2 py-0.5 rounded-md font-marathi">
                    {rev.dishReviewed}
                  </div>
                )}

                {/* Marathi Review Body */}
                <p className="text-xs sm:text-sm text-[#3A2B20] font-marathi leading-relaxed italic">
                  "{rev.reviewMarathi}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-[#EFE8DD] flex items-center justify-between">
                <div>
                  <h4 className="font-['Rozha_One'] text-base text-[#2C1E16]">
                    {rev.customerName}
                  </h4>
                  <p className="text-xs text-[#8C7462] font-marathi">{rev.location}</p>
                </div>

                {rev.isVerifiedOrder && (
                  <span className="text-[10px] text-[#3D6B52] font-semibold bg-[#E7F3EC] px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Link */}
        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#B07A25] hover:text-[#96651B] transition-colors font-sans"
          >
            <span>सर्व प्रतिक्रिया वाचा किंवा अभिप्राय द्या (View All Reviews)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
