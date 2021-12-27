
// 全ページ共通機能
export const commonController = async () => {
    const { routing } = await import('./pageController');
    const { login, logout } = await import('../model/authModel');
    
    // ロゴクリック時、topページに遷移
    document.getElementById('logo-img').onclick = () => {
        document.body.style.backgroundColor = '#EEB706';
        routing('');
    };

    // ハンバーガーメニュー表示切り替え
    const { show, hide, clickButton } = await import('../view/commonView');
    let showMenu = false;
    document.getElementById('menu-button-on-img').onclick = () => {
        if ( showMenu ) {
            showMenu = false;
            hide();
        } else {
            showMenu = true;
            show();
        }
    };

    // ハンバーガーメニューリンク設定
    document.getElementById('menu-button-home').onclick = () => {
        routing('');
        document.getElementById('menu').style.display = 'none';
        clickButton();
    };
    document.getElementById('menu-button-login').onclick = () => {
        const callback = () => {
            document.getElementById('menu').style.display = 'none';
            clickButton();
        }
        login(callback);
        
    };
    document.getElementById('menu-button-logout').onclick = () => {
        logout();
        document.getElementById('menu').style.display = 'none';
        clickButton();
    };
    document.getElementById('menu-button-mypage').onclick = () => {
        routing('mypage');
        document.getElementById('menu').style.display = 'none';
        clickButton();
    };
    document.getElementById('menu-button-how').onclick = () => {
        routing('how');
        document.getElementById('menu').style.display = 'none';
        clickButton();
    };
    document.getElementById('menu-button-show').onclick = () => {
        routing('show');
        document.getElementById('menu').style.display = 'none';
        clickButton();
    };
}