import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { VegBadge } from './Badge';

export default function ProductCard({ product, onQuickView }) {
  const { cart, addToCart, updateQuantity } = useCart();
  const [imgError, setImgError] = useState(false);

  // Check if item is already in cart
  const cartItem = cart.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    updateQuantity(product.id, quantityInCart + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    updateQuantity(product.id, quantityInCart - 1);
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(product)}
      className={`group bg-white rounded-2xl overflow-hidden border border-[#E8DCB8] hover:border-[#B07A25] shadow-2xs hover:shadow-[0_18px_36px_-8px_rgba(44,30,22,0.14)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer ${
        !product.isAvailable ? 'opacity-70' : ''
      }`}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80' : product.image}
          alt={product.nameMarathi}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
          <VegBadge isVeg={product.isVeg} />
          {product.isBestseller && (
            <span className="bg-[#FAF0DB] text-[#8B5E14] border border-[#E8DCB8] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
              खास
            </span>
          )}
        </div>

        {/* Out of Stock notice */}
        {!product.isAvailable && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex items-center justify-center z-20">
            <span className="bg-white text-[#8B2516] font-bold text-xs uppercase px-3 py-1 rounded-md shadow-sm font-marathi">
              आज संपले (Out of Stock)
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Dish Name */}
          <h3 className="font-['Rozha_One'] text-lg text-[#2C1E16] group-hover:text-[#B07A25] transition-colors leading-snug">
            {product.nameMarathi}
          </h3>

          {/* English Subtitle */}
          <p className="text-xs text-[#8C7462] font-sans font-medium mt-0.5">
            {product.nameEnglish}
          </p>

          {/* Short Description */}
          <p className="text-xs text-[#523E30] line-clamp-2 mt-2 font-marathi leading-relaxed">
            {product.descriptionMarathi}
          </p>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase text-[#8C7462] block font-sans tracking-wider">
              किंमत
            </span>
            <span className="font-serif text-xl font-bold text-[#2C1E16]">
              ₹{product.price}
            </span>
          </div>

          {/* Add / Quantity Buttons */}
          {product.isAvailable ? (
            quantityInCart === 0 ? (
              <button
                onClick={handleAdd}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </button>
            ) : (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center bg-[#2C1E16] text-white rounded-xl p-1 shadow-2xs"
              >
                <button
                  onClick={handleDecrement}
                  className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-7 text-center text-xs font-bold">
                  {quantityInCart}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors text-[#F7D78A]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          ) : (
            <span className="px-3 py-1.5 bg-[#FAF7F2] text-[#8C7462] text-xs rounded-lg border border-[#EFE8DD]">
              अनुपलब्ध
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
