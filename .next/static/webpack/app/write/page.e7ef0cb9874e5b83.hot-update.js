"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/write/page",{

/***/ "(app-pages-browser)/./src/app/write/page.jsx":
/*!********************************!*\
  !*** ./src/app/write/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writePage.module.css */ \"(app-pages-browser)/./src/app/write/writePage.module.css\");\n/* harmony import */ var _writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_writePage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.bubble.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.bubble.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst WritePage = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)\n            }, void 0, false, {\n                fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().editor),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                        onClick: ()=>setOpen(!open),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/plus.png\",\n                            alt: \"\",\n                            width: 16,\n                            height: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().addButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/image.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().addButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/external.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().addButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/video.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: (_writePage_module_css__WEBPACK_IMPORTED_MODULE_5___default().textArea),\n                        theme: \"bubble\",\n                        value: value,\n                        onChange: setValue,\n                        placeholder: \"Tell your story...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/venya/Desktop/PROJECT/BlogApp/src/app/write/page.jsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(WritePage, \"lPVRkL1lPhsFxQ5m0KEEDaEuO6g=\");\n_c = WritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WritePage);\nvar _c;\n$RefreshReg$(_c, \"WritePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNTO0FBQ0k7QUFDTjtBQUNLO0FBRTFDLE1BQU1LLFlBQVk7O0lBRWQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBV1Isd0VBQWdCOzswQkFDNUIsOERBQUNVO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFRSixXQUFXUixvRUFBWTs7Ozs7OzBCQUM5RCw4REFBQ087Z0JBQUlDLFdBQVdSLHFFQUFhOztrQ0FDekIsOERBQUNjO3dCQUFPTixXQUFXUixxRUFBYTt3QkFBRWUsU0FBUyxJQUFLWCxRQUFRLENBQUNEO2tDQUNyRCw0RUFBQ04sbURBQUtBOzRCQUFDbUIsS0FBSTs0QkFBWUMsS0FBSTs0QkFBR0MsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7b0JBRXBEaEIsc0JBQ0csOERBQUNJO3dCQUFJQyxXQUFXUixrRUFBVTs7MENBQ3RCLDhEQUFDYztnQ0FBT04sV0FBV1Isd0VBQWdCOzBDQUMvQiw0RUFBQ0gsbURBQUtBO29DQUFDbUIsS0FBSTtvQ0FBYUMsS0FBSTtvQ0FBR0MsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7MENBRXRELDhEQUFDTDtnQ0FBT04sV0FBV1Isd0VBQWdCOzBDQUMvQiw0RUFBQ0gsbURBQUtBO29DQUFDbUIsS0FBSTtvQ0FBZ0JDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7OzBDQUV6RCw4REFBQ0w7Z0NBQU9OLFdBQVdSLHdFQUFnQjswQ0FDL0IsNEVBQUNILG1EQUFLQTtvQ0FBQ21CLEtBQUk7b0NBQWFDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk5RCw4REFBQ2xCLG9EQUFVQTt3QkFBQ08sV0FBV1IsdUVBQWU7d0JBQUV1QixPQUFNO3dCQUFTbEIsT0FBT0E7d0JBQU9tQixVQUFVbEI7d0JBQVVNLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlySDtHQTVCTVY7S0FBQUE7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC93cml0ZS9wYWdlLmpzeD83ZTg2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3dyaXRlUGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gXCJyZWFjdC1xdWlsbFwiO1xuaW1wb3J0IFwicmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzXCJcblxuY29uc3QgV3JpdGVQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3J9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PnNldE9wZW4oIW9wZW4pfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9wbHVzLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZXh0ZXJuYWwucG5nXCIgYWx0PVwiXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92aWRlby5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8UmVhY3RRdWlsbCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYX0gdGhlbWU9J2J1YmJsZScgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17c2V0VmFsdWV9IHBsYWNlaG9sZGVyPVwiVGVsbCB5b3VyIHN0b3J5Li4uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlUGFnZTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJSZWFjdFF1aWxsIiwiV3JpdGVQYWdlIiwib3BlbiIsInNldE9wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlZGl0b3IiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhZGQiLCJhZGRCdXR0b24iLCJ0ZXh0QXJlYSIsInRoZW1lIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/write/page.jsx\n"));

/***/ })

});