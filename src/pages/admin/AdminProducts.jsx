import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Check, X, RotateCcw, Sparkles, Flame, Eye } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { VegBadge, SpiceLevelBadge } from '../../components/common/Badge';
import Modal from '../../components/common/Modal';

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct, toggleAvailability, resetToDefaults } = useProducts();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState({
    nameMarathi: '',
    nameEnglish: '',
    descriptionMarathi: '',
    descriptionEnglish: '',
    price: '',
    category: 'veg',
    isVeg: true,
    spiceLevel: 'medium',
    portion: '१ पूर्ण थाळी',
    prepTime: '३० मिनिटे',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
  });

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setForm({
      nameMarathi: '',
      nameEnglish: '',
      descriptionMarathi: '',
      descriptionEnglish: '',
      price: '',
      category: 'veg',
      isVeg: true,
      spiceLevel: 'medium',
      portion: '१ पूर्ण थाळी',
      prepTime: '३० मिनिटे',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (prod) => {
    setEditingProduct(prod);
    setForm({
      nameMarathi: prod.nameMarathi,
      nameEnglish: prod.nameEnglish,
      descriptionMarathi: prod.descriptionMarathi,
      descriptionEnglish: prod.descriptionEnglish || '',
      price: prod.price,
      category: prod.category,
      isVeg: prod.isVeg,
      spiceLevel: prod.spiceLevel || 'medium',
      portion: prod.portion || '१ थाळी',
      prepTime: prod.prepTime || '३० मिनिटे',
      image: prod.image,
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.nameMarathi.trim() || !form.price) return;

    const payload = {
      ...form,
      price: Number(form.price),
      isVeg: form.category === 'veg' || form.category === 'snacks' ? form.isVeg : false,
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, payload);
    } else {
      addProduct(payload);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D49B43]/20">
        <div>
          <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-[#F7D78A]">
            मेनू व पदार्थ व्यवस्थापन (Product Catalog)
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE8DD]/70 font-marathi">
            पदार्थांची किंमत बदला, उपलब्धता (Stock) चालू/बंद करा किंवा नवीन पदार्थ जोडा.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetToDefaults}
            className="px-3.5 py-2.5 rounded-xl bg-[#24170E] border border-white/10 text-xs text-[#EFE8DD]/70 hover:text-white flex items-center gap-1.5 transition-colors"
            title="Reset catalog to sample items"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>

          <button
            onClick={handleOpenAdd}
            className="px-5 py-2.5 bg-gradient-to-r from-[#ECC876] to-[#D49B43] text-[#160F0A] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>नवीन पदार्थ जोडा (Add New)</span>
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-[#1C120B] rounded-3xl border border-[#D49B43]/25 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#261A12] border-b border-[#D49B43]/20 text-[#D49B43] uppercase text-[11px] font-bold tracking-wider font-sans">
                <th className="py-4 px-4 sm:px-6">पदार्थ (Item Details)</th>
                <th className="py-4 px-4">प्रवर्ग (Category)</th>
                <th className="py-4 px-4">किंमत (Price)</th>
                <th className="py-4 px-4 text-center">उपलब्धता (Stock)</th>
                <th className="py-4 px-4 sm:px-6 text-right">कृती (Actions)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D49B43]/15">
              {products.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-colors">
                  
                  {/* Item info */}
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.image}
                        alt={item.nameMarathi}
                        className="w-12 h-12 rounded-xl object-cover border border-[#D49B43]/20 shrink-0"
                      />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <VegBadge isVeg={item.isVeg} />
                          <h4 className="font-bold text-sm text-white font-marathi">
                            {item.nameMarathi}
                          </h4>
                        </div>
                        <p className="text-xs text-[#EFE8DD]/60 font-sans">
                          {item.nameEnglish}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4">
                    <span className="bg-[#24170E] text-[#D49B43] px-2.5 py-1 rounded-lg border border-[#D49B43]/20 text-xs font-marathi">
                      {item.category === 'veg' ? 'शाकाहारी थाळी' : item.category === 'non-veg' ? 'मांसाहारी' : 'स्नॅक्स/मिष्टान्न'}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4 font-serif font-bold text-base text-[#F7D78A]">
                    ₹{item.price}
                  </td>

                  {/* Availability Toggle */}
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                        item.isAvailable
                          ? 'bg-emerald-950 text-emerald-400 border-emerald-600/40 hover:bg-emerald-900'
                          : 'bg-red-950 text-red-400 border-red-600/40 hover:bg-red-900'
                      }`}
                    >
                      {item.isAvailable ? 'सुरू (In Stock)' : 'बंद (Out of Stock)'}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="p-2 text-[#D49B43] hover:text-white hover:bg-[#D49B43]/20 rounded-lg transition-colors"
                        title="बदल करा (Edit)"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`खरोखर "${item.nameMarathi}" मेनूमधून काढायचे आहे का?`)) {
                            deleteProduct(item.id);
                          }
                        }}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                        title="काढून टाका (Delete)"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Dish Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProduct ? "पदार्थात बदल करा" : "नवीन पदार्थ जोडा"}
        subtitle="घरगुती स्वाद मेनू कार्ड"
      >
        <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
                पदार्थाचे नाव (मराठीत) *
              </label>
              <input
                type="text"
                required
                value={form.nameMarathi}
                onChange={(e) => setForm({ ...form, nameMarathi: e.target.value })}
                placeholder="उदा. स्पेशल पुरणपोळी थाळी"
                className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
                Name (English)
              </label>
              <input
                type="text"
                value={form.nameEnglish}
                onChange={(e) => setForm({ ...form, nameEnglish: e.target.value })}
                placeholder="e.g. Special Puran Poli Thali"
                className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
                किंमत (Price in ₹) *
              </label>
              <input
                type="number"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="260"
                className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-sm font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
                प्रवर्ग (Category)
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value, isVeg: e.target.value !== 'non-veg' })}
                className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-sm"
              >
                <option value="veg">शाकाहारी (Veg)</option>
                <option value="non-veg">मांसाहारी (Non-Veg)</option>
                <option value="snacks">स्नॅक्स व मिष्टान्न (Snacks/Sweets)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
                तिखट प्रमाण (Spice)
              </label>
              <select
                value={form.spiceLevel}
                onChange={(e) => setForm({ ...form, spiceLevel: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-sm"
              >
                <option value="mild">मऊ / गोड (Mild)</option>
                <option value="medium">मध्यम (Medium)</option>
                <option value="spicy">झणझणीत (Spicy)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
              माहिती व घटक (मराठीत वर्णन) *
            </label>
            <textarea
              rows="2"
              value={form.descriptionMarathi}
              onChange={(e) => setForm({ ...form, descriptionMarathi: e.target.value })}
              placeholder="उदा. २ गरमागरम पुरणपोळी (साजूक तूप), कटाची आमटी, बटाटा भाजी..."
              className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-sm font-marathi"
            ></textarea>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A120B] mb-1 font-marathi">
              फोटो लिंक (Image URL)
            </label>
            <input
              type="url"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full px-3.5 py-2 bg-white border border-[#D49B43]/40 rounded-xl text-xs font-mono"
            />
          </div>

          <div className="pt-3 flex justify-end gap-3 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-gray-600"
            >
              रद्द करा
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#D49B43] hover:bg-[#ECC876] text-[#160F0A] font-bold text-xs rounded-xl shadow"
            >
              {editingProduct ? 'बदल सेव्ह करा' : 'पदार्थ मेनूमध्ये जोडा'}
            </button>
          </div>

        </form>
      </Modal>

    </div>
  );
}
