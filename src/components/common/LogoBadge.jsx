import React from 'react';

export default function LogoBadge({ className = "", size = "normal" }) {
  const isCompact = size === "compact";
  const isSmall = size === "small";

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Traditional Arched Vintage Plaque Badge (exact to reference) */}
      <div
        className={`relative bg-[#FBF7EE] text-center border-2 border-[#8C2D19] rounded-[24px] rounded-t-[34px] shadow-md transition-transform duration-200 hover:scale-102 ${
          isSmall
            ? 'px-2.5 py-1.5 min-w-[95px]'
            : isCompact
            ? 'px-3.5 py-2 min-w-[120px] sm:min-w-[130px]'
            : 'px-5 py-2.5 min-w-[145px]'
        }`}
        style={{
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25), inset 0 0 0 1.5px #D49B43',
        }}
      >
        {/* Fine inner border line */}
        <div className="flex flex-col items-center justify-center">
          
          {/* Steaming Brass/Clay Pot Icon */}
          <div className="flex flex-col items-center justify-center -mb-0.5">
            {/* Steam wisps */}
            <svg width={isSmall ? "14" : "18"} height={isSmall ? "7" : "9"} viewBox="0 0 24 10" fill="none" className="text-[#8C2D19]">
              <path d="M5 9C5 6 7 5 7 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.85"/>
              <path d="M12 9C12 5 14 4 14 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M19 9C19 6 21 5 21 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.85"/>
            </svg>
            
            {/* Handi Pot Body */}
            <svg width={isSmall ? "16" : "20"} height={isSmall ? "10" : "12"} viewBox="0 0 24 14" fill="none" className="text-[#8C2D19]">
              <path d="M2 3H22C23 3 23.5 4 23 5.5L21 11C20 13 17 14 14.5 14H9.5C7 14 4 13 3 11L1 5.5C0.5 4 1 3 2 3Z" fill="currentColor"/>
              <ellipse cx="12" cy="3" rx="9" ry="2" fill="#FAF0DB" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="12" cy="8.5" r="1.2" fill="#FAF0DB"/>
            </svg>
          </div>

          {/* Marathi Brand Name: "घरगुती स्वाद" */}
          <div className="leading-none pt-0.5">
            <span
              className={`font-['Rozha_One'] text-[#8C2D19] block tracking-tight font-bold ${
                isSmall ? 'text-xs' : isCompact ? 'text-sm sm:text-base' : 'text-lg'
              }`}
              style={{
                textShadow: '0 1px 1px rgba(140, 45, 25, 0.15)',
              }}
            >
              घरगुती
            </span>
            <div className="flex items-center justify-center gap-1 -mt-0.5">
              <span className="w-2 sm:w-3 h-[1.5px] bg-[#8C2D19] opacity-70"></span>
              <span
                className={`font-['Rozha_One'] text-[#8C2D19] font-bold ${
                  isSmall ? 'text-[11px]' : isCompact ? 'text-xs sm:text-sm' : 'text-base'
                }`}
              >
                स्वाद
              </span>
              <span className="w-2 sm:w-3 h-[1.5px] bg-[#8C2D19] opacity-70"></span>
            </div>
          </div>

          {/* Subtitle: "HEMLATA DESALE" */}
          <span
            className={`font-sans font-extrabold uppercase text-[#4A321F] tracking-[0.24em] block leading-none mt-1 ${
              isSmall ? 'text-[6px]' : isCompact ? 'text-[7px] sm:text-[8px]' : 'text-[9px]'
            }`}
          >
            HEMLATA DESALE
          </span>

        </div>
      </div>
    </div>
  );
}
