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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commonController\": () => (/* binding */ commonController)\n/* harmony export */ });\n\n// 全ページ共通機能\nconst commonController = async () => {\n    const { routing } = await __webpack_require__.e(/*! import() */ \"src_controller_pageController_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./pageController */ \"./src/controller/pageController.js\"));\n    const { login, logout } = await __webpack_require__.e(/*! import() */ \"src_model_authModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../model/authModel */ \"./src/model/authModel.js\"));\n    \n    // ロゴクリック時、topページに遷移\n    document.getElementById('logo-img').onclick = () => {\n        document.body.style.backgroundColor = '#EEB706';\n        routing('');\n    };\n\n    // ハンバーガーメニュー表示切り替え\n    const { show, hide, clickButton } = await __webpack_require__.e(/*! import() */ \"src_view_commonView_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../view/commonView */ \"./src/view/commonView.js\"));\n    let showMenu = false;\n    document.getElementById('menu-button-on-img').onclick = () => {\n        if ( showMenu ) {\n            showMenu = false;\n            hide();\n        } else {\n            showMenu = true;\n            show();\n        }\n    };\n\n    // ハンバーガーメニューリンク設定\n    document.getElementById('menu-button-home').onclick = () => {\n        routing('');\n        document.getElementById('menu').style.display = 'none';\n        clickButton();\n    };\n    document.getElementById('menu-button-login').onclick = () => {\n        const callback = () => {\n            document.getElementById('menu').style.display = 'none';\n            clickButton();\n        }\n        login(callback);\n        \n    };\n    document.getElementById('menu-button-logout').onclick = () => {\n        logout();\n        document.getElementById('menu').style.display = 'none';\n        clickButton();\n    };\n    document.getElementById('menu-button-mypage').onclick = () => {\n        routing('mypage');\n        document.getElementById('menu').style.display = 'none';\n        clickButton();\n    };\n    document.getElementById('menu-button-how').onclick = () => {\n        routing('how');\n        document.getElementById('menu').style.display = 'none';\n        clickButton();\n    };\n    document.getElementById('menu-button-show').onclick = () => {\n        routing('show');\n        document.getElementById('menu').style.display = 'none';\n        clickButton();\n    };\n}\n\n//# sourceURL=webpack://listapp/./src/controller/commonController.js?");

/***/ })

}]);