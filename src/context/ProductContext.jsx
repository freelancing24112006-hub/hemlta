import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialMenuItems } from '../data/menuData';
import { useToast } from './ToastContext';

const ProductContext = createContext();

const STORAGE_KEY = 'gharguti_swad_menu_products';

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load products from localStorage", e);
    }
    return initialMenuItems;
  });

  const { addToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
      console.error("Failed to save products to localStorage", e);
    }
  }, [products]);

  const addProduct = (newProduct) => {
    const id = `dish-${Date.now()}`;
    const productWithId = {
      ...newProduct,
      id,
      isAvailable: true,
      subcategories: newProduct.subcategories || [newProduct.category, 'available-today'],
    };
    setProducts((prev) => [productWithId, ...prev]);
    addToast(`"${productWithId.nameMarathi}" मेनूमध्ये जोडले गेले!`, 'success');
    return productWithId;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
    addToast("मेनू तपशील यशस्वीरीत्या बदलले गेले!", 'success');
  };

  const deleteProduct = (id) => {
    const item = products.find((p) => p.id === id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
    addToast(`"${item?.nameMarathi || 'पदार्थ'}" मेनूमधून काढले गेले!`, 'info');
  };

  const toggleAvailability = (id) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newStatus = !item.isAvailable;
          addToast(
            `"${item.nameMarathi}" आता ${newStatus ? 'उपलब्ध (Available)' : 'अनुपलब्ध (Out of Stock)'} आहे.`,
            'info'
          );
          return { ...item, isAvailable: newStatus };
        }
        return item;
      })
    );
  };

  const resetToDefaults = () => {
    setProducts(initialMenuItems);
    localStorage.removeItem(STORAGE_KEY);
    addToast("मेनू मूळ स्थितीत रिसेट करण्यात आला!", 'info');
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleAvailability,
        resetToDefaults,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
