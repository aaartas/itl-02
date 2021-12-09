"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_view_common_canvas_js"],{

/***/ "./src/view/common/canvas.js":
/*!***********************************!*\
  !*** ./src/view/common/canvas.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawCanvas\": () => (/* binding */ drawCanvas),\n/* harmony export */   \"showAnimation\": () => (/* binding */ showAnimation),\n/* harmony export */   \"hideAnimation\": () => (/* binding */ hideAnimation),\n/* harmony export */   \"clickButton\": () => (/* binding */ clickButton)\n/* harmony export */ });\n\nlet isMenuShow, clickLink = false;\nlet mouseX, mouseY;\nlet clickX = 0;\nlet clickY = 0;\nconst drawCanvas = () => {\n    const canvas = document.getElementById('canvas-area');\n    \n\n    if (canvas.getContext) {\n\n        canvas.width = canvas.clientWidth;\n        canvas.height = canvas.clientHeight;\n        var context = canvas.getContext('2d');\n        \n        //マウス座標を取得\n        \n        document.body.addEventListener(\"mousemove\", function(e){\n\n            mouseX = e.pageX;\n            mouseY = e.pageY;\n        });\n\n        //キャンバスのサイズを取得\n        const width= canvas.clientWidth;\n        const height= canvas.clientHeight;\n        let fillX = width - 30;\n        let fillY = 25;\n        let fillR = 0;\n        let alphaR = 0;\n\n        \n\n        const update = () => {\n            if (isMenuShow && fillR * fillR < width*width + height*height) {\n                fillR += 30;\n            } \n            if (!isMenuShow && fillR > 0) {\n                fillR -= 30;\n            }\n            if (clickLink) {\n                if (alphaR * alphaR < width*width + height*height) {\n                    alphaR += 30;\n                } else {\n                    clickLink = false;\n                    isMenuShow = false;\n                    fillR = 0;\n                    alphaR = 0;\n                }\n            }\n        }\n\n        const draw = () => {\n            context.globalCompositeOperation = \"source-over\";\n            context.beginPath () ;\n            context.arc(fillX, fillY, fillR, 0, 2 * Math.PI, true) ;\n            context.fillStyle = \"#F37504\" ;\n            context.fill() ;\n\n            context.globalCompositeOperation = \"destination-out\";\n            context.beginPath () ;\n            context.arc(clickX, clickY, alphaR, 0, 2 * Math.PI, true);\n            context.fill() ;\n        }\n\n        const loop = () => {\n            requestAnimationFrame(loop);\n            context.clearRect(0, 0, canvas.width, canvas.height);\n            update()\n            draw();\n        }\n        loop();\n    }\n}\n\nconst showAnimation = () => {\n    isMenuShow = true;\n}\n\nconst hideAnimation = () => {\n    isMenuShow = false;\n}\n\nconst clickButton = () => {\n    clickLink = true;\n    clickX = mouseX;\n    clickY = mouseY;\n}\n\n//# sourceURL=webpack://listapp/./src/view/common/canvas.js?");

/***/ })

}]);