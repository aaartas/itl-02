// ajaxでHTML挿入
(async () => {
    const { loadView } = await import('./view/commonView');
    loadView();
})();

(async () => {
    const { initFirebase } = await import('./model/initModel');

    // firebase初期化
    await initFirebase();

    const { checkLoginRedirect } = await import('./model/authModel');
    const { routing, commonController } = await import('./controller/commonController');

    // ログインチェック
    checkLoginRedirect();

    // URLからページ表示を切り替え
    routing();

    // ページ共通の処理読み込み
    commonController();
})();

// ハンバーガーメニューのアニメーション読み込み
(async () => {
    const { drawCanvas } = await import('./view/commonView');
    drawCanvas();
})();

// ブラウザバック時の処理
window.onpopstate = async () => {
    const { loadView } = await import('./view/commonView');
    loadView();
    const { routing } = await import('./controller/commonController');
    // URLからページ表示を切り替え
    routing();
}