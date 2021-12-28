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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showToppage\": () => (/* binding */ showToppage)\n/* harmony export */ });\n// topページ\nconst showToppage = () => {\n    const request = new XMLHttpRequest();\n    request.open('GET', '/template/top.html', true);\n    request.onload = () => {\n        if (request.status >= 200 && request.status < 400) {\n\t\t\tdocument.getElementById('main').innerHTML = request.responseText;\n            setEvent();\n        }\n    };\n    request.send();\n}\n\nconst setEvent = async () => {\n    const { login } = await __webpack_require__.e(/*! import() */ \"src_model_authModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../model/authModel */ \"./src/model/authModel.js\"));\n    document.getElementById('top-login-button').onclick = () => {\n        login();\n    };\n}\n\n//# sourceURL=webpack://listapp/./src/controller/pages/toppageController.js?");

/***/ })

}]);