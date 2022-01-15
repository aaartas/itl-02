"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_controller_pages_showpageController_js"],{

/***/ "./src/controller/pages/showpageController.js":
/*!****************************************************!*\
  !*** ./src/controller/pages/showpageController.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showShowpage\": () => (/* binding */ showShowpage)\n/* harmony export */ });\n//閲覧ページ\nconst showShowpage = async () => {\n    const path = location.pathname.toString();\n    const uid = path.substring(6);\n\n    // ユーザーデータ取得\n    const getUser = new Promise(async (resolve) => {\n        const { getUserData } = await __webpack_require__.e(/*! import() */ \"src_model_userModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../model/userModel */ \"./src/model/userModel.js\"));\n        resolve(getUserData(uid));\n    });\n\n    // リストデータ取得\n    const getLists = new Promise(async (resolve) => {\n        const { getLists } = await __webpack_require__.e(/*! import() */ \"src_model_listModel_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../model/listModel */ \"./src/model/listModel.js\"));\n        resolve(getLists(uid));\n    });\n\n    // ajaxでHTML挿入\n    const getHTML = new Promise((resolve) => {\n        const request = new XMLHttpRequest();\n        request.open('GET', '/template/show.html', true);\n        request.onload = () => {\n            if (request.status >= 200 && request.status < 400) {\n                const restxt=request.responseText;\n                document.getElementById('main').innerHTML = restxt;\n                resolve();\n            }\n        };\n        request.send();\n    });\n\n    // ユーザーデータ取得、リストデータ取得、HTML取得を非同期実行。全て完了後thenを実行。\n    Promise.all([getUser, getLists, getHTML]).then( async (result) => {\n        const { setUserData } = await __webpack_require__.e(/*! import() */ \"src_view_pages_showpageView_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../view/pages/showpageView */ \"./src/view/pages/showpageView.js\"));\n        setUserData(result[0]);\n        setLists(result[1], uid, result[0].twitter_sys_id)\n    })\n\n    const { getAuth, onAuthStateChanged } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\"));\n    const { routing } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../commonController */ \"./src/controller/commonController.js\"));\n    const { setNotice } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../commonController */ \"./src/controller/commonController.js\"));\n    const auth = getAuth();\n    onAuthStateChanged(auth, async (user) => {\n        const makelistButton = document.getElementById('makelist-button');\n        if (user == null) {\n            makelistButton.style.display = 'inline';\n            makelistButton.onclick = () => {\n                routing('mypage');\n            }\n        } else {\n            makelistButton.style.display = 'none';\n        }\n        const array = [\n            {\n                message: '友達の行きたいとこリストから、お誘いをしよう',\n                isError: false\n            },\n            {\n                message: '行きたいとこリストを作成して共有しよう',\n                isError: false\n            }\n        ];\n        setNotice(array);\n    });\n}\n\n// リストデータをHTMLに反映\nconst setLists = async (list, uid, twitterID) => {\n    document.getElementById('show-yet-list-container').innerHTML = '';\n    document.getElementById('show-done-list-container').innerHTML = '';\n    \n    let yetList = list.filter(item => !item.check);\n    yetList.sort((a, b) => a.order - b.order);\n    yetList.forEach(item => {\n        addList(item.iid, item.name, item.check, uid, twitterID);\n    });\n\n    let doneList = list.filter(item => item.check);\n    doneList.sort((a, b) => a.check_date - b.check_date);\n    doneList.forEach(item => {\n        addList(item.iid, item.name, item.check);\n    });\n}\n\nconst addList = async (iid, name, check, uid, twitterID) => {\n    const listParent = document.createElement('div');\n    listParent.setAttribute('class', 'list-parent');\n    listParent.setAttribute('id', 'id-' + iid);\n\n    const listWrapper = document.createElement('div');\n    listWrapper.setAttribute('class', 'list-wrapper');\n    listParent.appendChild(listWrapper);\n\n    const checkBox = document.createElement('img');\n    if (check) {\n        checkBox.setAttribute('src', '/data/done.svg');\n        checkBox.setAttribute('class', 'list-check-box-done');\n    } else {\n        checkBox.setAttribute('src', '/data/yet.svg');\n        checkBox.setAttribute('class', 'list-check-box-yet');\n    }\n    \n    listWrapper.appendChild(checkBox);\n\n    const textBox = document.createElement('div');\n    textBox.setAttribute('class', 'list-text-box');\n    \n    const listText = document.createTextNode(name);\n    textBox.appendChild(listText);\n\n    // チェック有無で表示切り替え\n    if (check) {\n        textBox.style.color = '#C3C3C3';\n    } else {\n        textBox.style.color = '#000';\n    }\n    listWrapper.appendChild(textBox);\n\n    // 行きたいボタン\n    const inviteButton = document.createElement('img');\n    if (!check) {\n        const inviteLink = document.createElement('a');\n        let shareLink = 'https://twitter.com/messages/compose?';\n        shareLink += 'recipient_id=' + twitterID;\n        shareLink += '&text=' + 'https://campa-room.web.app/show/' + uid + \"%0A\";\n        shareLink += '行きたいとこリストからの送信%0A' + name + 'に一緒に行きませんか?'\n        inviteLink.setAttribute('href', shareLink);\n\n        inviteButton.setAttribute('src', '/data/invite.svg');\n        inviteButton.setAttribute('class', 'show-invite-button-img');\n        inviteLink.appendChild(inviteButton);\n        listWrapper.appendChild(inviteLink);\n    }\n\n    listWrapper.ontouchstart = () => {\n        listWrapper.style.background = '#EEE';\n    };\n    \n    listWrapper.ontouchend = () => {\n        listWrapper.style.background = '#FFF';\n    };\n\n    // 詳細表示\n    let detailShow = false;\n    textBox.onclick = () => {\n        if (textBox.offsetWidth < textBox.scrollWidth) {\n            detailShow = true;\n        } else {\n            detailShow = false;\n        }\n        if (detailShow) {\n            textBox.style.whiteSpace = 'normal';\n            listWrapper.style.height = 'auto';\n        } else {\n            textBox.style.whiteSpace = 'nowrap';\n            listWrapper.style.height = '60px';\n        }\n    }\n\n    // リストテキスト詳細表示を戻す\n    document.addEventListener('click', (e) => {\n        if (e.target !== inviteButton && e.target !== textBox) {\n            detailShow = false;\n            textBox.style.whiteSpace = 'nowrap';\n            listWrapper.style.height = '60px';\n        }\n    });\n\n    if (check) {\n        const listContainer = document.getElementById('show-done-list-container');\n        listContainer.insertBefore(listParent, listContainer.firstChild);\n    } else {\n        const listContainer = document.getElementById('show-yet-list-container');\n        listContainer.insertBefore(listParent, listContainer.firstChild);\n    }\n}\n\n//# sourceURL=webpack://listapp/./src/controller/pages/showpageController.js?");

/***/ })

}]);