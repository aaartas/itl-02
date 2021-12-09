"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_view_common_slideMenu_js"],{

/***/ "./src/view/common/slideMenu.js":
/*!**************************************!*\
  !*** ./src/view/common/slideMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slideMenu\": () => (/* binding */ slideMenu)\n/* harmony export */ });\n//スライドインメニュー\nconst slideMenu = () => {\n    const menu = document.getElementsByClassName(\"menu-button\");\n    const menuNum = menu.length;\n    let isMenuShow = false;\n    const speed = 20;\n\n    document.getElementById(\"menu-button-off-img\").addEventListener( 'click', () => {\n        isMenuShow = !isMenuShow;\n        \n        if (isMenuShow) {\n            let count = 0;\n            const show = () => {\n                for (let i = 0; i < menuNum; i++){\n                    menu[i].style.opacity =  count / speed;\n                }\n                \n                count++;\n                if (count <= speed)\n                requestAnimationFrame(show);\n            }\n            show();\n        } else {\n            let count = 0;\n            const hide = () => {\n                for (let i = 0; i < menuNum; i++){\n                    menu[i].style.opacity = 1 - count / speed;\n                }\n                count++;\n                if (count <= speed)\n                requestAnimationFrame(hide);\n            }\n            hide();\n        }\n        \n    }, false );\n\n    //表示\n    // document.getElementById(\"menu-button-on-img\").addEventListener( 'click', () => {\n    //     isMenuShow = true;\n    //     let count = 0;\n    //     const loop = () => {\n    //         menu.style.opacity = count / speed;\n    //         menu.style.right = -50 + 50 * count / speed + \"vw\";\n    //         count++;\n    //         if (count <= speed)\n    //         requestAnimationFrame(loop);\n    //     }\n    //     loop();\n    // }, false );\n\n    // //非表示\n    // document.getElementById(\"menu-button-off-img\").addEventListener( 'click', () => {\n    //     isMenuShow = false;\n    //     let count = 0;\n    //     const loop = () => {\n    //         menu.style.opacity = 1 - count / speed;\n    //         menu.style.right = - 50 * count / speed + \"vw\";\n    //         count++;\n    //         if (count <= speed)\n    //         requestAnimationFrame(loop);\n    //     }\n    //     loop();\n    // }, false );\n    // document.body.addEventListener( 'click', (e) => {\n    //     if (isMenuShow && e.clientX < window.innerWidth / 2) {\n    //         isMenuShow = false;\n    //         let count = 0;\n    //         const loop = () => {\n    //             menu.style.opacity = 1 - count / speed;\n    //             menu.style.right = - 50 * count / speed + \"vw\";\n    //             count++;\n    //             if (count <= speed)\n    //             requestAnimationFrame(loop);\n    //         }\n    //         loop();\n    //     }\n    // }, false );\n}\n\n//# sourceURL=webpack://listapp/./src/view/common/slideMenu.js?");

/***/ })

}]);