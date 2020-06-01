webpackHotUpdate(1,{

/***/ "./components/SigurdRunner.tsx":
/*!*************************************!*\
  !*** ./components/SigurdRunner.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-json-view */ \"./node_modules/react-json-view/dist/main.js\");\n/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ace */ \"./node_modules/react-ace/lib/index.js\");\n/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds/src-noconflict/mode-rust */ \"./node_modules/ace-builds/src-noconflict/mode-rust.js\");\n/* harmony import */ var ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ace-builds/src-noconflict/theme-github */ \"./node_modules/ace-builds/src-noconflict/theme-github.js\");\n/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/alex/projects/sigurd2/sigurd-playground/components/SigurdRunner.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()({\n  loader: function () {\n    var _loader = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var rustModule;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../sigurd-wasm/pkg */ \"../sigurd-wasm/pkg/sigurd_wasm.js\"));\n\n            case 2:\n              rustModule = _context.sent;\n              return _context.abrupt(\"return\", function (props) {\n                return __jsx(SigurdRunner, {\n                  rustModule: rustModule,\n                  __self: _this,\n                  __source: {\n                    fileName: _jsxFileName,\n                    lineNumber: 13,\n                    columnNumber: 23\n                  }\n                });\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function loader() {\n      return _loader.apply(this, arguments);\n    }\n\n    return loader;\n  }(),\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../sigurd-wasm/pkg */ \"../sigurd-wasm/pkg/sigurd_wasm.js\")];\n    },\n    modules: [\"../../sigurd-wasm/pkg\"]\n  }\n}));\nvar INITIAL_CODE = \"\\nfn foo(x: int) {\\n  if x == 42 {\\n    \\\"Cool number\\\"\\n  } else {\\n    \\\"Uncool number\\\"\\n  }\\n}\\n\\nfn main(args: string) {\\n  foo(42)\\n}\\n\";\n\nvar SigurdRunner = function SigurdRunner(_ref) {\n  _s();\n\n  var rustModule = _ref.rustModule;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"code\"),\n      visibleTab = _useState[0],\n      setVisibleTab = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(INITIAL_CODE),\n      code = _useState2[0],\n      setCode = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      output = _useState3[0],\n      setOutput = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      ast = _useState4[0],\n      setAst = _useState4[1];\n\n  return __jsx(\"div\", {\n    style: {\n      width: \"80vw\",\n      height: \"80vh\",\n      maxHeight: \"80vh\",\n      display: \"flex\",\n      flexDirection: \"column\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"tabs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: visibleTab == \"code\" ? \"is-active\" : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setVisibleTab(\"code\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Code\")), __jsx(\"li\", {\n    className: visibleTab == \"ast\" ? \"is-active\" : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setVisibleTab(\"ast\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"AST\")))), __jsx(\"div\", {\n    style: {\n      flex: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, visibleTab == \"code\" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_ace__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    mode: \"rust\",\n    theme: \"github\",\n    onChange: setCode,\n    value: code,\n    fontSize: 18,\n    name: \"example\",\n    style: {\n      height: \"100%\",\n      width: \"100%\"\n    },\n    editorProps: {\n      $blockScrolling: true\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_json_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"scroll\",\n      maxHeight: \"100%\"\n    },\n    src: ast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }))), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      setAst(rustModule.parse(code));\n      setOutput(rustModule.run(code));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, \"Go\"));\n};\n\n_s(SigurdRunner, \"DeZv9X+VTYGL076bNa2bT9o98OM=\");\n\n_c = SigurdRunner;\n\nvar _c;\n\n$RefreshReg$(_c, \"SigurdRunner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ3VyZFJ1bm5lci50c3g/NDE4ZCJdLCJuYW1lcyI6WyJkeW5hbWljIiwibG9hZGVyIiwicnVzdE1vZHVsZSIsInByb3BzIiwic3NyIiwiSU5JVElBTF9DT0RFIiwiU2lndXJkUnVubmVyIiwidXNlU3RhdGUiLCJ2aXNpYmxlVGFiIiwic2V0VmlzaWJsZVRhYiIsImNvZGUiLCJzZXRDb2RlIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwiYXN0Iiwic2V0QXN0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCIkYmxvY2tTY3JvbGxpbmciLCJvdmVyZmxvdyIsImUiLCJwYXJzZSIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlQSxrSEFBTyxDQUFDO0FBQ3JCQyxRQUFNO0FBQUEsbU1BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFbUIsK0lBRm5COztBQUFBO0FBRUFDLHdCQUZBO0FBQUEsK0NBR0MsVUFBQ0MsS0FBRDtBQUFBLHVCQUFXLE1BQUMsWUFBRDtBQUFjLDRCQUFVLEVBQUVELFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVg7QUFBQSxlQUhEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FEZTtBQU1yQkUsS0FBRyxFQUFFLEtBTmdCO0FBQUE7QUFBQTtBQUFBLGtDQUdhLGdFQUhiO0FBQUE7QUFBQSxjQUdhLHVCQUhiO0FBQUE7QUFBQSxDQUFELENBQXRCO0FBU0EsSUFBTUMsWUFBWSxrSkFBbEI7O0FBY0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkosVUFB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a0RELENBeEREOztHQUFNSixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWd1cmRSdW5uZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdEpzb24gZnJvbSBcInJlYWN0LWpzb24tdmlld1wiO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tIFwicmVhY3QtYWNlXCI7XG5cbmltcG9ydCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1ydXN0XCI7XG5pbXBvcnQgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWdpdGh1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKHtcbiAgbG9hZGVyOiBhc3luYyAoKSA9PiB7XG4gICAgLy8gSW1wb3J0IHRoZSB3YXNtIG1vZHVsZVxuICAgIGNvbnN0IHJ1c3RNb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9zaWd1cmQtd2FzbS9wa2dcIik7XG4gICAgcmV0dXJuIChwcm9wcykgPT4gPFNpZ3VyZFJ1bm5lciBydXN0TW9kdWxlPXtydXN0TW9kdWxlfSAvPjtcbiAgfSxcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBJTklUSUFMX0NPREUgPSBgXG5mbiBmb28oeDogaW50KSB7XG4gIGlmIHggPT0gNDIge1xuICAgIFwiQ29vbCBudW1iZXJcIlxuICB9IGVsc2Uge1xuICAgIFwiVW5jb29sIG51bWJlclwiXG4gIH1cbn1cblxuZm4gbWFpbihhcmdzOiBzdHJpbmcpIHtcbiAgZm9vKDQyKVxufVxuYDtcblxuY29uc3QgU2lndXJkUnVubmVyID0gKHsgcnVzdE1vZHVsZSB9KSA9PiB7XG4gIGNvbnN0IFt2aXNpYmxlVGFiLCBzZXRWaXNpYmxlVGFiXSA9IHVzZVN0YXRlKFwiY29kZVwiKTtcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoSU5JVElBTF9DT0RFKTtcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXN0LCBzZXRBc3RdID0gdXNlU3RhdGUoe30pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiODB2d1wiLFxuICAgICAgICBoZWlnaHQ6IFwiODB2aFwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiODB2aFwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Zpc2libGVUYWIgPT0gXCJjb2RlXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlVGFiKFwiY29kZVwiKX0+Q29kZTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Zpc2libGVUYWIgPT0gXCJhc3RcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVUYWIoXCJhc3RcIil9PkFTVDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgIHt2aXNpYmxlVGFiID09IFwiY29kZVwiID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJydXN0XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q29kZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XG4gICAgICAgICAgICAgIGZvbnRTaXplPXsxOH1cbiAgICAgICAgICAgICAgbmFtZT1cImV4YW1wbGVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgZWRpdG9yUHJvcHM9e3sgJGJsb2NrU2Nyb2xsaW5nOiB0cnVlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UmVhY3RKc29uIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsIG1heEhlaWdodDogXCIxMDAlXCIgfX0gc3JjPXthc3R9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBzZXRBc3QocnVzdE1vZHVsZS5wYXJzZShjb2RlKSk7XG4gICAgICAgICAgc2V0T3V0cHV0KHJ1c3RNb2R1bGUucnVuKGNvZGUpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgR29cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SigurdRunner.tsx\n");

/***/ })

})