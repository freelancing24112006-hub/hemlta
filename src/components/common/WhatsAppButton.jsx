import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import brand from '../../config/brand';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = `नमस्कार! मला घरगुती स्वाद मधील पदार्थांविषयी विचारणा करायची आहे. आजचा मेनू काय आहे? 🙏`;
  const whatsappUrl = `https://wa.me/${brand.contact.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center group">
      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all border-2 border-white"
        aria-label="Chat on WhatsApp"
        title="WhatsApp वर ऑर्डर करा"
      >
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </a>

      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 ml-3 bg-white border border-[#E8DCB8] text-[#2C1E16] text-xs py-2 px-3.5 rounded-xl shadow-md">
          <div className="font-marathi">
            <span className="font-bold text-[#2C1E16] block">WhatsApp ऑर्डर</span>
            <span className="text-[11px] text-[#6B5545]">थेट चॅट करून ऑर्डर द्या</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-[#8C7462] hover:text-[#2C1E16] p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
