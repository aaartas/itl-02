"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_model_list_js"],{

/***/ "./src/model/list.js":
/*!***************************!*\
  !*** ./src/model/list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLists\": () => (/* binding */ getLists),\n/* harmony export */   \"saveData\": () => (/* binding */ saveData)\n/* harmony export */ });\nconst getLists = async (uid) => {\n    let lists = [];\n    const { \n        getFirestore,\n        collection,\n        getDocs,\n        query,\n        where\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    const db = getFirestore();\n    const q = query(collection(db, 'users', uid, 'lists'), where('removed', '==', false));\n    const snapshot = await getDocs(q);\n    snapshot.forEach((doc) => {\n        lists.push({\n            id: doc.id,\n            name: doc.data().name,\n            check: doc.data().check,\n            removed: doc.data().removed\n        })\n    });\n\n    return lists;\n}\n\n//リスト編集内容の保存\nconst saveData = async (uid, yetLists, doneLists) => {\n    const { \n        getFirestore,\n        collection,\n        getDocs,\n        query,\n        addDoc,\n        doc,\n        updateDoc,\n        serverTimestamp\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    //DBから編集前のリストデータ取得\n    let preLists = [];\n    const getPre = async () => {\n        const db = getFirestore();\n        const q = query(collection(db, 'users', uid, 'lists'));\n        const snapshot = await getDocs(q);\n        snapshot.forEach((doc) => {\n            preLists.push({\n                id: doc.id,\n                name: doc.data().name,\n                check: doc.data().check,\n                removed: doc.data().removed\n            })\n        });\n    }\n    await getPre();\n\n    preLists.map((preList) => {\n        //元々行ったチェックされていたリストを更新\n        doneLists.map((list) => {\n            if(list.id === preList.id){\n                if(JSON.stringify(list) !== JSON.stringify(preList)){\n                    const db = getFirestore();\n                    updateDoc(doc(db, 'users', uid, 'lists', preList.id), {\n                        name: list.name,\n                        check: list.check,\n                        removed: list.removed,\n                        timestamp: serverTimestamp()\n                    });\n                }\n            }\n        });\n        //元々行ったチェックされていなかったリストを更新\n        yetLists.map((list) => {\n            if(list.id === preList.id){\n                if(JSON.stringify(list) !== JSON.stringify(preList)){\n                    const db = getFirestore();\n                    updateDoc(doc(db, 'users', uid, 'lists', preList.id), {\n                        name: list.name,\n                        check: list.check,\n                        removed: list.removed,\n                        timestamp: serverTimestamp()\n                    });\n                }\n            }\n        });\n        \n    });\n\n    //新規追加されたリストを抽出\n    let newLists = yetLists.filter(({id}) => {\n        const _id = id;\n        return preLists.findIndex(({id}) => id === _id) === -1\n    });\n\n    //DBにリストデータ新規作成\n    newLists.map((list) => {\n        const db = getFirestore();\n        addDoc(collection(db, \"users\", uid, 'lists'), {\n            name: list.name,\n            check: list.check,\n            removed: list.removed,\n            timestamp: serverTimestamp()\n        });\n    });\n}\n\n//# sourceURL=webpack://listapp/./src/model/list.js?");

/***/ })

}]);