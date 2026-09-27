import React from 'react';
import { Flame, Sparkles, Star, Award, Check } from 'lucide-react';

export function VegBadge({ isVeg, className = "" }) {
  if (isVeg) {
    return (
      <span
        title="शुद्ध शाकाहारी (Pure Veg)"
        className={`inline-flex items-center justify-center w-4 h-4 rounded-sm border border-emerald-600 bg-white p-0.5 ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
      </span>
    );
  }

  return (
    <span
      title="मांसाहारी (Non-Veg)"
      className={`inline-flex items-center justify-center w-4 h-4 rounded-sm border border-red-700 bg-white p-0.5 ${className}`}
    >
      <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-red-700"></span>
    </span>
  );
}

export function SpiceLevelBadge({ level }) {
  if (level === 'mild') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
        <span>मऊ/गोडवा</span>
      </span>
    );
  }

  if (level === 'medium') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] text-orange-700 font-medium bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
        <Flame className="w-3 h-3 text-orange-600 fill-current" />
        <span>मध्यम तिखट</span>
      </span>
    );
  }

  if (level === 'spicy' || level === 'extra-spicy') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] text-red-700 font-semibold bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
        <Flame className="w-3 h-3 text-red-600 fill-current" />
        <Flame className="w-3 h-3 text-red-600 fill-current -ml-1" />
        <span>झणझणीत</span>
      </span>
    );
  }

  return null;
}

export function TagBadge({ text, type = 'gold' }) {
  const styles = {
    gold: 'bg-[#FAF0DB] text-[#9A6716] border-[#D49B43]/40',
    saffron: 'bg-[#FFF0EB] text-[#C2410C] border-[#E25B1D]/40',
    green: 'bg-[#EBF7F0] text-[#1D603F] border-[#2D6A4F]/40',
    dark: 'bg-[#261A12] text-[#F7D78A] border-[#D49B43]/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border font-marathi ${
        styles[type] || styles.gold
      }`}
    >
      <Sparkles className="w-2.5 h-2.5 shrink-0" />
      {text}
    </span>
  );
}
