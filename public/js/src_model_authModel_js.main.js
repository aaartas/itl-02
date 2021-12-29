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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n//twitterログイン処理\nconst login = async (callback) => {\n    const { getAuth, TwitterAuthProvider, signInWithPopup } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    const auth = getAuth();\n    const provider = new TwitterAuthProvider();\n    \n    signInWithPopup(auth, provider)\n    .then(async () => {\n        //新規ユーザーの時、リストデータ作成\n        const { getFirestore, getDoc, doc } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n        const db = getFirestore();\n        const docRef = doc(db, 'users', auth.currentUser.uid);\n        const docSnap = await getDoc(docRef);\n        if(!docSnap.exists()){\n            const { setDoc } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n            await setDoc(doc(db, 'users', auth.currentUser.uid), {\n                user_name: auth.currentUser.displayName,\n                user_icon: auth.currentUser.photoURL,\n                list_title: 'の行きたいとこリスト',\n                user_bio: '',\n                twitter_disp_id: auth.currentUser.reloadUserInfo.screenName,\n                twitter_sys_id: auth.currentUser.providerData[0].uid\n            });\n        }\n        \n        //ログイン後、自動でマイページに遷移\n        const { routing } = await __webpack_require__.e(/*! import() */ \"src_controller_pageController_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../controller/pageController */ \"./src/controller/pageController.js\"));\n        routing('mypage');\n\n        // canvasアニメーションをコールバック\n        if (callback) {\n            callback();\n        }\n    });\n}\n\n//ログアウト処理\nconst logout = async () => {\n    const { getAuth, signOut } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    signOut(getAuth());\n}\n\n\n\n\n\n//# sourceURL=webpack://listapp/./src/model/authModel.js?");

/***/ })

}]);