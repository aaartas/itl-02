
// URLパラメータを読んでページを切り替え
export const loadView = async () => {
    const path = location.pathname;
    let targetHTML;
    
    if (path === '/') {
        targetHTML = '/template/mypage.html';
    } else
    if (path === '/mypage') {
        targetHTML = '/template/mypage.html';
    } else
    if (/show/.test(path)) {
        targetHTML = '/template/show.html';
    } else
    if (path === '/how') {
        targetHTML = '/template/how.html';
    } else {
        history.back();
    }

    const request = new XMLHttpRequest();
    request.open('GET', targetHTML, true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
			document.getElementById('main').innerHTML = request.responseText;
        }
    };
    request.send();
}


let isMenuShow, clickLink = false;
let mouseX, mouseY;
let clickX = 0;
let clickY = 0;
export const drawCanvas = () => {
    const canvas = document.getElementById('canvas-area');
    
    if (canvas.getContext) {

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        var context = canvas.getContext('2d');
        
        //マウス座標を取得
        
        document.body.addEventListener('mousemove', (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        //キャンバスのサイズを取得
        const width= canvas.clientWidth;
        const height= canvas.clientHeight;
        let fillX = width - 30;
        let fillY = 25;
        let fillR = 0;
        let alphaR = 0;
        let buttonR_01 = 0;
        let buttonR_02 = 0;
        let buttonColor = '#F37504';

        const update = () => {
            if ( isMenuShow ) {
                if (fillR * fillR < width*width + height*height) {
                    buttonColor = '#FFFFFF';
                    fillR += 30;
                    buttonR_01 += 7.5;
                    buttonR_02 += 10.5;
                } else {
                    buttonR_01 = 45;
                    buttonR_02 = 135;
                }
            } else {
                if (fillR > 0) {
                    fillR -= 30;
                    buttonR_01 -= 7.5;
                    buttonR_02 -= 10.5;
                } else {
                    buttonR_01 = 0;
                    buttonR_02 = 0;
                    buttonColor = '#F37504';
                }
            }
            if (!isMenuShow && fillR > 0) {
                
            }
            if (clickLink) {
                if (alphaR * alphaR < width*width + height*height) {
                    alphaR += 30;
                } else {
                    clickLink = false;
                    isMenuShow = false;
                    fillR = 0;
                    alphaR = 0;
                }
            }
        }

        const draw = () => {

            // 背景
            context.globalCompositeOperation = 'source-over';
            context.beginPath () ;
            context.arc(fillX, fillY, fillR, 0, 2 * Math.PI, true) ;
            context.fillStyle = '#F37504' ;
            context.fill();

            // ハンバーガー
            context.save();
            context.translate(width - 35, 25);
            context.beginPath ();
            context.moveTo(-10, -7);
            context.lineTo(10, -7);
            context.strokeStyle = '#F37504';
            context.lineWidth = 2;
            context.stroke();

            context.beginPath ();
            context.moveTo(-10, 7);
            context.lineTo(10, 7);
            context.strokeStyle = '#F37504';
            context.lineWidth = 2;
            context.stroke();

            context.save();
            context.beginPath ();
            context.rotate(buttonR_01 * Math.PI / 180);
            context.moveTo(-10, 0);
            context.lineTo(10, 0);
            context.strokeStyle = buttonColor;
            context.lineWidth = 2;
            context.stroke();
            context.restore();

            context.save();
            context.beginPath ();
            context.rotate(buttonR_02 * Math.PI / 180);
            context.moveTo(-10, 0);
            context.lineTo(10, 0);
            context.strokeStyle = buttonColor;
            context.lineWidth = 2;
            context.stroke();
            context.restore();
            context.restore();

            // マスク
            context.globalCompositeOperation = 'destination-out';
            context.beginPath ();
            context.arc(clickX, clickY, alphaR, 0, 2 * Math.PI, true);
            context.fill() ;
        }

        const loop = () => {
            requestAnimationFrame(loop);
            context.clearRect(0, 0, canvas.width, canvas.height);
            update();
            draw();
        }
        loop();
    }
}

export const showAnimation = () => {
    isMenuShow = true;
}

export const hideAnimation = () => {
    isMenuShow = false;
}

export const clickButton = () => {
    clickLink = true;
    clickX = mouseX;
    clickY = mouseY;
}

//メニュー
const speed = 20;
const menu = document.getElementsByClassName('menu-button');
const menuNum = menu.length;

export const show = () => {
    showAnimation();
    document.getElementById('menu').style.display = 'block';
    let count = 0;
    const showMenu = () => {
        for (let i = 0; i < menuNum; i++) {
            menu[i].style.opacity = count / speed;
        }
        
        count++;
        if (count <= speed) {
            requestAnimationFrame(showMenu);
        }
    }
    showMenu();
}

export const hide = () => {
    hideAnimation();
    let count = 0;
    const hideMenu = () => {
        for (let i = 0; i < menuNum; i++){
            menu[i].style.opacity = 1 - count / speed;
        }
        count++;
        if (count <= speed) {
            requestAnimationFrame(hideMenu);
        } else {
            document.getElementById('menu').style.display = 'none';
        }
    }
    hideMenu();
}