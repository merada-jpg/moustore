import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as hashPin, c as CATEGORIES, d as STORAGE_KEY, m as cn, o as normalizeAlgerianMobile } from "./router-CZSXmDK5.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-DvNPMUNM.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-cedar-soft px-2.5 py-0.5 text-xs font-medium text-cedar", className),
		children
	});
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl border border-border bg-card text-card-foreground shadow-soft", className),
		...props
	});
}
function CardBody({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-4", className),
		...props
	});
}
function formatDzd(price) {
	return new Intl.NumberFormat("ar-DZ", { maximumFractionDigits: 0 }).format(price);
}
function categoryLabel(id) {
	return CATEGORIES.find((c) => c.id === id)?.label ?? "أخرى";
}
function isSafeHttpsUrl(value) {
	if (!value) return true;
	try {
		return new URL(value).protocol === "https:";
	} catch {
		return false;
	}
}
function productPath(storeId, productId) {
	return `/p/${encodeURIComponent(storeId)}/${encodeURIComponent(productId)}`;
}
async function copyText(value) {
	try {
		await navigator.clipboard.writeText(value);
		return true;
	} catch {
		try {
			const el = document.createElement("textarea");
			el.value = value;
			el.setAttribute("readonly", "");
			el.style.position = "fixed";
			el.style.insetInlineStart = "-9999px";
			document.body.appendChild(el);
			el.select();
			const ok = document.execCommand("copy");
			document.body.removeChild(el);
			return ok;
		} catch {
			return false;
		}
	}
}
var SEED_STORES = [
	{
		id: "anaka",
		name: "متجر الأناقة الجزائرية",
		owner: "أمين بلال",
		phone: "213775554695",
		email: "merada35@gmail.com",
		wilaya: "16",
		category: "fashion",
		seed: true,
		active: true,
		products: [
			{
				id: "watch-noria",
				title: "ساعة يد مقاومة للماء",
				price: 6500,
				desc: "ساعة يومية بإطار معدني هادئ، مقاومة للماء، مع ضمان سنة وتوصيل داخل الولايات.",
				art: "watch",
				imageUrl: "",
				stock: 10,
				category: "fashion",
				featured: true,
				active: true
			},
			{
				id: "bag-casbah",
				title: "حقيبة ظهر جلد عملي",
				price: 4800,
				desc: "حقيبة تتسع لحاسوب محمول صغير، بطانات داخلية، مناسبة للعمل والتنقل اليومي.",
				art: "bag",
				imageUrl: "",
				stock: 5,
				category: "fashion",
				featured: true,
				active: true
			},
			{
				id: "scarf-tell",
				title: "وشاح قطن منسوج",
				price: 2200,
				desc: "وشاح خفيف بنسيج هادئ، يناسب الربيع والخريف، متوفر بلون حبر وورق.",
				art: "scarf",
				imageUrl: "",
				stock: 18,
				category: "fashion",
				featured: false,
				active: true
			}
		]
	},
	{
		id: "tactic",
		name: "تكتيك للإلكترونيات",
		owner: "كمال الدين",
		phone: "213660000000",
		email: "tactic@store.dz",
		wilaya: "31",
		category: "electronics",
		seed: true,
		active: true,
		products: [
			{
				id: "buds-clear",
				title: "سماعات لاسلكية عازلة",
				price: 3200,
				desc: "بطارية طويلة وعزل جيد للضجيج، مناسبة للمكالمات والتنقل داخل المدينة.",
				art: "headphones",
				imageUrl: "",
				stock: 15,
				category: "electronics",
				featured: true,
				active: true
			},
			{
				id: "bank-day",
				title: "شاحن متنقل سريع",
				price: 4100,
				desc: "سعة تكفي لشحن الهاتف أكثر من مرة، منفذين، جسم مدمج للجيب.",
				art: "powerbank",
				imageUrl: "",
				stock: 12,
				category: "electronics",
				featured: true,
				active: true
			},
			{
				id: "lamp-desk",
				title: "مصباح مكتب قابل للطي",
				price: 2900,
				desc: "إضاءة هادئة للعمل الليلي، ذراع مرن، يستهلك طاقة منخفضة.",
				art: "lamp",
				imageUrl: "",
				stock: 9,
				category: "home",
				featured: false,
				active: true
			}
		]
	},
	{
		id: "qahwa",
		name: "دار البن والبهارات",
		owner: "ليلى بن عمر",
		phone: "213555000000",
		email: "qahwa@store.dz",
		wilaya: "16",
		category: "food",
		seed: true,
		active: true,
		products: [{
			id: "coffee-tell",
			title: "بن محمص تحميص متوسط",
			price: 1800,
			desc: "كيلو بن محمص للأباريق المنزلية، نكهة متوازنة بدون مرارة زائدة.",
			art: "coffee",
			imageUrl: "",
			stock: 24,
			category: "food",
			featured: true,
			active: true
		}, {
			id: "spice-mix",
			title: "خلطة بهارات الكسكس",
			price: 950,
			desc: "خلطة جاهزة بوزن 250غ، معبأة بإحكام، مناسبة للقدر العائلي.",
			art: "spices",
			imageUrl: "",
			stock: 30,
			category: "food",
			featured: false,
			active: true
		}]
	}
];
function newId(prefix) {
	return `${prefix}-${crypto.randomUUID()}`;
}
function sanitizeProduct(input, id) {
	const price = Number(input.price);
	if (!Number.isInteger(price) || price < 1 || price > 1e8) throw new Error("السعر يجب أن يكون رقماً صحيحاً بين 1 و 100000000");
	const title = input.title.trim().slice(0, 120);
	if (title.length < 3) throw new Error("عنوان المنتج قصير جداً");
	const imageUrl = input.imageUrl.trim();
	if (imageUrl && !isSafeHttpsUrl(imageUrl)) throw new Error("رابط الصورة يجب أن يبدأ بـ https://");
	const stock = Number(input.stock);
	if (!Number.isInteger(stock) || stock < 0 || stock > 9999) throw new Error("المخزون غير صالح");
	return {
		id,
		title,
		price,
		desc: input.desc.trim().slice(0, 1e3),
		art: input.art || "generic",
		imageUrl,
		stock,
		category: input.category,
		featured: Boolean(input.featured),
		active: true
	};
}
var memoryStorage = {
	getItem: () => null,
	setItem: () => void 0,
	removeItem: () => void 0
};
var useMarket = create()(persist((set, get) => ({
	stores: SEED_STORES,
	pinByStoreId: {},
	sessionStoreId: null,
	publicStores: () => get().stores.filter((s) => s.active),
	publicProducts: (store) => store.products.filter((p) => p.active && p.stock > 0),
	findStore: (id) => get().stores.find((s) => s.id === id),
	findProduct: (storeId, productId) => {
		const store = get().stores.find((s) => s.id === storeId && s.active);
		if (!store) return null;
		const product = store.products.find((p) => p.id === productId && p.active && p.stock > 0);
		if (!product) return null;
		return {
			store,
			product
		};
	},
	sessionStore: () => {
		const id = get().sessionStoreId;
		if (!id) return null;
		return get().stores.find((s) => s.id === id) ?? null;
	},
	createStore: async (input) => {
		const name = input.name.trim().slice(0, 80);
		const owner = input.owner.trim().slice(0, 80);
		if (name.length < 3 || owner.length < 3) throw new Error("أدخل اسم المتجر واسم المالك (3 أحرف على الأقل)");
		const phone = normalizeAlgerianMobile(input.phone);
		if (!phone) throw new Error("أدخل رقماً جزائرياً للموبايل يبدأ بـ 05 أو 06 أو 07");
		const email = input.email.trim().slice(0, 120);
		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("البريد الإلكتروني غير صالح");
		if (!/^\d{4}$/.test(input.pin)) throw new Error("اختر رمزاً من 4 أرقام لحماية لوحة المتجر");
		if (get().stores.some((s) => s.phone === phone && !s.seed)) throw new Error("يوجد متجر مرتبط بهذا الرقم. استخدم الدخول بدلاً من الإنشاء");
		const id = newId("store");
		const pinHash = await hashPin(id, input.pin);
		const store = {
			id,
			name,
			owner,
			phone,
			email,
			wilaya: input.wilaya || "all",
			category: input.category,
			seed: false,
			active: true,
			products: []
		};
		set((s) => ({
			stores: [store, ...s.stores],
			pinByStoreId: {
				...s.pinByStoreId,
				[id]: pinHash
			},
			sessionStoreId: id
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
		if (!expected || expected !== given) throw new Error("رمز الدخول غير صحيح");
		set({ sessionStoreId: store.id });
		return store.id;
	},
	logout: () => set({ sessionStoreId: null }),
	addProduct: (input) => {
		const session = get().sessionStore();
		if (!session || session.seed) throw new Error("لا توجد جلسة تاجر نشطة");
		const product = sanitizeProduct(input, newId("p"));
		set((s) => ({ stores: s.stores.map((store) => store.id === session.id ? {
			...store,
			products: [product, ...store.products]
		} : store) }));
		return product.id;
	},
	updateProduct: (productId, input) => {
		const session = get().sessionStore();
		if (!session || session.seed) throw new Error("لا توجد جلسة تاجر نشطة");
		if (!session.products.find((p) => p.id === productId)) throw new Error("المنتج غير موجود");
		const product = sanitizeProduct(input, productId);
		set((s) => ({ stores: s.stores.map((store) => store.id === session.id ? {
			...store,
			products: store.products.map((p) => p.id === productId ? product : p)
		} : store) }));
	},
	deleteProduct: (productId) => {
		const session = get().sessionStore();
		if (!session || session.seed) throw new Error("لا توجد جلسة تاجر نشطة");
		set((s) => ({ stores: s.stores.map((store) => store.id === session.id ? {
			...store,
			products: store.products.filter((p) => p.id !== productId)
		} : store) }));
	}
}), {
	name: STORAGE_KEY,
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : localStorage),
	partialize: (s) => ({
		stores: s.stores,
		pinByStoreId: s.pinByStoreId,
		sessionStoreId: s.sessionStoreId
	})
}));
function featuredCatalog(stores) {
	const out = [];
	for (const store of stores.filter((s) => s.active)) for (const product of store.products) if (product.active && product.stock > 0 && product.featured) out.push({
		store,
		product
	});
	return out.slice(0, 8);
}
//#endregion
export { copyText as a, productPath as c, categoryLabel as i, useMarket as l, Card as n, featuredCatalog as o, CardBody as r, formatDzd as s, Badge as t };
