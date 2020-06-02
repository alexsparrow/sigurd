webpackHotUpdate(2,{

/***/ "../sigurd-wasm/pkg/sigurd_wasm_bg.wasm":
/*!**********************************************!*\
  !*** ../sigurd-wasm/pkg/sigurd_wasm_bg.wasm ***!
  \**********************************************/
/*! exports provided: memory, run, parse, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./sigurd_wasm_bg.js */ "../sigurd-wasm/pkg/sigurd_wasm_bg.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

})