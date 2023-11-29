"use strict";
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 5575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1435);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);
([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getBaseUrl = ()=>{
    if (false) {} // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:3000`; // dev SSR should use localhost
};
const api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCNext */ .t)({
    config () {
        return {
            transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),
            links: [
                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({
                    enabled: (opts)=> false || opts.direction === "down" && opts.result instanceof Error
                }),
                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({
                    url: `${getBaseUrl()}/api/trpc`
                })
            ]
        };
    },
    ssr: false
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;