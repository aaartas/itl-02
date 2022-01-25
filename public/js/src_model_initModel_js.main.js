"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_model_initModel_js"],{

/***/ "./.env/dev.js":
/*!*********************!*\
  !*** ./.env/dev.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    isDevelop: true,\n    apiKey: \"AIzaSyAAyBLW_vCh0WWtzlYbLWH4kyZ_3bs9QQc\",\n    domain: \"listapp-test-afe38.firebaseapp.com\",\n    projectId: \"listapp-test-afe38\",\n    storageBucket: \"listapp-test-afe38.appspot.com\",\n    messagingSenderId: \"545174239930\",\n    appId: \"1:545174239930:web:42f0147f5afddc9b8c6083\",\n    measurementId: \"G-YKVH9V742P\"\n});\n\n//# sourceURL=webpack://listapp/./.env/dev.js?");

/***/ }),

/***/ "./src/model/initModel.js":
/*!********************************!*\
  !*** ./src/model/initModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFirebase\": () => (/* binding */ initFirebase)\n/* harmony export */ });\n/* harmony import */ var userEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userEnv */ \"./.env/dev.js\");\n\n\n// firebase設定\nconst config = {\n    apiKey: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apiKey,\n    authDomain: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].domain,\n    projectId: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectId,\n    storageBucket: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageBucket,\n    messagingSenderId: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messagingSenderId,\n    appId: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appId,\n    measurementId: userEnv__WEBPACK_IMPORTED_MODULE_0__[\"default\"].measurementId,\n};\n\n// firebase初期化\nconst initFirebase = async () => {\n    const { initializeApp } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\"));\n    initializeApp(config);\n}\n\n//# sourceURL=webpack://listapp/./src/model/initModel.js?");

/***/ })

}]);