"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_pages_mypageController_js"],{

/***/ "./src/controller/pages/mypageController.js":
/*!**************************************************!*\
  !*** ./src/controller/pages/mypageController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMypage\": () => (/* binding */ showMypage)\n/* harmony export */ });\n// マイページ\nconst showMypage = async () => {\n    let uid, displayName, icon;\n    \n    const { getAuth, onAuthStateChanged } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    const { routing } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../pageController */ \"./src/controller/pageController.js\"));\n\n    // ログイン状態の確認\n    onAuthStateChanged(getAuth(), (user) => {\n        if (user){\n            uid = user.uid;\n            displayName = user.displayName;\n            icon = user.photoURL;\n            \n            document.getElementById(\"my-icon\").src = icon;\n            document.getElementById(\"my-name\").innerHTML = displayName;\n            document.getElementById(\"top-page\").style.display = 'none';\n            document.getElementById(\"my-page\").style.display = 'block';\n            document.getElementById(\"show-page\").style.display = 'none';\n            document.getElementById(\"how-page\").style.display = 'none';\n\n            setLists(user.uid);\n        } else {\n            console.log('logouted');\n            \n            routing('');\n        }\n    });\n}\n\nconst setLists = async (uid) => {\n    const { getLists } = await __webpack_require__.e(/*! import() */ \"src_model_list_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../model/list */ \"./src/model/list.js\"));\n    const lists = await getLists(uid);\n    lists.forEach(list => {\n        //console.log(list.name);\n        let listWrapper = document.createElement(\"div\");\n        listWrapper.setAttribute(\"class\", \"list-wrapper\");\n        listWrapper.setAttribute(\"id\", list.id);\n\n        let checkBox = document.createElement(\"img\");\n        checkBox.setAttribute(\"class\", \"list-check-box\");\n        if (list.check) {\n            checkBox.setAttribute(\"src\", \"./data/done.svg\");\n        } else {\n            checkBox.setAttribute(\"src\", \"./data/yet.svg\");\n        }\n        \n        listWrapper.appendChild(checkBox);\n\n        let textBox = document.createElement(\"div\");\n        textBox.setAttribute(\"class\", \"list-text-box\");\n        listWrapper.appendChild(textBox);\n\n        let listText = document.createTextNode(list.name);\n        textBox.appendChild(listText);\n\n        let listContainer = document.getElementById(\"lists-container\");\n        listContainer.appendChild(listWrapper);\n\n\n    });\n\n}\n\n\n//# sourceURL=webpack://listapp/./src/controller/pages/mypageController.js?");

/***/ })

}]);