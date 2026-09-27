import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, QrCode, Banknote, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';

export default function CheckoutPage() {
  const { cart, cartSubtotal, packagingFee, deliveryFee, grandTotal, clearCart } = useCart();
  const { placeOrder, generateWhatsAppOrderUrl } = useOrders();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    address: '',
    landmark: '',
    city: 'Nashik',
    pincode: '422005',
    timeSlot: 'तात्काळ (३०-४० मिनिटांत)',
    specialInstructions: '',
    paymentMethod: 'UPI', // 'UPI' or 'COD'
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, redirect to menu
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4 bg-[#FAF7F2]">
        <h2 className="font-['Rozha_One'] text-2xl text-[#2C1E16]">चेकआउट करण्यासाठी कार्टमध्ये पदार्थ असणे आवश्यक आहे</h2>
        <Link to="/menu" className="px-6 py-3 bg-[#B07A25] text-white font-bold rounded-xl shadow-2xs">
          मेनू पहा
        </Link>
      </div>
    );
  }

  const validate = () => {
    const errors = {};
    if (!formData.customerName.trim()) errors.customerName = 'कृपया तुमचे नाव टाका (Name is required)';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'कृपया योग्य १० अंकी मोबाईल नंबर टाका (10 digit mobile)';
    if (!formData.address.trim()) errors.address = 'डिलिव्हरी पत्ता आवश्यक आहे (Address is required)';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const orderPayload = {
      customerName: formData.customerName,
      phone: formData.phone,
      address: formData.address,
      landmark: formData.landmark,
      city: formData.city,
      pincode: formData.pincode,
      timeSlot: formData.timeSlot,
      specialInstructions: formData.specialInstructions,
      paymentMethod: formData.paymentMethod === 'UPI' ? 'UPI (Demo Payment)' : 'Cash on Delivery',
      items: cart,
      subtotal: cartSubtotal,
      packagingFee: packagingFee,
      deliveryFee: deliveryFee,
      grandTotal: grandTotal,
    };

    setTimeout(() => {
      const createdOrder = placeOrder(orderPayload);
      clearCart();
      setIsSubmitting(false);
      navigate(`/order-success/${createdOrder.id}`);
    }, 500);
  };

  const handleWhatsAppOrder = () => {
    if (!validate()) return;

    const orderPayload = {
      id: "TEMP",
      customerName: formData.customerName,
      phone: formData.phone,
      address: formData.address,
      landmark: formData.landmark,
      city: formData.city,
      pincode: formData.pincode,
      specialInstructions: formData.specialInstructions,
      paymentMethod: formData.paymentMethod === 'UPI' ? 'UPI' : 'Cash on Delivery',
      items: cart,
      subtotal: cartSubtotal,
      packagingFee: packagingFee,
      deliveryFee: deliveryFee,
      grandTotal: grandTotal,
    };

    window.open(generateWhatsAppOrderUrl(orderPayload), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Heading */}
        <div className="mb-6 space-y-1">
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-xs text-[#8B5E14] hover:text-[#B07A25] font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>कार्टवर परत जा (Back to Cart)</span>
          </Link>
          <h1 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#2C1E16]">
            डिलिव्हरी तपशील व चेकआउट
          </h1>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Delivery Details Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E8DCB8] shadow-2xs space-y-4">
              <h2 className="font-['Rozha_One'] text-xl text-[#2C1E16] pb-3 border-b border-[#EFE8DD]">
                १. ग्राहकाचा व डिलिव्हरी पत्ता
              </h2>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                  पूर्ण नाव (Full Name) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  placeholder="उदा. प्रियांका कुलकर्णी"
                  className={`w-full px-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-sm text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25] ${
                    formErrors.customerName ? 'border-red-500' : 'border-[#DCD3C4]'
                  }`}
                />
                {formErrors.customerName && (
                  <p className="text-xs text-red-600 mt-1 font-marathi">{formErrors.customerName}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                  मोबाईल नंबर (Mobile Number) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="उदा. 98220 12345"
                  className={`w-full px-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-sm text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25] ${
                    formErrors.phone ? 'border-red-500' : 'border-[#DCD3C4]'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-xs text-red-600 mt-1 font-marathi">{formErrors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                  डिलिव्हरी पत्ता (Delivery Address) *
                </label>
                <textarea
                  rows="2"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="फ्लॅट क्र., इमारत नाव, रस्ता / परिसर"
                  className={`w-full px-3.5 py-2.5 bg-[#FFFDF9] border rounded-xl text-sm text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25] ${
                    formErrors.address ? 'border-red-500' : 'border-[#DCD3C4]'
                  }`}
                ></textarea>
                {formErrors.address && (
                  <p className="text-xs text-red-600 mt-1 font-marathi">{formErrors.address}</p>
                )}
              </div>

              {/* Landmark, City & Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                    जवळची खूण (Landmark)
                  </label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    placeholder="उदा. गणपती मंदिराजवळ"
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                    शहर (City)
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                    पिनकोड (Pincode)
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-bold text-[#2C1E16] mb-1 font-marathi">
                  विशेष सूचना (Special Instructions)
                </label>
                <input
                  type="text"
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                  placeholder="उदा. आमटी थोडी कमी तिखट हवी / गरम भाकरी द्या..."
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#DCD3C4] rounded-xl text-xs sm:text-sm text-[#2C1E16] font-marathi focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                />
              </div>

            </div>

            {/* Payment Options (Demo Only) */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E8DCB8] shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE8DD]">
                <h2 className="font-['Rozha_One'] text-xl text-[#2C1E16]">
                  २. पेमेंट पद्धत निवडा (Payment Method)
                </h2>
                <span className="text-[11px] bg-[#FAF0DB] text-[#8B5E14] px-2.5 py-0.5 rounded-full font-sans font-semibold">
                  Demo Payment UI
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* UPI */}
                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'UPI' })}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    formData.paymentMethod === 'UPI'
                      ? 'border-[#B07A25] bg-[#FAF0DB]/50'
                      : 'border-[#DCD3C4] hover:border-[#B07A25]'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0DB] text-[#8B5E14] flex items-center justify-center shrink-0 border border-[#E8DCB8]">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#2C1E16]">UPI / QR Code</h4>
                    <p className="text-[11px] text-[#6B5545] font-marathi mt-0.5">
                      Google Pay, PhonePe किंवा Paytm
                    </p>
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    formData.paymentMethod === 'COD'
                      ? 'border-[#B07A25] bg-[#FAF0DB]/50'
                      : 'border-[#DCD3C4] hover:border-[#B07A25]'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E7F3EC] text-[#3D6B52] flex items-center justify-center shrink-0 border border-emerald-200">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#2C1E16]">Cash on Delivery</h4>
                    <p className="text-[11px] text-[#6B5545] font-marathi mt-0.5">
                      जेवण मिळाल्यावर रोख पैसे द्या
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo note */}
              <div className="bg-[#FAF7F2] border border-[#E8DCB8] p-3 rounded-xl flex items-center gap-2 text-xs text-[#6B5545]">
                <AlertCircle className="w-4 h-4 text-[#B07A25] shrink-0" />
                <span>
                  <strong>Demo Mode:</strong> पेमेंट प्रक्रिया केवळ UI प्रात्यक्षिकासाठी आहे. थेट ऑर्डर किंवा संवादासाठी WhatsApp बटण वापरा.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Actions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8DCB8] shadow-2xs space-y-4 sticky top-24">
              <h3 className="font-['Rozha_One'] text-lg text-[#2C1E16] pb-3 border-b border-[#EFE8DD]">
                ऑर्डर तपशील (Order Summary)
              </h3>

              {/* Items List */}
              <div className="max-h-56 overflow-y-auto divide-y divide-[#EFE8DD] pr-1 space-y-1">
                {cart.map((item) => (
                  <div key={item.id} className="py-2 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold font-marathi text-[#2C1E16]">
                        {item.nameMarathi}
                      </p>
                      <p className="text-[#8C7462]">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-serif font-bold text-[#2C1E16]">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="pt-2 border-t border-[#EFE8DD] space-y-2 text-xs sm:text-sm font-marathi text-[#523E30]">
                <div className="flex items-center justify-between">
                  <span>पदार्थ मूल्य</span>
                  <span className="font-serif font-bold text-[#2C1E16]">₹{cartSubtotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>पॅकेजिंग शुल्क</span>
                  <span className="font-serif font-bold text-[#2C1E16]">₹{packagingFee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>डिलिव्हरी शुल्क</span>
                  <span className="font-serif font-bold">
                    {deliveryFee === 0 ? <span className="text-[#3D6B52]">मोफत</span> : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#EFE8DD] flex items-center justify-between text-base font-bold text-[#2C1E16]">
                  <span>एकूण रक्कम</span>
                  <span className="font-serif text-xl text-[#B07A25]">₹{grandTotal}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#B07A25] hover:bg-[#96651B] text-white font-bold text-sm rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>ऑर्डर नोंदवत आहे...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>ऑर्डर कन्फर्म करा (Confirm Order)</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp वर ऑर्डर पाठवा</span>
                </button>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-xs text-[#8C7462] font-marathi">
                <ShieldCheck className="w-4 h-4 text-[#3D6B52] shrink-0" />
                <span>ऑर्डर थेट किचनकडे नोंदवली जाईल.</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
