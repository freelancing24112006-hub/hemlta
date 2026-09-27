import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Instagram } from '../components/common/SocialIcons';
import brand from '../config/brand';
import { useToast } from '../context/ToastContext';

export default function ContactPage() {
  const { addToast } = useToast();
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: 'सामान्य विचारणा (General Inquiry)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('तुमचा मेसेज मिळाला आहे! आम्ही लवकरच संपर्क करू.', 'success');
  };

  const directWhatsAppUrl = `https://wa.me/${brand.contact.whatsappNumber}?text=${encodeURIComponent(
    `नमस्कार! मला घरगुती स्वाद मधील पदार्थांविषयी विचारणा करायची आहे.`
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      
      {/* Header */}
      <section className="bg-white border-b border-[#EFE8DD] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#B07A25]"></span>
              <span className="text-xs font-bold tracking-widest text-[#8B5E14] uppercase font-sans">
                Contact & Inquiries
              </span>
            </div>
            <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-[#2C1E16] leading-tight">
              आमच्याशी संपर्क साधा
            </h1>
            <p className="text-sm sm:text-base text-[#6B5545] font-marathi">
              ऑर्डर, घरगुती कार्यक्रम किंवा पदार्थांविषयी कोणतीही विचारणा असल्यास आम्हाला थेट कॉल किंवा WhatsApp करा.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DCB8] shadow-2xs space-y-5">
              <h3 className="font-['Rozha_One'] text-xl text-[#2C1E16] pb-3 border-b border-[#EFE8DD]">
                थेट संपर्क माहिती
              </h3>

              <div className="space-y-4 text-sm text-[#523E30] font-marathi">
                
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8C7462] block">WhatsApp ऑर्डर / चॅट</span>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#2C1E16] hover:text-[#25D366] text-base"
                    >
                      {brand.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0DB] text-[#8B5E14] flex items-center justify-center shrink-0 border border-[#E8DCB8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8C7462] block">थेट फोन कॉल</span>
                    <a
                      href={`tel:${brand.contact.whatsappNumber}`}
                      className="font-bold text-[#2C1E16] hover:text-[#B07A25] text-base"
                    >
                      {brand.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0DB] text-[#C8822B] flex items-center justify-center shrink-0 border border-[#E8DCB8]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8C7462] block">Instagram</span>
                    <a
                      href={brand.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#2C1E16] hover:text-[#C8822B] text-base"
                    >
                      @{brand.contact.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#8B5E14] flex items-center justify-center shrink-0 border border-[#E8DCB8]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8C7462] block">स्वयंपाकघर पत्ता</span>
                    <p className="font-semibold text-[#2C1E16]">
                      {brand.contact.addressMarathi}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#8B5E14] flex items-center justify-center shrink-0 border border-[#E8DCB8]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8C7462] block">वेळ व दिवस</span>
                    <p className="font-semibold text-[#2C1E16]">{brand.hours.workingDays}</p>
                    <p className="text-xs text-[#6B5545]">{brand.hours.lunch} | {brand.hours.dinner}</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DCB8] shadow-2xs space-y-5">
              <h3 className="font-['Rozha_One'] text-xl text-[#2C1E16] pb-3 border-b border-[#EFE8DD]">
                संदेश पाठवा (Send an Inquiry)
              </h3>

              {submitted ? (
                <div className="p-8 text-center space-y-3 font-marathi">
                  <div className="w-12 h-12 rounded-full bg-[#E7F3EC] text-[#3D6B52] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-['Rozha_One'] text-xl text-[#2C1E16]">
                    धन्यवाद! संदेश मिळाला आहे.
                  </h4>
                  <p className="text-xs text-[#6B5545]">
                    आम्ही लवकरच तुमच्या मोबाईल नंबरवर संपर्क करू.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-[#B07A25] underline font-bold"
                  >
                    आणखी एक संदेश पाठवा
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 font-marathi">
                  <div>
                    <label className="block text-xs font-bold text-[#2C1E16] mb-1">
                      तुमचे नाव *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="उदा. सचिन पाटील"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C1E16] mb-1">
                      मोबाईल नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="उदा. 98900 12345"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C1E16] mb-1">
                      विषय
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                    >
                      <option value="सामान्य विचारणा (General Inquiry)">सामान्य विचारणा</option>
                      <option value="मोठी / बल्क ऑर्डर (Bulk Catering)">मोठी / सणाची बल्क ऑर्डर</option>
                      <option value="डिलिव्हरी परिसर विचारणा">डिलिव्हरी परिसर विचारणा</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C1E16] mb-1">
                      संदेश / विचारणा *
                    </label>
                    <textarea
                      rows="3"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="तुमची विचारणा येथे लिहा..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#DCD3C4] rounded-xl text-xs text-[#2C1E16] focus:outline-none focus:ring-1 focus:ring-[#B07A25]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#B07A25] hover:bg-[#96651B] text-white text-xs font-bold rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>संदेश पाठवा (Submit Inquiry)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
