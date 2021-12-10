
window.addEventListener('load', async () => {
    const { drawCanvas } = await import('./view/commonView');
    drawCanvas();
    //firebase初期化
    const { initFirebase } = await import('./model/init');
    initFirebase();
    //ページ読み込み
    const { routing } = await import('./controller/pageController');
    routing();
    //共通ページ
    const { commonController } = await import('./controller/commonController');
    commonController();
}, false);

window.addEventListener('hashchange', async () => {
    const { routing } = await import('./controller/pageController');
    routing();
}, false);

