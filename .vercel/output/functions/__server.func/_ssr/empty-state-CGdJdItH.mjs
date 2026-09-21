import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/empty-state-CGdJdItH.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ title, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "col-span-full rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-ink",
			children: title
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: hint
		}) : null]
	});
}
//#endregion
export { EmptyState as t };
