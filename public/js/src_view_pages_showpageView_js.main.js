"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_view_pages_showpageView_js"],{

/***/ "./src/view/pages/showpageView.js":
/*!****************************************!*\
  !*** ./src/view/pages/showpageView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUserData\": () => (/* binding */ setUserData)\n/* harmony export */ });\n// ユーザーデータをHTMLに反映\nconst setUserData = async (userData) => {\n    document.getElementById('show-icon').src = userData.user_icon;\n    document.getElementById('show-name').innerHTML = userData.user_name;\n    document.getElementById('show-title').innerHTML = userData.list_title;\n    document.getElementById('show-bio-text').innerHTML = userData.user_bio;\n\n    // 登録リストの取得\n    const { getLists } = await __webpack_require__.e(/*! import() */ \"src_model_listModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../model/listModel */ \"./src/model/listModel.js\"));\n    let list = await getLists(userData.uid);\n    \n    if (list.length == 0) {\n        document.getElementById('show-list-unregistered').style.display = 'block';\n    } else {\n        document.getElementById('show-list-unregistered').style.display = 'none';\n    }\n\n    document.getElementById('show-prof').onclick = () => {\n        location.href = 'https://twitter.com/' + userData.twitter_disp_id;\n    };\n}\n\n//# sourceURL=webpack://listapp/./src/view/pages/showpageView.js?");

/***/ })

}]);