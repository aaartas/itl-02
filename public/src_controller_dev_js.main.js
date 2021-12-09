"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_dev_js"],{

/***/ "./src/controller/dev.js":
/*!*******************************!*\
  !*** ./src/controller/dev.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dev\": () => (/* binding */ dev)\n/* harmony export */ });\n//開発用メニュー\n\nconst dev = async () => {\n    const { login, logout } = await __webpack_require__.e(/*! import() */ \"src_model_auth_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../model/auth */ \"./src/model/auth.js\"));\n    const { routing } = await __webpack_require__.e(/*! import() */ \"src_controller_routing_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../controller/routing */ \"./src/controller/routing.js\", 23));\n    document.getElementById(\"dev-button-login\").onclick = () => {\n        login();\n    };\n\n    document.getElementById(\"dev-button-logout\").onclick = () => {\n        logout();\n    };\n\n    document.getElementById(\"dev-button-top\").addEventListener( 'click', () => {\n        history.pushState('', 'top', '/');\n        routing(location.hash);\n    }, false );\n\n    document.getElementById(\"dev-button-my\").addEventListener( 'click', () => {\n        history.pushState('', 'my', '/#/my');\n        routing(location.hash);\n    }, false );\n\n    document.getElementById(\"dev-button-show\").addEventListener( 'click', () => {\n        history.pushState('', 'show', '/#/show');\n        routing(location.hash);\n    }, false );\n\n    document.getElementById(\"dev-button-how\").addEventListener( 'click', () => {\n        history.pushState('', 'how', '/#/how');\n        routing(location.hash);\n    }, false );\n\n}\n\n//# sourceURL=webpack://listapp/./src/controller/dev.js?");

/***/ })

}]);