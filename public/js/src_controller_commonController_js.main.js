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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commonController\": () => (/* binding */ commonController)\n/* harmony export */ });\n\n// 全ページ共通機能\nconst commonController = async () => {\n    const { routing } = await __webpack_require__.e(/*! import() */ \"src_controller_pageController_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./pageController */ \"./src/controller/pageController.js\"));\n    const { login, logout } = await __webpack_require__.e(/*! import() */ \"src_model_authModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../model/authModel */ \"./src/model/authModel.js\"));\n\n    // ハンバーガーメニュー表示切り替え\n    const { show, hide, clickButton } = await __webpack_require__.e(/*! import() */ \"src_view_commonView_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../view/commonView */ \"./src/view/commonView.js\"));\n    let showMenu = false;\n    document.getElementById('menu-button').onclick = () => {\n        if ( showMenu ) {\n            showMenu = false;\n            hide();\n        } else {\n            showMenu = true;\n            show();\n        }\n    };\n\n    // ハンバーガーメニューリンク設定\n    const menu = document.getElementById('menu');\n\n    // トップ\n    document.getElementById('menu-button-home').onclick = () => {\n        routing('');\n        menu.style.display = 'none';\n        clickButton();\n    };\n\n    // ログイン\n    document.getElementById('menu-button-login').onclick = () => {\n        const callback = () => {\n            menu.style.display = 'none';\n            clickButton();\n        }\n        login(callback);\n    };\n    \n    // ログアウト\n    document.getElementById('menu-button-logout').onclick = () => {\n        logout();\n        menu.style.display = 'none';\n        clickButton();\n    };\n\n    // マイページ\n    document.getElementById('menu-button-mypage').onclick = () => {\n        routing('mypage');\n        menu.style.display = 'none';\n        clickButton();\n    };\n\n    // 使い方ページ\n    document.getElementById('menu-button-how').onclick = () => {\n        routing('how');\n        menu.style.display = 'none';\n        clickButton();\n    };\n\n    // 閲覧ページ\n    document.getElementById('menu-button-show').onclick = () => {\n        routing('show');\n        menu.style.display = 'none';\n        clickButton();\n    };\n}\n\n//# sourceURL=webpack://listapp/./src/controller/commonController.js?");

/***/ })

}]);