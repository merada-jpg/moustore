import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as Link2 } from "../_libs/lucide-react.mjs";
import { i as categoryLabel, n as Card, t as Badge } from "./store-DvNPMUNM.mjs";
import { n as ProductMedia, t as Price } from "./product-media-DxUTQvy9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Bh1rhOdD.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ store, product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/p/$storeId/$productId",
			params: {
				storeId: store.id,
				productId: product.id
			},
			className: "relative block h-48 overflow-hidden bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductMedia, {
				product,
				className: "h-full w-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 right-3 rounded-md bg-ink/80 px-2 py-1 text-xs text-cedar-fg",
				children: store.name
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "mb-2 bg-secondary text-muted",
					children: categoryLabel(product.category)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/p/$storeId/$productId",
					params: {
						storeId: store.id,
						productId: product.id
					},
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "line-clamp-1 font-semibold text-ink hover:text-cedar",
						children: product.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-xs text-muted",
					children: product.desc
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between border-t border-border pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
					value: product.price,
					className: "text-lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/p/$storeId/$productId",
					params: {
						storeId: store.id,
						productId: product.id
					},
					className: "inline-flex h-9 items-center gap-1 rounded-lg bg-cedar-soft px-3 text-xs font-medium text-cedar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-3.5" }), "رابط الشراء"]
				})]
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
