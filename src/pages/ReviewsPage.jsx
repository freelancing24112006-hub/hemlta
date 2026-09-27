import React, { useState } from 'react';
import { Star, MessageSquareHeart, Plus, Quote } from 'lucide-react';
import { initialReviews, reviewSummary } from '../data/reviewsData';
import { useToast } from '../context/ToastContext';
import Modal from '../components/common/Modal';

export default function ReviewsPage() {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();

  // Form State
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    dish: '',
    comment: '',
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      addToast('कृपया नाव आणि तुमचा अनुभव लिहा.', 'error');
      return;
    }

    const created = {
      id: `rev-${Date.now()}`,
      customerName: newReview.name,
      location: newReview.location || 'नाशिक',
      rating: Number(newReview.rating),
      date: 'आत्ताच',
      dishReviewed: newReview.dish || 'घरगुती थाळी',
      reviewMarathi: newReview.comment,
      reviewEnglish: '',
      isVerifiedOrder: true,
    };

    setReviewsList([created, ...reviewsList]);
    setIsModalOpen(false);
    setNewReview({ name: '', location: '', rating: 5, dish: '', comment: '' });
    addToast('तुमची गोड प्रतिक्रिया नोंदवली गेली! धन्यवाद! ❤️', 'success', 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      
      {/* Header */}
      <section className="bg-white border-b border-[#EFE8DD] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Customer Feedback
              </span>
            </div>
            <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-[#2C1E16] leading-tight">
              ग्राहकांच्या प्रतिक्रिया
            </h1>
            <p className="text-sm sm:text-base text-[#6B5545] font-marathi">
              आमच्या प्रत्येक पदार्थाला लाभलेली पसंती आणि ग्राहकांचे मनमोकळे अभिप्राय.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10">
        
        {/* Rating Summary Banner */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8DCB8] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#FAF0DB] border border-[#E8DCB8] flex flex-col items-center justify-center text-[#2C1E16] font-bold">
              <span className="text-2xl font-serif leading-none">{reviewSummary.averageRating}</span>
              <span className="text-[9px] uppercase tracking-wider text-[#8B5E14]">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C8822B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B5545] font-marathi mt-1">
                आधारित <strong>{reviewsList.length}</strong> समाधानी ग्राहकांचे अभिप्राय
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-[#B07A25] hover:bg-[#96651B] text-white font-bold text-xs sm:text-sm rounded-full shadow-2xs transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>तुमचा अभिप्राय नोंदवा (Leave Review)</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#E8DCB8] shadow-2xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C8822B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C7462] font-marathi">{rev.date}</span>
                </div>

                {rev.dishReviewed && (
                  <div className="inline-block bg-[#FAF0DB] text-[#8B5E14] text-[11px] font-semibold px-2 py-0.5 rounded-md font-marathi">
                    🍲 {rev.dishReviewed}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#3A2B20] font-marathi leading-relaxed italic">
                  "{rev.reviewMarathi}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between">
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

      </div>

      {/* Modal for adding review */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="तुमचा अभिप्राय नोंदवा"
        subtitle="घरगुती स्वाद – अनुभव कसा वाटला?"
      >
        <form onSubmit={handleAddReview} className="space-y-3 font-marathi">
          <div>
            <label className="block text-xs font-bold text-[#2C1E16] mb-1">
              तुमचे नाव *
            </label>
            <input
              type="text"
              required
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              placeholder="उदा. प्रियांका कुलकर्णी"
              className="w-full px-3.5 py-2 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#2C1E16] mb-1">
                परिसर / शहर
              </label>
              <input
                type="text"
                value={newReview.location}
                onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                placeholder="उदा. कॉलेज रोड, नाशिक"
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#2C1E16] mb-1">
                रेटिंग (Stars)
              </label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (५ - उत्कृष्ट)</option>
                <option value={4}>⭐⭐⭐⭐ (४ - खूप छान)</option>
                <option value={3}>⭐⭐⭐ (३ - ठीक)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C1E16] mb-1">
              कोणता पदार्थ ट्राय केला?
            </label>
            <input
              type="text"
              value={newReview.dish}
              onChange={(e) => setNewReview({ ...newReview, dish: e.target.value })}
              placeholder="उदा. पुरणपोळी थाळी / गावराण मटण रस्सा"
              className="w-full px-3.5 py-2 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C1E16] mb-1">
              तुमचा अनुभव व चव कशी वाटली? *
            </label>
            <textarea
              rows="3"
              required
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="घरगुती जेवणाबद्दल तुमचे मत लिहा..."
              className="w-full px-3.5 py-2 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
            ></textarea>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-xl text-xs"
            >
              रद्द करा
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow-2xs"
            >
              प्रतिक्रिया सबमिट करा
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
}
