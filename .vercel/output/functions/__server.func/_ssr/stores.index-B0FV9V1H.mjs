import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Store, o as Search } from "../_libs/lucide-react.mjs";
import { c as CATEGORIES, p as Button } from "./router-CZSXmDK5.mjs";
import { i as categoryLabel, l as useMarket, n as Card, r as CardBody, t as Badge } from "./store-DvNPMUNM.mjs";
import { t as EmptyState } from "./empty-state-CGdJdItH.mjs";
import { n as Select, t as Input } from "./select-Cy5Uu_nq.mjs";
import { n as wilayaName } from "./wilayas-DyoPemic.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stores.index-B0FV9V1H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StoreCard({ store }) {
	const count = useMarket((s) => s.stores.find((x) => x.id === store.id)?.products.filter((p) => p.active && p.stock > 0).length ?? 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-16 items-center justify-center rounded-lg bg-cedar-soft text-cedar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-7" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate text-lg font-semibold",
						children: store.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: ["التاجر: ", store.owner]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex flex-wrap gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [count, " منتجات"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-secondary text-muted",
							children: categoryLabel(store.category)
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-t border-border pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted",
				children: ["التوصيل: ", wilayaName(store.wilaya)]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/stores/$storeId",
					params: { storeId: store.id },
					children: "دخول المتجر"
				})
			})]
		})]
	}) });
}
function StoresPage() {
	const stores = useMarket((s) => s.stores);
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return stores.filter((s) => {
			if (!s.active) return false;
			const hay = `${s.name} ${s.owner}`.toLowerCase();
			const matchesQuery = !q || hay.includes(q);
			const matchesCat = category === "all" || s.category === category;
			return matchesQuery && matchesCat;
		});
	}, [
		stores,
		query,
		category
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "المتاجر المتاحة"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "ادخل أي متجر وتواصل مع التاجر مباشرة"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-col gap-3 md:w-auto md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative md:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3 right-3 size-4 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "ابحث عن متجر أو تاجر...",
						className: "pr-10",
						"aria-label": "بحث عن متجر"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: category,
					onChange: (e) => setCategory(e.target.value),
					"aria-label": "تصنيف المتجر",
					className: "md:w-48",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "كل التصنيفات"
					}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c.id,
						children: c.label
					}, c.id))]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "لا توجد متاجر تطابق بحثك",
				hint: "جرّب اسماً آخر أو صنفاً مختلفاً"
			}) : filtered.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreCard, { store }, store.id))
		})]
	});
}
//#endregion
export { StoresPage as component };
