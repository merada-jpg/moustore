import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as cn } from "./router-CZSXmDK5.mjs";
import { s as formatDzd } from "./store-DvNPMUNM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-media-DxUTQvy9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Price({ value, className, suffix = "دج" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("tabular-nums font-semibold text-cedar", className),
		children: [formatDzd(value), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-1 text-xs font-medium text-muted",
			children: suffix
		})]
	});
}
function Frame({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 640 480",
		className: "h-full w-full",
		role: "img",
		"aria-label": title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "640",
			height: "480",
			fill: "#ece7db"
		}), children]
	});
}
function ProductArt({ kind, title }) {
	switch (kind) {
		case "watch": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "292",
					y: "70",
					width: "56",
					height: "90",
					rx: "8",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "292",
					y: "320",
					width: "56",
					height: "90",
					rx: "8",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "240",
					r: "88",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "240",
					r: "70",
					fill: "#fbf8f1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "240",
					r: "6",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "316",
					y: "186",
					width: "8",
					height: "54",
					rx: "4",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "320",
					y: "236",
					width: "40",
					height: "6",
					rx: "3",
					fill: "#0e5c45"
				})
			]
		});
		case "bag": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M220 210 h200 v170 a24 24 0 0 1-24 24 H244 a24 24 0 0 1-24-24z",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M250 210 v-36 a70 70 0 0 1 140 0 v36",
					fill: "none",
					stroke: "#1a1814",
					strokeWidth: "18"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "300",
					y: "250",
					width: "40",
					height: "28",
					rx: "6",
					fill: "#fbf8f1"
				})
			]
		});
		case "scarf": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M140 160h360l-40 160H180z",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M180 200h280",
					stroke: "#f4f0e6",
					strokeWidth: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M170 250h300",
					stroke: "#1a1814",
					strokeWidth: "6",
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "300",
					r: "10",
					fill: "#f4f0e6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "440",
					cy: "300",
					r: "10",
					fill: "#f4f0e6"
				})
			]
		});
		case "headphones": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 250 a160 160 0 0 1 320 0",
					fill: "none",
					stroke: "#1a1814",
					strokeWidth: "28"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "132",
					y: "240",
					width: "70",
					height: "110",
					rx: "24",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "438",
					y: "240",
					width: "70",
					height: "110",
					rx: "24",
					fill: "#0e5c45"
				})
			]
		});
		case "powerbank": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "230",
					y: "120",
					width: "180",
					height: "260",
					rx: "28",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "252",
					y: "150",
					width: "136",
					height: "80",
					rx: "12",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "300",
					r: "14",
					fill: "#f4f0e6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "292",
					y: "340",
					width: "56",
					height: "12",
					rx: "6",
					fill: "#ece7db"
				})
			]
		});
		case "lamp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "300",
					y: "280",
					width: "40",
					height: "90",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "250",
					y: "370",
					width: "140",
					height: "16",
					rx: "8",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M220 180 h200 l-40 100 H260z",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "164",
					r: "18",
					fill: "#f4f0e6"
				})
			]
		});
		case "coffee": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "320",
					cy: "340",
					rx: "90",
					ry: "24",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M230 160 h180 l20 180 H210z",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "320",
					cy: "160",
					rx: "90",
					ry: "28",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M410 210 c40 0 50 40 20 70",
					fill: "none",
					stroke: "#1a1814",
					strokeWidth: "14"
				})
			]
		});
		case "spices": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "180",
					y: "160",
					width: "90",
					height: "180",
					rx: "12",
					fill: "#0e5c45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "275",
					y: "130",
					width: "90",
					height: "210",
					rx: "12",
					fill: "#1a1814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "370",
					y: "180",
					width: "90",
					height: "160",
					rx: "12",
					fill: "#6f6a62"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "225",
					cy: "160",
					rx: "45",
					ry: "16",
					fill: "#dce8e2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "320",
					cy: "130",
					rx: "45",
					ry: "16",
					fill: "#ece7db"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "415",
					cy: "180",
					rx: "45",
					ry: "16",
					fill: "#f4f0e6"
				})
			]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "200",
				y: "140",
				width: "240",
				height: "200",
				rx: "24",
				fill: "#0e5c45"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "320",
				cy: "240",
				r: "36",
				fill: "#f4f0e6"
			})]
		});
	}
}
function ProductMedia({ product, className }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	const showImage = Boolean(product.imageUrl) && !failed;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: showImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.imageUrl,
			alt: product.title,
			className: "h-full w-full object-cover",
			loading: "lazy",
			onError: () => setFailed(true)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductArt, {
			kind: product.art,
			title: product.title
		})
	});
}
//#endregion
export { ProductMedia as n, Price as t };
