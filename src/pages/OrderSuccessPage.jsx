import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Clock, MessageCircle, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useOrders } from '../context/OrderContext';

export default function OrderSuccessPage() {
  const { orderId } = useParams();
  const { getOrderById, generateWhatsAppOrderUrl } = useOrders();

  const order = getOrderById(orderId);

  useEffect(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B07A25', '#C8822B', '#3D6B52', '#FAF0DB'],
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (!order) {
    return (
      <div className="min-h-[60vh] bg-[#FAF7F2] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="font-['Rozha_One'] text-2xl text-[#2C1E16]">ऑर्डर सापडली नाही</h2>
        <Link to="/" className="px-6 py-3 bg-[#B07A25] text-white font-bold rounded-xl shadow-2xs">
          मुख्यपृष्ठावर जा
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const steps = [
    { title: "ऑर्डर प्राप्त झाली", sub: "Confirmed", active: true },
    { title: "किचनमध्ये तयारी", sub: "Preparing", active: order.status === 'Preparing' || order.status === 'Out for Delivery' || order.status === 'Delivered' },
    { title: "डिलिव्हरीसाठी रवाना", sub: "Out for Delivery", active: order.status === 'Out for Delivery' || order.status === 'Delivered' },
    { title: "डिलिव्हर झाले", sub: "Delivered", active: order.status === 'Delivered' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Celebration Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCB8] shadow-xs text-center space-y-6">
          
          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-full bg-[#E7F3EC] border border-emerald-300 text-[#3D6B52] flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5E14] font-bold bg-[#FAF0DB] px-3 py-1 rounded-full border border-[#E8DCB8]">
              ऑर्डर आयडी: #{order.id}
            </span>
            <h1 className="font-['Rozha_One'] text-2xl sm:text-4xl text-[#2C1E16]">
              Order Received!
            </h1>
            <p className="text-sm sm:text-base text-[#523E30] font-marathi">
              धन्यवाद <strong>{order.customerName}</strong>! तुमची घरगुती जेवणाची ऑर्डर यशस्वीरित्या नोंदवली गेली आहे.
            </p>
          </div>

          {/* Timeline Status Pipeline */}
          <div className="pt-4 pb-2 border-t border-b border-[#EFE8DD]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    step.active
                      ? 'bg-[#FAF0DB] border-[#B07A25] text-[#2C1E16]'
                      : 'bg-gray-50 border-gray-200 text-gray-400 opacity-60'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full mx-auto mb-1 flex items-center justify-center text-[10px] font-bold ${
                    step.active ? 'bg-[#B07A25] text-white' : 'bg-gray-300 text-white'
                  }`}>
                    {idx + 1}
                  </div>
                  <p className="text-xs font-bold font-marathi leading-tight">{step.title}</p>
                  <p className="text-[10px] opacity-75 font-sans">{step.sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#8B5E14] font-marathi font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>अंदाजे डिलिव्हरी वेळ: <strong>{order.estimatedDeliveryTime}</strong></span>
            </div>
          </div>

          {/* Receipt Breakdown */}
          <div className="bg-[#FAF7F2] rounded-2xl p-5 text-left border border-[#E8DCB8] space-y-3 font-marathi">
            <h3 className="font-['Rozha_One'] text-base text-[#2C1E16] pb-2 border-b border-[#EFE8DD] flex items-center justify-between">
              <span>ऑर्डर बिल पावती (Receipt)</span>
              <span className="text-xs font-sans text-[#8C7462]">
                {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </h3>

            {/* Items */}
            <div className="divide-y divide-[#EFE8DD] text-xs sm:text-sm">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#2C1E16]">{item.nameMarathi}</span>
                    <span className="text-[#8C7462] ml-2">× {item.quantity}</span>
                  </div>
                  <span className="font-serif font-bold text-[#2C1E16]">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="pt-2 border-t border-[#EFE8DD] flex items-center justify-between font-bold text-sm sm:text-base text-[#2C1E16]">
              <span>एकूण बिल (Grand Total)</span>
              <span className="font-serif text-lg text-[#B07A25]">₹{order.grandTotal}</span>
            </div>

            {/* Delivery address preview */}
            <div className="pt-2 border-t border-[#EFE8DD] text-xs text-[#6B5545] space-y-0.5">
              <p><strong>पत्ता:</strong> {order.address}, {order.city} - {order.pincode}</p>
              <p><strong>मोबाईल:</strong> {order.phone} • <strong>पेमेंट:</strong> {order.paymentMethod}</p>
            </div>
          </div>

          {/* Actions: WhatsApp Update & Print */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppOrderUrl(order)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp वर ऑर्डर माहिती पाठवा</span>
            </a>

            <button
              onClick={handlePrint}
              className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-[#FAF0DB] text-[#2C1E16] border border-[#DCD3C4] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#8C7462]" />
              <span>पावती प्रिंट करा (Print Receipt)</span>
            </button>
          </div>

          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs text-[#B07A25] hover:underline font-bold"
            >
              <span>अधिक पदार्थ पाहण्यासाठी मेनूकडे जा →</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
