//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-fDVA9VmF.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/merchant",
			"/stores",
			"/p/$storeId/$productId"
		],
		preloads: [
			"/assets/index-Cl-qbFrv.js",
			"/assets/useStore-CP8wJgJA.js",
			"/assets/phone-A0xRwunD.js",
			"/assets/matchContext-D_yddPR9.js",
			"/assets/preload-helper-C3kb-sK8.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-Cl-qbFrv.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-CkG3m-8L.js",
			"/assets/store-lpUaoRAv.js",
			"/assets/product-card-CGFC7QFK.js",
			"/assets/empty-state-CEv4mFLu.js"
		]
	},
	"/merchant": {
		filePath: "/workspace/src/routes/merchant.tsx",
		children: void 0,
		preloads: [
			"/assets/merchant-D9BYuWBU.js",
			"/assets/product-media-7VVntflL.js",
			"/assets/store-lpUaoRAv.js",
			"/assets/empty-state-CEv4mFLu.js",
			"/assets/select-BuxMhOqL.js",
			"/assets/wilayas-DKJpdmIQ.js"
		]
	},
	"/stores": {
		filePath: "/workspace/src/routes/stores.tsx",
		children: ["/stores/$storeId", "/stores/"],
		preloads: ["/assets/stores-MnvcBkXY.js"]
	},
	"/stores/$storeId": {
		filePath: "/workspace/src/routes/stores.$storeId.tsx",
		children: void 0,
		preloads: [
			"/assets/stores._storeId-BVATtl_F.js",
			"/assets/arrow-right-C-gtIbFd.js",
			"/assets/store-lpUaoRAv.js",
			"/assets/product-card-CGFC7QFK.js",
			"/assets/empty-state-CEv4mFLu.js",
			"/assets/wilayas-DKJpdmIQ.js"
		]
	},
	"/stores/": {
		filePath: "/workspace/src/routes/stores.index.tsx",
		children: void 0,
		preloads: [
			"/assets/stores.index-B3yszn5k.js",
			"/assets/store-lpUaoRAv.js",
			"/assets/empty-state-CEv4mFLu.js",
			"/assets/select-BuxMhOqL.js",
			"/assets/wilayas-DKJpdmIQ.js"
		]
	},
	"/p/$storeId/$productId": {
		filePath: "/workspace/src/routes/p.$storeId.$productId.tsx",
		children: void 0,
		preloads: [
			"/assets/p._storeId._productId-e-P5t3wO.js",
			"/assets/arrow-right-C-gtIbFd.js",
			"/assets/product-media-7VVntflL.js",
			"/assets/store-lpUaoRAv.js",
			"/assets/wilayas-DKJpdmIQ.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
