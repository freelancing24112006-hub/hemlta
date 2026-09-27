import React, { useState } from 'react';
import { Settings, Save, Sparkles, CheckCircle2, Phone, MapPin, Clock } from 'lucide-react';
import { Instagram } from '../../components/common/SocialIcons';
import brandConfig from '../../config/brandConfig';
import { useToast } from '../../context/ToastContext';

export default function AdminSettings() {
  const { addToast } = useToast();
  
  const [config, setConfig] = useState({
    founderName: brandConfig.founderNameEnglish,
    founderMarathi: brandConfig.founderNameMarathi,
    whatsappNumber: brandConfig.contact.whatsappNumber,
    phoneDisplay: brandConfig.contact.phoneDisplay,
    instagramHandle: brandConfig.contact.instagramHandle,
    address: brandConfig.contact.addressMarathi,
    minOrder: brandConfig.ordering.minimumOrderValue,
    freeDeliveryThreshold: brandConfig.ordering.freeDeliveryThreshold,
    deliveryFee: brandConfig.ordering.standardDeliveryFee,
    packagingFee: brandConfig.ordering.packagingFee,
    upiId: brandConfig.ordering.upiId,
  });

  const handleSave = (e) => {
    e.preventDefault();
    addToast('ब्रँड सेटिंग्ज यशस्वीरित्या अपडेट करण्यात आल्या!', 'success');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="pb-4 border-b border-[#D49B43]/20">
        <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#F7D78A]">
          ब्रँड आणि संपर्क सेटिंग्ज (Brand Settings)
        </h2>
        <p className="text-xs sm:text-sm text-[#EFE8DD]/70 font-marathi">
          येथून तुम्ही ग्राहक हेल्पलाइन नंबर, WhatsApp, Instagram आणि डिलिव्हरी चार्जेस नियंत्रित करू शकता.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-[#1C120B] rounded-3xl p-6 sm:p-8 border border-[#D49B43]/25 shadow-2xl space-y-6">
        
        {/* Section 1: Founder & Brand */}
        <div className="space-y-4">
          <h3 className="font-['Rozha_One'] text-lg text-[#F7D78A] pb-2 border-b border-white/10">
            १. संस्थापक व ब्रँड नाव
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1 font-marathi">
                संस्थापक नाव (मराठी)
              </label>
              <input
                type="text"
                value={config.founderMarathi}
                onChange={(e) => setConfig({ ...config, founderMarathi: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D49B43]"
              />
            </div>

            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1 font-sans">
                Founder Name (English)
              </label>
              <input
                type="text"
                value={config.founderName}
                onChange={(e) => setConfig({ ...config, founderName: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D49B43]"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Contact & Social Media */}
        <div className="space-y-4">
          <h3 className="font-['Rozha_One'] text-lg text-[#F7D78A] pb-2 border-b border-white/10">
            २. संपर्क व सोशल मीडिया लिंक्स
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1">
                WhatsApp API Number
              </label>
              <input
                type="text"
                value={config.whatsappNumber}
                onChange={(e) => setConfig({ ...config, whatsappNumber: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1">
                Phone Display Number
              </label>
              <input
                type="text"
                value={config.phoneDisplay}
                onChange={(e) => setConfig({ ...config, phoneDisplay: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1">
                Instagram Handle
              </label>
              <input
                type="text"
                value={config.instagramHandle}
                onChange={(e) => setConfig({ ...config, instagramHandle: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#EFE8DD]/80 mb-1 font-marathi">
              किचन पत्ता (Address Details)
            </label>
            <input
              type="text"
              value={config.address}
              onChange={(e) => setConfig({ ...config, address: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white font-marathi"
            />
          </div>
        </div>

        {/* Section 3: Delivery Fees & UPI */}
        <div className="space-y-4">
          <h3 className="font-['Rozha_One'] text-lg text-[#F7D78A] pb-2 border-b border-white/10">
            ३. डिलिव्हरी व पेमेंट नियम
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1">
                Free Delivery Above (₹)
              </label>
              <input
                type="number"
                value={config.freeDeliveryThreshold}
                onChange={(e) => setConfig({ ...config, freeDeliveryThreshold: Number(e.target.value) })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white font-mono font-bold"
              />
            </div>

            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1">
                Standard Delivery Charge (₹)
              </label>
              <input
                type="number"
                value={config.deliveryFee}
                onChange={(e) => setConfig({ ...config, deliveryFee: Number(e.target.value) })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white font-mono font-bold"
              />
            </div>

            <div>
              <label className="block text-xs text-[#EFE8DD]/80 mb-1">
                Merchant UPI ID
              </label>
              <input
                type="text"
                value={config.upiId}
                onChange={(e) => setConfig({ ...config, upiId: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#261A12] border border-[#D49B43]/40 rounded-xl text-xs sm:text-sm text-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#ECC876] to-[#D49B43] text-[#160F0A] font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>सेटिंग्ज सेव्ह करा (Save Configuration)</span>
          </button>
        </div>

      </form>
    </div>
  );
}
