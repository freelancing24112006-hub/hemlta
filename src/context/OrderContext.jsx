import React, { createContext, useContext, useState, useEffect } from 'react';
import brandConfig from '../config/brandConfig';
import { useToast } from './ToastContext';

const OrderContext = createContext();

const STORAGE_KEY = 'gharguti_swad_customer_orders';

// Initial realistic orders for demo and admin preview
const initialSampleOrders = [
  {
    id: "HG9241",
    customerName: "प्रियांका कुलकर्णी",
    phone: "98221 44556",
    address: "फ्लॅट ४०२, सिद्धिविनायक पार्क, कॉलेज रोड",
    landmark: "केटीएचएम कॉलेज जवळ",
    city: "नाशिक",
    pincode: "422005",
    items: [
      { id: "dish-1", nameMarathi: "स्पेशल महाराष्ट्रीयन पुरणपोळी थाळी", price: 260, quantity: 2, isVeg: true },
      { id: "dish-6", nameMarathi: "साजूक तुपातील उकडीचे मोदक (४ नग)", price: 180, quantity: 1, isVeg: true }
    ],
    subtotal: 700,
    packagingFee: 15,
    deliveryFee: 0,
    grandTotal: 715,
    paymentMethod: "UPI (Paid Online)",
    specialInstructions: "कटाची आमटी थोडी झणझणीत हवी.",
    status: "Preparing", // Pending, Confirmed, Preparing, Out for Delivery, Delivered, Cancelled
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(), // 25 mins ago
    estimatedDeliveryTime: "३० मिनिटांत"
  },
  {
    id: "HG9238",
    customerName: "सचिन पाटील",
    phone: "98902 33112",
    address: "बंगला नं १२, गंगापूर रोड, पाईपलाईन रोड कॉर्नर",
    landmark: "नवश्या गणपती जवळ",
    city: "नाशिक",
    pincode: "422013",
    items: [
      { id: "dish-2", nameMarathi: "अस्सल गावराण मटण रस्सा व भाकरी थाळी", price: 380, quantity: 2, isVeg: false },
      { id: "dish-7", nameMarathi: "कुरकुरीत तळलेली खमंग कोथिंबीर वडी (८ तुकडे)", price: 130, quantity: 1, isVeg: true }
    ],
    subtotal: 890,
    packagingFee: 15,
    deliveryFee: 0,
    grandTotal: 905,
    paymentMethod: "Cash on Delivery",
    specialInstructions: "भाकरी गरम असाव्यात.",
    status: "Out for Delivery",
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    estimatedDeliveryTime: "१० मिनिटांत"
  },
  {
    id: "HG9219",
    customerName: "स्नेहल जोशी",
    phone: "94227 88990",
    address: "रो हाऊस नं ५, सह्याद्री सोसायटी, महात्मा नगर",
    landmark: "वॉटर टँक समोर",
    city: "नाशिक",
    pincode: "422007",
    items: [
      { id: "dish-4", nameMarathi: "पारंपरिक पिठलं भाकरी आणि खमंग ठेचा थाळी", price: 170, quantity: 2, isVeg: true },
      { id: "dish-12", nameMarathi: "अस्सल घरगुती शेंगदाणा-लसूण चटणी (२०० ग्रॅम बाटली)", price: 110, quantity: 1, isVeg: true }
    ],
    subtotal: 450,
    packagingFee: 15,
    deliveryFee: 40,
    grandTotal: 505,
    paymentMethod: "UPI (Google Pay)",
    specialInstructions: "ठेचा चांगला तिखट करा.",
    status: "Delivered",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    estimatedDeliveryTime: "डिलिव्हर झाले"
  }
];

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load orders from localStorage", e);
    }
    return initialSampleOrders;
  });

  const { addToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error("Failed to save orders to localStorage", e);
    }
  }, [orders]);

  const generateOrderId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `HG${randomNum}`;
  };

  const placeOrder = (orderData) => {
    const newOrderId = generateOrderId();
    const newOrder = {
      ...orderData,
      id: newOrderId,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
      estimatedDeliveryTime: brandConfig.ordering.estimatedDeliveryTime,
    };

    setOrders((prev) => [newOrder, ...prev]);
    addToast(`तुमची ऑर्डर #${newOrderId} यशस्वीरित्या नोंदवली गेली! ❤️`, "success", 5000);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    addToast(`ऑर्डर #${orderId} चे स्टेटस बदलून "${newStatus}" झाले.`, "info");
  };

  const getOrderById = (orderId) => {
    return orders.find((o) => o.id === orderId);
  };

  /**
   * Generates a pre-filled WhatsApp link with the entire order summary
   */
  const generateWhatsAppOrderUrl = (order) => {
    const itemsList = order.items
      .map((item) => `• ${item.nameMarathi} x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('\n');

    const message = 
`*घरगुती स्वाद - नवीन जेवण ऑर्डर* 🍲
*ऑर्डर आयडी:* #${order.id || 'नवीन'}
----------------------------------
*ग्राहक नाव:* ${order.customerName}
*मोबाईल नंबर:* ${order.phone}
*डिलिव्हरी पत्ता:* ${order.address}${order.landmark ? ', जवळ: ' + order.landmark : ''}, ${order.city} - ${order.pincode}

*ऑर्डर केलेले पदार्थ:*
${itemsList}

----------------------------------
*एकूण पदार्थ मूल्य:* ₹${order.subtotal}
*पॅकेजिंग शुल्क:* ₹${order.packagingFee}
*डिलिव्हरी शुल्क:* ₹${order.deliveryFee === 0 ? 'मोफत (FREE)' : '₹' + order.deliveryFee}
*एकूण बिल (Grand Total): ₹${order.grandTotal}*
----------------------------------
*पेमेंट पद्धत:* ${order.paymentMethod}
${order.specialInstructions ? `*विशेष सूचना:* ${order.specialInstructions}\n` : ''}
कृपया माझी ऑर्डर कन्फर्म करून अंदाजे वेळ कळवावी. धन्यवाद! 🙏`;

    return `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        updateOrderStatus,
        getOrderById,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
