import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import brand from '../config/brand';
import { VegBadge } from '../components/common/Badge';

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    deliveryFee,
    packagingFee,
    grandTotal,
    freeDeliveryRemaining,
  } = useCart();

  const { generateWhatsAppOrderUrl } = useOrders();
  const navigate = useNavigate();

  const handleWhatsAppDirectOrder = () => {
    const tempOrder = {
      id: "QUICK",
      customerName: "थेट ग्राहक (Direct Inquiry)",
      phone: "Not Provided",
      address: "डिलिव्हरी पत्ता चॅटवर देणार आहे",
      landmark: "",
      city: "Nashik",
      pincode: "",
      items: cart,
      subtotal: cartSubtotal,
      packagingFee: packagingFee,
      deliveryFee: deliveryFee,
      grandTotal: grandTotal,
      paymentMethod: "UPI / Cash on Delivery",
      specialInstructions: "WhatsApp द्वारे थेट ऑर्डर",
    };
    window.open(generateWhatsAppOrderUrl(tempOrder), '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] bg-[#FAF7F2] py-16 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#FAF0DB] border border-[#E8DCB8] text-[#8B5E14] flex items-center justify-center mx-auto shadow-inner text-3xl">
            🍲
          </div>
          <div className="space-y-2">
            <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#2C1E16]">
              तुमचे कार्ट रिकामे आहे
            </h2>
            <p className="text-sm text-[#6B5545] font-marathi">
              तुम्ही अजून कोणताही चविष्ट घरगुती पदार्थ निवडलेला नाही. आजच्या ताज्या मेनूमधून काहीतरी खास निवडा!
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B07A25] hover:bg-[#96651B] text-white font-bold text-sm rounded-full shadow-2xs transition-colors"
          >
            <span>मेनू पहा (Explore Menu)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const freeDeliveryPercent = Math.min(
    100,
    Math.round((cartSubtotal / brand.ordering.freeDeliveryAbove) * 100)
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-6 space-y-1.5">
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-xs text-[#8B5E14] hover:text-[#B07A25] font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>मेनूवर परत जा (Back to Menu)</span>
          </Link>
          <h1 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#2C1E16]">
            तुमचे कार्ट <span className="text-[#B07A25]">({cartCount} पदार्थ)</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Free Delivery Bar */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8DCB8] shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs font-marathi">
                <span className="flex items-center gap-1.5 font-bold text-[#2C1E16]">
                  <Truck className="w-4 h-4 text-[#B07A25]" />
                  {freeDeliveryRemaining > 0 ? (
                    <>
                      मोफत डिलिव्हरीसाठी अजून <strong className="text-[#C8822B]">₹{freeDeliveryRemaining}</strong> चे पदार्थ जोडा!
                    </>
                  ) : (
                    <span className="text-[#3D6B52] font-bold">
                      🎉 अभिनंदन! तुम्हाला मोफत होम डिलिव्हरी मिळाली आहे!
                    </span>
                  )}
                </span>
                <span className="text-[#8C7462] font-sans font-semibold">
                  {freeDeliveryPercent}%
                </span>
              </div>
              <div className="w-full bg-[#FAF0DB] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#B07A25] h-full rounded-full transition-all duration-300"
                  style={{ width: `${freeDeliveryPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Item Rows */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8DCB8] shadow-2xs divide-y divide-[#EFE8DD]">
              {cart.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Image & Title */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.image}
                      alt={item.nameMarathi}
                      className="w-16 h-16 rounded-xl object-cover border border-[#E8DCB8] shrink-0 bg-[#FAF7F2]"
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <VegBadge isVeg={item.isVeg} />
                        <h3 className="font-['Rozha_One'] text-base text-[#2C1E16] leading-tight">
                          {item.nameMarathi}
                        </h3>
                      </div>
                      <p className="text-xs text-[#8C7462] font-sans">
                        {item.nameEnglish} {item.portion ? `• ${item.portion}` : ''}
                      </p>
                      <p className="font-serif text-sm font-bold text-[#2C1E16]">
                        ₹{item.price}{" "}
                        <span className="text-xs font-normal text-[#8C7462]">प्रत्येकी</span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity controls & Subtotal */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    
                    {/* Stepper */}
                    <div className="flex items-center bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#2C1E16] hover:bg-[#FAF0DB] rounded-lg transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-[#2C1E16]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#2C1E16] hover:bg-[#FAF0DB] rounded-lg transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Total Price for this item */}
                    <div className="text-right min-w-[65px]">
                      <span className="font-serif text-base font-bold text-[#2C1E16]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-[#8C7462] hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                      title="काढून टाका (Remove)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                  </div>

                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-xs text-red-600 hover:underline font-marathi font-medium cursor-pointer"
              >
                संपूर्ण कार्ट रिकामे करा (Clear Cart)
              </button>
            </div>

          </div>

          {/* Right Column: Bill Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8DCB8] shadow-2xs space-y-4">
              
              <h3 className="font-['Rozha_One'] text-lg text-[#2C1E16] pb-3 border-b border-[#EFE8DD]">
                बिल तपशील (Bill Summary)
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#523E30] font-marathi">
                <div className="flex items-center justify-between">
                  <span>पदार्थ मूल्य (Subtotal)</span>
                  <span className="font-serif font-bold text-[#2C1E16]">₹{cartSubtotal}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>पॅकेजिंग शुल्क (Packaging)</span>
                  <span className="font-serif font-bold text-[#2C1E16]">₹{packagingFee}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>होम डिलिव्हरी शुल्क</span>
                  <span className="font-serif font-bold">
                    {deliveryFee === 0 ? (
                      <span className="text-[#3D6B52] font-bold">मोफत (FREE)</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between text-base font-bold text-[#2C1E16]">
                  <span className="font-marathi">एकूण रक्कम (Total)</span>
                  <span className="font-serif text-2xl text-[#B07A25]">₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout Actions */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-3.5 bg-[#B07A25] hover:bg-[#96651B] text-white font-bold text-sm rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>चेकआउट करा (Checkout)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppDirectOrder}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp वर थेट ऑर्डर करा</span>
                </button>
              </div>

              {/* Notice */}
              <div className="pt-2 border-t border-gray-100 flex items-start gap-2 text-xs text-[#8C7462] font-marathi">
                <ShieldCheck className="w-4 h-4 text-[#3D6B52] shrink-0 mt-0.5" />
                <span>
                  १००% शुद्ध घरगुती पद्धत. ताजे आणि सुरक्षित अन्न पॅकिंग.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
