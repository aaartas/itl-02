//ページルーティング
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

// const showToppage = async () => {
//     console.log('show-toppage');
//     document.getElementById("top-page").style.display = 'block';
//     document.getElementById("my-page").style.display = 'none';
//     document.getElementById("show-page").style.display = 'none';
//     document.getElementById("how-page").style.display = 'none';
//     const { toppageController } = await import('./pages/toppageController');
//     toppageController();
// }

// const showMypage = async () => {
//     const { getAuth, onAuthStateChanged } = await import('firebase/auth');
//     onAuthStateChanged(getAuth(), (user) => {
//         if (user){
//             console.log(user.uid);
//             console.log('show-mypage');
//             document.getElementById("top-page").style.display = 'none';
//             document.getElementById("my-page").style.display = 'block';
//             document.getElementById("show-page").style.display = 'none';
//             document.getElementById("how-page").style.display = 'none';
//         } else {
//             console.log('logouted');
//             routing('');
//         }
//     });
// }

// const showShowpage = () => {
//     console.log('show-showpage');
//     document.getElementById("top-page").style.display = 'none';
//     document.getElementById("my-page").style.display = 'none';
//     document.getElementById("show-page").style.display = 'block';
//     document.getElementById("how-page").style.display = 'none';
// }

// const showHowpage = () => {
//     console.log('show-how');
//     document.getElementById("top-page").style.display = 'none';
//     document.getElementById("my-page").style.display = 'none';
//     document.getElementById("show-page").style.display = 'none';
//     document.getElementById("how-page").style.display = 'block';
// }