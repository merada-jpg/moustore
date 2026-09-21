import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Pencil, f as Link2, p as Eye, r as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as CATEGORIES, m as cn, p as Button, u as PRODUCT_ART } from "./router-CZSXmDK5.mjs";
import { a as copyText, c as productPath, l as useMarket, n as Card, r as CardBody, t as Badge } from "./store-DvNPMUNM.mjs";
import { n as ProductMedia, t as Price } from "./product-media-DxUTQvy9.mjs";
import { t as EmptyState } from "./empty-state-CGdJdItH.mjs";
import { n as Select, t as Input } from "./select-Cy5Uu_nq.mjs";
import { t as WILAYAS } from "./wilayas-DyoPemic.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/merchant-QtAFxOC0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1 block text-xs font-medium text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", className),
		...props
	});
}
var ART_LABELS = {
	watch: "ساعة",
	bag: "حقيبة",
	scarf: "وشاح",
	headphones: "سماعات",
	powerbank: "شاحن",
	lamp: "مصباح",
	coffee: "بن",
	spices: "بهارات",
	generic: "عام"
};
var emptyProduct = {
	title: "",
	price: "",
	desc: "",
	imageUrl: "",
	stock: "10",
	category: "other",
	art: "generic",
	featured: true
};
function MerchantPage() {
	const session = useMarket((s) => s.sessionStore());
	const createStore = useMarket((s) => s.createStore);
	const unlockStore = useMarket((s) => s.unlockStore);
	const logout = useMarket((s) => s.logout);
	const addProduct = useMarket((s) => s.addProduct);
	const updateProduct = useMarket((s) => s.updateProduct);
	const deleteProduct = useMarket((s) => s.deleteProduct);
	const [mode, setMode] = (0, import_react.useState)("create");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptyProduct);
	const [auth, setAuth] = (0, import_react.useState)({
		name: "",
		owner: "",
		phone: "",
		email: "",
		wilaya: "16",
		category: "other",
		pin: ""
	});
	async function onCreate(e) {
		e.preventDefault();
		setBusy(true);
		try {
			await createStore(auth);
			toast.success("تم إنشاء المتجر. يمكنك إضافة السلع الآن.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "تعذر إنشاء المتجر");
		} finally {
			setBusy(false);
		}
	}
	async function onEnter(e) {
		e.preventDefault();
		setBusy(true);
		try {
			await unlockStore(auth.phone, auth.pin);
			toast.success("تم الدخول إلى لوحة المتجر");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "تعذر الدخول");
		} finally {
			setBusy(false);
		}
	}
	function startEdit(p) {
		setEditingId(p.id);
		setForm({
			title: p.title,
			price: String(p.price),
			desc: p.desc,
			imageUrl: p.imageUrl,
			stock: String(p.stock),
			category: p.category,
			art: p.art,
			featured: p.featured
		});
	}
	function onSaveProduct(e) {
		e.preventDefault();
		try {
			const payload = {
				title: form.title,
				price: Number(form.price),
				desc: form.desc,
				imageUrl: form.imageUrl,
				stock: Number(form.stock),
				category: form.category,
				art: form.art,
				featured: form.featured
			};
			if (editingId) {
				updateProduct(editingId, payload);
				toast.success("تم تحديث المنتج");
			} else {
				addProduct(payload);
				toast.success("تم نشر المنتج");
			}
			setEditingId(null);
			setForm(emptyProduct);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "تعذر حفظ المنتج");
		}
	}
	async function onCopy(storeId, productId) {
		const url = `${window.location.origin}${productPath(storeId, productId)}`;
		if (await copyText(url)) toast.success("تم نسخ الرابط");
		else toast.error("تعذر النسخ");
	}
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "mx-auto max-w-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
			className: "space-y-6 p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold",
						children: "لوحة تحكم التاجر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "المتجر يُحفظ على هذا الجهاز فقط. الزائر لا يحتاج حساباً للشراء."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "بوابة التجار" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 rounded-lg bg-paper p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: mode === "create" ? "default" : "ghost",
						className: "flex-1",
						onClick: () => setMode("create"),
						children: "إنشاء متجر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: mode === "enter" ? "default" : "ghost",
						className: "flex-1",
						onClick: () => setMode("enter"),
						children: "دخول متجر قائم"
					})]
				}),
				mode === "create" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onCreate,
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "اسم المتجر",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								minLength: 3,
								value: auth.name,
								onChange: (e) => setAuth({
									...auth,
									name: e.target.value
								}),
								placeholder: "مثال: متجر الهواتف"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "اسم التاجر",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								minLength: 3,
								value: auth.owner,
								onChange: (e) => setAuth({
									...auth,
									owner: e.target.value
								}),
								placeholder: "اسمك الكامل"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "هاتف واتساب (05 / 06 / 07)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								inputMode: "tel",
								autoComplete: "tel",
								value: auth.phone,
								onChange: (e) => setAuth({
									...auth,
									phone: e.target.value
								}),
								placeholder: "0775554695"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "البريد (اختياري)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: auth.email,
								onChange: (e) => setAuth({
									...auth,
									email: e.target.value
								}),
								placeholder: "name@email.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ولاية التوصيل الأساسية",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: auth.wilaya,
								onChange: (e) => setAuth({
									...auth,
									wilaya: e.target.value
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "كل الولايات"
								}), WILAYAS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: w.code,
									children: [
										w.code,
										" — ",
										w.name
									]
								}, w.code))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "تصنيف المتجر",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: auth.category,
								onChange: (e) => setAuth({
									...auth,
									category: e.target.value
								}),
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.label
								}, c.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "رمز دخول من 4 أرقام",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								inputMode: "numeric",
								minLength: 4,
								maxLength: 4,
								pattern: "\\d{4}",
								autoComplete: "off",
								value: auth.pin,
								onChange: (e) => setAuth({
									...auth,
									pin: e.target.value.replace(/\D/g, "").slice(0, 4)
								}),
								placeholder: "••••"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: busy,
								children: "إنشاء المتجر ودخول اللوحة"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onEnter,
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "هاتف المتجر",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								inputMode: "tel",
								value: auth.phone,
								onChange: (e) => setAuth({
									...auth,
									phone: e.target.value
								}),
								placeholder: "0775554695"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "رمز الدخول",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								inputMode: "numeric",
								minLength: 4,
								maxLength: 4,
								pattern: "\\d{4}",
								autoComplete: "off",
								value: auth.pin,
								onChange: (e) => setAuth({
									...auth,
									pin: e.target.value.replace(/\D/g, "").slice(0, 4)
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: busy,
								children: "دخول اللوحة"
							})
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
				className: "flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-xl font-semibold",
					children: ["أهلاً، ", session.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "متجرك محفوظ على هذا المتصفح. أضف سلعاً وانسخ رابط كل منتج."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: logout,
					children: "خروج من اللوحة"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
				className: "space-y-4 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: editingId ? "تعديل سلعة" : "إضافة سلعة جديدة"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onSaveProduct,
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "عنوان المنتج",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								minLength: 3,
								value: form.title,
								onChange: (e) => setForm({
									...form,
									title: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "السعر (دج)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								type: "number",
								min: 1,
								max: 1e8,
								step: 1,
								value: form.price,
								onChange: (e) => setForm({
									...form,
									price: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "المخزون",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								type: "number",
								min: 0,
								max: 9999,
								step: 1,
								value: form.stock,
								onChange: (e) => setForm({
									...form,
									stock: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "التصنيف",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.label
								}, c.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "رسم توضيحي",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: form.art,
								onChange: (e) => setForm({
									...form,
									art: e.target.value
								}),
								children: PRODUCT_ART.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: a,
									children: ART_LABELS[a]
								}, a))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "رابط صورة https (اختياري)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.imageUrl,
								onChange: (e) => setForm({
									...form,
									imageUrl: e.target.value
								}),
								placeholder: "https://"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "وصف السلعة",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 3,
									maxLength: 1e3,
									value: form.desc,
									onChange: (e) => setForm({
										...form,
										desc: e.target.value
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-sm md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.featured,
								onChange: (e) => setForm({
									...form,
									featured: e.target.checked
								})
							}), "إظهار في المنتجات المختارة على الرئيسية"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "flex-1",
								children: editingId ? "حفظ التعديل" : "نشر المنتج"
							}), editingId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => {
									setEditingId(null);
									setForm(emptyProduct);
								},
								children: "إلغاء"
							}) : null]
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-lg font-semibold",
				children: "سلع متجرك"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: session.products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "لم تضف أي سلع بعد" }) : session.products.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-12 overflow-hidden rounded-lg bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductMedia, {
								product: prod,
								className: "h-full w-full"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-semibold",
								children: prod.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
								value: prod.price,
								className: "text-sm"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								"aria-label": "معاينة",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/p/$storeId/$productId",
									params: {
										storeId: session.id,
										productId: prod.id
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								"aria-label": "نسخ الرابط",
								onClick: () => onCopy(session.id, prod.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								"aria-label": "تعديل",
								onClick: () => startEdit(prod),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								"aria-label": "حذف",
								className: "text-danger",
								onClick: () => {
									if (window.confirm("حذف هذا المنتج؟")) {
										deleteProduct(prod.id);
										toast.success("تم الحذف");
									}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						]
					})]
				}) }, prod.id))
			})] })
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children] });
}
//#endregion
export { MerchantPage as component };
