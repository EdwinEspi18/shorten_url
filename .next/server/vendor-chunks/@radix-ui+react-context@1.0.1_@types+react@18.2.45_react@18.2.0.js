"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-context@1.0.1_@types+react@18.2.45_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-context@1.0.1_@types+react@18.2.45_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ $c512c27ab02ef895$export$fd42f52fd3ae1109),\n/* harmony export */   createContextScope: () => (/* binding */ $c512c27ab02ef895$export$50c7b4e9d9f19c1)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {\n    const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n    function Provider(props) {\n        const { children: children, ...context } = props; // Only re-memoize when prop values change\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n        const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context, Object.values(context));\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {\n            value: value\n        }, children);\n    }\n    function useContext(consumerName) {\n        const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n        if (context) return context;\n        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.\n        throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n    }\n    Provider.displayName = rootComponentName + \"Provider\";\n    return [\n        Provider,\n        useContext\n    ];\n}\n/* -------------------------------------------------------------------------------------------------\n * createContextScope\n * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {\n    let defaultContexts = [];\n    /* -----------------------------------------------------------------------------------------------\n   * createContext\n   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {\n        const BaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n        const index = defaultContexts.length;\n        defaultContexts = [\n            ...defaultContexts,\n            defaultContext\n        ];\n        function Provider(props) {\n            const { scope: scope, children: children, ...context } = props;\n            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change\n            // eslint-disable-next-line react-hooks/exhaustive-deps\n            const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context, Object.values(context));\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {\n                value: value\n            }, children);\n        }\n        function useContext(consumerName, scope) {\n            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;\n            const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n            if (context) return context;\n            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.\n            throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n        }\n        Provider.displayName = rootComponentName + \"Provider\";\n        return [\n            Provider,\n            useContext\n        ];\n    }\n    /* -----------------------------------------------------------------------------------------------\n   * createScope\n   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{\n        const scopeContexts = defaultContexts.map((defaultContext)=>{\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n        });\n        return function useScope(scope) {\n            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;\n            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n                    [`__scope${scopeName}`]: {\n                        ...scope,\n                        [scopeName]: contexts\n                    }\n                }), [\n                scope,\n                contexts\n            ]);\n        };\n    };\n    createScope.scopeName = scopeName;\n    return [\n        $c512c27ab02ef895$export$fd42f52fd3ae1109,\n        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)\n    ];\n}\n/* -------------------------------------------------------------------------------------------------\n * composeContextScopes\n * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {\n    const baseScope = scopes[0];\n    if (scopes.length === 1) return baseScope;\n    const createScope1 = ()=>{\n        const scopeHooks = scopes.map((createScope)=>({\n                useScope: createScope(),\n                scopeName: createScope.scopeName\n            }));\n        return function useComposedScopes(overrideScopes) {\n            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope, scopeName: scopeName })=>{\n                // We are calling a hook inside a callback which React warns against to avoid inconsistent\n                // renders, however, scoping doesn't have render side effects so we ignore the rule.\n                // eslint-disable-next-line react-hooks/rules-of-hooks\n                const scopeProps = useScope(overrideScopes);\n                const currentScope = scopeProps[`__scope${scopeName}`];\n                return {\n                    ...nextScopes,\n                    ...currentScope\n                };\n            }, {});\n            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n                    [`__scope${baseScope.scopeName}`]: nextScopes1\n                }), [\n                nextScopes1\n            ]);\n        };\n    };\n    createScope1.scopeName = baseScope.scopeName;\n    return createScope1;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbnRleHRAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuNDVfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0o7QUFHL0osU0FBU1EsMENBQTBDQyxpQkFBaUIsRUFBRUMsY0FBYztJQUNoRixNQUFNQyxVQUFVLFdBQVcsR0FBR1Ysb0RBQW9CQSxDQUFDUztJQUNuRCxTQUFTRSxTQUFTQyxLQUFLO1FBQ25CLE1BQU0sRUFBRUMsVUFBVUEsUUFBUSxFQUFHLEdBQUdDLFNBQVMsR0FBR0YsT0FBTywwQ0FBMEM7UUFDN0YsdURBQXVEO1FBQ3ZELE1BQU1HLFFBQVFiLDhDQUFjQSxDQUFDLElBQUlZLFNBQy9CRSxPQUFPQyxNQUFNLENBQUNIO1FBQ2hCLE9BQU8sV0FBVyxHQUFHVixvREFBb0JBLENBQUNNLFFBQVFDLFFBQVEsRUFBRTtZQUN4REksT0FBT0E7UUFDWCxHQUFHRjtJQUNQO0lBQ0EsU0FBU1IsV0FBV2EsWUFBWTtRQUM1QixNQUFNSixVQUFVUixpREFBaUJBLENBQUNJO1FBQ2xDLElBQUlJLFNBQVMsT0FBT0E7UUFDcEIsSUFBSUwsbUJBQW1CVSxXQUFXLE9BQU9WLGdCQUFnQixpRUFBaUU7UUFDMUgsTUFBTSxJQUFJVyxNQUFNLENBQUMsRUFBRSxFQUFFRixhQUFhLHlCQUF5QixFQUFFVixrQkFBa0IsRUFBRSxDQUFDO0lBQ3RGO0lBQ0FHLFNBQVNVLFdBQVcsR0FBR2Isb0JBQW9CO0lBQzNDLE9BQU87UUFDSEc7UUFDQU47S0FDSDtBQUNMO0FBQ0E7O2tHQUVrRyxHQUFHLFNBQVNpQix5Q0FBeUNDLFNBQVMsRUFBRUMseUJBQXlCLEVBQUU7SUFDekwsSUFBSUMsa0JBQWtCLEVBQUU7SUFDeEI7O2tHQUU4RixHQUFHLFNBQVNsQiwwQ0FBMENDLGlCQUFpQixFQUFFQyxj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YixHQUFHRSxZQUFZO2dCQUNuQjtZQUNKLEdBQUcsQ0FBQztZQUNKLE9BQU81Qyw4Q0FBY0EsQ0FBQyxJQUFLO29CQUNuQixDQUFDLENBQUMsT0FBTyxFQUFFbUMsVUFBVWQsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFbUI7Z0JBQ3ZDLElBQ0Y7Z0JBQ0VBO2FBQ0g7UUFDTDtJQUNKO0lBQ0FKLGFBQWFmLFNBQVMsR0FBR2MsVUFBVWQsU0FBUztJQUM1QyxPQUFPZTtBQUNYO0FBS29JLENBQ3BJLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0ZWQtbGlua3MvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbnRleHRAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuNDVfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC9kaXN0L2luZGV4Lm1qcz81NmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCBhcyAkM2JrQUskY3JlYXRlQ29udGV4dCwgdXNlTWVtbyBhcyAkM2JrQUskdXNlTWVtbywgY3JlYXRlRWxlbWVudCBhcyAkM2JrQUskY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCBhcyAkM2JrQUskdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZnVuY3Rpb24gJGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JGZkNDJmNTJmZDNhZTExMDkocm9vdENvbXBvbmVudE5hbWUsIGRlZmF1bHRDb250ZXh0KSB7XG4gICAgY29uc3QgQ29udGV4dCA9IC8qI19fUFVSRV9fKi8gJDNia0FLJGNyZWF0ZUNvbnRleHQoZGVmYXVsdENvbnRleHQpO1xuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IGNoaWxkcmVuICwgLi4uY29udGV4dCB9ID0gcHJvcHM7IC8vIE9ubHkgcmUtbWVtb2l6ZSB3aGVuIHByb3AgdmFsdWVzIGNoYW5nZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJDNia0FLJHVzZU1lbW8oKCk9PmNvbnRleHRcbiAgICAgICAgLCBPYmplY3QudmFsdWVzKGNvbnRleHQpKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gJDNia0FLJGNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNlQ29udGV4dChjb25zdW1lck5hbWUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9ICQzYmtBSyR1c2VDb250ZXh0KENvbnRleHQpO1xuICAgICAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7IC8vIGlmIGEgZGVmYXVsdENvbnRleHQgd2Fzbid0IHNwZWNpZmllZCwgaXQncyBhIHJlcXVpcmVkIGNvbnRleHQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgKTtcbiAgICB9XG4gICAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArICdQcm92aWRlcic7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgUHJvdmlkZXIsXG4gICAgICAgIHVzZUNvbnRleHRcbiAgICBdO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogY3JlYXRlQ29udGV4dFNjb3BlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGZ1bmN0aW9uICRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCQ1MGM3YjRlOWQ5ZjE5YzEoc2NvcGVOYW1lLCBjcmVhdGVDb250ZXh0U2NvcGVEZXBzID0gW10pIHtcbiAgICBsZXQgZGVmYXVsdENvbnRleHRzID0gW107XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogY3JlYXRlQ29udGV4dFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBmdW5jdGlvbiAkYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkZmQ0MmY1MmZkM2FlMTEwOShyb290Q29tcG9uZW50TmFtZSwgZGVmYXVsdENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgQmFzZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovICQzYmtBSyRjcmVhdGVDb250ZXh0KGRlZmF1bHRDb250ZXh0KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBkZWZhdWx0Q29udGV4dHMubGVuZ3RoO1xuICAgICAgICBkZWZhdWx0Q29udGV4dHMgPSBbXG4gICAgICAgICAgICAuLi5kZWZhdWx0Q29udGV4dHMsXG4gICAgICAgICAgICBkZWZhdWx0Q29udGV4dFxuICAgICAgICBdO1xuICAgICAgICBmdW5jdGlvbiBQcm92aWRlcihwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgeyBzY29wZTogc2NvcGUgLCBjaGlsZHJlbjogY2hpbGRyZW4gLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAgICAgICAgIGNvbnN0IENvbnRleHQgPSAoc2NvcGUgPT09IG51bGwgfHwgc2NvcGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNjb3BlW3Njb3BlTmFtZV1baW5kZXhdKSB8fCBCYXNlQ29udGV4dDsgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQzYmtBSyR1c2VNZW1vKCgpPT5jb250ZXh0XG4gICAgICAgICAgICAsIE9iamVjdC52YWx1ZXMoY29udGV4dCkpO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gJDNia0FLJGNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNvbnRleHQoY29uc3VtZXJOYW1lLCBzY29wZSkge1xuICAgICAgICAgICAgY29uc3QgQ29udGV4dCA9IChzY29wZSA9PT0gbnVsbCB8fCBzY29wZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2NvcGVbc2NvcGVOYW1lXVtpbmRleF0pIHx8IEJhc2VDb250ZXh0O1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9ICQzYmtBSyR1c2VDb250ZXh0KENvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBkZWZhdWx0Q29udGV4dDsgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgKTtcbiAgICAgICAgfVxuICAgICAgICBQcm92aWRlci5kaXNwbGF5TmFtZSA9IHJvb3RDb21wb25lbnROYW1lICsgJ1Byb3ZpZGVyJztcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFByb3ZpZGVyLFxuICAgICAgICAgICAgdXNlQ29udGV4dFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBjcmVhdGVTY29wZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBjb25zdCBjcmVhdGVTY29wZSA9ICgpPT57XG4gICAgICAgIGNvbnN0IHNjb3BlQ29udGV4dHMgPSBkZWZhdWx0Q29udGV4dHMubWFwKChkZWZhdWx0Q29udGV4dCk9PntcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICQzYmtBSyRjcmVhdGVDb250ZXh0KGRlZmF1bHRDb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB1c2VTY29wZShzY29wZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dHMgPSAoc2NvcGUgPT09IG51bGwgfHwgc2NvcGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNjb3BlW3Njb3BlTmFtZV0pIHx8IHNjb3BlQ29udGV4dHM7XG4gICAgICAgICAgICByZXR1cm4gJDNia0FLJHVzZU1lbW8oKCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIFtgX19zY29wZSR7c2NvcGVOYW1lfWBdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzY29wZU5hbWVdOiBjb250ZXh0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgW1xuICAgICAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgICAgIGNvbnRleHRzXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNyZWF0ZVNjb3BlLnNjb3BlTmFtZSA9IHNjb3BlTmFtZTtcbiAgICByZXR1cm4gW1xuICAgICAgICAkYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkZmQ0MmY1MmZkM2FlMTEwOSxcbiAgICAgICAgJGM1MTJjMjdhYjAyZWY4OTUkdmFyJGNvbXBvc2VDb250ZXh0U2NvcGVzKGNyZWF0ZVNjb3BlLCAuLi5jcmVhdGVDb250ZXh0U2NvcGVEZXBzKVxuICAgIF07XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBjb21wb3NlQ29udGV4dFNjb3Blc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBmdW5jdGlvbiAkYzUxMmMyN2FiMDJlZjg5NSR2YXIkY29tcG9zZUNvbnRleHRTY29wZXMoLi4uc2NvcGVzKSB7XG4gICAgY29uc3QgYmFzZVNjb3BlID0gc2NvcGVzWzBdO1xuICAgIGlmIChzY29wZXMubGVuZ3RoID09PSAxKSByZXR1cm4gYmFzZVNjb3BlO1xuICAgIGNvbnN0IGNyZWF0ZVNjb3BlMSA9ICgpPT57XG4gICAgICAgIGNvbnN0IHNjb3BlSG9va3MgPSBzY29wZXMubWFwKChjcmVhdGVTY29wZSk9Pih7XG4gICAgICAgICAgICAgICAgdXNlU2NvcGU6IGNyZWF0ZVNjb3BlKCksXG4gICAgICAgICAgICAgICAgc2NvcGVOYW1lOiBjcmVhdGVTY29wZS5zY29wZU5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB1c2VDb21wb3NlZFNjb3BlcyhvdmVycmlkZVNjb3Blcykge1xuICAgICAgICAgICAgY29uc3QgbmV4dFNjb3BlczEgPSBzY29wZUhvb2tzLnJlZHVjZSgobmV4dFNjb3BlcywgeyB1c2VTY29wZTogdXNlU2NvcGUgLCBzY29wZU5hbWU6IHNjb3BlTmFtZSAgfSk9PntcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgY2FsbGluZyBhIGhvb2sgaW5zaWRlIGEgY2FsbGJhY2sgd2hpY2ggUmVhY3Qgd2FybnMgYWdhaW5zdCB0byBhdm9pZCBpbmNvbnNpc3RlbnRcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJzLCBob3dldmVyLCBzY29waW5nIGRvZXNuJ3QgaGF2ZSByZW5kZXIgc2lkZSBlZmZlY3RzIHNvIHdlIGlnbm9yZSB0aGUgcnVsZS5cbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgICAgICAgICBjb25zdCBzY29wZVByb3BzID0gdXNlU2NvcGUob3ZlcnJpZGVTY29wZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IHNjb3BlUHJvcHNbYF9fc2NvcGUke3Njb3BlTmFtZX1gXTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5uZXh0U2NvcGVzLFxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50U2NvcGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgcmV0dXJuICQzYmtBSyR1c2VNZW1vKCgpPT4oe1xuICAgICAgICAgICAgICAgICAgICBbYF9fc2NvcGUke2Jhc2VTY29wZS5zY29wZU5hbWV9YF06IG5leHRTY29wZXMxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgW1xuICAgICAgICAgICAgICAgIG5leHRTY29wZXMxXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNyZWF0ZVNjb3BlMS5zY29wZU5hbWUgPSBiYXNlU2NvcGUuc2NvcGVOYW1lO1xuICAgIHJldHVybiBjcmVhdGVTY29wZTE7XG59XG5cblxuXG5cbmV4cG9ydCB7JGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JGZkNDJmNTJmZDNhZTExMDkgYXMgY3JlYXRlQ29udGV4dCwgJGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JDUwYzdiNGU5ZDlmMTljMSBhcyBjcmVhdGVDb250ZXh0U2NvcGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCIkM2JrQUskY3JlYXRlQ29udGV4dCIsInVzZU1lbW8iLCIkM2JrQUskdXNlTWVtbyIsImNyZWF0ZUVsZW1lbnQiLCIkM2JrQUskY3JlYXRlRWxlbWVudCIsInVzZUNvbnRleHQiLCIkM2JrQUskdXNlQ29udGV4dCIsIiRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCRmZDQyZjUyZmQzYWUxMTA5Iiwicm9vdENvbXBvbmVudE5hbWUiLCJkZWZhdWx0Q29udGV4dCIsIkNvbnRleHQiLCJQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJjb250ZXh0IiwidmFsdWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zdW1lck5hbWUiLCJ1bmRlZmluZWQiLCJFcnJvciIsImRpc3BsYXlOYW1lIiwiJGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JDUwYzdiNGU5ZDlmMTljMSIsInNjb3BlTmFtZSIsImNyZWF0ZUNvbnRleHRTY29wZURlcHMiLCJkZWZhdWx0Q29udGV4dHMiLCJCYXNlQ29udGV4dCIsImluZGV4IiwibGVuZ3RoIiwic2NvcGUiLCJjcmVhdGVTY29wZSIsInNjb3BlQ29udGV4dHMiLCJtYXAiLCJ1c2VTY29wZSIsImNvbnRleHRzIiwiJGM1MTJjMjdhYjAyZWY4OTUkdmFyJGNvbXBvc2VDb250ZXh0U2NvcGVzIiwic2NvcGVzIiwiYmFzZVNjb3BlIiwiY3JlYXRlU2NvcGUxIiwic2NvcGVIb29rcyIsInVzZUNvbXBvc2VkU2NvcGVzIiwib3ZlcnJpZGVTY29wZXMiLCJuZXh0U2NvcGVzMSIsInJlZHVjZSIsIm5leHRTY29wZXMiLCJzY29wZVByb3BzIiwiY3VycmVudFNjb3BlIiwiY3JlYXRlQ29udGV4dFNjb3BlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\n");

/***/ })

};
;