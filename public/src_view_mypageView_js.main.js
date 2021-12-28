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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setView\": () => (/* binding */ setView)\n/* harmony export */ });\n// マイページ表示切り替え\nconst setView = (mode) => {\n    const bioArea = document.getElementById('my-bio-textarea');\n    const title = document.getElementById('my-title');\n    const editContents = document.getElementsByClassName('my-edit-mode');\n    const editContentsNum = editContents.length;\n    const viewContents = document.getElementsByClassName('my-view-mode');\n    const viewContentsNum = viewContents.length;\n    const addContents = document.getElementsByClassName('my-input-mode');\n    const addContentsNum = addContents.length;\n    const addButton = document.getElementById('my-add-submit-button');\n    const renameButton = document.getElementById('my-rename-submit-button');\n    const editableContents = document.getElementsByClassName('my-editable');\n    const editableContentsNum = editableContents.length;\n    \n    if (mode === 'view') {\n        for (let i = 0; i < editContentsNum; i++) {\n            editContents[i].style.display = 'none';\n        }\n        for (let i = 0; i < viewContentsNum; i++) {\n            viewContents[i].style.display = 'block';\n        }\n        for (let i = 0; i < addContentsNum; i++) {\n            addContents[i].style.display = 'none';\n        }\n        for (let i = 0; i < editableContentsNum; i++) {\n            editableContents[i].style.color = '#000';\n        }\n        document.getElementById('my-page').style.backgroundColor = '#EEB706';\n        document.getElementById('my-sticky-container').style.backgroundColor = '#EEB706';\n        bioArea.readOnly = true;\n        title.readOnly = true;\n    } else if (mode === 'edit') {\n        for (let i = 0; i < editContentsNum; i++) {\n            editContents[i].style.display = 'block';\n        }\n        for (let i = 0; i < viewContentsNum; i++) {\n            viewContents[i].style.display = 'none';\n        }\n        for (let i = 0; i < addContentsNum; i++) {\n            addContents[i].style.display = 'none';\n        }\n        for (let i = 0; i < editableContentsNum; i++) {\n            editableContents[i].style.color = '#F37504';\n        }\n        document.getElementById('my-page').style.backgroundColor = '#F37504';\n        document.getElementById('my-sticky-container').style.backgroundColor = '#F37504';\n        bioArea.readOnly = false;\n        title.readOnly = false;\n    } else if (mode === 'add') {\n        for (let i = 0; i < addContentsNum; i++) {\n            addContents[i].style.display = 'block';\n            addButton.style.display = 'block';\n            renameButton.style.display = 'none';\n        }\n    } else if (mode === 'rename') {\n        for (let i = 0; i < addContentsNum; i++) {\n            addContents[i].style.display = 'block';\n            addButton.style.display = 'none';\n            renameButton.style.display = 'block';\n        }\n    }\n}\n\n//# sourceURL=webpack://listapp/./src/view/mypageView.js?");

/***/ })

}]);