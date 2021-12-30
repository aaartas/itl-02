"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_model_authModel_js"],{

/***/ "./src/model/authModel.js":
/*!********************************!*\
  !*** ./src/model/authModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"checkAuth\": () => (/* binding */ checkAuth),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n//twitterログイン処理\nconst login = async () => {\n    const { getAuth, TwitterAuthProvider, signInWithRedirect } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    const auth = getAuth();\n    const provider = new TwitterAuthProvider();\n    \n    signInWithRedirect(auth, provider);\n    // .then(async () => {\n    //     //新規ユーザーの時、リストデータ作成\n    //     const { createUserData } = await import('./userModel');\n    //     await createUserData(auth.currentUser);\n        \n    //     //ログイン後、自動でマイページに遷移\n    //     const { routing } = await import('../controller/pageController');\n    //     routing('mypage');\n    //     console.log('test')\n\n    //     // canvasアニメーションをコールバック\n    //     if (callback) {\n    //         callback();\n    //     }\n    // })\n\n    \n}\n\nconst checkAuth = async () => {\n    const { getAuth, getRedirectResult } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    const auth = getAuth();\n    getRedirectResult(auth).then(async (result) => {\n        console.log(result)\n        if (result != null) {\n            //新規ユーザーの時、リストデータ作成\n            const { createUserData } = await __webpack_require__.e(/*! import() */ \"src_model_userModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./userModel */ \"./src/model/userModel.js\"));\n            await createUserData(auth.currentUser);\n\n            //ログイン後、自動でマイページに遷移\n            const { routing } = await __webpack_require__.e(/*! import() */ \"src_controller_pageController_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../controller/pageController */ \"./src/controller/pageController.js\"));\n            routing('mypage');\n        }\n    })\n}\n\n\n\n//ログアウト処理\nconst logout = async () => {\n    const { getAuth, signOut } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    signOut(getAuth());\n}\n\n//# sourceURL=webpack://listapp/./src/model/authModel.js?");

/***/ })

}]);