"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_pages_toppageController_js"],{

/***/ "./src/controller/pages/toppageController.js":
/*!***************************************************!*\
  !*** ./src/controller/pages/toppageController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showToppage\": () => (/* binding */ showToppage)\n/* harmony export */ });\n\nconst showToppage = async () => {\n    document.getElementById(\"top-page\").style.display = 'block';\n    document.getElementById(\"my-page\").style.display = 'none';\n    document.getElementById(\"show-page\").style.display = 'none';\n    document.getElementById(\"how-page\").style.display = 'none';\n    const { login } = await __webpack_require__.e(/*! import() */ \"src_model_auth_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../model/auth */ \"./src/model/auth.js\"));\n    document.getElementById(\"top-login-button\").addEventListener( 'click', () => {\n        login();\n    }, false );\n}\n\n\n\n//# sourceURL=webpack://listapp/./src/controller/pages/toppageController.js?");

/***/ })

}]);