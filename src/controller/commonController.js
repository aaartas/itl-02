
//共通ページ
export const common = async () => {
    const { routing } = await import('./pageController');
    const { login, logout } = await import('../model/auth');
    const { show, hide } = await import('../view/common/menuView');
    const { clickButton } = await import('../view/common/canvas');

    //ロゴクリックでtopページに遷移
    document.getElementById("logo-img").addEventListener( 'click', () => {
        routing('');
    }, false );

    //ハンバーガーメニュー表示切り替え
    document.getElementById("menu-button-on-img").addEventListener( 'click', () => {
        show();
    }, false );
    document.getElementById("menu-button-off-img").addEventListener( 'click', () => {
        hide();
    }, false );

    //メニューリンク設定
    document.getElementById("menu-button-home").addEventListener( 'click', () => {
        routing('');
        document.getElementById("menu").style.display = 'none';
        clickButton();
    }, false );
    document.getElementById("menu-button-login").addEventListener( 'click', () => {
        const callback = () => {
            document.getElementById("menu").style.display = 'none';
            clickButton();
            console.log('start-hide')
        }
        login(callback);
        
    }, false );
    document.getElementById("menu-button-logout").addEventListener( 'click', () => {
        logout();
        document.getElementById("menu").style.display = 'none';
        clickButton();
    }, false );
    document.getElementById("menu-button-mypage").addEventListener( 'click', () => {
        routing('mypage');
        document.getElementById("menu").style.display = 'none';
        clickButton();
    }, false );
    document.getElementById("menu-button-how").addEventListener( 'click', () => {
        routing('how');
        document.getElementById("menu").style.display = 'none';
        clickButton();
    }, false );
    document.getElementById("menu-button-show").addEventListener( 'click', () => {
        routing('show');
        document.getElementById("menu").style.display = 'none';
        clickButton();
    }, false );


}