"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.45_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.45_react@18.2.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRefs: () => (/* binding */ $6ed0406888f73fc4$export$43e446d32b3d21af),\n/* harmony export */   useComposedRefs: () => (/* binding */ $6ed0406888f73fc4$export$c7b2cbe3552a0d05)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/.pnpm/next@14.0.4_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n\n/**\n * Set a given ref to a given value\n * This utility takes care of different types of refs: callback refs and RefObject(s)\n */ function $6ed0406888f73fc4$var$setRef(ref, value) {\n    if (typeof ref === \"function\") ref(value);\n    else if (ref !== null && ref !== undefined) ref.current = value;\n}\n/**\n * A utility to compose multiple refs together\n * Accepts callback refs and RefObject(s)\n */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {\n    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node));\n}\n/**\n * A custom hook that composes multiple refs\n * Accepts callback refs and RefObject(s)\n */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbXBvc2UtcmVmc0AxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi40NV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBR3hEOzs7Q0FHQyxHQUFHLFNBQVNFLDZCQUE2QkMsR0FBRyxFQUFFQyxLQUFLO0lBQ2hELElBQUksT0FBT0QsUUFBUSxZQUFZQSxJQUFJQztTQUM5QixJQUFJRCxRQUFRLFFBQVFBLFFBQVFFLFdBQVdGLElBQUlHLE9BQU8sR0FBR0Y7QUFDOUQ7QUFDQTs7O0NBR0MsR0FBRyxTQUFTRywwQ0FBMEMsR0FBR0MsSUFBSTtJQUMxRCxPQUFPLENBQUNDLE9BQU9ELEtBQUtFLE9BQU8sQ0FBQyxDQUFDUCxNQUFNRCw2QkFBNkJDLEtBQUtNO0FBR3pFO0FBQ0E7OztDQUdDLEdBQUcsU0FBU0UsMENBQTBDLEdBQUdILElBQUk7SUFDMUQsdURBQXVEO0lBQ3ZELE9BQU9QLGtEQUFrQkEsQ0FBQ00sNkNBQTZDQyxPQUFPQTtBQUNsRjtBQUtnSSxDQUNoSSxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGVkLWxpbmtzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1jb21wb3NlLXJlZnNAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuNDVfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzL2Rpc3QvaW5kZXgubWpzP2U3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjayBhcyAkM3ZxbXIkdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuXG5cbi8qKlxuICogU2V0IGEgZ2l2ZW4gcmVmIHRvIGEgZ2l2ZW4gdmFsdWVcbiAqIFRoaXMgdXRpbGl0eSB0YWtlcyBjYXJlIG9mIGRpZmZlcmVudCB0eXBlcyBvZiByZWZzOiBjYWxsYmFjayByZWZzIGFuZCBSZWZPYmplY3QocylcbiAqLyBmdW5jdGlvbiAkNmVkMDQwNjg4OGY3M2ZjNCR2YXIkc2V0UmVmKHJlZiwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykgcmVmKHZhbHVlKTtcbiAgICBlbHNlIGlmIChyZWYgIT09IG51bGwgJiYgcmVmICE9PSB1bmRlZmluZWQpIHJlZi5jdXJyZW50ID0gdmFsdWU7XG59XG4vKipcbiAqIEEgdXRpbGl0eSB0byBjb21wb3NlIG11bHRpcGxlIHJlZnMgdG9nZXRoZXJcbiAqIEFjY2VwdHMgY2FsbGJhY2sgcmVmcyBhbmQgUmVmT2JqZWN0KHMpXG4gKi8gZnVuY3Rpb24gJDZlZDA0MDY4ODhmNzNmYzQkZXhwb3J0JDQzZTQ0NmQzMmIzZDIxYWYoLi4ucmVmcykge1xuICAgIHJldHVybiAobm9kZSk9PnJlZnMuZm9yRWFjaCgocmVmKT0+JDZlZDA0MDY4ODhmNzNmYzQkdmFyJHNldFJlZihyZWYsIG5vZGUpXG4gICAgICAgIClcbiAgICA7XG59XG4vKipcbiAqIEEgY3VzdG9tIGhvb2sgdGhhdCBjb21wb3NlcyBtdWx0aXBsZSByZWZzXG4gKiBBY2NlcHRzIGNhbGxiYWNrIHJlZnMgYW5kIFJlZk9iamVjdChzKVxuICovIGZ1bmN0aW9uICQ2ZWQwNDA2ODg4ZjczZmM0JGV4cG9ydCRjN2IyY2JlMzU1MmEwZDA1KC4uLnJlZnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgcmV0dXJuICQzdnFtciR1c2VDYWxsYmFjaygkNmVkMDQwNjg4OGY3M2ZjNCRleHBvcnQkNDNlNDQ2ZDMyYjNkMjFhZiguLi5yZWZzKSwgcmVmcyk7XG59XG5cblxuXG5cbmV4cG9ydCB7JDZlZDA0MDY4ODhmNzNmYzQkZXhwb3J0JDQzZTQ0NmQzMmIzZDIxYWYgYXMgY29tcG9zZVJlZnMsICQ2ZWQwNDA2ODg4ZjczZmM0JGV4cG9ydCRjN2IyY2JlMzU1MmEwZDA1IGFzIHVzZUNvbXBvc2VkUmVmc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCIkM3ZxbXIkdXNlQ2FsbGJhY2siLCIkNmVkMDQwNjg4OGY3M2ZjNCR2YXIkc2V0UmVmIiwicmVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwiJDZlZDA0MDY4ODhmNzNmYzQkZXhwb3J0JDQzZTQ0NmQzMmIzZDIxYWYiLCJyZWZzIiwibm9kZSIsImZvckVhY2giLCIkNmVkMDQwNjg4OGY3M2ZjNCRleHBvcnQkYzdiMmNiZTM1NTJhMGQwNSIsImNvbXBvc2VSZWZzIiwidXNlQ29tcG9zZWRSZWZzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\n");

/***/ })

};
;