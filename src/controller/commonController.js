
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
    window.oncontextmenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
   };

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

    // ハンバーガーメニュー取得
    const menu = document.getElementById('menu');
    const topButton = document.getElementById('menu-button-home');
    const loginButton = document.getElementById('menu-button-login');
    const logoutButton = document.getElementById('menu-button-logout');
    const mypageButton = document.getElementById('menu-button-mypage');
    const howButton = document.getElementById('menu-button-how');
    const showButton = document.getElementById('menu-button-show');

    topButton.onclick = () => {
        routing('');
        menu.style.display = 'none';
        clickButton();
    };

    howButton.onclick = () => {
        routing('how');
        menu.style.display = 'none';
        clickButton();
    };

    showButton.onclick = () => {
        routing('show');
        menu.style.display = 'none';
        clickButton();
    }

    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        if (user == null) {
            const { login } = await import('../model/authModel');
            loginButton.style.display = 'block';
            loginButton.onclick = () => {
                login();
            };
            logoutButton.style.display = 'none';
            mypageButton.style.display = 'none';
        } else {
            const { logout } = await import('../model/authModel');
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
            logoutButton.onclick = () => {
                logout();
                menu.style.display = 'none';
                clickButton();
            }
            mypageButton.style.display = 'block';
            mypageButton.onclick = () => {
                routing('mypage');
                menu.style.display = 'none';
                clickButton();
            }
        }
    });
}