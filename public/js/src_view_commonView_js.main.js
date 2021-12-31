"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklistapp"] = self["webpackChunklistapp"] || []).push([["src_view_commonView_js"],{

/***/ "./src/view/commonView.js":
/*!********************************!*\
  !*** ./src/view/commonView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadView\": () => (/* binding */ loadView),\n/* harmony export */   \"drawCanvas\": () => (/* binding */ drawCanvas),\n/* harmony export */   \"showAnimation\": () => (/* binding */ showAnimation),\n/* harmony export */   \"hideAnimation\": () => (/* binding */ hideAnimation),\n/* harmony export */   \"clickButton\": () => (/* binding */ clickButton),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"hide\": () => (/* binding */ hide)\n/* harmony export */ });\n\n// URLパラメータを読んでページを切り替え\nconst loadView = async () => {\n    const path = location.pathname;\n    let targetHTML;\n    \n    if (path === '/') {\n        targetHTML = '/template/top.html';\n    } else\n    if (path === '/mypage') {\n        targetHTML = '/template/mypage.html';\n    } else\n    if (/show/.test(path)) {\n        targetHTML = '/template/show.html';\n    } else\n    if (path === '/how') {\n        targetHTML = '/template/how.html';\n    } else {\n        history.back();\n    }\n\n    const request = new XMLHttpRequest();\n    request.open('GET', targetHTML, true);\n    request.onload = () => {\n        if (request.status >= 200 && request.status < 400) {\n\t\t\tdocument.getElementById('main').innerHTML = request.responseText;\n        }\n    };\n    request.send();\n}\n\n\nlet isMenuShow, clickLink = false;\nlet mouseX, mouseY;\nlet clickX = 0;\nlet clickY = 0;\nconst drawCanvas = () => {\n    const canvas = document.getElementById('canvas-area');\n    \n    if (canvas.getContext) {\n\n        canvas.width = canvas.clientWidth;\n        canvas.height = canvas.clientHeight;\n        var context = canvas.getContext('2d');\n        \n        //マウス座標を取得\n        \n        document.body.addEventListener('mousemove', (e) => {\n            mouseX = e.pageX;\n            mouseY = e.pageY;\n        });\n\n        //キャンバスのサイズを取得\n        const width= canvas.clientWidth;\n        const height= canvas.clientHeight;\n        let fillX = width - 30;\n        let fillY = 25;\n        let fillR = 0;\n        let alphaR = 0;\n        let buttonR_01 = 0;\n        let buttonR_02 = 0;\n        let buttonColor = '#F37504';\n\n        const update = () => {\n            if ( isMenuShow ) {\n                if (fillR * fillR < width*width + height*height) {\n                    buttonColor = '#FFFFFF';\n                    fillR += 30;\n                    buttonR_01 += 7.5;\n                    buttonR_02 += 10.5;\n                } else {\n                    buttonR_01 = 45;\n                    buttonR_02 = 135;\n                }\n            } else {\n                if (fillR > 0) {\n                    fillR -= 30;\n                    buttonR_01 -= 7.5;\n                    buttonR_02 -= 10.5;\n                } else {\n                    buttonR_01 = 0;\n                    buttonR_02 = 0;\n                    buttonColor = '#F37504';\n                }\n            }\n            if (!isMenuShow && fillR > 0) {\n                \n            }\n            if (clickLink) {\n                if (alphaR * alphaR < width*width + height*height) {\n                    alphaR += 30;\n                } else {\n                    clickLink = false;\n                    isMenuShow = false;\n                    fillR = 0;\n                    alphaR = 0;\n                }\n            }\n        }\n\n        const draw = () => {\n\n            // 背景\n            context.globalCompositeOperation = 'source-over';\n            context.beginPath () ;\n            context.arc(fillX, fillY, fillR, 0, 2 * Math.PI, true) ;\n            context.fillStyle = '#F37504' ;\n            context.fill();\n\n            // ハンバーガー\n            context.save();\n            context.translate(width - 35, 25);\n            context.beginPath ();\n            context.moveTo(-10, -7);\n            context.lineTo(10, -7);\n            context.strokeStyle = '#F37504';\n            context.lineWidth = 2;\n            context.stroke();\n\n            context.beginPath ();\n            context.moveTo(-10, 7);\n            context.lineTo(10, 7);\n            context.strokeStyle = '#F37504';\n            context.lineWidth = 2;\n            context.stroke();\n\n            context.save();\n            context.beginPath ();\n            context.rotate(buttonR_01 * Math.PI / 180);\n            context.moveTo(-10, 0);\n            context.lineTo(10, 0);\n            context.strokeStyle = buttonColor;\n            context.lineWidth = 2;\n            context.stroke();\n            context.restore();\n\n            context.save();\n            context.beginPath ();\n            context.rotate(buttonR_02 * Math.PI / 180);\n            context.moveTo(-10, 0);\n            context.lineTo(10, 0);\n            context.strokeStyle = buttonColor;\n            context.lineWidth = 2;\n            context.stroke();\n            context.restore();\n            context.restore();\n\n            // マスク\n            context.globalCompositeOperation = 'destination-out';\n            context.beginPath () ;\n            context.arc(clickX, clickY, alphaR, 0, 2 * Math.PI, true);\n            context.fill() ;\n        }\n\n        const loop = () => {\n            requestAnimationFrame(loop);\n            context.clearRect(0, 0, canvas.width, canvas.height);\n            update();\n            draw();\n        }\n        loop();\n    }\n}\n\nconst showAnimation = () => {\n    isMenuShow = true;\n}\n\nconst hideAnimation = () => {\n    isMenuShow = false;\n}\n\nconst clickButton = () => {\n    clickLink = true;\n    clickX = mouseX;\n    clickY = mouseY;\n}\n\n//メニュー\nconst speed = 20;\nconst menu = document.getElementsByClassName('menu-button');\nconst menuNum = menu.length;\n\nconst show = () => {\n    showAnimation();\n    document.getElementById('menu').style.display = 'block';\n    let count = 0;\n    const showMenu = () => {\n        for (let i = 0; i < menuNum; i++) {\n            menu[i].style.opacity = count / speed;\n        }\n        \n        count++;\n        if (count <= speed) {\n            requestAnimationFrame(showMenu);\n        }\n    }\n    showMenu();\n}\n\nconst hide = () => {\n    hideAnimation();\n    let count = 0;\n    const hideMenu = () => {\n        for (let i = 0; i < menuNum; i++){\n            menu[i].style.opacity = 1 - count / speed;\n        }\n        count++;\n        if (count <= speed) {\n            requestAnimationFrame(hideMenu);\n        } else {\n            document.getElementById('menu').style.display = 'none';\n        }\n    }\n    hideMenu();\n}\n\n//# sourceURL=webpack://listapp/./src/view/commonView.js?");

/***/ })

}]);