"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_commonController_js"],{

/***/ "./src/controller/commonController.js":
/*!********************************************!*\
  !*** ./src/controller/commonController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"common\": () => (/* binding */ common)\n/* harmony export */ });\n\n//共通ページ\nconst common = async () => {\n    const { routing } = await __webpack_require__.e(/*! import() */ \"src_controller_pageController_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./pageController */ \"./src/controller/pageController.js\"));\n    const { login, logout } = await __webpack_require__.e(/*! import() */ \"src_model_auth_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../model/auth */ \"./src/model/auth.js\"));\n    const { show, hide } = await __webpack_require__.e(/*! import() */ \"src_view_common_menuView_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../view/common/menuView */ \"./src/view/common/menuView.js\"));\n    const { clickButton } = await __webpack_require__.e(/*! import() */ \"src_view_common_canvas_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../view/common/canvas */ \"./src/view/common/canvas.js\"));\n\n    //ロゴクリックでtopページに遷移\n    document.getElementById(\"logo-img\").addEventListener( 'click', () => {\n        routing('');\n    }, false );\n\n    //ハンバーガーメニュー表示切り替え\n    document.getElementById(\"menu-button-on-img\").addEventListener( 'click', () => {\n        show();\n    }, false );\n    document.getElementById(\"menu-button-off-img\").addEventListener( 'click', () => {\n        hide();\n    }, false );\n\n    //メニューリンク設定\n    document.getElementById(\"menu-button-home\").addEventListener( 'click', () => {\n        routing('');\n        document.getElementById(\"menu\").style.display = 'none';\n        clickButton();\n    }, false );\n    document.getElementById(\"menu-button-login\").addEventListener( 'click', () => {\n        const callback = () => {\n            document.getElementById(\"menu\").style.display = 'none';\n            clickButton();\n            console.log('start-hide')\n        }\n        login(callback);\n        \n    }, false );\n    document.getElementById(\"menu-button-logout\").addEventListener( 'click', () => {\n        logout();\n        document.getElementById(\"menu\").style.display = 'none';\n        clickButton();\n    }, false );\n    document.getElementById(\"menu-button-mypage\").addEventListener( 'click', () => {\n        routing('mypage');\n        document.getElementById(\"menu\").style.display = 'none';\n        clickButton();\n    }, false );\n    document.getElementById(\"menu-button-how\").addEventListener( 'click', () => {\n        routing('how');\n        document.getElementById(\"menu\").style.display = 'none';\n        clickButton();\n    }, false );\n    document.getElementById(\"menu-button-show\").addEventListener( 'click', () => {\n        routing('show');\n        document.getElementById(\"menu\").style.display = 'none';\n        clickButton();\n    }, false );\n\n\n}\n\n//# sourceURL=webpack://listapp/./src/controller/commonController.js?");

/***/ })

}]);