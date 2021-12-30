new Promise((resolve) => {
    resolve();
    // ハンバーガーメニューのアニメーション読み込み
    (async () => {
        const { drawCanvas } = await import('./view/commonView');
        drawCanvas();
    })();

    // firebase初期化
    (async () => {
        const { initFirebase } = await import('./model/initModel');
        const { checkAuth } = await import('./model/authModel');
        await initFirebase();
        checkAuth();
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
})