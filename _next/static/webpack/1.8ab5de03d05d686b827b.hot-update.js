webpackHotUpdate(1,{

/***/ "./components/SigurdRunner.tsx":
/*!*************************************!*\
  !*** ./components/SigurdRunner.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-json-view */ \"./node_modules/react-json-view/dist/main.js\");\n/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ace */ \"./node_modules/react-ace/lib/index.js\");\n/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds/src-noconflict/mode-rust */ \"./node_modules/ace-builds/src-noconflict/mode-rust.js\");\n/* harmony import */ var ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ace-builds/src-noconflict/theme-github */ \"./node_modules/ace-builds/src-noconflict/theme-github.js\");\n/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/alex/projects/sigurd2/sigurd-playground/components/SigurdRunner.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()({\n  loader: function () {\n    var _loader = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var rustModule;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../sigurd-wasm/pkg */ \"../sigurd-wasm/pkg/sigurd_wasm.js\"));\n\n            case 2:\n              rustModule = _context.sent;\n              return _context.abrupt(\"return\", function (props) {\n                return __jsx(SigurdRunner, {\n                  rustModule: rustModule,\n                  __self: _this,\n                  __source: {\n                    fileName: _jsxFileName,\n                    lineNumber: 13,\n                    columnNumber: 23\n                  }\n                });\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function loader() {\n      return _loader.apply(this, arguments);\n    }\n\n    return loader;\n  }(),\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../sigurd-wasm/pkg */ \"../sigurd-wasm/pkg/sigurd_wasm.js\")];\n    },\n    modules: [\"../../sigurd-wasm/pkg\"]\n  }\n}));\nvar INITIAL_CODE = \"\\nfn foo(x: int) {\\n  if x == 42 {\\n    \\\"Cool number\\\"\\n  } else {\\n    \\\"Uncool number\\\"\\n  }\\n}\\n\\nfn main(args: string) {\\n  foo(42)\\n}\\n\";\n\nvar SigurdRunner = function SigurdRunner(_ref) {\n  _s();\n\n  var rustModule = _ref.rustModule;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"code\"),\n      visibleTab = _useState[0],\n      setVisibleTab = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(INITIAL_CODE),\n      code = _useState2[0],\n      setCode = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      output = _useState3[0],\n      setOutput = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      ast = _useState4[0],\n      setAst = _useState4[1];\n\n  return __jsx(\"div\", {\n    style: {\n      width: \"100%\",\n      paddingLeft: \"1rem\",\n      paddingRight: \"1rem\",\n      height: \"70vh\",\n      maxHeight: \"80vh\",\n      display: \"flex\",\n      flexDirection: \"column\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"level is-mobile\",\n    style: {\n      flexGrow: 0,\n      marginBottom: \"5px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"level-left tabs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    className: visibleTab == \"code\" ? \"is-active\" : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setVisibleTab(\"code\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, \"Code\")), __jsx(\"li\", {\n    className: visibleTab == \"ast\" ? \"is-active\" : \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setVisibleTab(\"ast\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, \"AST\")))), __jsx(\"div\", {\n    className: \"level-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"button is-primary is-small\",\n    onClick: function onClick(e) {\n      setAst(rustModule.parse(code));\n      setOutput(rustModule.run(code));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Run\"))), __jsx(\"div\", {\n    style: {\n      flex: 1,\n      maxHeight: \"calc(100% - 41px)\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, visibleTab == \"code\" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_ace__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    mode: \"rust\",\n    theme: \"github\",\n    onChange: setCode,\n    value: code,\n    fontSize: 18,\n    name: \"example\",\n    style: {\n      height: \"100%\",\n      width: \"100%\",\n      overflow: \"auto\"\n    },\n    editorProps: {\n      $blockScrolling: true\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_json_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"scroll\",\n      maxHeight: \"100%\"\n    },\n    src: ast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(SigurdRunner, \"DeZv9X+VTYGL076bNa2bT9o98OM=\");\n\n_c = SigurdRunner;\n\nvar _c;\n\n$RefreshReg$(_c, \"SigurdRunner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ3VyZFJ1bm5lci50c3g/NDE4ZCJdLCJuYW1lcyI6WyJkeW5hbWljIiwibG9hZGVyIiwicnVzdE1vZHVsZSIsInByb3BzIiwic3NyIiwiSU5JVElBTF9DT0RFIiwiU2lndXJkUnVubmVyIiwidXNlU3RhdGUiLCJ2aXNpYmxlVGFiIiwic2V0VmlzaWJsZVRhYiIsImNvZGUiLCJzZXRDb2RlIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwiYXN0Iiwic2V0QXN0Iiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImhlaWdodCIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEdyb3ciLCJtYXJnaW5Cb3R0b20iLCJlIiwicGFyc2UiLCJydW4iLCJmbGV4Iiwib3ZlcmZsb3ciLCIkYmxvY2tTY3JvbGxpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZUEsa0hBQU8sQ0FBQztBQUNyQkMsUUFBTTtBQUFBLG1NQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRW1CLCtJQUZuQjs7QUFBQTtBQUVBQyx3QkFGQTtBQUFBLCtDQUdDLFVBQUNDLEtBQUQ7QUFBQSx1QkFBVyxNQUFDLFlBQUQ7QUFBYyw0QkFBVSxFQUFFRCxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFYO0FBQUEsZUFIRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRGU7QUFNckJFLEtBQUcsRUFBRSxLQU5nQjtBQUFBO0FBQUE7QUFBQSxrQ0FHYSxnRUFIYjtBQUFBO0FBQUEsY0FHYSx1QkFIYjtBQUFBO0FBQUEsQ0FBRCxDQUF0QjtBQVNBLElBQU1DLFlBQVksa0pBQWxCOztBQWNB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TSxFQUFFLE1BQVY7QUFBa0JILFdBQUssRUFBRSxNQUF6QjtBQUFpQ2EsY0FBUSxFQUFFO0FBQTNDLEtBUFQ7QUFRRSxlQUFXLEVBQUU7QUFBRUMscUJBQWUsRUFBRTtBQUFuQixLQVJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELEdBY0MsbUVBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUssRUFBRTtBQUNMZCxXQUFLLEVBQUUsTUFERjtBQUVMRyxZQUFNLEVBQUUsTUFGSDtBQUdMVSxjQUFRLEVBQUUsUUFITDtBQUlMVCxlQUFTLEVBQUU7QUFKTixLQURUO0FBT0UsT0FBRyxFQUFFTixHQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWZKLENBbENGLENBREY7QUFpRUQsQ0F2RUQ7O0dBQU1SLFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ3VyZFJ1bm5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0SnNvbiBmcm9tIFwicmVhY3QtanNvbi12aWV3XCI7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gXCJyZWFjdC1hY2VcIjtcblxuaW1wb3J0IFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLXJ1c3RcIjtcbmltcG9ydCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtZ2l0aHViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoe1xuICBsb2FkZXI6IGFzeW5jICgpID0+IHtcbiAgICAvLyBJbXBvcnQgdGhlIHdhc20gbW9kdWxlXG4gICAgY29uc3QgcnVzdE1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4uLy4uL3NpZ3VyZC13YXNtL3BrZ1wiKTtcbiAgICByZXR1cm4gKHByb3BzKSA9PiA8U2lndXJkUnVubmVyIHJ1c3RNb2R1bGU9e3J1c3RNb2R1bGV9IC8+O1xuICB9LFxuICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IElOSVRJQUxfQ09ERSA9IGBcbmZuIGZvbyh4OiBpbnQpIHtcbiAgaWYgeCA9PSA0MiB7XG4gICAgXCJDb29sIG51bWJlclwiXG4gIH0gZWxzZSB7XG4gICAgXCJVbmNvb2wgbnVtYmVyXCJcbiAgfVxufVxuXG5mbiBtYWluKGFyZ3M6IHN0cmluZykge1xuICBmb28oNDIpXG59XG5gO1xuXG5jb25zdCBTaWd1cmRSdW5uZXIgPSAoeyBydXN0TW9kdWxlIH0pID0+IHtcbiAgY29uc3QgW3Zpc2libGVUYWIsIHNldFZpc2libGVUYWJdID0gdXNlU3RhdGUoXCJjb2RlXCIpO1xuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShJTklUSUFMX0NPREUpO1xuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthc3QsIHNldEFzdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjFyZW1cIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgaGVpZ2h0OiBcIjcwdmhcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjgwdmhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCIgc3R5bGU9e3sgZmxleEdyb3c6IDAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IHRhYnNcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt2aXNpYmxlVGFiID09IFwiY29kZVwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlVGFiKFwiY29kZVwiKX0+Q29kZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt2aXNpYmxlVGFiID09IFwiYXN0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVUYWIoXCJhc3RcIil9PkFTVDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1zbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRBc3QocnVzdE1vZHVsZS5wYXJzZShjb2RlKSk7XG4gICAgICAgICAgICAgIHNldE91dHB1dChydXN0TW9kdWxlLnJ1bihjb2RlKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJ1blxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtYXhIZWlnaHQ6IFwiY2FsYygxMDAlIC0gNDFweClcIn19PlxuICAgICAgICB7dmlzaWJsZVRhYiA9PSBcImNvZGVcIiA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicnVzdFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvZGV9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxuICAgICAgICAgICAgICBmb250U2l6ZT17MTh9XG4gICAgICAgICAgICAgIG5hbWU9XCJleGFtcGxlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgZWRpdG9yUHJvcHM9e3sgJGJsb2NrU2Nyb2xsaW5nOiB0cnVlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UmVhY3RKc29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXthc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SigurdRunner.tsx\n");

/***/ })

})