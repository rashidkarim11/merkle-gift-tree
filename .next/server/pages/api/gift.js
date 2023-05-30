"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/gift";
exports.ids = ["pages/api/gift"];
exports.modules = {

/***/ "ethereum-cryptography/keccak":
/*!***********************************************!*\
  !*** external "ethereum-cryptography/keccak" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("ethereum-cryptography/keccak");

/***/ }),

/***/ "ethereum-cryptography/utils":
/*!**********************************************!*\
  !*** external "ethereum-cryptography/utils" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("ethereum-cryptography/utils");

/***/ }),

/***/ "(api)/./pages/api/gift.js":
/*!***************************!*\
  !*** ./pages/api/gift.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_verifyProof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/verifyProof */ \"(api)/./utils/verifyProof.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst MERKLE_ROOT = \"ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa\";\nfunction handler(req, res) {\n    const { name , proof  } = req.body;\n    const isInTheList = (0,_utils_verifyProof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(proof, name, MERKLE_ROOT);\n    if (isInTheList) return res.send(\"You got a toy robot!\");\n    res.send(\"You are not on the list :(\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2lmdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUUvQjtBQUU5QyxNQUFNQyxjQUNKO0FBRWEsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxJQUFJSSxJQUFJO0lBRWhDLE1BQU1DLGNBQWNSLDhEQUFXQSxDQUFDTSxPQUFPRCxNQUFNSjtJQUM3QyxJQUFJTyxhQUFhLE9BQU9KLElBQUlLLElBQUksQ0FBQztJQUNqQ0wsSUFBSUssSUFBSSxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lcmtsZS10cmVlLWdpZnQtbGlzdC8uL3BhZ2VzL2FwaS9naWZ0LmpzP2RkY2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0IHZlcmlmeVByb29mIGZyb20gXCJAL3V0aWxzL3ZlcmlmeVByb29mXCI7XG5cbmNvbnN0IE1FUktMRV9ST09UID1cbiAgXCJkZGQ1OWEyZmZjY2RkZDYwZmY0Nzk5MzMxMjgyMWNkNTdjZjMwZjdmMTRmYjgyOTM3ZWJlMmM0ZGM3ODM3NWFhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBuYW1lLCBwcm9vZiB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgaXNJblRoZUxpc3QgPSB2ZXJpZnlQcm9vZihwcm9vZiwgbmFtZSwgTUVSS0xFX1JPT1QpO1xuICBpZiAoaXNJblRoZUxpc3QpIHJldHVybiByZXMuc2VuZChcIllvdSBnb3QgYSB0b3kgcm9ib3QhXCIpO1xuICByZXMuc2VuZChcIllvdSBhcmUgbm90IG9uIHRoZSBsaXN0IDooXCIpO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVByb29mIiwiTUVSS0xFX1JPT1QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmFtZSIsInByb29mIiwiYm9keSIsImlzSW5UaGVMaXN0Iiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/gift.js\n");

/***/ }),

/***/ "(api)/./utils/verifyProof.js":
/*!******************************!*\
  !*** ./utils/verifyProof.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethereum_cryptography_keccak__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethereum-cryptography/keccak */ \"ethereum-cryptography/keccak\");\n/* harmony import */ var ethereum_cryptography_keccak__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethereum_cryptography_keccak__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethereum_cryptography_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethereum-cryptography/utils */ \"ethereum-cryptography/utils\");\n/* harmony import */ var ethereum_cryptography_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethereum_cryptography_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst concat = (left, right)=>(0,ethereum_cryptography_keccak__WEBPACK_IMPORTED_MODULE_0__.keccak256)(Buffer.concat([\n        left,\n        right\n    ]));\nfunction verifyProof(proof, leaf, root) {\n    proof = proof.map(({ data , left  })=>({\n            left,\n            data: (0,ethereum_cryptography_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)(data)\n        }));\n    let data = (0,ethereum_cryptography_keccak__WEBPACK_IMPORTED_MODULE_0__.keccak256)(Buffer.from(leaf));\n    for(let i = 0; i < proof.length; i++){\n        if (proof[i].left) {\n            data = concat(proof[i].data, data);\n        } else {\n            data = concat(data, proof[i].data);\n        }\n    }\n    return (0,ethereum_cryptography_utils__WEBPACK_IMPORTED_MODULE_1__.bytesToHex)(data) === root;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyProof);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy92ZXJpZnlQcm9vZi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUNZO0FBRXJFLE1BQU1HLFNBQVMsQ0FBQ0MsTUFBTUMsUUFBVUwsdUVBQVNBLENBQUNNLE9BQU9ILE1BQU0sQ0FBQztRQUFDQztRQUFNQztLQUFNO0FBRXJFLFNBQVNFLFlBQVlDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUU7SUFDdENGLFFBQVFBLE1BQU1HLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEtBQUksRUFBRVIsS0FBSSxFQUFFLEdBQU07WUFDckNBO1lBQ0FRLE1BQU1YLHVFQUFVQSxDQUFDVztRQUNuQjtJQUNBLElBQUlBLE9BQU9aLHVFQUFTQSxDQUFDTSxPQUFPTyxJQUFJLENBQUNKO0lBRWpDLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJTixNQUFNTyxNQUFNLEVBQUVELElBQUs7UUFDckMsSUFBSU4sS0FBSyxDQUFDTSxFQUFFLENBQUNWLElBQUksRUFBRTtZQUNqQlEsT0FBT1QsT0FBT0ssS0FBSyxDQUFDTSxFQUFFLENBQUNGLElBQUksRUFBRUE7UUFDL0IsT0FBTztZQUNMQSxPQUFPVCxPQUFPUyxNQUFNSixLQUFLLENBQUNNLEVBQUUsQ0FBQ0YsSUFBSTtRQUNuQyxDQUFDO0lBQ0g7SUFFQSxPQUFPVix1RUFBVUEsQ0FBQ1UsVUFBVUY7QUFDOUI7QUFFQSxpRUFBZUgsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lcmtsZS10cmVlLWdpZnQtbGlzdC8uL3V0aWxzL3ZlcmlmeVByb29mLmpzPzY5YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2VjY2FrMjU2IH0gZnJvbSBcImV0aGVyZXVtLWNyeXB0b2dyYXBoeS9rZWNjYWtcIjtcbmltcG9ydCB7IGhleFRvQnl0ZXMsIGJ5dGVzVG9IZXggfSBmcm9tIFwiZXRoZXJldW0tY3J5cHRvZ3JhcGh5L3V0aWxzXCI7XG5cbmNvbnN0IGNvbmNhdCA9IChsZWZ0LCByaWdodCkgPT4ga2VjY2FrMjU2KEJ1ZmZlci5jb25jYXQoW2xlZnQsIHJpZ2h0XSkpO1xuXG5mdW5jdGlvbiB2ZXJpZnlQcm9vZihwcm9vZiwgbGVhZiwgcm9vdCkge1xuICBwcm9vZiA9IHByb29mLm1hcCgoeyBkYXRhLCBsZWZ0IH0pID0+ICh7XG4gICAgbGVmdCxcbiAgICBkYXRhOiBoZXhUb0J5dGVzKGRhdGEpLFxuICB9KSk7XG4gIGxldCBkYXRhID0ga2VjY2FrMjU2KEJ1ZmZlci5mcm9tKGxlYWYpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb29mLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb29mW2ldLmxlZnQpIHtcbiAgICAgIGRhdGEgPSBjb25jYXQocHJvb2ZbaV0uZGF0YSwgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBjb25jYXQoZGF0YSwgcHJvb2ZbaV0uZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzVG9IZXgoZGF0YSkgPT09IHJvb3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVByb29mO1xuIl0sIm5hbWVzIjpbImtlY2NhazI1NiIsImhleFRvQnl0ZXMiLCJieXRlc1RvSGV4IiwiY29uY2F0IiwibGVmdCIsInJpZ2h0IiwiQnVmZmVyIiwidmVyaWZ5UHJvb2YiLCJwcm9vZiIsImxlYWYiLCJyb290IiwibWFwIiwiZGF0YSIsImZyb20iLCJpIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/verifyProof.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gift.js"));
module.exports = __webpack_exports__;

})();