import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as Mail, i as Store, n as TriangleAlert, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, c as Slot, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CZSXmDK5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "border border-border bg-surface text-ink hover:bg-secondary",
			ghost: "text-ink hover:bg-secondary",
			danger: "bg-danger text-destructive-foreground hover:opacity-90",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[50vh] flex-col items-center justify-center gap-3 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "الصفحة غير موجودة"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "الرابط غير صالح أو أُزيل المنتج."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "العودة للرئيسية"
				})
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var Dialog = Dialog$1;
function DialogContent({ className, children, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-6 shadow-soft", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-lg font-semibold text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				className: "absolute top-4 left-4 rounded-sm text-muted hover:text-ink",
				"aria-label": "إغلاق",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children
			})
		]
	})] });
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.5 2 2 6.37 2 11.76c0 1.72.46 3.4 1.34 4.88L2 22l5.53-1.44a10.3 10.3 0 0 0 4.51 1.04h.01c5.54 0 10.04-4.37 10.04-9.76C22.09 6.37 17.58 2 12.04 2Zm0 17.85h-.01a8.5 8.5 0 0 1-4.33-1.18l-.31-.18-3.28.86.88-3.15-.2-.32a8.2 8.2 0 0 1-1.27-4.4c0-4.54 3.8-8.23 8.5-8.23 4.7 0 8.5 3.69 8.5 8.23 0 4.54-3.8 8.37-8.48 8.37Zm4.66-6.26c-.26-.13-1.52-.74-1.75-.82-.24-.09-.41-.13-.58.13-.17.26-.66.82-.81.99-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.27-.77-.68-1.3-1.52-1.45-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.24.26-.9.87-.9 2.12 0 1.25.92 2.46 1.05 2.63.13.17 1.81 2.76 4.39 3.87 2.58 1.11 2.58.74 3.04.7.47-.05 1.52-.61 1.73-1.2.22-.59.22-1.1.15-1.2-.06-.11-.24-.17-.5-.3Z" })
	});
}
var CATEGORIES = [
	{
		id: "fashion",
		label: "أناقة وملابس"
	},
	{
		id: "electronics",
		label: "إلكترونيات"
	},
	{
		id: "home",
		label: "منزل ومطبخ"
	},
	{
		id: "food",
		label: "قهوة وغذاء"
	},
	{
		id: "beauty",
		label: "عناية"
	},
	{
		id: "other",
		label: "أخرى"
	}
];
var PRODUCT_ART = [
	"watch",
	"bag",
	"scarf",
	"headphones",
	"powerbank",
	"lamp",
	"coffee",
	"spices",
	"generic"
];
var PLATFORM = {
	phone: "213775554695",
	phoneDisplay: "0775 55 46 95",
	email: "merada35@gmail.com"
};
var STORAGE_KEY = "souk_dz_market_v1";
/** Algerian GSM mobiles: 05 / 06 / 07 + 8 digits. Returns E.164 without '+'. */
function normalizeAlgerianMobile(input) {
	let digits = String(input ?? "").replace(/\D/g, "");
	if (digits.startsWith("00")) digits = digits.slice(2);
	if (digits.startsWith("213")) {
		if (digits.length !== 12) return null;
		digits = `0${digits.slice(3)}`;
	}
	if (digits.length === 9 && /^[567]/.test(digits)) digits = `0${digits}`;
	if (!/^0[567]\d{8}$/.test(digits)) return null;
	return `213${digits.slice(1)}`;
}
function formatNationalPhone(e164) {
	if (!/^213[567]\d{8}$/.test(e164)) return e164;
	const n = `0${e164.slice(3)}`;
	return `${n.slice(0, 4)} ${n.slice(4, 6)} ${n.slice(6, 8)} ${n.slice(8, 10)}`;
}
function whatsappHref(e164, text) {
	const base = `https://wa.me/${e164}`;
	if (!text) return base;
	return `${base}?text=${encodeURIComponent(text)}`;
}
async function hashPin(storeId, pin) {
	const payload = new TextEncoder().encode(`souk-dz|${storeId}|${pin}`);
	const digest = await crypto.subtle.digest("SHA-256", payload);
	return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
function ContactDialog({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			title: "إدارة المنصة",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "للتاجر أو المشتري: واتساب أو البريد."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappHref(PLATFORM.phone),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-3 rounded-lg bg-cedar-soft p-3 text-cedar hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted",
						children: "واتساب"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: formatNationalPhone(PLATFORM.phone)
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${PLATFORM.email}`,
					className: "flex items-center gap-3 rounded-lg bg-secondary p-3 text-ink hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-6 text-cedar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted",
						children: "البريد"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: PLATFORM.email
					})] })]
				})]
			})]
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "الرئيسية"
	},
	{
		to: "/stores",
		label: "المتاجر"
	},
	{
		to: "/merchant",
		label: "لوحة التاجر"
	}
];
function SiteShell() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [contactOpen, setContactOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2",
				children: "تخطي إلى المحتوى"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-ink text-cedar-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-lg bg-cedar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold tracking-wide",
								children: "سوق الجزائر الرقمي"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-cedar-soft",
								children: "متاجر وروابط شراء مباشرة"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-1 md:flex",
							"aria-label": "رئيسي",
							children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								className: "text-cedar-fg hover:bg-cedar-fg/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									children: item.label
								})
							}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => setContactOpen(true),
								children: "اتصل بنا"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-cedar-fg md:hidden",
							"aria-label": menuOpen ? "إغلاق القائمة" : "فتح القائمة",
							"aria-expanded": menuOpen,
							onClick: () => setMenuOpen((v) => !v),
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("border-t border-cedar-fg/10 px-4 py-3 md:hidden", menuOpen ? "block" : "hidden"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-1",
						"aria-label": "جوال",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-lg px-3 py-3 text-sm hover:bg-cedar-fg/10",
							onClick: () => setMenuOpen(false),
							children: item.label
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-lg px-3 py-3 text-right text-sm hover:bg-cedar-fg/10",
							onClick: () => {
								setMenuOpen(false);
								setContactOpen(true);
							},
							children: "اتصل بنا"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-auto border-t border-border bg-ink py-10 text-cedar-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-cedar-fg",
							children: "سوق متعدد المتاجر، شراء عبر واتساب دون حساب زائر"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-6 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappHref(PLATFORM.phone),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 hover:text-cedar-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), formatNationalPhone(PLATFORM.phone)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${PLATFORM.email}`,
								className: "hover:text-cedar-fg",
								children: PLATFORM.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "© 2026 سوق الجزائر الرقمي"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDialog, {
				open: contactOpen,
				onOpenChange: setContactOpen
			})
		]
	});
}
var styles_default = "/assets/styles-lbeIZKFV.css";
var APP_NAME = "سوق الجزائر الرقمي";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "منصة متاجر جزائرية بروابط شراء مباشرة عبر واتساب، دون حساب للزائر."
			},
			{
				name: "theme-color",
				content: "#0E5C45"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-center",
				dir: "rtl",
				toastOptions: { className: "font-sans" }
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-BSTNdjPT.mjs");
var Route$5 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "سوق الجزائر الرقمي" }] })
});
var $$splitComponentImporter$4 = () => import("./merchant-QtAFxOC0.mjs");
var Route$4 = createFileRoute("/merchant")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "لوحة التاجر — سوق الجزائر الرقمي" }] })
});
var $$splitComponentImporter$3 = () => import("./stores-4B_Ti0uB.mjs");
var Route$3 = createFileRoute("/stores")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./stores.index-B0FV9V1H.mjs");
var Route$2 = createFileRoute("/stores/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "المتاجر — سوق الجزائر الرقمي" }] })
});
var $$splitComponentImporter$1 = () => import("./stores._storeId-BZBOnw6v.mjs");
var Route$1 = createFileRoute("/stores/$storeId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./p._storeId._productId-CEWIX45f.mjs");
var Route = createFileRoute("/p/$storeId/$productId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var MerchantRoute = Route$4.update({
	id: "/merchant",
	path: "/merchant",
	getParentRoute: () => Route$6
});
var StoresRoute = Route$3.update({
	id: "/stores",
	path: "/stores",
	getParentRoute: () => Route$6
});
var StoresIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => StoresRoute
});
var StoresStoreIdRoute = Route$1.update({
	id: "/$storeId",
	path: "/$storeId",
	getParentRoute: () => StoresRoute
});
var PStoreIdProductIdRoute = Route.update({
	id: "/p/$storeId/$productId",
	path: "/p/$storeId/$productId",
	getParentRoute: () => Route$6
});
var StoresRouteChildren = {
	StoresStoreIdRoute,
	StoresIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	MerchantRoute,
	StoresRoute: StoresRoute._addFileChildren(StoresRouteChildren),
	PStoreIdProductIdRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { hashPin as a, CATEGORIES as c, STORAGE_KEY as d, WhatsAppIcon as f, formatNationalPhone as i, PLATFORM as l, cn as m, Route as n, normalizeAlgerianMobile as o, Button as p, Route$1 as r, whatsappHref as s, router_exports as t, PRODUCT_ART as u };
