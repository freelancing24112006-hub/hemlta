import React, { useState } from 'react';
import brand from '../../config/brand';

/**
 * Replaceable Founder Image Slot Component
 * 
 * TO REPLACE FOUNDER IMAGE:
 * Simply drop your real photo into `public/assets/hemalata-founder.jpg`
 * or `src/assets/hemalata-founder.jpg`.
 * 
 * This component does NOT rely on an AI-generated face.
 */
export default function FounderImageSlot({
  className = "w-full h-full object-cover",
  alt = "Hemlata Desale - घरगुती स्वाद",
  aspectRatio = "aspect-[4/5]"
}) {
  const [hasError, setHasError] = useState(false);

  // If the image fails to load or is not provided, show an authentic tasteful brand culinary badge
  if (hasError) {
    return (
      <div className={`w-full ${aspectRatio} bg-gradient-to-br from-[#FAF0DB] via-[#F4EFE6] to-[#E8DCB8] rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-[#D49B43]/30 shadow-inner`}>
        <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-[#D49B43]/30 flex items-center justify-center text-3xl mb-3">
          👩‍🍳
        </div>
        <h4 className="font-['Rozha_One'] text-xl text-[#2C1E16]">
          {brand.founderNameMarathi}
        </h4>
        <p className="text-xs uppercase tracking-widest text-[#B07A25] font-bold mt-0.5">
          {brand.founderNameEnglish}
        </p>
        <div className="mt-3 inline-block px-3 py-1 bg-[#2C1E16] text-[#FAF7F2] text-[11px] rounded-full font-marathi">
          अस्सल घरगुती अन्नपूर्णा
        </div>
      </div>
    );
  }

  return (
    <img
      src="/assets/hemalata-founder.jpg"
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
