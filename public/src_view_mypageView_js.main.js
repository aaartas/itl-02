"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_view_mypageView_js"],{

/***/ "./src/view/mypageView.js":
/*!********************************!*\
  !*** ./src/view/mypageView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList)\n/* harmony export */ });\n// 1つのリストをHTMLに追加\nconst addList = (id, name, check) => {\n    let listWrapper = document.createElement(\"div\");\n    listWrapper.setAttribute(\"class\", \"list-wrapper\");\n    listWrapper.setAttribute(\"id\", id);\n\n    let checkBox = document.createElement(\"img\");\n    \n    if (check) {\n        checkBox.setAttribute(\"src\", \"./data/done.svg\");\n        checkBox.setAttribute(\"class\", \"list-check-box-done\");\n    } else {\n        checkBox.setAttribute(\"src\", \"./data/yet.svg\");\n        checkBox.setAttribute(\"class\", \"list-check-box-yet\");\n    }\n    \n    listWrapper.appendChild(checkBox);\n\n    let textBox = document.createElement(\"div\");\n    textBox.setAttribute(\"class\", \"list-text-box\");\n    listWrapper.appendChild(textBox);\nconsole.log(name)\n    let listText = document.createTextNode(name);\n    textBox.appendChild(listText);\n\n\n    let listContainer;\n    if (check) {\n        listContainer = document.getElementById(\"done-list-container\");\n    } else {\n        listContainer = document.getElementById(\"yet-list-container\");\n    }\n    \n    listContainer.prepend(listWrapper);\n}\n\n//# sourceURL=webpack://listapp/./src/view/mypageView.js?");

/***/ })

}]);