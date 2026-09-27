import brand from './brand';

/**
 * Backward compatibility bridge for brandConfig.js
 * Imports from the new centralized brand.js and provides all required structures.
 */
export const brandConfig = {
  brandNameMarathi: brand.nameMarathi,
  brandNameEnglish: brand.nameEnglish,
  founderNameMarathi: brand.founderNameMarathi,
  founderNameEnglish: brand.founderNameEnglish,

  taglineMarathi: brand.taglineMarathi,
  taglineEnglish: brand.taglineEnglish,

  subTaglineMarathi: brand.subheadlineMarathi,
  subTaglineEnglish: brand.subheadlineEnglish,

  description: brand.descriptionMarathi,

  contact: {
    whatsappNumber: brand.contact.whatsappNumber,
    whatsappDisplay: brand.contact.whatsappDisplay,
    phoneDisplay: brand.contact.phone,
    email: brand.contact.email,
    instagramHandle: brand.contact.instagramHandle,
    instagramUrl: brand.contact.instagramUrl,
    addressMarathi: brand.contact.addressMarathi,
    addressEnglish: brand.contact.addressEnglish,
    city: "Nashik, Maharashtra",
    pincode: brand.contact.pincode,
    operatingHours: {
      lunch: brand.hours.lunch,
      dinner: brand.hours.dinner,
      preOrderNotice: brand.hours.preOrderNotice,
      days: brand.hours.workingDays,
    }
  },

  ordering: {
    minimumOrderValue: brand.ordering.minOrderValue,
    freeDeliveryThreshold: brand.ordering.freeDeliveryAbove,
    standardDeliveryFee: brand.ordering.standardDeliveryFee,
    packagingFee: brand.ordering.packagingFee,
    estimatedDeliveryTime: brand.ordering.deliveryTimeMinutes,
    upiId: brand.ordering.upiId,
    acceptingOrders: true,
    currencySymbol: brand.ordering.currency,
  },

  stats: {
    happyFamilies: "२,५००+",
    recipesMastered: "४०+",
    homemadeSpices: "१००% शुद्ध",
    rating: "४.९ / ५",
  },

  pillars: [
    {
      id: 1,
      title: "घरगुती चव",
      subtitle: "Homemade Taste",
      description: "कुठल्याही कृत्रिम रंगांशिवाय व प्रिझर्वेटिव्हशिवाय बनवलेले अस्सल पारंपरिक जेवण.",
      icon: "Home",
    },
    {
      id: 2,
      title: "ताजे घटक",
      subtitle: "Fresh Ingredients",
      description: "दररोज बाजारातून आणलेल्या ताज्या भाज्या आणि स्वतः घरी कुटलेले अस्सल मसाले.",
      icon: "Leaf",
    },
    {
      id: 3,
      title: "स्वच्छ तयारी",
      subtitle: "Clean Preparation",
      description: "घरासारखीच अत्यंत स्वच्छ, सुरक्षित आणि आटोपशीर स्वयंपाकघरातील तयारी.",
      icon: "ShieldCheck",
    },
    {
      id: 4,
      title: "प्रेमाने बनवलेले",
      subtitle: "Made with Love",
      description: "आईच्या हातच्या मायेची गोडी आणि प्रत्येक घासात तृप्ती देणारा स्वाद.",
      icon: "Heart",
    },
  ],
};

export default brandConfig;
