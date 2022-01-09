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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserData\": () => (/* binding */ getUserData),\n/* harmony export */   \"createUserData\": () => (/* binding */ createUserData),\n/* harmony export */   \"upgradeUserData\": () => (/* binding */ upgradeUserData),\n/* harmony export */   \"checkUserData\": () => (/* binding */ checkUserData),\n/* harmony export */   \"updateUserData\": () => (/* binding */ updateUserData)\n/* harmony export */ });\n// ユーザーデータ取得\nconst getUserData = async (uid) => {\n    const { getFirestore, getDoc, doc } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    const db = getFirestore();\n    const docRef = doc(db, 'users', uid);\n    const docSnap = await getDoc(docRef);\n    if (docSnap.exists()) {\n        const data = {\n            uid: uid,\n            user_name: docSnap.data().user_name,\n            user_icon: docSnap.data().user_icon,\n            list_title: docSnap.data().list_title,\n            user_bio: docSnap.data().user_bio,\n            twitter_disp_id: docSnap.data().twitter_disp_id,\n            twitter_sys_id: docSnap.data().twitter_sys_id,\n            user_regist_date: docSnap.data().user_regist_date\n        }\n        \n        return data;\n    } else {\n        return false;\n    }\n}\n\n// 匿名ユーザーデータ作成\nconst createUserData = async (user) => {\n    const { getFirestore, setDoc, doc, serverTimestamp } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    const db = getFirestore();\n    await setDoc(doc(db, 'users', user.uid), {\n        user_name: 'あなた',\n        user_icon: null,\n        list_title: 'の行きたいとこリスト',\n        user_bio: '',\n        twitter_disp_id: null,\n        twitter_sys_id: null,\n        user_regist_date: serverTimestamp()\n    });\n}\n\n// 匿名ユーザーのアップグレード\nconst upgradeUserData = async (user) => {\n    const { getFirestore, updateDoc, doc } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    const db = getFirestore();\n    const providerData = user.reloadUserInfo.providerUserInfo[0];\n    await updateDoc(doc(db, 'users', user.uid), {\n        user_name: providerData.displayName,\n        user_icon: providerData.photoUrl,\n        twitter_disp_id: providerData.screenName,\n        twitter_sys_id: providerData.rawId\n    });\n}\n\n// ユーザーデータ変更のチェック\nconst checkUserData = (preUserData, userData) => {\n    const preUserDataJSON = JSON.stringify(Object.entries(preUserData).sort());\n    const userDataJSON = JSON.stringify(Object.entries(userData).sort());\n\n    if (preUserDataJSON === userDataJSON) {\n        return false;\n    } else {\n        return true;\n    }\n}\n\n// ユーザーデータ更新\nconst updateUserData = async (userData) => {\n    const { \n        getFirestore,\n        doc,\n        updateDoc\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n\n    const db = getFirestore();\n    updateDoc(doc(db, 'users', userData.uid), {\n        user_name: userData.user_name,\n        user_icon: userData.user_icon,\n        list_title: userData.list_title,\n        user_bio: userData.user_bio,\n        twitter_disp_id: userData.twitter_disp_id\n    });\n}\n\n//# sourceURL=webpack://listapp/./src/model/userModel.js?");

/***/ })

}]);