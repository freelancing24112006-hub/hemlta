import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { Instagram } from '../common/SocialIcons';
import brand from '../../config/brand';
import LogoBadge from '../common/LogoBadge';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#22160E] text-[#EFE8DD] border-t border-[#3A2B20] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/">
              <LogoBadge size="compact" />
            </Link>

            <p className="text-xs sm:text-sm text-[#DED6C7] leading-relaxed font-marathi">
              {brand.descriptionMarathi}
            </p>

            {/* Quality Badges */}
            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] bg-[#2E1E14] border border-[#4A3728] text-[#FAF0DB] px-2.5 py-1 rounded-full">
                <Sparkles className="w-3 h-3 text-[#B07A25]" /> १००% घरगुती मसाले
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-[#2E1E14] border border-[#4A3728] text-[#FAF0DB] px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3 text-[#3D6B52]" /> शुद्ध आणि ताजे
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[#FAF0DB] font-bold text-sm tracking-wider uppercase mb-4 pb-2 border-b border-[#3A2B20]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Home (मुख्यपृष्ठ)", path: "/" },
                { name: "Menu (मेनू कार्ड)", path: "/menu" },
                { name: "About Story (आमच्याबद्दल)", path: "/about" },
                { name: "Gallery & Reels (गॅलरी)", path: "/gallery" },
                { name: "Reviews (प्रतिक्रिया)", path: "/reviews" },
                { name: "Contact (संपर्क)", path: "/contact" },
                { name: "Admin (व्यवस्थापन)", path: "/admin" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-[#DED6C7]/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Specials */}
          <div>
            <h4 className="text-[#FAF0DB] font-bold text-sm tracking-wider uppercase mb-4 pb-2 border-b border-[#3A2B20]">
              Our Specials
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "पुरणपोळी स्पेशल थाळी (साजूक तूप)", tag: "Special" },
                { name: "अस्सल गावराण मटण रस्सा थाळी", tag: "झणझणीत" },
                { name: "पिठलं भाकरी आणि खमंग ठेचा", tag: "पारंपरिक" },
                { name: "गावरान चिकन सुक्का व भाकरी", tag: "Special" },
                { name: "उकडीचे मोदक (ओल्या नारळाचे)", tag: "मिष्टान्न" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/menu"
                    className="text-[#DED6C7]/80 hover:text-white transition-colors flex items-center justify-between text-xs py-0.5"
                  >
                    <span className="font-marathi">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3.5">
            <h4 className="text-[#FAF0DB] font-bold text-sm tracking-wider uppercase mb-4 pb-2 border-b border-[#3A2B20]">
              Connect With Us
            </h4>

            <div className="space-y-2.5 text-xs text-[#DED6C7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B07A25] shrink-0 mt-0.5" />
                <p className="font-marathi leading-relaxed">
                  {brand.contact.addressMarathi}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B07A25] shrink-0" />
                <a href={`tel:${brand.contact.whatsappNumber}`} className="hover:text-white font-bold">
                  {brand.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B07A25] shrink-0 mt-0.5" />
                <div className="font-marathi">
                  <p>{brand.hours.lunch}</p>
                  <p>{brand.hours.dinner}</p>
                </div>
              </div>
            </div>

            {/* Social & WhatsApp CTA */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={brand.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#2E1E14] hover:bg-[#3A2B20] text-[#FAF0DB] border border-[#4A3728] rounded-xl text-xs font-bold transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C8822B]" />
                <span>@{brand.contact.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${brand.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#3A2B20] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DED6C7]/60">
          <div className="font-marathi">
            © {currentYear} {brand.nameMarathi} ({brand.founderNameEnglish}). सर्व हक्क सुरक्षित.
          </div>
          <div className="flex items-center gap-1 font-marathi text-[11px] text-[#DED6C7]/80">
            <span>अस्सल घरगुती चव</span>
            <Heart className="w-3.5 h-3.5 text-[#C8822B] fill-current inline mx-0.5" />
            <span>महाराष्ट्राची पारंपरिक खाद्यपरंपरा</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
