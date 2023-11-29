"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 9655:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 9800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesRouteModule: function() {
        return PagesRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _routemodule = __webpack_require__(3076);
const _render = __webpack_require__(3100);
class PagesRouteModule extends _routemodule.RouteModule {
    setup() {
        throw new Error("Method not implemented.");
    }
    handle() {
        throw new Error("Method not implemented.");
    }
    async render(req, res, pathname, query, renderOpts) {
        const result = await (0, _render.renderToHTML)(req, res, pathname, query, renderOpts);
        return result;
    }
}
const _default = PagesRouteModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 1837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6689),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 2322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1837);
} else {}


/***/ }),

/***/ 1435:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ createTRPCNext)
/* harmony export */ });
/* unused harmony export withTRPC */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9740);
/* harmony import */ var _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8794);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react_ssr_prepass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7583);
/* harmony import */ var _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3558);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__, _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__, _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function transformQueryOrMutationCacheErrors(result) {
    const error = result.state.error;
    if (error instanceof Error && error.name === 'TRPCClientError') {
        const newError = {
            message: error.message,
            data: error.data,
            shape: error.shape
        };
        return {
            ...result,
            state: {
                ...result.state,
                error: newError
            }
        };
    }
    return result;
}
function withTRPC(opts) {
    const { config: getClientConfig  } = opts;
    return (AppOrPage)=>{
        const trpc = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.createReactQueryHooks)(opts);
        const WithTRPC = (props)=>{
            const [prepassProps] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{
                if (props.trpc) {
                    return props.trpc;
                }
                const config = getClientConfig({});
                const queryClient = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.getQueryClient)(config);
                const trpcClient = trpc.createClient(config);
                return {
                    abortOnUnmount: config.abortOnUnmount,
                    queryClient,
                    trpcClient,
                    ssrState: opts.ssr ? 'mounting' : false,
                    ssrContext: null
                };
            });
            const { queryClient , trpcClient , ssrState , ssrContext  } = prepassProps;
            // allow normal components to be wrapped, not just app/pages
            const hydratedState = trpc.useDehydratedState(trpcClient, props.pageProps?.trpcState);
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(trpc.Provider, {
                abortOnUnmount: prepassProps.abortOnUnmount ?? false,
                client: trpcClient,
                queryClient: queryClient,
                ssrState: ssrState,
                ssrContext: ssrContext
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClientProvider, {
                client: queryClient
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.Hydrate, {
                state: hydratedState
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(AppOrPage, Object.assign({}, props)))));
        };
        if (AppOrPage.getInitialProps || opts.ssr) {
            WithTRPC.getInitialProps = async (appOrPageCtx)=>{
                const AppTree = appOrPageCtx.AppTree;
                // Determine if we are wrapping an App component or a Page component.
                const isApp = !!appOrPageCtx.Component;
                const ctx = isApp ? appOrPageCtx.ctx : appOrPageCtx;
                // Run the wrapped component's getInitialProps function.
                let pageProps = {};
                if (AppOrPage.getInitialProps) {
                    const originalProps = await AppOrPage.getInitialProps(appOrPageCtx);
                    const originalPageProps = isApp ? originalProps.pageProps ?? {} : originalProps;
                    pageProps = {
                        ...originalPageProps,
                        ...pageProps
                    };
                }
                const getAppTreeProps = (props)=>isApp ? {
                        pageProps: props
                    } : props;
                if (typeof window !== 'undefined' || !opts.ssr) {
                    return getAppTreeProps(pageProps);
                }
                const config = getClientConfig({
                    ctx
                });
                const trpcClient = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.createTRPCClient)(config);
                const queryClient = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.getQueryClient)(config);
                const trpcProp = {
                    config,
                    trpcClient,
                    queryClient,
                    ssrState: 'prepass',
                    ssrContext: ctx
                };
                const prepassProps = {
                    pageProps,
                    trpc: trpcProp
                };
                // Run the prepass step on AppTree. This will run all trpc queries on the server.
                // multiple prepass ensures that we can do batching on the server
                while(true){
                    // render full tree
                    await react_ssr_prepass__WEBPACK_IMPORTED_MODULE_4__(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(AppTree, prepassProps));
                    if (!queryClient.isFetching()) {
                        break;
                    }
                    // wait until the query cache has settled it's promises
                    await new Promise((resolve)=>{
                        const unsub = queryClient.getQueryCache().subscribe((event)=>{
                            if (event?.query.getObserversCount() === 0) {
                                resolve();
                                unsub();
                            }
                        });
                    });
                }
                const dehydratedCache = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.dehydrate)(queryClient, {
                    shouldDehydrateQuery () {
                        // makes sure errors are also dehydrated
                        return true;
                    }
                });
                // since error instances can't be serialized, let's make them into `TRPCClientErrorLike`-objects
                const dehydratedCacheWithErrors = {
                    ...dehydratedCache,
                    queries: dehydratedCache.queries.map(transformQueryOrMutationCacheErrors),
                    mutations: dehydratedCache.mutations.map(transformQueryOrMutationCacheErrors)
                };
                // dehydrate query client's state and add it to the props
                pageProps.trpcState = trpcClient.runtime.combinedTransformer.output.serialize(dehydratedCacheWithErrors);
                const appTreeProps = getAppTreeProps(pageProps);
                const meta = opts.responseMeta?.({
                    ctx,
                    clientErrors: [
                        ...dehydratedCache.queries,
                        ...dehydratedCache.mutations
                    ].map((v)=>v.state.error).flatMap((err)=>err instanceof Error && err.name === 'TRPCClientError' ? [
                            err
                        ] : [])
                }) || {};
                for (const [key, value] of Object.entries(meta.headers || {})){
                    if (typeof value === 'string') {
                        ctx.res?.setHeader(key, value);
                    }
                }
                if (meta.status && ctx.res) {
                    ctx.res.statusCode = meta.status;
                }
                return appTreeProps;
            };
        }
        const displayName = AppOrPage.displayName || AppOrPage.name || 'Component';
        WithTRPC.displayName = `withTRPC(${displayName})`;
        return WithTRPC;
    };
}

/* istanbul ignore file -- @preserve */ // We're testing this through E2E-testing
function createTRPCNext(opts) {
    const hooks = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createHooksInternal)(opts);
    // TODO: maybe set TSSRContext to `never` when using `WithTRPCNoSSROptions`
    const _withTRPC = withTRPC(opts);
    return (0,_trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__.createFlatProxy)((key)=>{
        if (key === 'useContext') {
            return ()=>{
                const context = hooks.useContext();
                // create a stable reference of the utils context
                return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
                    return (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createReactQueryUtilsProxy)(context);
                }, [
                    context
                ]);
            };
        }
        if (key === 'useQueries') {
            return hooks.useQueries;
        }
        if (key === 'withTRPC') {
            return _withTRPC;
        }
        return (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createReactProxyDecoration)(key, hooks);
    });
}



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;