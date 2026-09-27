import { categories as prodCategories, sampleProducts } from './products';

export const categories = [
  { id: "all", nameMarathi: "सर्व पदार्थ", nameEnglish: "All Items", icon: "Utensils" },
  { id: "veg", nameMarathi: "शाकाहारी", nameEnglish: "Vegetarian Thali & Sabji", icon: "Leaf" },
  { id: "non-veg", nameMarathi: "मांसाहारी", nameEnglish: "Authentic Non-Veg", icon: "Drumstick" },
  { id: "specials", nameMarathi: "घरगुती स्पेशल", nameEnglish: "Chef's Specials", icon: "Sparkles" },
];

export const initialMenuItems = sampleProducts;
export default initialMenuItems;
