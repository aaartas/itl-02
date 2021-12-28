"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_pages_howpageController_js"],{

/***/ "./src/controller/pages/howpageController.js":
/*!***************************************************!*\
  !*** ./src/controller/pages/howpageController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHowpage\": () => (/* binding */ showHowpage)\n/* harmony export */ });\n//使い方ページ\nconst showHowpage = () => {\n    const request = new XMLHttpRequest();\n    request.open('GET', '/template/how.html', true);\n    request.onload = () => {\n        if (request.status >= 200 && request.status < 400) {\n            const restxt=request.responseText;\n\t\t\tdocument.getElementById('main').innerHTML = restxt;\n        }\n    };\n    request.send();\n}\n\n//# sourceURL=webpack://listapp/./src/controller/pages/howpageController.js?");

/***/ })

}]);