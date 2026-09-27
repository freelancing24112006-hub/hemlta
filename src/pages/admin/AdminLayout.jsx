import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, UtensilsCrossed, ClipboardList, Settings, ArrowLeft, Shield, Sparkles, Store } from 'lucide-react';
import brandConfig from '../../config/brandConfig';

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard Overview', marathi: 'एकूण आढावा', path: '/admin', icon: LayoutDashboard },
    { name: 'Menu & Products', marathi: 'मेनू व्यवस्थापन', path: '/admin/products', icon: UtensilsCrossed },
    { name: 'Orders Pipeline', marathi: 'ऑर्डर्स आणि डिलिव्हरी', path: '/admin/orders', icon: ClipboardList },
    { name: 'Brand Settings', marathi: 'सेटिंग्ज व संपर्क', path: '/admin/settings', icon: Settings },
  ];

  const isActive = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#120B07] text-[#FAF7F2] flex flex-col font-sans">
      
      {/* Top Admin Bar */}
      <header className="bg-[#1C120B] border-b border-[#D49B43]/30 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#261A12] border border-[#D49B43]/30 text-xs text-[#F7D78A] hover:bg-[#D49B43] hover:text-[#160F0A] transition-all font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ग्राहक वेबसाइटवर जा (Back to Website)</span>
            <span className="sm:hidden">Website</span>
          </Link>

          <div className="h-5 w-px bg-white/10 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#D49B43] text-[#160F0A] flex items-center justify-center font-bold font-serif text-xs">
              घ.स्वा
            </div>
            <div>
              <h1 className="font-['Rozha_One'] text-sm sm:text-base text-[#F7D78A] leading-none">
                {brandConfig.brandNameMarathi} – Admin Panel
              </h1>
              <span className="text-[10px] text-[#D49B43] font-mono uppercase tracking-widest">
                Kitchen Management System (Demo Preview)
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            किचन लाइव्ह चालू आहे (Kitchen Open)
          </span>

          <div className="w-8 h-8 rounded-full bg-[#261A12] border border-[#D49B43]/40 flex items-center justify-center text-xs text-[#F7D78A] font-bold">
            HD
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 bg-[#180E09] border-r border-[#D49B43]/20 p-4 space-y-2 shrink-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#D49B43]/60 px-3 py-1">
            MANAGEMENT
          </div>
          
          <div className="flex md:flex-col gap-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap ${
                    active
                      ? 'bg-gradient-to-r from-[#ECC876]/20 to-[#D49B43]/20 border border-[#D49B43] text-[#F7D78A] font-bold shadow-md'
                      : 'text-[#EFE8DD]/70 hover:bg-white/5 hover:text-[#FAF7F2]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-[#D49B43]' : 'opacity-70'}`} />
                  <div>
                    <span>{item.name}</span>
                    <span className="block text-[10px] opacity-60 font-marathi">{item.marathi}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block pt-8 mt-8 border-t border-white/10 px-3 text-[11px] text-[#EFE8DD]/50 space-y-2">
            <p className="font-bold text-[#F7D78A]">Client Demo Note:</p>
            <p>
              This admin dashboard allows testing live price changes, toggling dish availability, and tracking orders in real-time.
            </p>
          </div>
        </aside>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#140D08] overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
