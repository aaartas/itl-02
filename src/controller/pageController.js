
// ページ遷移用の関数

// 引数にページ名を入力
//   ''       :  トップページ
//   'mypage' :  マイページ
//   'show'   :  閲覧ページ
//   'how'    :  使い方ページ
// 引数を渡さない場合、URLパラメータを読んでページを切り替え

export const routing = async (path) => {
    scrollTo(0, 0);
    if (path == undefined) {
        path = location.pathname;
        console.log('load-route : ' + path);
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
        console.log('change-route : ' + path);
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