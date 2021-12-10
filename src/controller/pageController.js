
// ページ遷移用の関数

// 引数にページ名を入力
//   ''       :  トップページ
//   'mypage' :  マイページ
//   'show'   :  閲覧ページ
//   'how'    :  使い方ページ
// 引数を渡さない場合、URLパラメータを読んでページを切り替え

export const routing = async (hash) => {

    if (hash == undefined) {
        hash = location.hash.substr(1);
        console.log('load-route : ' + hash);
        if (hash === '') {
            const { showToppage } = await import('./pages/toppageController')
            showToppage();
        } else
        if (hash === 'mypage') {
            const { showMypage } = await import('./pages/mypageController');
            showMypage();
        } else
        if (hash === 'show') {
            const { showShowpage } = await import('./pages/showpageController');
            showShowpage();
        } else
        if (hash === 'how') {
            const { showHowpage } = await import('./pages/howpageController');
            showHowpage();
        } else {
            history.back();
        }
    } else {
        console.log('change-route : ' + hash);
        if (hash === '') {
            const { showToppage } = await import('./pages/toppageController')
            showToppage();
            history.pushState(null, null, '/')
        } else
        if (hash === 'mypage') {
            const { showMypage } = await import('./pages/mypageController')
            showMypage();
            history.pushState(null, null, '#mypage');
        } else
        if (hash === 'show') {
            const { showShowpage } = await import('./pages/showpageController');
            showShowpage();
            history.pushState(null, null, '#show');
        } else
        if (hash === 'how') {
            const { showHowpage } = await import('./pages/howpageController');
            showHowpage();
            history.pushState(null, null, '#how');
        } else {
            history.back();
        }
    }
}