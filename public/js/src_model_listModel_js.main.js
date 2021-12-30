"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_model_listModel_js"],{

/***/ "./src/model/listModel.js":
/*!********************************!*\
  !*** ./src/model/listModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLists\": () => (/* binding */ getLists),\n/* harmony export */   \"saveData\": () => (/* binding */ saveData)\n/* harmony export */ });\nconst getLists = async (uid) => {\n    const { \n        getFirestore,\n        collection,\n        getDocs,\n        query,\n        where\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n    const db = getFirestore();\n    const q = query(collection(db, 'users', uid, 'list'), where('item_remove', '==', false));\n    const snapshot = await getDocs(q);\n    const list = snapshot.docs.map((doc) => {\n        return {\n            iid: doc.id,\n            name: doc.data().item_name,\n            check: doc.data().item_check,\n            remove: doc.data().item_remove,\n            order: doc.data().item_order,\n            regist_date: doc.data().item_regist_date,\n            check_date: doc.data().item_check_date\n        }\n    });\n    return list;\n}\n\n\n//リスト編集内容の保存\nconst saveData = async (uid, yetList, doneList) => {\n    const { \n        getFirestore,\n        collection,\n        addDoc,\n        doc,\n        updateDoc,\n        serverTimestamp\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\"));\n\n    const db = getFirestore();\n\n    //DBから編集前のリストデータ取得\n    const preList = await getLists(uid);\n    \n    // アクティブリスト更新\n    yetList.forEach(item => {\n        const find = preList.find(({iid}) => iid === item.iid);\n        if (find === undefined) {\n            // 新規追加\n            if (!item.remove) {\n                addDoc(collection(db, 'users', uid, 'list'), {\n                    item_name: item.name,\n                    item_check: item.check,\n                    item_remove: false,\n                    item_order: item.order,\n                    item_regist_date: serverTimestamp(),\n                    item_check_date: item.check ? serverTimestamp() : null\n                });\n            }\n        } else {\n            // リスト更新\n            if(JSON.stringify(item) !== JSON.stringify(find)) {\n                updateDoc(doc(db, 'users', uid, 'list', find.iid), {\n                    item_name: item.name,\n                    item_check: item.check,\n                    item_remove: item.remove,\n                    item_order: item.order,\n                    item_check_date: item.check ? serverTimestamp() : null\n                });\n            }\n        } \n    });\n\n    // 元々チェック済のリストは削除のみ\n    doneList.forEach(item => {\n        const find = preList.find(({iid}) => iid === item.iid);\n        if (item.remove) {\n            updateDoc(doc(db, 'users', uid, 'list', find.iid), {\n                item_remove: item.remove\n            });\n        }\n    });\n}\n\n//# sourceURL=webpack://listapp/./src/model/listModel.js?");

/***/ })

}]);