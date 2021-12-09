"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_model_init_js"],{

/***/ "./src/model/init.js":
/*!***************************!*\
  !*** ./src/model/init.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFirebase\": () => (/* binding */ initFirebase)\n/* harmony export */ });\n//firebase初期化\n\nconst config = {\n    apiKey: \"AIzaSyCn5TtBz45t0Lb3MP6snWqGa0_fR-a0gNE\",\n    authDomain: \"campa-room.firebaseapp.com\",\n    databaseURL: \"https://wannago-dev-0000.firebaseio.com\",\n    projectId: \"campa-room\",\n    storageBucket: \"campa-room.appspot.com\",\n    messagingSenderId: \"439711886641\",\n    appId: \"1:439711886641:web:292d5d61beb60cedfd5410\",\n    measurementId: \"\"\n};\n\nconst initFirebase = async () => {\n    const { initializeApp } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\"));\n    initializeApp(config);\n}\n\n\n//# sourceURL=webpack://listapp/./src/model/init.js?");

/***/ })

}]);