/**
 * Centralized Demo Products & Menu Catalog
 * Hemlata Desale – घरगुती स्वाद
 * 
 * All sample items and pricing are configured here.
 * Easily replace or update dishes, prices, descriptions, and images.
 */

export const categories = [
  { id: "all", nameMarathi: "सर्व पदार्थ", nameEnglish: "All Items" },
  { id: "veg", nameMarathi: "शाकाहारी", nameEnglish: "Vegetarian" },
  { id: "non-veg", nameMarathi: "मांसाहारी", nameEnglish: "Non-Veg" },
  { id: "specials", nameMarathi: "घरगुती स्पेशल", nameEnglish: "Specials" },
];

export const sampleProducts = [
  {
    id: "dish-1",
    nameMarathi: "स्पेशल पुरणपोळी थाळी",
    nameEnglish: "Special Puran Poli Thali",
    descriptionMarathi: "२ साजूक तुपातील मऊ पुरणपोळी, खमंग कटाची आमटी, सुकी बटाटा भाजी, तळलेली कुरडई व इंद्रायणी भात.",
    descriptionEnglish: "2 Soft Puran Polis with pure ghee, spicy Katachi Amti, potato dry bhaji, crisp Kurdai & Indrayani rice.",
    price: 240,
    category: "veg",
    subcategories: ["veg", "specials"],
    isVeg: true,
    spiceLevel: "medium",
    prepTime: "३०-३५ मिनिटे",
    portion: "१ पूर्ण थाळी",
    isBestseller: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80",
    tags: ["साजूक तूप", "घरगुती स्पेशल"]
  },
  {
    id: "dish-2",
    nameMarathi: "अस्सल गावराण मटण रस्सा थाळी",
    nameEnglish: "Authentic Mutton Rassa & Bhakri Thali",
    descriptionMarathi: "पारंपरिक काळ्या मसाल्यातील मटण सुक्का, तर्रीदार काळा/तांबडा रस्सा, २ गरमागरम बाजरीची भाकरी व आळणी भात.",
    descriptionEnglish: "Slow-cooked mutton sukka in black masala, authentic rassa curry, 2 hot Bajra bhakris & aromatic rice.",
    price: 360,
    category: "non-veg",
    subcategories: ["non-veg", "specials"],
    isVeg: false,
    spiceLevel: "spicy",
    prepTime: "४० मिनिटे",
    portion: "१ स्पेशल थाळी",
    isBestseller: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=80",
    tags: ["झणझणीत", "खान्देशी चव"]
  },
  {
    id: "dish-3",
    nameMarathi: "गावरान चिकन सुक्का व भाकरी",
    nameEnglish: "Desi Chicken Sukka with Bhakri",
    descriptionMarathi: "घरगुती खमंग वाटणातील चिकन सुक्का, गरमागरम चिकन रस्सा, २ ज्वारी/बाजरी भाकरी व कांदा-लिंबू.",
    descriptionEnglish: "Country chicken sautéed in freshly ground roasted spices, flavourful gravy, 2 fresh bhakris & salad.",
    price: 280,
    category: "non-veg",
    subcategories: ["non-veg"],
    isVeg: false,
    spiceLevel: "spicy",
    prepTime: "३५ मिनिटे",
    portion: "१ थाळी",
    isBestseller: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80",
    tags: ["घरगुती वाटण", "लोकप्रिय"]
  },
  {
    id: "dish-4",
    nameMarathi: "झुणका / पिठलं भाकरी व खमंग ठेचा",
    nameEnglish: "Traditional Pithla Bhakri & Thecha",
    descriptionMarathi: "लसणाची खमंग फोडणी दिलेले गरमागरम पिठलं, २ चुलीवर भाजलेली बाजरी भाकरी, हिरव्या मिरचीचा ठेचा व शेंगदाणा चटणी.",
    descriptionEnglish: "Comforting gram flour pithla with garlic tadka, 2 rustic Bajra bhakris, fiery green chilli thecha & chutney.",
    price: 160,
    category: "veg",
    subcategories: ["veg", "specials"],
    isVeg: true,
    spiceLevel: "medium",
    prepTime: "२५ मिनिटे",
    portion: "१ थाळी",
    isBestseller: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
    tags: ["पारंपरिक", "खमंग"]
  },
  {
    id: "dish-5",
    nameMarathi: "वांग्याचं खमंग भरीत व भाकरी",
    nameEnglish: "Smoked Vangi Bharit & Bhakri Thali",
    descriptionMarathi: "चुलीवर भाजलेल्या गावठी वांग्याचे शेंगदाणा-लसूण फोडणीचे भरीत, २ बाजरी भाकरी, तळलेली मिरची आणि दही.",
    descriptionEnglish: "Charcoal-roasted spiced eggplant mash with peanuts and garlic, served with 2 bhakris and curd.",
    price: 180,
    category: "veg",
    subcategories: ["veg"],
    isVeg: true,
    spiceLevel: "medium",
    prepTime: "२५ मिनिटे",
    portion: "१ थाळी",
    isBestseller: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    tags: ["चुलीवरची चव"]
  },
  {
    id: "dish-6",
    nameMarathi: "उकडीचे मोदक (६ नग - साजूक तूप)",
    nameEnglish: "Steamed Ukadiche Modak (6 Pcs)",
    descriptionMarathi: "तांदळाच्या उकडीमध्ये ओल्या नारळाचे आणि सेंद्रिय गुळाचे वेलचीयुक्त सारण भरलेले पारंपरिक उकडीचे मोदक.",
    descriptionEnglish: "6 Traditional steamed rice flour dumplings filled with fresh grated coconut, cardamom and organic jaggery.",
    price: 210,
    category: "veg",
    subcategories: ["veg", "specials"],
    isVeg: true,
    spiceLevel: "mild",
    prepTime: "४० मिनिटे",
    portion: "६ नग (बॉक्स)",
    isBestseller: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    tags: ["सणासुदीचा गोडवा", "ताजे"]
  },
  {
    id: "dish-7",
    nameMarathi: "घरगुती साधी वरण-भात व पोळी डबा",
    nameEnglish: "Daily Homemade Dal-Rice & Roti Meal",
    descriptionMarathi: "४ मऊ चपात्या/फुलके, रोजची डाळ/वरण, ताज्या भाजीची वाटी, इंद्रायणी भात आणि लिंबू-लोणचं.",
    descriptionEnglish: "Wholesome daily home tiffin: 4 soft rotis, freshly cooked subji, authentic varan, rice & pickle.",
    price: 150,
    category: "veg",
    subcategories: ["veg"],
    isVeg: true,
    spiceLevel: "mild",
    prepTime: "२० मिनिटे",
    portion: "१ डबा (१ व्यक्ती)",
    isBestseller: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    tags: ["रोजचा डबा", "सात्विक"]
  },
  {
    id: "dish-8",
    nameMarathi: "खान्देशी शेवभाजी व चपाती थाळी",
    nameEnglish: "Khandeshi Shev Bhaji & Chapati Thali",
    descriptionMarathi: "झणझणीत तिखट रश्श्यातली अस्सल खान्देशी जाड शेवभाजी, ४ मऊ चपाती, भात आणि कांदा-काकडी कोशिंबीर.",
    descriptionEnglish: "Authentic spicy Khandeshi gravy with crispy shev, 4 soft whole wheat chapatis, steamed rice & koshimbir.",
    price: 170,
    category: "veg",
    subcategories: ["veg"],
    isVeg: true,
    spiceLevel: "spicy",
    prepTime: "२५ मिनिटे",
    portion: "१ थाळी",
    isBestseller: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80",
    tags: ["झणझणीत", "खान्देशी"]
  }
];

export default sampleProducts;
