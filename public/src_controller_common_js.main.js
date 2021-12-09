"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_common_js"],{

/***/ "./src/controller/common.js":
/*!**********************************!*\
  !*** ./src/controller/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"common\": () => (/* binding */ common)\n/* harmony export */ });\n\n//共通ページ\nconst common = async () => {\n    const { slideMenu } = await __webpack_require__.e(/*! import() */ \"src_view_common_slideMenu_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../view/common/slideMenu */ \"./src/view/common/slideMenu.js\"));\n    slideMenu();\n\n    //ハッシュ変更時、ルーティングチェック\n    window.addEventListener('hashchange', () => {\n        console.log(location.hash);\n        routing(location.hash);\n    }, false);\n}\n\n//ページルーティング\nconst routing = (hash) => {\n    \n    if (hash === '') {\n        document.getElementById(\"top-page\").style.display = 'block';\n        document.getElementById(\"my-page\").style.display = 'none';\n        document.getElementById(\"show-page\").style.display = 'none';\n        document.getElementById(\"how-page\").style.display = 'none';\n        \n        return '';\n    } else\n    if (hash === '#/my') {\n        document.getElementById(\"top-page\").style.display = 'none';\n        document.getElementById(\"my-page\").style.display = 'block';\n        document.getElementById(\"show-page\").style.display = 'none';\n        document.getElementById(\"how-page\").style.display = 'none';\n        return '#/my';\n    } else\n    if (hash === '#/show') {\n        document.getElementById(\"top-page\").style.display = 'none';\n        document.getElementById(\"my-page\").style.display = 'none';\n        document.getElementById(\"show-page\").style.display = 'block';\n        document.getElementById(\"how-page\").style.display = 'none';\n        return '#/show'\n    } else\n    if (hash === '#/how') {\n        document.getElementById(\"top-page\").style.display = 'none';\n        document.getElementById(\"my-page\").style.display = 'none';\n        document.getElementById(\"show-page\").style.display = 'none';\n        document.getElementById(\"how-page\").style.display = 'block';\n        return '#/how'\n    } else {\n        history.pushState('', 'top', '/');\n        document.getElementById(\"top-page\").style.display = 'block';\n        document.getElementById(\"my-page\").style.display = 'none';\n        document.getElementById(\"show-page\").style.display = 'none';\n        document.getElementById(\"how-page\").style.display = 'none';\n        return '';\n    }\n}\n\n//# sourceURL=webpack://listapp/./src/controller/common.js?");

/***/ })

}]);