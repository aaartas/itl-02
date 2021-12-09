//メニュー

import { showAnimation, hideAnimation } from "./canvas";
const speed = 20;
const menu = document.getElementsByClassName("menu-button");
const menuNum = menu.length;

export const show = () => {
    showAnimation();
    document.getElementById("menu").style.display = 'block';
    let count = 0;
    const show = () => {
        menu.foreach(m => {
            m.style.opacity = count / speed;
        })
        
        count++;
        if (count <= speed) {
            requestAnimationFrame(show);
        }
    }
    show();
}

export const hide = () => {
    hideAnimation();
    let count = 0;
    const hide = () => {
        for (let i = 0; i < menuNum; i++){
            menu[i].style.opacity = 1 - count / speed;
        }
        count++;
        if (count <= speed) {
            requestAnimationFrame(hide);
        } else {
            document.getElementById("menu").style.display = 'none';
        }
    }
    hide();
}