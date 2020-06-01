webpackHotUpdate(1,{

/***/ "./components/SigurdRunner.tsx":
/*!*************************************!*\
  !*** ./components/SigurdRunner.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-json-view */ \"./node_modules/react-json-view/dist/main.js\");\n/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ace */ \"./node_modules/react-ace/lib/index.js\");\n/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds/src-noconflict/mode-rust */ \"./node_modules/ace-builds/src-noconflict/mode-rust.js\");\n/* harmony import */ var ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_rust__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ace-builds/src-noconflict/theme-github */ \"./node_modules/ace-builds/src-noconflict/theme-github.js\");\n/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/alex/projects/sigurd2/sigurd-playground/components/SigurdRunner.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()({\n  loader: function () {\n    var _loader = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var rustModule;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../sigurd-wasm/pkg */ \"../sigurd-wasm/pkg/sigurd_wasm.js\"));\n\n            case 2:\n              rustModule = _context.sent;\n              return _context.abrupt(\"return\", function (props) {\n                return __jsx(SigurdRunner, {\n                  rustModule: rustModule,\n                  __self: _this,\n                  __source: {\n                    fileName: _jsxFileName,\n                    lineNumber: 13,\n                    columnNumber: 23\n                  }\n                });\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function loader() {\n      return _loader.apply(this, arguments);\n    }\n\n    return loader;\n  }(),\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../sigurd-wasm/pkg */ \"../sigurd-wasm/pkg/sigurd_wasm.js\")];\n    },\n    modules: [\"../../sigurd-wasm/pkg\"]\n  }\n}));\nvar INITIAL_CODE = \"\\nfn foo(x: int) {\\n  if x == 42 {\\n    \\\"Cool number\\\"\\n  } else {\\n    \\\"Uncool number\\\"\\n  }\\n}\\n\\nfn main(args: string) {\\n  foo(42)\\n}\\n\";\n\nvar SigurdRunner = function SigurdRunner(_ref) {\n  _s();\n\n  var rustModule = _ref.rustModule;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(INITIAL_CODE),\n      code = _useState[0],\n      setCode = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      output = _useState2[0],\n      setOutput = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      ast = _useState3[0],\n      setAst = _useState3[1];\n\n  return __jsx(\"div\", {\n    style: {\n      width: \"80vw\",\n      height: \"80vh\",\n      maxHeight: \"80vh\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"tabs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 3\n    }\n  }, __jsx(\"li\", {\n    className: \"is-active\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 31\n    }\n  }, \"Code\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"AST\")))), __jsx(\"div\", {\n    style: {\n      flex: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(react_ace__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    mode: \"rust\",\n    theme: \"github\",\n    onChange: setCode,\n    value: code,\n    fontSize: 18,\n    name: \"example\",\n    style: {\n      height: \"100%\",\n      width: \"100%\"\n    },\n    editorProps: {\n      $blockScrolling: true\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    style: {\n      flex: 1,\n      overflow: \"auto\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, output), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      setAst(rustModule.parse(code));\n      setOutput(rustModule.run(code));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"Go\"), __jsx(react_json_view__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    src: ast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(SigurdRunner, \"iCwkOA8VCo2q+JHV8IuQP4ARuZM=\");\n\n_c = SigurdRunner;\n\nvar _c;\n\n$RefreshReg$(_c, \"SigurdRunner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ3VyZFJ1bm5lci50c3g/NDE4ZCJdLCJuYW1lcyI6WyJkeW5hbWljIiwibG9hZGVyIiwicnVzdE1vZHVsZSIsInByb3BzIiwic3NyIiwiSU5JVElBTF9DT0RFIiwiU2lndXJkUnVubmVyIiwidXNlU3RhdGUiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImFzdCIsInNldEFzdCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwiZmxleCIsIiRibG9ja1Njcm9sbGluZyIsIm92ZXJmbG93IiwiZSIsInBhcnNlIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWVBLGtIQUFPLENBQUM7QUFDckJDLFFBQU07QUFBQSxtTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVtQiwrSUFGbkI7O0FBQUE7QUFFQUMsd0JBRkE7QUFBQSwrQ0FHQyxVQUFDQyxLQUFEO0FBQUEsdUJBQVcsTUFBQyxZQUFEO0FBQWMsNEJBQVUsRUFBRUQsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBWDtBQUFBLGVBSEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQURlO0FBTXJCRSxLQUFHLEVBQUUsS0FOZ0I7QUFBQTtBQUFBO0FBQUEsa0NBR2EsZ0VBSGI7QUFBQTtBQUFBLGNBR2EsdUJBSGI7QUFBQTtBQUFBLENBQUQsQ0FBdEI7QUFTQSxJQUFNQyxZQUFZLGtKQUFsQjs7QUFjQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCSixVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ2ZLLHNEQUFRLENBQUNGLFlBQUQsQ0FETztBQUFBLE1BQ2hDRyxJQURnQztBQUFBLE1BQzFCQyxPQUQwQjs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBQyxFQUFELENBRkc7QUFBQSxNQUVoQ0csTUFGZ0M7QUFBQSxNQUV4QkMsU0FGd0I7O0FBQUEsbUJBR2pCSixzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR2hDSyxHQUhnQztBQUFBLE1BRzNCQyxNQUgyQjs7QUFLdkMsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFLE1BQXpCO0FBQWlDQyxlQUFTLEVBQUU7QUFBNUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTFCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFKLENBRkYsQ0FESSxDQURGLEVBT0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxZQUFRLEVBQUVSLE9BSFo7QUFJRSxTQUFLLEVBQUVELElBSlQ7QUFLRSxZQUFRLEVBQUUsRUFMWjtBQU1FLFFBQUksRUFBQyxTQU5QO0FBT0UsU0FBSyxFQUFFO0FBQUVPLFlBQU0sRUFBRSxNQUFWO0FBQWtCRCxXQUFLLEVBQUU7QUFBekIsS0FQVDtBQVFFLGVBQVcsRUFBRTtBQUFFSSxxQkFBZSxFQUFFO0FBQW5CLEtBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsRUFvQkU7QUFBSyxTQUFLLEVBQUU7QUFBRUQsVUFBSSxFQUFFLENBQVI7QUFBV0UsY0FBUSxFQUFFO0FBQXJCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTVQsTUFBTixDQURGLEVBRUU7QUFDRSxXQUFPLEVBQUUsaUJBQUNVLENBQUQsRUFBTztBQUNkUCxZQUFNLENBQUNYLFVBQVUsQ0FBQ21CLEtBQVgsQ0FBaUJiLElBQWpCLENBQUQsQ0FBTjtBQUNBRyxlQUFTLENBQUNULFVBQVUsQ0FBQ29CLEdBQVgsQ0FBZWQsSUFBZixDQUFELENBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixFQVVFLE1BQUMsc0RBQUQ7QUFBVyxPQUFHLEVBQUVJLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQXBCRixDQURGO0FBbUNELENBeENEOztHQUFNTixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWd1cmRSdW5uZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdEpzb24gZnJvbSBcInJlYWN0LWpzb24tdmlld1wiO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tIFwicmVhY3QtYWNlXCI7XG5cbmltcG9ydCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1ydXN0XCI7XG5pbXBvcnQgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWdpdGh1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKHtcbiAgbG9hZGVyOiBhc3luYyAoKSA9PiB7XG4gICAgLy8gSW1wb3J0IHRoZSB3YXNtIG1vZHVsZVxuICAgIGNvbnN0IHJ1c3RNb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9zaWd1cmQtd2FzbS9wa2dcIik7XG4gICAgcmV0dXJuIChwcm9wcykgPT4gPFNpZ3VyZFJ1bm5lciBydXN0TW9kdWxlPXtydXN0TW9kdWxlfSAvPjtcbiAgfSxcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBJTklUSUFMX0NPREUgPSBgXG5mbiBmb28oeDogaW50KSB7XG4gIGlmIHggPT0gNDIge1xuICAgIFwiQ29vbCBudW1iZXJcIlxuICB9IGVsc2Uge1xuICAgIFwiVW5jb29sIG51bWJlclwiXG4gIH1cbn1cblxuZm4gbWFpbihhcmdzOiBzdHJpbmcpIHtcbiAgZm9vKDQyKVxufVxuYDtcblxuY29uc3QgU2lndXJkUnVubmVyID0gKHsgcnVzdE1vZHVsZSB9KSA9PiB7XG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKElOSVRJQUxfQ09ERSk7XG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FzdCwgc2V0QXN0XSA9IHVzZVN0YXRlKHt9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiODB2d1wiLCBoZWlnaHQ6IFwiODB2aFwiLCBtYXhIZWlnaHQ6IFwiODB2aFwiIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XG4gIDx1bD5cbiAgICA8bGkgY2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+PGE+Q29kZTwvYT48L2xpPlxuICAgIDxsaT48YT5BU1Q8L2E+PC9saT5cbiAgPC91bD5cbjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgbW9kZT1cInJ1c3RcIlxuICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0Q29kZX1cbiAgICAgICAgICB2YWx1ZT17Y29kZX1cbiAgICAgICAgICBmb250U2l6ZT17MTh9XG4gICAgICAgICAgbmFtZT1cImV4YW1wbGVcIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIGVkaXRvclByb3BzPXt7ICRibG9ja1Njcm9sbGluZzogdHJ1ZSB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3c6IFwiYXV0b1wiIH19PlxuICAgICAgICA8cHJlPntvdXRwdXR9PC9wcmU+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0QXN0KHJ1c3RNb2R1bGUucGFyc2UoY29kZSkpO1xuICAgICAgICAgICAgc2V0T3V0cHV0KHJ1c3RNb2R1bGUucnVuKGNvZGUpKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgR29cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxSZWFjdEpzb24gc3JjPXthc3R9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SigurdRunner.tsx\n");

/***/ })

})