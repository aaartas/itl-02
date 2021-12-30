
// 全ページ共通機能
export const commonController = async () => {
    const { routing } = await import('./pageController');
    const { login, logout } = await import('../model/authModel');

    // ハンバーガーメニュー表示切り替え
    const { show, hide, clickButton } = await import('../view/commonView');
    let showMenu = false;
    document.getElementById('menu-button').onclick = () => {
        if ( showMenu ) {
            showMenu = false;
            hide();
        } else {
            showMenu = true;
            show();
        }
    };

    // ハンバーガーメニューリンク設定
    const menu = document.getElementById('menu');

    // トップ
    document.getElementById('menu-button-home').onclick = () => {
        routing('');
        menu.style.display = 'none';
        clickButton();
    };

    // ログイン
    document.getElementById('menu-button-login').onclick = () => {
        login();
    };
    
    // ログアウト
    document.getElementById('menu-button-logout').onclick = () => {
        logout();
        menu.style.display = 'none';
        clickButton();
    };

    // マイページ
    document.getElementById('menu-button-mypage').onclick = () => {
        routing('mypage');
        menu.style.display = 'none';
        clickButton();
    };

    // 使い方ページ
    document.getElementById('menu-button-how').onclick = () => {
        routing('how');
        menu.style.display = 'none';
        clickButton();
    };

    // 閲覧ページ
    document.getElementById('menu-button-show').onclick = () => {
        routing('show');
        menu.style.display = 'none';
        clickButton();
    };
}