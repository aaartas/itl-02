import userEnv from 'userEnv';

// ページ遷移用の関数

// 引数にページ名を入力
//   ''       :  マイページ
//   'show'   :  閲覧ページ
//   'how'    :  使い方ページ
// 引数を渡さない場合、URLパラメータを読んでページを切り替え

export const routing = async (path) => {
    document.getElementById('makelist-button').style.display = 'none';
    if (path == undefined) {
        path = location.pathname;
        if (path === '/') {
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
    // 長押し無効
    window.oncontextmenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
   };

   // ドラッグ無効
   window.ondragstart = (e) => {
        e.preventDefault();
   }

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
    const loginButton = document.getElementById('menu-button-login');
    const logoutButton = document.getElementById('menu-button-logout');
    const mypageButton = document.getElementById('menu-button-mypage');
    const howButton = document.getElementById('menu-button-how');

    mypageButton.onclick = () => {
        routing('');
        menu.style.display = 'none';
        clickButton();
    };

    howButton.onclick = () => {
        routing('how');
        menu.style.display = 'none';
        clickButton();
    };

    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    const { login, logout } = await import('../model/authModel');
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        if (user == null) {
            // 未ログイン時
            loginButton.style.display = 'block';
            loginButton.onclick = () => {
                login();
            };
            logoutButton.style.display = 'none';
        } else 
        if (user.isAnonymous) {
            // 匿名ログイン時
            logoutButton.style.display = 'none';
            loginButton.style.display = 'block';
            loginButton.onclick = () => {
                login();
            };
        } else {
            // twitterログイン時
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
            logoutButton.onclick = () => {
                logout();
                routing('');
                menu.style.display = 'none';
                clickButton();
            }
        }
    });

    // デバッグ用
    if (userEnv.isDevelop) {
        const showButton = document.getElementById('menu-button-show');
        showButton.onclick = () => {
            routing('show');
            menu.style.display = 'none';
            clickButton();
        };
    }
}

export const addNotice = (text, isError) => {
    const noticeList = document.getElementById('notice-container');
    const noticeWrapper = document.createElement('div');
    const message = document.createTextNode(text);
    noticeWrapper.appendChild(message);
    noticeWrapper.setAttribute('class', 'notice');
    if(isError){
        noticeWrapper.style.color = '#FF0000';
    }
    noticeList.insertBefore(noticeWrapper, noticeList.firstChild);
}

export const setNotice = (array) => {
    const noticeList = document.getElementById('notice-container');
    noticeList.innerHTML = '';

    if (array != undefined) {
        const length = array.length;
        for(let i=0; i<length; i++){
            const noticeWrapper = document.createElement('div');
            const message = document.createTextNode(array[i].message);
            noticeWrapper.appendChild(message);
            noticeWrapper.setAttribute('class', 'notice');
            if(array[i].isError){
                noticeWrapper.style.color = '#FF0000';
            }
            noticeList.insertBefore(noticeWrapper, noticeList.firstChild);
        }
    }
}