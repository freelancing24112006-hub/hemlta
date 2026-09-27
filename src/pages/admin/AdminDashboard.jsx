import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Clock, CheckCircle2, IndianRupee, TrendingUp, Utensils, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import { useProducts } from '../../context/ProductContext';
import brandConfig from '../../config/brandConfig';

export default function AdminDashboard() {
  const { orders, updateOrderStatus } = useOrders();
  const { products } = useProducts();

  // Calculations
  const totalOrdersCount = orders.length;
  const pendingOrders = orders.filter((o) => o.status === 'Pending' || o.status === 'Confirmed' || o.status === 'Preparing');
  const completedOrders = orders.filter((o) => o.status === 'Delivered');
  const totalRevenue = orders.reduce((sum, o) => sum + (o.grandTotal || 0), 0);

  const statusColors = {
    Pending: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    Confirmed: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    Preparing: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    'Out for Delivery': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    Delivered: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    Cancelled: 'bg-red-500/20 text-red-300 border-red-500/40',
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#261A12] via-[#1C120B] to-[#120B07] rounded-3xl p-6 sm:p-8 border border-[#D49B43]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#D49B43] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Daily Kitchen Overview</span>
          </div>
          <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#F7D78A]">
            शुभ सकाळ, {brandConfig.founderNameMarathi}!
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE8DD]/70 font-marathi">
            आजच्या स्वयंपाकघरातील ऑर्डर्स, कमाई आणि पदार्थांचा ताजा अहवाल.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/products"
            className="px-4 py-2.5 bg-[#D49B43] hover:bg-[#ECC876] text-[#160F0A] font-bold text-xs rounded-xl shadow transition-all"
          >
            नवीन पदार्थ जोडा (Add Dish)
          </Link>
          <Link
            to="/admin/orders"
            className="px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 text-[#F7D78A] hover:bg-white/5 font-bold text-xs rounded-xl transition-all"
          >
            सर्व ऑर्डर्स ({orders.length})
          </Link>
        </div>
      </div>

      {/* 4 KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Total Orders */}
        <div className="bg-[#1C120B] rounded-2xl p-5 border border-[#D49B43]/25 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#EFE8DD]/60 font-medium">एकूण ऑर्डर्स</span>
            <div className="w-9 h-9 rounded-xl bg-[#D49B43]/20 text-[#D49B43] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-white">{totalOrdersCount}</span>
            <span className="text-[11px] text-[#D49B43] block mt-0.5 font-marathi">एकूण नोंदणी</span>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-[#1C120B] rounded-2xl p-5 border border-[#D49B43]/25 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#EFE8DD]/60 font-medium">चालू / प्रलंबित</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-amber-400">{pendingOrders.length}</span>
            <span className="text-[11px] text-amber-300/70 block mt-0.5 font-marathi">तयारी व डिलिव्हरीत</span>
          </div>
        </div>

        {/* Completed Orders */}
        <div className="bg-[#1C120B] rounded-2xl p-5 border border-[#D49B43]/25 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#EFE8DD]/60 font-medium">यशस्वी डिलिव्हरी</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-emerald-400">{completedOrders.length}</span>
            <span className="text-[11px] text-emerald-300/70 block mt-0.5 font-marathi">पूर्ण झालेल्या</span>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-[#1C120B] rounded-2xl p-5 border border-[#D49B43]/25 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#EFE8DD]/60 font-medium">एकूण महसूल</span>
            <div className="w-9 h-9 rounded-xl bg-[#E25B1D]/20 text-[#E25B1D] flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="font-serif text-3xl font-bold text-[#F7D78A]">₹{totalRevenue}</span>
            <span className="text-[11px] text-[#F7D78A]/70 block mt-0.5 font-marathi">एकूण विक्री</span>
          </div>
        </div>

      </div>

      {/* Grid: Kitchen Prep Sheet & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Recent Orders Table (Span 8) */}
        <div className="lg:col-span-8 bg-[#1C120B] rounded-3xl p-6 border border-[#D49B43]/25 shadow-xl space-y-5">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="font-['Rozha_One'] text-xl text-[#F7D78A]">
                अलीकडील ऑर्डर्स (Recent Orders)
              </h3>
              <p className="text-xs text-[#EFE8DD]/60 font-marathi">
                थेट स्टेटस अपडेट करा (Click to update status)
              </p>
            </div>

            <Link
              to="/admin/orders"
              className="text-xs text-[#D49B43] hover:underline font-bold flex items-center gap-1"
            >
              <span>सर्व पहा</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 4).map((order) => (
              <div
                key={order.id}
                className="bg-[#24170E] rounded-2xl p-4 border border-[#D49B43]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#F7D78A]">#{order.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white font-marathi">
                    {order.customerName}
                  </h4>
                  <p className="text-xs text-[#EFE8DD]/70 font-marathi line-clamp-1">
                    {order.items.map((i) => `${i.nameMarathi} (${i.quantity})`).join(', ')}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <span className="font-serif text-lg font-bold text-[#F7D78A]">
                    ₹{order.grandTotal}
                  </span>

                  {/* Quick status selector */}
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className="bg-[#160F0A] border border-[#D49B43]/40 text-xs text-[#FAF7F2] font-semibold py-1.5 px-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D49B43]"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Kitchen Prep & Inventory (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Today's Prep Plan */}
          <div className="bg-[#1C120B] rounded-3xl p-6 border border-[#D49B43]/25 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-[#F7D78A]">
              <Flame className="w-4 h-4 text-[#E25B1D]" />
              <h3 className="font-['Rozha_One'] text-lg">आजची किचन तयारी (Prep List)</h3>
            </div>

            <div className="space-y-2.5 text-xs font-marathi text-[#EFE8DD]/80">
              <div className="flex justify-between p-2.5 rounded-xl bg-[#24170E] border border-white/5">
                <span>पुरणपोळी बॅच (साजूक तूप):</span>
                <strong className="text-[#F7D78A]">२४ नग तयार</strong>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-[#24170E] border border-white/5">
                <span>काळा मसाला मटण रस्सा:</span>
                <strong className="text-[#F7D78A]">५ लिटर हंडी</strong>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-[#24170E] border border-white/5">
                <span>पिठलं / झुणका व खमंग ठेचा:</span>
                <strong className="text-[#F7D78A]">सज्ज (Fresh)</strong>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-[#24170E] border border-white/5">
                <span>उकडीचे मोदक (ताजे):</span>
                <strong className="text-[#F7D78A]">१६ नग शिल्लक</strong>
              </div>
            </div>
          </div>

          {/* Catalog Count */}
          <div className="bg-[#24170E] rounded-3xl p-6 border border-[#D49B43]/30 text-center space-y-3">
            <Utensils className="w-8 h-8 text-[#D49B43] mx-auto" />
            <h4 className="font-['Rozha_One'] text-lg text-[#F7D78A]">मेनू व्यवस्थापन</h4>
            <p className="text-xs text-[#EFE8DD]/70 font-marathi">
              सध्या मेनूमध्ये <strong>{products.length}</strong> पदार्थ सक्रिय आहेत.
            </p>
            <Link
              to="/admin/products"
              className="block w-full py-2.5 bg-[#D49B43] hover:bg-[#ECC876] text-[#160F0A] font-bold text-xs rounded-xl transition-all shadow"
            >
              मेनू आयटम व्यवस्थापित करा
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
