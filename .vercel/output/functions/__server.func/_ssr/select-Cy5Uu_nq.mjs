import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as cn } from "./router-CZSXmDK5.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-ink", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", "disabled:opacity-50", className),
		...props
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-ink", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", className),
		...props,
		children
	});
}
//#endregion
export { Select as n, Input as t };
