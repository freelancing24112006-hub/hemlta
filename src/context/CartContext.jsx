import React, { createContext, useContext, useState, useEffect } from 'react';
import brandConfig from '../config/brandConfig';
import { useToast } from './ToastContext';

const CartContext = createContext();

const STORAGE_KEY = 'gharguti_swad_cart_items';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
    return [];
  });

  const { addToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    if (!product.isAvailable) {
      addToast("हा पदार्थ सध्या संपला आहे!", "error");
      return;
    }

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            nameMarathi: product.nameMarathi,
            nameEnglish: product.nameEnglish,
            price: product.price,
            image: product.image,
            isVeg: product.isVeg,
            portion: product.portion,
            quantity: quantity,
          },
        ];
      }
    });

    addToast(`"${product.nameMarathi}" कार्टमध्ये जोडले गेले! (${quantity})`, "success");
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    if (item) {
      addToast(`"${item.nameMarathi}" कार्टमधून काढले.`, "info");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const deliveryFee =
    cartSubtotal === 0
      ? 0
      : cartSubtotal >= brandConfig.ordering.freeDeliveryThreshold
      ? 0
      : brandConfig.ordering.standardDeliveryFee;

  const packagingFee = cartSubtotal > 0 ? brandConfig.ordering.packagingFee : 0;
  const grandTotal = cartSubtotal + deliveryFee + packagingFee;

  const freeDeliveryRemaining = Math.max(
    0,
    brandConfig.ordering.freeDeliveryThreshold - cartSubtotal
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        deliveryFee,
        packagingFee,
        grandTotal,
        freeDeliveryRemaining,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
