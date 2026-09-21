import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as Link2, h as ArrowRight, l as Minus, m as Check, s as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as WhatsAppIcon, i as formatNationalPhone, n as Route, p as Button, s as whatsappHref } from "./router-CZSXmDK5.mjs";
import { a as copyText, c as productPath, l as useMarket, n as Card, r as CardBody, t as Badge } from "./store-DvNPMUNM.mjs";
import { n as ProductMedia, t as Price } from "./product-media-DxUTQvy9.mjs";
import { n as wilayaName } from "./wilayas-DyoPemic.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/p._storeId._productId-CEWIX45f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { storeId, productId } = Route.useParams();
	const store = useMarket((s) => s.stores.find((x) => x.id === storeId && x.active));
	const product = store?.products.find((p) => p.id === productId && p.active && p.stock > 0);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const shareUrl = (0, import_react.useMemo)(() => {
		if (typeof window === "undefined") return productPath(storeId, productId);
		return `${window.location.origin}${productPath(storeId, productId)}`;
	}, [storeId, productId]);
	if (!store || !product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "secondary",
			size: "sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }), "الرئيسية"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "هذا المنتج غير متاح أو نفد مخزونه."
		})]
	});
	const maxQty = Math.max(1, product.stock);
	const safeQty = Math.min(qty, maxQty);
	const message = [
		"السلام عليكم، أريد طلب هذا المنتج:",
		`• ${product.title}`,
		`• السعر: ${product.price} دج`,
		`• الكمية: ${safeQty}`,
		`• الرابط: ${shareUrl}`
	].join("\n");
	async function onCopy() {
		if (await copyText(shareUrl)) {
			setCopied(true);
			toast.success("تم نسخ رابط المنتج");
			setTimeout(() => setCopied(false), 2e3);
		} else toast.error("تعذر النسخ، انسخ الرابط من شريط العنوان");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "secondary",
			size: "sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }), "الرئيسية"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
			className: "space-y-6 p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-lg border border-border bg-paper px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "متجر التاجر"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/stores/$storeId",
					params: { storeId: store.id },
					className: "font-semibold text-cedar hover:underline",
					children: store.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "صفحة منتج مباشرة" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-border bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductMedia, {
						product,
						className: "aspect-square"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-semibold md:text-3xl",
							children: product.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
							value: product.price,
							className: "mt-3 block text-3xl",
							suffix: "دينار جزائري"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: product.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-subtle",
							children: [
								"المتوفر: ",
								product.stock,
								" · التوصيل: ",
								wilayaName(store.wilaya)
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 rounded-xl border border-border bg-paper p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-muted",
								children: "طلب فوري عبر واتساب"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "secondary",
										size: "icon",
										"aria-label": "إنقاص الكمية",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-8 text-center tabular-nums font-semibold",
										children: safeQty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "secondary",
										size: "icon",
										"aria-label": "زيادة الكمية",
										onClick: () => setQty((q) => Math.min(maxQty, q + 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "w-full",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappHref(store.phone, message),
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), "اطلب عبر واتساب"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "secondary",
								className: "w-full",
								onClick: onCopy,
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-4" }), copied ? "تم النسخ" : "نسخ رابط المنتج"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-center text-xs text-subtle",
								children: [
									"يفتح واتساب نحو ",
									formatNationalPhone(store.phone),
									" دون إنشاء حساب."
								]
							})
						]
					})]
				})]
			})]
		}) })]
	});
}
//#endregion
export { ProductPage as component };
