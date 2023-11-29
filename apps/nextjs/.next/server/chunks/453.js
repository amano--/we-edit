"use strict";
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 8453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* reexport safe */ _src_auth_options__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   Z: () => (/* reexport safe */ _src_get_session__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _src_auth_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9852);
/* harmony import */ var _src_get_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_auth_options__WEBPACK_IMPORTED_MODULE_0__, _src_get_session__WEBPACK_IMPORTED_MODULE_1__]);
([_src_auth_options__WEBPACK_IMPORTED_MODULE_0__, _src_get_session__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2104);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9783);
/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _acme_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9450);
/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_3__]);
_env_mjs__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/**
 * Options for NextAuth.js used to configure
 * adapters, providers, callbacks, etc.
 * @see https://next-auth.js.org/configuration/options
 **/ const authOptions = {
    callbacks: {
        session ({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            // session.user.role = user.role; <-- put other properties on the session here
            }
            return session;
        }
    },
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_acme_db__WEBPACK_IMPORTED_MODULE_2__.prisma),
    providers: [
        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default()({
            clientId: _env_mjs__WEBPACK_IMPORTED_MODULE_3__/* .env */ .O.DISCORD_CLIENT_ID,
            clientSecret: _env_mjs__WEBPACK_IMPORTED_MODULE_3__/* .env */ .O.DISCORD_CLIENT_SECRET
        })
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getServerSession)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_options__WEBPACK_IMPORTED_MODULE_1__]);
_auth_options__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getServerSession = (ctx)=>{
    return (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(ctx.req, ctx.res, _auth_options__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .L);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prisma: () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);


const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log:  false ? 0 : [
        "error"
    ]
});
if (false) {}


/***/ }),

/***/ 7285:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6206);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);
([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({
    server: {
        DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        NEXTAUTH_SECRET:  true ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1) : 0,
        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
        // Since NextAuth.js automatically uses the VERCEL_URL if present.
        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL
        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string() : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url())
    },
    client: {},
    runtimeEnv: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET
    },
    skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;