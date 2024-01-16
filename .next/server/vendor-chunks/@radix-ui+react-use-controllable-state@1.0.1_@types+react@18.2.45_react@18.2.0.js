"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.45_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.45_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useControllableState: () => (/* binding */ $71cd76cc60e0454e$export$6f32135080cb4c3)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n\n\nfunction $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: prop, defaultProp: defaultProp, onChange: onChange = ()=>{} }) {\n    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({\n        defaultProp: defaultProp,\n        onChange: onChange\n    });\n    const isControlled = prop !== undefined;\n    const value1 = isControlled ? prop : uncontrolledProp;\n    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue)=>{\n        if (isControlled) {\n            const setter = nextValue;\n            const value = typeof nextValue === \"function\" ? setter(prop) : nextValue;\n            if (value !== prop) handleChange(value);\n        } else setUncontrolledProp(nextValue);\n    }, [\n        isControlled,\n        prop,\n        setUncontrolledProp,\n        handleChange\n    ]);\n    return [\n        value1,\n        setValue\n    ];\n}\nfunction $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp: defaultProp, onChange: onChange }) {\n    const uncontrolledState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp);\n    const [value] = uncontrolledState;\n    const prevValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);\n    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (prevValueRef.current !== value) {\n            handleChange(value);\n            prevValueRef.current = value;\n        }\n    }, [\n        value,\n        prevValueRef,\n        handleChange\n    ]);\n    return uncontrolledState;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuNDVfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkk7QUFDcEQ7QUFJekYsU0FBU1UseUNBQXlDLEVBQUVDLE1BQU1BLElBQUksRUFBR0MsYUFBYUEsV0FBVyxFQUFHQyxVQUFVQSxXQUFXLEtBQUssQ0FBQyxFQUFHO0lBQ3RILE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0MsMkNBQTJDO1FBQ3ZGSixhQUFhQTtRQUNiQyxVQUFVQTtJQUNkO0lBQ0EsTUFBTUksZUFBZU4sU0FBU087SUFDOUIsTUFBTUMsU0FBU0YsZUFBZU4sT0FBT0c7SUFDckMsTUFBTU0sZUFBZVgsZ0ZBQXFCQSxDQUFDSTtJQUMzQyxNQUFNUSxXQUFXcEIsa0RBQWtCQSxDQUFDLENBQUNxQjtRQUNqQyxJQUFJTCxjQUFjO1lBQ2QsTUFBTU0sU0FBU0Q7WUFDZixNQUFNRSxRQUFRLE9BQU9GLGNBQWMsYUFBYUMsT0FBT1osUUFBUVc7WUFDL0QsSUFBSUUsVUFBVWIsTUFBTVMsYUFBYUk7UUFDckMsT0FBT1Qsb0JBQW9CTztJQUMvQixHQUFHO1FBQ0NMO1FBQ0FOO1FBQ0FJO1FBQ0FLO0tBQ0g7SUFDRCxPQUFPO1FBQ0hEO1FBQ0FFO0tBQ0g7QUFDTDtBQUNBLFNBQVNMLDJDQUEyQyxFQUFFSixhQUFhQSxXQUFXLEVBQUdDLFVBQVVBLFFBQVEsRUFBRztJQUNsRyxNQUFNWSxvQkFBb0J0QiwrQ0FBZUEsQ0FBQ1M7SUFDMUMsTUFBTSxDQUFDWSxNQUFNLEdBQUdDO0lBQ2hCLE1BQU1DLGVBQWVyQiw2Q0FBYUEsQ0FBQ21CO0lBQ25DLE1BQU1KLGVBQWVYLGdGQUFxQkEsQ0FBQ0k7SUFDM0NOLGdEQUFnQkEsQ0FBQztRQUNiLElBQUltQixhQUFhQyxPQUFPLEtBQUtILE9BQU87WUFDaENKLGFBQWFJO1lBQ2JFLGFBQWFDLE9BQU8sR0FBR0g7UUFDM0I7SUFDSixHQUFHO1FBQ0NBO1FBQ0FFO1FBQ0FOO0tBQ0g7SUFDRCxPQUFPSztBQUNYO0FBSzBFLENBQzFFLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0ZWQtbGlua3MvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuNDVfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4Lm1qcz8yNmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2sgYXMgJGJuUHc5JHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSBhcyAkYm5QdzkkdXNlU3RhdGUsIHVzZVJlZiBhcyAkYm5QdzkkdXNlUmVmLCB1c2VFZmZlY3QgYXMgJGJuUHc5JHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZUNhbGxiYWNrUmVmIGFzICRiblB3OSR1c2VDYWxsYmFja1JlZn0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmXCI7XG5cblxuXG5mdW5jdGlvbiAkNzFjZDc2Y2M2MGUwNDU0ZSRleHBvcnQkNmYzMjEzNTA4MGNiNGMzKHsgcHJvcDogcHJvcCAsIGRlZmF1bHRQcm9wOiBkZWZhdWx0UHJvcCAsIG9uQ2hhbmdlOiBvbkNoYW5nZSA9ICgpPT57fSAgfSkge1xuICAgIGNvbnN0IFt1bmNvbnRyb2xsZWRQcm9wLCBzZXRVbmNvbnRyb2xsZWRQcm9wXSA9ICQ3MWNkNzZjYzYwZTA0NTRlJHZhciR1c2VVbmNvbnRyb2xsZWRTdGF0ZSh7XG4gICAgICAgIGRlZmF1bHRQcm9wOiBkZWZhdWx0UHJvcCxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlXG4gICAgfSk7XG4gICAgY29uc3QgaXNDb250cm9sbGVkID0gcHJvcCAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHZhbHVlMSA9IGlzQ29udHJvbGxlZCA/IHByb3AgOiB1bmNvbnRyb2xsZWRQcm9wO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICRiblB3OSR1c2VDYWxsYmFja1JlZihvbkNoYW5nZSk7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSAkYm5QdzkkdXNlQ2FsbGJhY2soKG5leHRWYWx1ZSk9PntcbiAgICAgICAgaWYgKGlzQ29udHJvbGxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2V0dGVyID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgbmV4dFZhbHVlID09PSAnZnVuY3Rpb24nID8gc2V0dGVyKHByb3ApIDogbmV4dFZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwcm9wKSBoYW5kbGVDaGFuZ2UodmFsdWUpO1xuICAgICAgICB9IGVsc2Ugc2V0VW5jb250cm9sbGVkUHJvcChuZXh0VmFsdWUpO1xuICAgIH0sIFtcbiAgICAgICAgaXNDb250cm9sbGVkLFxuICAgICAgICBwcm9wLFxuICAgICAgICBzZXRVbmNvbnRyb2xsZWRQcm9wLFxuICAgICAgICBoYW5kbGVDaGFuZ2VcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICB2YWx1ZTEsXG4gICAgICAgIHNldFZhbHVlXG4gICAgXTtcbn1cbmZ1bmN0aW9uICQ3MWNkNzZjYzYwZTA0NTRlJHZhciR1c2VVbmNvbnRyb2xsZWRTdGF0ZSh7IGRlZmF1bHRQcm9wOiBkZWZhdWx0UHJvcCAsIG9uQ2hhbmdlOiBvbkNoYW5nZSAgfSkge1xuICAgIGNvbnN0IHVuY29udHJvbGxlZFN0YXRlID0gJGJuUHc5JHVzZVN0YXRlKGRlZmF1bHRQcm9wKTtcbiAgICBjb25zdCBbdmFsdWVdID0gdW5jb250cm9sbGVkU3RhdGU7XG4gICAgY29uc3QgcHJldlZhbHVlUmVmID0gJGJuUHc5JHVzZVJlZih2YWx1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gJGJuUHc5JHVzZUNhbGxiYWNrUmVmKG9uQ2hhbmdlKTtcbiAgICAkYm5QdzkkdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChwcmV2VmFsdWVSZWYuY3VycmVudCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICBwcmV2VmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcHJldlZhbHVlUmVmLFxuICAgICAgICBoYW5kbGVDaGFuZ2VcbiAgICBdKTtcbiAgICByZXR1cm4gdW5jb250cm9sbGVkU3RhdGU7XG59XG5cblxuXG5cbmV4cG9ydCB7JDcxY2Q3NmNjNjBlMDQ1NGUkZXhwb3J0JDZmMzIxMzUwODBjYjRjMyBhcyB1c2VDb250cm9sbGFibGVTdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCIkYm5QdzkkdXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIiRiblB3OSR1c2VTdGF0ZSIsInVzZVJlZiIsIiRiblB3OSR1c2VSZWYiLCJ1c2VFZmZlY3QiLCIkYm5QdzkkdXNlRWZmZWN0IiwidXNlQ2FsbGJhY2tSZWYiLCIkYm5QdzkkdXNlQ2FsbGJhY2tSZWYiLCIkNzFjZDc2Y2M2MGUwNDU0ZSRleHBvcnQkNmYzMjEzNTA4MGNiNGMzIiwicHJvcCIsImRlZmF1bHRQcm9wIiwib25DaGFuZ2UiLCJ1bmNvbnRyb2xsZWRQcm9wIiwic2V0VW5jb250cm9sbGVkUHJvcCIsIiQ3MWNkNzZjYzYwZTA0NTRlJHZhciR1c2VVbmNvbnRyb2xsZWRTdGF0ZSIsImlzQ29udHJvbGxlZCIsInVuZGVmaW5lZCIsInZhbHVlMSIsImhhbmRsZUNoYW5nZSIsInNldFZhbHVlIiwibmV4dFZhbHVlIiwic2V0dGVyIiwidmFsdWUiLCJ1bmNvbnRyb2xsZWRTdGF0ZSIsInByZXZWYWx1ZVJlZiIsImN1cnJlbnQiLCJ1c2VDb250cm9sbGFibGVTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs\n");

/***/ })

};
;