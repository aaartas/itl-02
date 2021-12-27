window.onload = () => {
    // ハンバーガーメニューのアニメーション読み込み
    (async () => {
        const { drawCanvas } = await import('./view/commonView');
        drawCanvas();
    })();
    
    // firebase初期化
    (async () => {
        const { initFirebase } = await import('./model/initModel');
        initFirebase();
    })();
    
    // ページ遷移処理読み込み
    (async () => {
        const { routing } = await import('./controller/pageController');
        routing();
    })();
    
    // ページ共通の処理読み込み
    (async () => {
        const { commonController } = await import('./controller/commonController');
        commonController();
    })();
};