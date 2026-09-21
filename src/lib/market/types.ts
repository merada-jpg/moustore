export const CATEGORIES = [
  { id: "fashion", label: "أناقة وملابس" },
  { id: "electronics", label: "إلكترونيات" },
  { id: "home", label: "منزل ومطبخ" },
  { id: "food", label: "قهوة وغذاء" },
  { id: "beauty", label: "عناية" },
  { id: "other", label: "أخرى" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const PRODUCT_ART = [
  "watch",
  "bag",
  "scarf",
  "headphones",
  "powerbank",
  "lamp",
  "coffee",
  "spices",
  "generic",
] as const;

export type ProductArtId = (typeof PRODUCT_ART)[number];

export type Product = {
  id: string;
  title: string;
  price: number;
  desc: string;
  art: ProductArtId;
  imageUrl: string;
  stock: number;
  category: CategoryId;
  featured: boolean;
  active: boolean;
};

export type Store = {
  id: string;
  name: string;
  owner: string;
  phone: string;
  email: string;
  wilaya: string;
  category: CategoryId;
  seed: boolean;
  active: boolean;
  products: Product[];
};

export const PLATFORM = {
  phone: "213775554695",
  phoneDisplay: "0775 55 46 95",
  email: "merada35@gmail.com",
} as const;

export const STORAGE_KEY = "souk_dz_market_v1";
