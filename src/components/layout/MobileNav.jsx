import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Utensils, ShoppingBag, PhoneCall } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function MobileNav() {
  const location = useLocation();
  const { cartCount } = useCart();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#EFE8DD] px-4 py-2 flex items-center justify-around shadow-sm">
      <Link
        to="/"
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
          isActive('/') ? 'text-[#B07A25] font-bold' : 'text-[#6B5545] hover:text-[#B07A25]'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-marathi">मुख्य</span>
      </Link>

      <Link
        to="/menu"
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
          isActive('/menu') ? 'text-[#B07A25] font-bold' : 'text-[#6B5545] hover:text-[#B07A25]'
        }`}
      >
        <Utensils className="w-5 h-5" />
        <span className="text-[10px] font-marathi">मेनू</span>
      </Link>

      <Link
        to="/cart"
        className={`relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
          isActive('/cart') ? 'text-[#B07A25] font-bold' : 'text-[#6B5545] hover:text-[#B07A25]'
        }`}
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#B07A25] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-marathi">कार्ट</span>
      </Link>

      <Link
        to="/contact"
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
          isActive('/contact') ? 'text-[#B07A25] font-bold' : 'text-[#6B5545] hover:text-[#B07A25]'
        }`}
      >
        <PhoneCall className="w-5 h-5" />
        <span className="text-[10px] font-marathi">संपर्क</span>
      </Link>
    </div>
  );
}
