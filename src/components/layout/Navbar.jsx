import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Shield } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import LogoBadge from '../common/LogoBadge';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Real Top Navigation Header (Seamless transparent on home, frosted on scroll) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHome && !isScrolled
            ? 'bg-transparent py-4 sm:py-5 border-none shadow-none'
            : 'bg-[#160D08]/96 backdrop-blur-md border-b border-[#3D2516] shadow-xl py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Real Logo component (Arched vintage plaque matching reference) */}
            <Link to="/" className="flex items-center gap-2 group shrink-0" title="Home">
              <LogoBadge size="compact" />
            </Link>

            {/* Real Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm lg:text-[15px] transition-all duration-200 relative py-1 tracking-wide ${
                      active
                        ? 'text-[#F3B748] font-bold'
                        : 'text-[#FAF0DB]/90 hover:text-[#F3B748] font-medium'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F3B748] rounded-full shadow-xs"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Real Right Action Icons: Search, Cart with badge, Mobile Menu */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Real Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-[#FAF0DB]/90 hover:text-[#F3B748] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Search"
                title="Search Menu"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Real Cart Icon with Circular Counter Badge */}
              <Link
                to="/cart"
                className="relative p-2 text-[#FAF0DB]/90 hover:text-[#F3B748] hover:bg-white/10 rounded-full transition-colors flex items-center cursor-pointer"
                aria-label="View Cart"
                title="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#1C120C] text-[#FAF0DB] border border-[#F3B748]/70 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </Link>

              {/* Real Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#FAF0DB] hover:text-[#F3B748] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Real Search Bar Drawer */}
        {searchOpen && (
          <div className="border-t border-[#3D2516] bg-[#1C120C]/98 backdrop-blur-md py-3 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="absolute left-4 text-[#C4B59D] w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="उदा. पुरणपोळी, मटण थाळी, पिठलं भाकरी, मोदक..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-24 py-2.5 bg-[#2A1B12] border border-[#523A28] rounded-full text-[#FAF0DB] placeholder-[#C4B59D]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#F3B748] shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#D98E2A] hover:bg-[#F3B748] text-[#1C120C] text-xs font-bold rounded-full transition-colors cursor-pointer"
                >
                  शोधा
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-16 sm:h-20"></div>}

      {/* Real Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#1C120C] text-white md:hidden shadow-2xl animate-in fade-in duration-200">
          <div className="p-4 border-b border-[#3D2516] flex items-center justify-between">
            <LogoBadge size="compact" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#FAF0DB] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-base transition-colors ${
                    active
                      ? 'bg-[#2E1D13] text-[#F3B748] font-bold border border-[#F3B748]/30'
                      : 'text-[#FAF0DB] hover:bg-white/5 font-medium'
                  }`}
                >
                  <span className="text-base">{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#3D2516]">
              <Link
                to="/admin"
                className="flex items-center justify-between p-3 rounded-xl bg-[#26170F] border border-[#42291A] text-xs text-[#FAF0DB]/80"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#F3B748]" />
                  <span>Admin Dashboard</span>
                </div>
                <span className="text-[10px] uppercase font-mono text-[#F3B748]">Preview</span>
              </Link>
            </div>
          </div>

          <div className="p-6 bg-[#180E08] border-t border-[#3D2516] space-y-3">
            <Link
              to="/menu"
              className="block w-full py-3 bg-gradient-to-r from-[#D98E2A] to-[#F3B748] text-[#1C120C] text-center font-bold rounded-xl shadow-md transition-all text-sm"
            >
              Explore Menu (मेनू पहा)
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
