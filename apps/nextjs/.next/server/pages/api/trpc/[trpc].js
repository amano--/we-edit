"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 6206:
/***/ ((module) => {

module.exports = import("@t3-oss/env-nextjs");;

/***/ }),

/***/ 2937:
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ 6282:
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 1704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6282);
/* harmony import */ var _acme_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _acme_api__WEBPACK_IMPORTED_MODULE_1__]);
([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _acme_api__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// export API handler
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({
    router: _acme_api__WEBPACK_IMPORTED_MODULE_1__/* .appRouter */ .q,
    createContext: _acme_api__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCContext */ .u
})); // If you need to enable cors, you can do so like this:
 // const handler = async (req: NextApiRequest, res: NextApiResponse) => {
 //   // Enable cors
 //   await cors(req, res);
 //   // Let the tRPC handler do its magic
 //   return createNextApiHandler({
 //     router: appRouter,
 //     createContext,
 //   })(req, res);
 // };
 // export default handler;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* reexport safe */ _src_root__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   u: () => (/* reexport safe */ _src_trpc__WEBPACK_IMPORTED_MODULE_1__.uw)
/* harmony export */ });
/* harmony import */ var _src_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5017);
/* harmony import */ var _src_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_root__WEBPACK_IMPORTED_MODULE_0__, _src_trpc__WEBPACK_IMPORTED_MODULE_1__]);
([_src_root__WEBPACK_IMPORTED_MODULE_0__, _src_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var _router_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7787);
/* harmony import */ var _router_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2659);
/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_router_auth__WEBPACK_IMPORTED_MODULE_0__, _router_post__WEBPACK_IMPORTED_MODULE_1__, _trpc__WEBPACK_IMPORTED_MODULE_2__]);
([_router_auth__WEBPACK_IMPORTED_MODULE_0__, _router_post__WEBPACK_IMPORTED_MODULE_1__, _trpc__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const appRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_2__/* .createTRPCRouter */ .hA)({
    post: _router_post__WEBPACK_IMPORTED_MODULE_1__/* .postRouter */ .F,
    auth: _router_auth__WEBPACK_IMPORTED_MODULE_0__/* .authRouter */ .m
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ authRouter)
/* harmony export */ });
/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc__WEBPACK_IMPORTED_MODULE_0__]);
_trpc__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const authRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_0__/* .createTRPCRouter */ .hA)({
    getSession: _trpc__WEBPACK_IMPORTED_MODULE_0__/* .publicProcedure */ .$y.query(({ ctx })=>{
        return ctx.session;
    }),
    getSecretMessage: _trpc__WEBPACK_IMPORTED_MODULE_0__/* .protectedProcedure */ .U5.query(()=>{
        // testing type validation of overridden next-auth Session in @acme/auth package
        return "you can see this secret message!";
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ postRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const postRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    all: _trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure */ .$y.query(({ ctx })=>{
        return ctx.prisma.post.findMany({
            orderBy: {
                id: "desc"
            }
        });
    }),
    byId: _trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).query(({ ctx, input })=>{
        return ctx.prisma.post.findFirst({
            where: {
                id: input.id
            }
        });
    }),
    create: _trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1),
        content: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1)
    })).mutation(({ ctx, input })=>{
        return ctx.prisma.post.create({
            data: input
        });
    }),
    delete: _trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.string()).mutation(({ ctx, input })=>{
        return ctx.prisma.post.delete({
            where: {
                id: input
            }
        });
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ publicProcedure),
/* harmony export */   U5: () => (/* binding */ protectedProcedure),
/* harmony export */   hA: () => (/* binding */ createTRPCRouter),
/* harmony export */   uw: () => (/* binding */ createTRPCContext)
/* harmony export */ });
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2937);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9926);
/* harmony import */ var _acme_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8453);
/* harmony import */ var _acme_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_2__, _acme_auth__WEBPACK_IMPORTED_MODULE_3__]);
([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_2__, _acme_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1)
 * 2. You want to create a new middleware or type of procedure (see Part 3)
 *
 * tl;dr - this is where all the tRPC server stuff is created and plugged in.
 * The pieces you will need to use are documented accordingly near the end
 */ 




/**
 * This helper generates the "internals" for a tRPC context. If you need to use
 * it, you can export it from here
 *
 * Examples of things you may need it for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */ const createInnerTRPCContext = (opts)=>{
    return {
        session: opts.session,
        prisma: _acme_db__WEBPACK_IMPORTED_MODULE_4__.prisma
    };
};
/**
 * This is the actual context you'll use in your router. It will be used to
 * process every request that goes through your tRPC endpoint
 * @link https://trpc.io/docs/context
 */ const createTRPCContext = async (opts)=>{
    const { req, res } = opts;
    // Get the session from the server using the unstable_getServerSession wrapper function
    const session = await (0,_acme_auth__WEBPACK_IMPORTED_MODULE_3__/* .getServerSession */ .Z)({
        req,
        res
    });
    return createInnerTRPCContext({
        session
    });
};
/**
 * 2. INITIALIZATION
 *
 * This is where the trpc api is initialized, connecting the context and
 * transformer
 */ const t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.context().create({
    transformer: (superjson__WEBPACK_IMPORTED_MODULE_1___default()),
    errorFormatter ({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof zod__WEBPACK_IMPORTED_MODULE_2__.ZodError ? error.cause.flatten() : null
            }
        };
    }
});
/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these
 * a lot in the /src/server/api/routers folder
 */ /**
 * This is how you create new routers and subrouters in your tRPC API
 * @see https://trpc.io/docs/router
 */ const createTRPCRouter = t.router;
/**
 * Public (unauthed) procedure
 *
 * This is the base piece you use to build new queries and mutations on your
 * tRPC API. It does not guarantee that a user querying is authorized, but you
 * can still access user session data if they are logged in
 */ const publicProcedure = t.procedure;
/**
 * Reusable middleware that enforces users are logged in before running the
 * procedure
 */ const enforceUserIsAuthed = t.middleware(({ ctx, next })=>{
    if (!ctx.session?.user) {
        throw new _trpc_server__WEBPACK_IMPORTED_MODULE_0__.TRPCError({
            code: "UNAUTHORIZED"
        });
    }
    return next({
        ctx: {
            // infers the `session` as non-nullable
            session: {
                ...ctx.session,
                user: ctx.session.user
            }
        }
    });
});
/**
 * Protected (authed) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use
 * this. It verifies the session is valid and guarantees ctx.session.user is not
 * null
 *
 * @see https://trpc.io/docs/procedures
 */ const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [453], () => (__webpack_exec__(1704)));
module.exports = __webpack_exports__;

})();