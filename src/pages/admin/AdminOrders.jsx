import React, { useState } from 'react';
import { ClipboardList, Clock, CheckCircle2, Phone, MapPin, Printer, Eye, MessageCircle, AlertCircle } from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import Modal from '../../components/common/Modal';

export default function AdminOrders() {
  const { orders, updateOrderStatus, generateWhatsAppOrderUrl } = useOrders();
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const statuses = [
    { id: 'all', label: 'सर्व ऑर्डर्स' },
    { id: 'Pending', label: 'Pending' },
    { id: 'Confirmed', label: 'Confirmed' },
    { id: 'Preparing', label: 'Preparing' },
    { id: 'Out for Delivery', label: 'Out for Delivery' },
    { id: 'Delivered', label: 'Delivered' },
    { id: 'Cancelled', label: 'Cancelled' },
  ];

  const filteredOrders = orders.filter((o) => {
    if (statusFilter === 'all') return true;
    return o.status === statusFilter;
  });

  const statusColors = {
    Pending: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    Confirmed: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    Preparing: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    'Out for Delivery': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    Delivered: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    Cancelled: 'bg-red-500/20 text-red-300 border-red-500/40',
  };

  const handlePrintKOT = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D49B43]/20">
        <div>
          <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#F7D78A]">
            ऑर्डर व्यवस्थापन आणि ट्रॅकिंग (Orders Pipeline)
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE8DD]/70 font-marathi">
            प्रत्येक ऑर्डरची स्थिती बदला आणि किचन ऑर्डर तिकीट (KOT) पहा.
          </p>
        </div>

        <div className="text-xs font-mono bg-[#1C120B] px-3.5 py-2 rounded-xl border border-[#D49B43]/30 text-[#F7D78A]">
          एकूण: <strong>{filteredOrders.length}</strong> ऑर्डर्स
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {statuses.map((st) => (
          <button
            key={st.id}
            onClick={() => setStatusFilter(st.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              statusFilter === st.id
                ? 'bg-[#D49B43] text-[#160F0A] font-bold shadow-md'
                : 'bg-[#1C120B] text-[#EFE8DD]/70 hover:text-white border border-[#D49B43]/20'
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Orders Grid */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-[#1C120B] rounded-3xl p-5 sm:p-6 border border-[#D49B43]/25 shadow-xl hover:border-[#D49B43]/50 transition-all space-y-4"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#F7D78A] bg-[#261A12] px-3 py-1 rounded-xl border border-[#D49B43]/30">
                  #{order.id}
                </span>
                <div>
                  <h3 className="font-bold text-base text-white font-marathi">
                    {order.customerName}
                  </h3>
                  <span className="text-xs text-[#EFE8DD]/60 font-sans">
                    {order.phone} • {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>

              {/* Status Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#EFE8DD]/60 font-marathi hidden sm:inline">स्थिती:</span>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className={`text-xs font-bold py-1.5 px-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D49B43] ${statusColors[order.status]}`}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Middle: Items & Address */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
              
              {/* Items List (Span 7) */}
              <div className="md:col-span-7 bg-[#24170E] p-3.5 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D49B43] block">
                  ऑर्डर केलेले पदार्थ:
                </span>
                <div className="space-y-1 font-marathi">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-white/90">
                      <span>• {item.nameMarathi} <strong className="text-[#F7D78A]">× {item.quantity}</strong></span>
                      <span className="font-serif">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                {order.specialInstructions && (
                  <p className="pt-2 border-t border-white/10 text-amber-300 font-marathi">
                    <strong>टीप:</strong> {order.specialInstructions}
                  </p>
                )}
              </div>

              {/* Customer Delivery Details (Span 5) */}
              <div className="md:col-span-5 bg-[#24170E] p-3.5 rounded-2xl border border-white/5 space-y-2 font-marathi">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D49B43] block">
                  डिलिव्हरी पत्ता:
                </span>
                <p className="text-white/90 leading-relaxed">
                  {order.address}{order.landmark ? `, जवळ: ${order.landmark}` : ''}, {order.city} - {order.pincode}
                </p>
                <div className="pt-1 flex items-center justify-between text-[#EFE8DD]/70 border-t border-white/10">
                  <span>पेमेंट: {order.paymentMethod}</span>
                  <span className="font-serif font-bold text-sm text-[#F7D78A]">
                    एकूण: ₹{order.grandTotal}
                  </span>
                </div>
              </div>

            </div>

            {/* Actions Bottom Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-[11px] text-[#EFE8DD]/60 font-marathi">
                अंदाजे वेळ: <strong>{order.estimatedDeliveryTime}</strong>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="px-3.5 py-1.5 bg-[#261A12] hover:bg-white/10 border border-[#D49B43]/30 text-[#F7D78A] text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>KOT स्लिप पहा</span>
                </button>

                <a
                  href={generateWhatsAppOrderUrl(order)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp वर पाठवा</span>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* KOT / Kitchen Order Ticket Modal */}
      <Modal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={`किचन ऑर्डर तिकीट (KOT #${selectedOrder?.id})`}
        subtitle="Kitchen Order Receipt"
      >
        {selectedOrder && (
          <div className="space-y-4 font-mono text-xs text-[#1A120B]">
            <div className="border-2 border-dashed border-gray-400 p-4 rounded-xl bg-white space-y-3">
              <div className="text-center border-b pb-2">
                <h3 className="font-serif font-bold text-base">HEMLATA DESALE</h3>
                <p className="font-marathi text-xs">घरगुती स्वाद - किचन KOT</p>
                <p className="text-[10px] text-gray-500">
                  ऑर्डर #{selectedOrder.id} • {new Date(selectedOrder.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="space-y-1 font-marathi">
                <p><strong>ग्राहक:</strong> {selectedOrder.customerName} ({selectedOrder.phone})</p>
                <p><strong>पत्ता:</strong> {selectedOrder.address}, {selectedOrder.city}</p>
                {selectedOrder.specialInstructions && (
                  <p className="text-red-700 font-bold">
                    <strong>विशेष सूचना:</strong> {selectedOrder.specialInstructions}
                  </p>
                )}
              </div>

              <div className="border-t border-b py-2 space-y-1">
                <p className="font-bold">पदार्थ तपशील (ITEMS):</p>
                {selectedOrder.items.map((it, i) => (
                  <div key={i} className="flex justify-between font-marathi">
                    <span>{it.nameMarathi}</span>
                    <strong className="text-sm">× {it.quantity}</strong>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-sm font-bold">
                <span>एकूण बिल:</span>
                <span>₹{selectedOrder.grandTotal} ({selectedOrder.paymentMethod})</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={handlePrintKOT}
                className="px-4 py-2 bg-[#1C120B] text-[#F7D78A] rounded-xl font-bold flex items-center gap-1.5 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>प्रिंट KOT (Print Slip)</span>
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}
