import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SEED_STORES } from "./seed";
import { hashPin, normalizeAlgerianMobile } from "./phone";
import { isSafeHttpsUrl } from "./format";
import {
  STORAGE_KEY,
  type CategoryId,
  type Product,
  type ProductArtId,
  type Store,
} from "./types";

type ProductInput = {
  title: string;
  price: number;
  desc: string;
  imageUrl: string;
  stock: number;
  category: CategoryId;
  art: ProductArtId;
  featured: boolean;
};

type StoreInput = {
  name: string;
  owner: string;
  phone: string;
  email: string;
  wilaya: string;
  category: CategoryId;
  pin: string;
};

type MarketState = {
  stores: Store[];
  pinByStoreId: Record<string, string>;
  sessionStoreId: string | null;
  publicStores: () => Store[];
  publicProducts: (store: Store) => Product[];
  findStore: (id: string) => Store | undefined;
  findProduct: (storeId: string, productId: string) => { store: Store; product: Product } | null;
  sessionStore: () => Store | null;
  createStore: (input: StoreInput) => Promise<string>;
  unlockStore: (phone: string, pin: string) => Promise<string>;
  logout: () => void;
  addProduct: (input: ProductInput) => string;
  updateProduct: (productId: string, input: ProductInput) => void;
  deleteProduct: (productId: string) => void;
};

function newId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function sanitizeProduct(input: ProductInput, id: string): Product {
  const price = Number(input.price);
  if (!Number.isInteger(price) || price < 1 || price > 100_000_000) {
    throw new Error("السعر يجب أن يكون رقماً صحيحاً بين 1 و 100000000");
  }
  const title = input.title.trim().slice(0, 120);
  if (title.length < 3) throw new Error("عنوان المنتج قصير جداً");
  const imageUrl = input.imageUrl.trim();
  if (imageUrl && !isSafeHttpsUrl(imageUrl)) {
    throw new Error("رابط الصورة يجب أن يبدأ بـ https://");
  }
  const stock = Number(input.stock);
  if (!Number.isInteger(stock) || stock < 0 || stock > 9999) {
    throw new Error("المخزون غير صالح");
  }
  return {
    id,
    title,
    price,
    desc: input.desc.trim().slice(0, 1000),
    art: input.art || "generic",
    imageUrl,
    stock,
    category: input.category,
    featured: Boolean(input.featured),
    active: true,
  };
}

const memoryStorage: Pick<Storage, "getItem" | "setItem" | "removeItem"> = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

export const useMarket = create<MarketState>()(
  persist(
    (set, get) => ({
      stores: SEED_STORES,
      pinByStoreId: {},
      sessionStoreId: null,

      publicStores: () => get().stores.filter((s) => s.active),

      publicProducts: (store) =>
        store.products.filter((p) => p.active && p.stock > 0),

      findStore: (id) => get().stores.find((s) => s.id === id),

      findProduct: (storeId, productId) => {
        const store = get().stores.find((s) => s.id === storeId && s.active);
        if (!store) return null;
        const product = store.products.find(
          (p) => p.id === productId && p.active && p.stock > 0,
        );
        if (!product) return null;
        return { store, product };
      },

      sessionStore: () => {
        const id = get().sessionStoreId;
        if (!id) return null;
        return get().stores.find((s) => s.id === id) ?? null;
      },

      createStore: async (input) => {
        const name = input.name.trim().slice(0, 80);
        const owner = input.owner.trim().slice(0, 80);
        if (name.length < 3 || owner.length < 3) {
          throw new Error("أدخل اسم المتجر واسم المالك (3 أحرف على الأقل)");
        }
        const phone = normalizeAlgerianMobile(input.phone);
        if (!phone) {
          throw new Error("أدخل رقماً جزائرياً للموبايل يبدأ بـ 05 أو 06 أو 07");
        }
        const email = input.email.trim().slice(0, 120);
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          throw new Error("البريد الإلكتروني غير صالح");
        }
        if (!/^\d{4}$/.test(input.pin)) {
          throw new Error("اختر رمزاً من 4 أرقام لحماية لوحة المتجر");
        }
        if (get().stores.some((s) => s.phone === phone && !s.seed)) {
          throw new Error("يوجد متجر مرتبط بهذا الرقم. استخدم الدخول بدلاً من الإنشاء");
        }
        const id = newId("store");
        const pinHash = await hashPin(id, input.pin);
        const store: Store = {
          id,
          name,
          owner,
          phone,
          email,
          wilaya: input.wilaya || "all",
          category: input.category,
          seed: false,
          active: true,
          products: [],
        };
        set((s) => ({
          stores: [store, ...s.stores],
          pinByStoreId: { ...s.pinByStoreId, [id]: pinHash },
          sessionStoreId: id,
        }));
        return id;
      },

      unlockStore: async (rawPhone, pin) => {
        const phone = normalizeAlgerianMobile(rawPhone);
        if (!phone) throw new Error("رقم الهاتف غير صالح");
        if (!/^\d{4}$/.test(pin)) throw new Error("الرمز يجب أن يكون 4 أرقام");
        const store = get().stores.find((s) => s.phone === phone && !s.seed);
        if (!store) throw new Error("لا يوجد متجر بهذا الرقم على هذا الجهاز");
        const expected = get().pinByStoreId[store.id];
        const given = await hashPin(store.id, pin);
        if (!expected || expected !== given) {
          throw new Error("رمز الدخول غير صحيح");
        }
        set({ sessionStoreId: store.id });
        return store.id;
      },

      logout: () => set({ sessionStoreId: null }),

      addProduct: (input) => {
        const session = get().sessionStore();
        if (!session || session.seed) throw new Error("لا توجد جلسة تاجر نشطة");
        const product = sanitizeProduct(input, newId("p"));
        set((s) => ({
          stores: s.stores.map((store) =>
            store.id === session.id
              ? { ...store, products: [product, ...store.products] }
              : store,
          ),
        }));
        return product.id;
      },

      updateProduct: (productId, input) => {
        const session = get().sessionStore();
        if (!session || session.seed) throw new Error("لا توجد جلسة تاجر نشطة");
        const current = session.products.find((p) => p.id === productId);
        if (!current) throw new Error("المنتج غير موجود");
        const product = sanitizeProduct(input, productId);
        set((s) => ({
          stores: s.stores.map((store) =>
            store.id === session.id
              ? {
                  ...store,
                  products: store.products.map((p) => (p.id === productId ? product : p)),
                }
              : store,
          ),
        }));
      },

      deleteProduct: (productId) => {
        const session = get().sessionStore();
        if (!session || session.seed) throw new Error("لا توجد جلسة تاجر نشطة");
        set((s) => ({
          stores: s.stores.map((store) =>
            store.id === session.id
              ? { ...store, products: store.products.filter((p) => p.id !== productId) }
              : store,
          ),
        }));
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (s) => ({
        stores: s.stores,
        pinByStoreId: s.pinByStoreId,
        sessionStoreId: s.sessionStoreId,
      }),
    },
  ),
);

export function featuredCatalog(stores: Store[]): { store: Store; product: Product }[] {
  const out: { store: Store; product: Product }[] = [];
  for (const store of stores.filter((s) => s.active)) {
    for (const product of store.products) {
      if (product.active && product.stock > 0 && product.featured) {
        out.push({ store, product });
      }
    }
  }
  return out.slice(0, 8);
}
