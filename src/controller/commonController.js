
// ページ遷移用の関数

// 引数にページ名を入力
//   ''       :  トップページ
//   'mypage' :  マイページ
//   'show'   :  閲覧ページ
//   'how'    :  使い方ページ
// 引数を渡さない場合、URLパラメータを読んでページを切り替え

export const routing = async (path) => {
    if (path == undefined) {
        path = location.pathname;
        if (path === '/') {
            const { showToppage } = await import('./pages/toppageController')
            showToppage();
        } else
        if (path === '/mypage') {
            const { showMypage } = await import('./pages/mypageController')
            showMypage();
        } else
        if (/show/.test(path)) {
            const { showShowpage } = await import('./pages/showpageController');
            showShowpage();
        } else
        if (path === '/how') {
            const { showHowpage } = await import('./pages/howpageController');
            showHowpage();
        } else {
            history.back();
        }
    } else {
        if (path === '') {
            history.pushState(null, null, '/')
            const { showToppage } = await import('./pages/toppageController')
            showToppage();
        } else
        if (path === 'mypage') {
            history.pushState(null, null, '/mypage');
            const { showMypage } = await import('./pages/mypageController')
            showMypage();
        } else
        if (path === 'show') {
            history.pushState(null, null, '/show/qluDnqRzxkdLO8U0GqSgUWUltPf1');
            const { showShowpage } = await import('./pages/showpageController');
            showShowpage();
        } else
        if (path === 'how') {
            history.pushState(null, null, '/how');
            const { showHowpage } = await import('./pages/howpageController');
            showHowpage();
        } else {
            history.back();
        }
    }
}


// 全ページ共通機能
export const commonController = async () => {
    const { routing } = await import('./commonController');
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