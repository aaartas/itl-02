
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
        
        document.body.addEventListener("mousemove", function(e){

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

        

        const update = () => {
            if (isMenuShow && fillR * fillR < width*width + height*height) {
                fillR += 30;
            } 
            if (!isMenuShow && fillR > 0) {
                fillR -= 30;
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
            context.globalCompositeOperation = "source-over";
            context.beginPath () ;
            context.arc(fillX, fillY, fillR, 0, 2 * Math.PI, true) ;
            context.fillStyle = "#F37504" ;
            context.fill() ;

            context.globalCompositeOperation = "destination-out";
            context.beginPath () ;
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