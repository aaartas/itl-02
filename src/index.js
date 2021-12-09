
window.addEventListener('load', async () => {
    const { drawCanvas } = await import('./view/common/canvas');
    drawCanvas();
    //firebase初期化
    const { initFirebase } = await import('./model/init');
    initFirebase();
    //ページ読み込み
    const { routing } = await import('./controller/pageController');
    routing();
    //共通ページ
    const { common } = await import('./controller/commonController');
    common();
    //開発用
    // const { dev } = await import('./controller/devController');
    // dev();
}, false);

window.addEventListener('hashchange', async () => {
    const { routing } = await import('./controller/pageController');
    routing();
}, false);

