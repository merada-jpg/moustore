import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ShieldCheck, g as ArrowLeft } from "../_libs/lucide-react.mjs";
import { f as WhatsAppIcon, i as formatNationalPhone, l as PLATFORM, p as Button, s as whatsappHref } from "./router-CZSXmDK5.mjs";
import { l as useMarket, o as featuredCatalog } from "./store-DvNPMUNM.mjs";
import { t as EmptyState } from "./empty-state-CGdJdItH.mjs";
import { t as ProductCard } from "./product-card-Bh1rhOdD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BSTNdjPT.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const stores = useMarket((s) => s.stores);
	const featured = featuredCatalog(stores);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-cedar",
						children: "منصة تجارة محلية بلا حساب زائر"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold leading-tight md:text-5xl",
						children: "افتح متجرك أو اشترِ من رابط مباشر"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-muted",
						children: "كل زائر يتصفح السلع ويراسل التاجر على واتساب فوراً. لا سلة معقّدة ولا تسجيل للمشترين."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/merchant",
								children: "افتح متجرك"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/stores",
								children: "تصفح المتاجر"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl border border-border bg-paper p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-3 flex items-center gap-2 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-cedar" }), "دعم المنصة"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappHref(PLATFORM.phone),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-3 rounded-lg bg-cedar-soft p-3 text-cedar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: "واتساب"
						}), formatNationalPhone(PLATFORM.phone)] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-secondary p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: "البريد"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: PLATFORM.email
						})]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: "منتجات مختارة"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "روابط مباشرة للتاجر عبر واتساب"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/stores",
				className: "inline-flex items-center gap-1 text-sm font-medium text-cedar",
				children: ["كل المتاجر", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: featured.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "لا توجد منتجات متاحة حالياً" }) : featured.map(({ store, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				store,
				product
			}, `${store.id}-${product.id}`))
		})] })]
	});
}
//#endregion
export { Home as component };
