import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as ArrowRight } from "../_libs/lucide-react.mjs";
import { f as WhatsAppIcon, i as formatNationalPhone, p as Button, r as Route$1, s as whatsappHref } from "./router-CZSXmDK5.mjs";
import { i as categoryLabel, l as useMarket, n as Card, r as CardBody, t as Badge } from "./store-DvNPMUNM.mjs";
import { t as EmptyState } from "./empty-state-CGdJdItH.mjs";
import { n as wilayaName } from "./wilayas-DyoPemic.mjs";
import { t as ProductCard } from "./product-card-Bh1rhOdD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stores._storeId-BZBOnw6v.js
var import_jsx_runtime = require_jsx_runtime();
function StoreDetail() {
	const { storeId } = Route$1.useParams();
	const store = useMarket((s) => s.stores.find((x) => x.id === storeId));
	const products = store?.products.filter((p) => p.active && p.stock > 0) ?? [];
	if (!store || !store.active) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "هذا المتجر غير متاح",
		hint: "قد يكون الرابط قديماً أو أُزيل المتجر."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "secondary",
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/stores",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }), "العودة للمتاجر"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
				className: "flex flex-col justify-between gap-4 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "متجر نشط" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-2xl font-semibold",
						children: store.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"المالك: ",
							store.owner,
							" · ",
							categoryLabel(store.category),
							" · توصيل",
							" ",
							wilayaName(store.wilaya)
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappHref(store.phone, `السلام عليكم، أتابع متجركم «${store.name}» على سوق الجزائر الرقمي.`),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }),
							"مراسلة التاجر",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs opacity-80",
								children: formatNationalPhone(store.phone)
							})
						]
					})
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-xl font-semibold",
				children: "سلع المتجر"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "لا توجد سلع متاحة في هذا المتجر حالياً" }) : products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					store,
					product
				}, product.id))
			})] })
		]
	});
}
//#endregion
export { StoreDetail as component };
