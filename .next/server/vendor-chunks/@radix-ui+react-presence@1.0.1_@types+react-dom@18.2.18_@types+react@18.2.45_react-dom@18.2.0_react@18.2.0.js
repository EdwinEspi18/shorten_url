"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ $921a889cee6df7e8$export$99c2b779aa4e8b8b)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.45_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n\n\n\n\nfunction $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState !== null && nextState !== void 0 ? nextState : state;\n    }, initialState);\n}\nconst $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{\n    const { present: present, children: children } = props;\n    const presence = $921a889cee6df7e8$var$usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, child.ref);\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {\n        ref: ref\n    }) : null;\n};\n$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = \"Presence\";\n/* -------------------------------------------------------------------------------------------------\n * usePresence\n * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {\n    const [node1, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const stylesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});\n    const prevPresentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present);\n    const prevAnimationNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);\n            if (present) send(\"MOUNT\");\n            else if (currentAnimationName === \"none\" || (styles === null || styles === void 0 ? void 0 : styles.display) === \"none\") // so we unmount instantly\n            send(\"UNMOUNT\");\n            else {\n                /**\n         * When `present` changes to `false`, we check changes to animation-name to\n         * determine whether an animation has started. We chose this approach (reading\n         * computed styles) because there is no `animationrun` event and `animationstart`\n         * fires after `animation-delay` has expired which would be too late.\n         */ const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) send(\"ANIMATION_OUT\");\n                else send(\"UNMOUNT\");\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        if (node1) {\n            /**\n       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`\n       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we\n       * make sure we only trigger ANIMATION_END for the currently active animation.\n       */ const handleAnimationEnd = (event)=>{\n                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node1 && isCurrentAnimation) // a frame after the animation ends, creating a flash of visible content.\n                // By manually flushing we ensure they sync within a frame, removing the flash.\n                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>send(\"ANIMATION_END\"));\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node1) prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n            };\n            node1.addEventListener(\"animationstart\", handleAnimationStart);\n            node1.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node1.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                node1.removeEventListener(\"animationstart\", handleAnimationStart);\n                node1.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node1.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else // We avoid doing so during cleanup as the node may change but still exist.\n        send(\"ANIMATION_END\");\n    }, [\n        node1,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{\n            if (node) stylesRef.current = getComputedStyle(node);\n            setNode(node);\n        }, [])\n    };\n}\n/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {\n    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || \"none\";\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByZXNlbmNlQDEuMC4xX0B0eXBlcytyZWFjdC1kb21AMTguMi4xOF9AdHlwZXMrcmVhY3RAMTguMi40NV9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdQO0FBQ3hMO0FBQytCO0FBQ0s7QUFPNUYsU0FBU29CLDBDQUEwQ0MsWUFBWSxFQUFFQyxPQUFPO0lBQ3BFLE9BQU9ULGlEQUFpQkEsQ0FBQyxDQUFDVSxPQUFPQztRQUM3QixNQUFNQyxZQUFZSCxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTTtRQUN2QyxPQUFPQyxjQUFjLFFBQVFBLGNBQWMsS0FBSyxJQUFJQSxZQUFZRjtJQUNwRSxHQUFHRjtBQUNQO0FBR0EsTUFBTUssNENBQTRDLENBQUNDO0lBQy9DLE1BQU0sRUFBRUMsU0FBU0EsT0FBTyxFQUFHQyxVQUFVQSxRQUFRLEVBQUcsR0FBR0Y7SUFDbkQsTUFBTUcsV0FBV0Msa0NBQWtDSDtJQUNuRCxNQUFNSSxRQUFRLE9BQU9ILGFBQWEsYUFBYUEsU0FBUztRQUNwREQsU0FBU0UsU0FBU0csU0FBUztJQUMvQixLQUFLaEMsMkNBQWVBLENBQUNpQyxJQUFJLENBQUNMO0lBQzFCLE1BQU1NLE1BQU1sQiw2RUFBc0JBLENBQUNhLFNBQVNLLEdBQUcsRUFBRUgsTUFBTUcsR0FBRztJQUMxRCxNQUFNQyxhQUFhLE9BQU9QLGFBQWE7SUFDdkMsT0FBT08sY0FBY04sU0FBU0csU0FBUyxHQUFHLFdBQVcsR0FBRzlCLG1EQUFtQkEsQ0FBQzZCLE9BQU87UUFDL0VHLEtBQUtBO0lBQ1QsS0FBSztBQUNUO0FBQ0FULDBDQUEwQ1csV0FBVyxHQUFHO0FBQ3hEOztrR0FFa0csR0FBRyxTQUFTTixrQ0FBa0NILE9BQU87SUFDbkosTUFBTSxDQUFD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TUFBTTtJQUN2SixPQUFPLENBQUNBLFdBQVcsUUFBUUEsV0FBVyxLQUFLLElBQUksS0FBSyxJQUFJQSxPQUFPUyxhQUFhLEtBQUs7QUFDckY7QUFLK0QsQ0FDL0Qsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRlZC1saW5rcy8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtcHJlc2VuY2VAMS4wLjFfQHR5cGVzK3JlYWN0LWRvbUAxOC4yLjE4X0B0eXBlcytyZWFjdEAxOC4yLjQ1X3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2UvZGlzdC9pbmRleC5tanM/NmIyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoaWxkcmVuIGFzICRpcXEzciRDaGlsZHJlbiwgY2xvbmVFbGVtZW50IGFzICRpcXEzciRjbG9uZUVsZW1lbnQsIHVzZVN0YXRlIGFzICRpcXEzciR1c2VTdGF0ZSwgdXNlUmVmIGFzICRpcXEzciR1c2VSZWYsIHVzZUVmZmVjdCBhcyAkaXFxM3IkdXNlRWZmZWN0LCB1c2VDYWxsYmFjayBhcyAkaXFxM3IkdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgYXMgJGlxcTNyJHVzZVJlZHVjZXJ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtmbHVzaFN5bmMgYXMgJGlxcTNyJGZsdXNoU3luY30gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHt1c2VDb21wb3NlZFJlZnMgYXMgJGlxcTNyJHVzZUNvbXBvc2VkUmVmc30gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnNcIjtcbmltcG9ydCB7dXNlTGF5b3V0RWZmZWN0IGFzICRpcXEzciR1c2VMYXlvdXRFZmZlY3R9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWxheW91dC1lZmZlY3RcIjtcblxuXG5cblxuXG5cbmZ1bmN0aW9uICRmZTk2M2IzNTUzNDdjYzY4JGV4cG9ydCQzZTY1NDNkZTE0Zjg2MTRmKGluaXRpYWxTdGF0ZSwgbWFjaGluZSkge1xuICAgIHJldHVybiAkaXFxM3IkdXNlUmVkdWNlcigoc3RhdGUsIGV2ZW50KT0+e1xuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBtYWNoaW5lW3N0YXRlXVtldmVudF07XG4gICAgICAgIHJldHVybiBuZXh0U3RhdGUgIT09IG51bGwgJiYgbmV4dFN0YXRlICE9PSB2b2lkIDAgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgICB9LCBpbml0aWFsU3RhdGUpO1xufVxuXG5cbmNvbnN0ICQ5MjFhODg5Y2VlNmRmN2U4JGV4cG9ydCQ5OWMyYjc3OWFhNGU4YjhiID0gKHByb3BzKT0+e1xuICAgIGNvbnN0IHsgcHJlc2VudDogcHJlc2VudCAsIGNoaWxkcmVuOiBjaGlsZHJlbiAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHByZXNlbmNlID0gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJHVzZVByZXNlbmNlKHByZXNlbnQpO1xuICAgIGNvbnN0IGNoaWxkID0gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oe1xuICAgICAgICBwcmVzZW50OiBwcmVzZW5jZS5pc1ByZXNlbnRcbiAgICB9KSA6ICRpcXEzciRDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICBjb25zdCByZWYgPSAkaXFxM3IkdXNlQ29tcG9zZWRSZWZzKHByZXNlbmNlLnJlZiwgY2hpbGQucmVmKTtcbiAgICBjb25zdCBmb3JjZU1vdW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nO1xuICAgIHJldHVybiBmb3JjZU1vdW50IHx8IHByZXNlbmNlLmlzUHJlc2VudCA/IC8qI19fUFVSRV9fKi8gJGlxcTNyJGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICByZWY6IHJlZlxuICAgIH0pIDogbnVsbDtcbn07XG4kOTIxYTg4OWNlZTZkZjdlOCRleHBvcnQkOTljMmI3NzlhYTRlOGI4Yi5kaXNwbGF5TmFtZSA9ICdQcmVzZW5jZSc7XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiB1c2VQcmVzZW5jZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBmdW5jdGlvbiAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkdXNlUHJlc2VuY2UocHJlc2VudCkge1xuICAgIGNvbnN0IFtub2RlMSwgc2V0Tm9kZV0gPSAkaXFxM3IkdXNlU3RhdGUoKTtcbiAgICBjb25zdCBzdHlsZXNSZWYgPSAkaXFxM3IkdXNlUmVmKHt9KTtcbiAgICBjb25zdCBwcmV2UHJlc2VudFJlZiA9ICRpcXEzciR1c2VSZWYocHJlc2VudCk7XG4gICAgY29uc3QgcHJldkFuaW1hdGlvbk5hbWVSZWYgPSAkaXFxM3IkdXNlUmVmKCdub25lJyk7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gcHJlc2VudCA/ICdtb3VudGVkJyA6ICd1bm1vdW50ZWQnO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2VuZF0gPSAkZmU5NjNiMzU1MzQ3Y2M2OCRleHBvcnQkM2U2NTQzZGUxNGY4NjE0Zihpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgbW91bnRlZDoge1xuICAgICAgICAgICAgVU5NT1VOVDogJ3VubW91bnRlZCcsXG4gICAgICAgICAgICBBTklNQVRJT05fT1VUOiAndW5tb3VudFN1c3BlbmRlZCdcbiAgICAgICAgfSxcbiAgICAgICAgdW5tb3VudFN1c3BlbmRlZDoge1xuICAgICAgICAgICAgTU9VTlQ6ICdtb3VudGVkJyxcbiAgICAgICAgICAgIEFOSU1BVElPTl9FTkQ6ICd1bm1vdW50ZWQnXG4gICAgICAgIH0sXG4gICAgICAgIHVubW91bnRlZDoge1xuICAgICAgICAgICAgTU9VTlQ6ICdtb3VudGVkJ1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJGlxcTNyJHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBjdXJyZW50QW5pbWF0aW9uTmFtZSA9ICQ5MjFhODg5Y2VlNmRmN2U4JHZhciRnZXRBbmltYXRpb25OYW1lKHN0eWxlc1JlZi5jdXJyZW50KTtcbiAgICAgICAgcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudCA9IHN0YXRlID09PSAnbW91bnRlZCcgPyBjdXJyZW50QW5pbWF0aW9uTmFtZSA6ICdub25lJztcbiAgICB9LCBbXG4gICAgICAgIHN0YXRlXG4gICAgXSk7XG4gICAgJGlxcTNyJHVzZUxheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBzdHlsZXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3Qgd2FzUHJlc2VudCA9IHByZXZQcmVzZW50UmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGhhc1ByZXNlbnRDaGFuZ2VkID0gd2FzUHJlc2VudCAhPT0gcHJlc2VudDtcbiAgICAgICAgaWYgKGhhc1ByZXNlbnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2QW5pbWF0aW9uTmFtZSA9IHByZXZBbmltYXRpb25OYW1lUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QW5pbWF0aW9uTmFtZSA9ICQ5MjFhODg5Y2VlNmRmN2U4JHZhciRnZXRBbmltYXRpb25OYW1lKHN0eWxlcyk7XG4gICAgICAgICAgICBpZiAocHJlc2VudCkgc2VuZCgnTU9VTlQnKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRBbmltYXRpb25OYW1lID09PSAnbm9uZScgfHwgKHN0eWxlcyA9PT0gbnVsbCB8fCBzdHlsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0eWxlcy5kaXNwbGF5KSA9PT0gJ25vbmUnKSAvLyBJZiB0aGVyZSBpcyBubyBleGl0IGFuaW1hdGlvbiBvciB0aGUgZWxlbWVudCBpcyBoaWRkZW4sIGFuaW1hdGlvbnMgd29uJ3QgcnVuXG4gICAgICAgICAgICAvLyBzbyB3ZSB1bm1vdW50IGluc3RhbnRseVxuICAgICAgICAgICAgc2VuZCgnVU5NT1VOVCcpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZXNlbnRgIGNoYW5nZXMgdG8gYGZhbHNlYCwgd2UgY2hlY2sgY2hhbmdlcyB0byBhbmltYXRpb24tbmFtZSB0b1xuICAgICAgICAgKiBkZXRlcm1pbmUgd2hldGhlciBhbiBhbmltYXRpb24gaGFzIHN0YXJ0ZWQuIFdlIGNob3NlIHRoaXMgYXBwcm9hY2ggKHJlYWRpbmdcbiAgICAgICAgICogY29tcHV0ZWQgc3R5bGVzKSBiZWNhdXNlIHRoZXJlIGlzIG5vIGBhbmltYXRpb25ydW5gIGV2ZW50IGFuZCBgYW5pbWF0aW9uc3RhcnRgXG4gICAgICAgICAqIGZpcmVzIGFmdGVyIGBhbmltYXRpb24tZGVsYXlgIGhhcyBleHBpcmVkIHdoaWNoIHdvdWxkIGJlIHRvbyBsYXRlLlxuICAgICAgICAgKi8gY29uc3QgaXNBbmltYXRpbmcgPSBwcmV2QW5pbWF0aW9uTmFtZSAhPT0gY3VycmVudEFuaW1hdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHdhc1ByZXNlbnQgJiYgaXNBbmltYXRpbmcpIHNlbmQoJ0FOSU1BVElPTl9PVVQnKTtcbiAgICAgICAgICAgICAgICBlbHNlIHNlbmQoJ1VOTU9VTlQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZQcmVzZW50UmVmLmN1cnJlbnQgPSBwcmVzZW50O1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBwcmVzZW50LFxuICAgICAgICBzZW5kXG4gICAgXSk7XG4gICAgJGlxcTNyJHVzZUxheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAobm9kZTEpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICogVHJpZ2dlcmluZyBhbiBBTklNQVRJT05fT1VUIGR1cmluZyBhbiBBTklNQVRJT05fSU4gd2lsbCBmaXJlIGFuIGBhbmltYXRpb25jYW5jZWxgXG4gICAgICAgKiBldmVudCBmb3IgQU5JTUFUSU9OX0lOIGFmdGVyIHdlIGhhdmUgZW50ZXJlZCBgdW5tb3VudFN1c3BlbmRlZGAgc3RhdGUuIFNvLCB3ZVxuICAgICAgICogbWFrZSBzdXJlIHdlIG9ubHkgdHJpZ2dlciBBTklNQVRJT05fRU5EIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBhbmltYXRpb24uXG4gICAgICAgKi8gY29uc3QgaGFuZGxlQW5pbWF0aW9uRW5kID0gKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudEFuaW1hdGlvbiA9IGN1cnJlbnRBbmltYXRpb25OYW1lLmluY2x1ZGVzKGV2ZW50LmFuaW1hdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG5vZGUxICYmIGlzQ3VycmVudEFuaW1hdGlvbikgLy8gV2l0aCBSZWFjdCAxOCBjb25jdXJyZW5jeSB0aGlzIHVwZGF0ZSBpcyBhcHBsaWVkXG4gICAgICAgICAgICAgICAgLy8gYSBmcmFtZSBhZnRlciB0aGUgYW5pbWF0aW9uIGVuZHMsIGNyZWF0aW5nIGEgZmxhc2ggb2YgdmlzaWJsZSBjb250ZW50LlxuICAgICAgICAgICAgICAgIC8vIEJ5IG1hbnVhbGx5IGZsdXNoaW5nIHdlIGVuc3VyZSB0aGV5IHN5bmMgd2l0aGluIGEgZnJhbWUsIHJlbW92aW5nIHRoZSBmbGFzaC5cbiAgICAgICAgICAgICAgICAkaXFxM3IkZmx1c2hTeW5jKCgpPT5zZW5kKCdBTklNQVRJT05fRU5EJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFuaW1hdGlvblN0YXJ0ID0gKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG5vZGUxKSAvLyBpZiBhbmltYXRpb24gb2NjdXJyZWQsIHN0b3JlIGl0cyBuYW1lIGFzIHRoZSBwcmV2aW91cyBhbmltYXRpb24uXG4gICAgICAgICAgICAgICAgcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudCA9ICQ5MjFhODg5Y2VlNmRmN2U4JHZhciRnZXRBbmltYXRpb25OYW1lKHN0eWxlc1JlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBub2RlMS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25zdGFydCcsIGhhbmRsZUFuaW1hdGlvblN0YXJ0KTtcbiAgICAgICAgICAgIG5vZGUxLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmNhbmNlbCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICAgICAgICBub2RlMS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICAgICAgbm9kZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uc3RhcnQnLCBoYW5kbGVBbmltYXRpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgbm9kZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uY2FuY2VsJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICBub2RlMS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIC8vIFRyYW5zaXRpb24gdG8gdGhlIHVubW91bnRlZCBzdGF0ZSBpZiB0aGUgbm9kZSBpcyByZW1vdmVkIHByZW1hdHVyZWx5LlxuICAgICAgICAvLyBXZSBhdm9pZCBkb2luZyBzbyBkdXJpbmcgY2xlYW51cCBhcyB0aGUgbm9kZSBtYXkgY2hhbmdlIGJ1dCBzdGlsbCBleGlzdC5cbiAgICAgICAgc2VuZCgnQU5JTUFUSU9OX0VORCcpO1xuICAgIH0sIFtcbiAgICAgICAgbm9kZTEsXG4gICAgICAgIHNlbmRcbiAgICBdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc1ByZXNlbnQ6IFtcbiAgICAgICAgICAgICdtb3VudGVkJyxcbiAgICAgICAgICAgICd1bm1vdW50U3VzcGVuZGVkJ1xuICAgICAgICBdLmluY2x1ZGVzKHN0YXRlKSxcbiAgICAgICAgcmVmOiAkaXFxM3IkdXNlQ2FsbGJhY2soKG5vZGUpPT57XG4gICAgICAgICAgICBpZiAobm9kZSkgc3R5bGVzUmVmLmN1cnJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICAgICAgc2V0Tm9kZShub2RlKTtcbiAgICAgICAgfSwgW10pXG4gICAgfTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gZnVuY3Rpb24gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzKSB7XG4gICAgcmV0dXJuIChzdHlsZXMgPT09IG51bGwgfHwgc3R5bGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZXMuYW5pbWF0aW9uTmFtZSkgfHwgJ25vbmUnO1xufVxuXG5cblxuXG5leHBvcnQgeyQ5MjFhODg5Y2VlNmRmN2U4JGV4cG9ydCQ5OWMyYjc3OWFhNGU4YjhiIGFzIFByZXNlbmNlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6WyJDaGlsZHJlbiIsIiRpcXEzciRDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsIiRpcXEzciRjbG9uZUVsZW1lbnQiLCJ1c2VTdGF0ZSIsIiRpcXEzciR1c2VTdGF0ZSIsInVzZVJlZiIsIiRpcXEzciR1c2VSZWYiLCJ1c2VFZmZlY3QiLCIkaXFxM3IkdXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCIkaXFxM3IkdXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwiJGlxcTNyJHVzZVJlZHVjZXIiLCJmbHVzaFN5bmMiLCIkaXFxM3IkZmx1c2hTeW5jIiwidXNlQ29tcG9zZWRSZWZzIiwiJGlxcTNyJHVzZUNvbXBvc2VkUmVmcyIsInVzZUxheW91dEVmZmVjdCIsIiRpcXEzciR1c2VMYXlvdXRFZmZlY3QiLCIkZmU5NjNiMzU1MzQ3Y2M2OCRleHBvcnQkM2U2NTQzZGUxNGY4NjE0ZiIsImluaXRpYWxTdGF0ZSIsIm1hY2hpbmUiLCJzdGF0ZSIsImV2ZW50IiwibmV4dFN0YXRlIiwiJDkyMWE4ODljZWU2ZGY3ZTgkZXhwb3J0JDk5YzJiNzc5YWE0ZThiOGIiLCJwcm9wcyIsInByZXNlbnQiLCJjaGlsZHJlbiIsInByZXNlbmNlIiwiJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJHVzZVByZXNlbmNlIiwiY2hpbGQiLCJpc1ByZXNlbnQiLCJvbmx5IiwicmVmIiwiZm9yY2VNb3VudCIsImRpc3BsYXlOYW1lIiwibm9kZTEiLCJzZXROb2RlIiwic3R5bGVzUmVmIiwicHJldlByZXNlbnRSZWYiLCJwcmV2QW5pbWF0aW9uTmFtZVJlZiIsInNlbmQiLCJtb3VudGVkIiwiVU5NT1VOVCIsIkFOSU1BVElPTl9PVVQiLCJ1bm1vdW50U3VzcGVuZGVkIiwiTU9VTlQiLCJBTklNQVRJT05fRU5EIiwidW5tb3VudGVkIiwiY3VycmVudEFuaW1hdGlvbk5hbWUiLCIkOTIxYTg4OWNlZTZkZjdlOCR2YXIkZ2V0QW5pbWF0aW9uTmFtZSIsImN1cnJlbnQiLCJzdHlsZXMiLCJ3YXNQcmVzZW50IiwiaGFzUHJlc2VudENoYW5nZWQiLCJwcmV2QW5pbWF0aW9uTmFtZSIsImRpc3BsYXkiLCJpc0FuaW1hdGluZyIsImhhbmRsZUFuaW1hdGlvbkVuZCIsImlzQ3VycmVudEFuaW1hdGlvbiIsImluY2x1ZGVzIiwiYW5pbWF0aW9uTmFtZSIsInRhcmdldCIsImhhbmRsZUFuaW1hdGlvblN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub2RlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlByZXNlbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.45_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;