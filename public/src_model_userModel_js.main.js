"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_model_userModel_js"],{

/***/ "./src/model/userModel.js":
/*!********************************!*\
  !*** ./src/model/userModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserData\": () => (/* binding */ getUserData),\n/* harmony export */   \"checkUserData\": () => (/* binding */ checkUserData),\n/* harmony export */   \"updateUserData\": () => (/* binding */ updateUserData)\n/* harmony export */ });\n// ユーザーデータ作成\n\n\n// ユーザーデータ取得\nconst getUserData = async (uid) => {\n    const { getFirestore, getDoc, doc } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    const db = getFirestore();\n    const docRef = doc(db, 'users', uid);\n    const docSnap = await getDoc(docRef);\n    if (docSnap.exists()) {\n        const data = {\n            uid: uid,\n            user_name: docSnap.data().user_name,\n            user_icon: docSnap.data().user_icon,\n            list_title: docSnap.data().list_title,\n            user_bio: docSnap.data().user_bio,\n            twitter_disp_id: docSnap.data().twitter_disp_id,\n            twitter_sys_id: docSnap.data().twitter_sys_id\n        }\n\n        return data;\n    }\n}\n\n// プロフィール変更のチェック\nconst checkUserData = (preUserData, userData) => {\n    const preUserDataJSON = JSON.stringify(Object.entries(preUserData).sort());\n    const userDataJSON = JSON.stringify(Object.entries(userData).sort());\n\n    if (preUserDataJSON === userDataJSON) {\n        return false;\n    } else {\n        return true;\n    }\n}\n\n// プロフィール編集内容の保存\nconst updateUserData = async (UserData) => {\n    const { \n        getFirestore,\n        doc,\n        updateDoc\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n\n    const db = getFirestore();\n    updateDoc(doc(db, 'users', UserData.uid), {\n        list_title: UserData.list_title,\n        user_bio: UserData.user_bio\n    });\n}\n\n//# sourceURL=webpack://listapp/./src/model/userModel.js?");

/***/ })

}]);