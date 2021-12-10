
// 全ページ共通機能
export const commonController = async () => {
    const { routing } = await import('./pageController');
    const { login, logout } = await import('../model/auth');
    

    // ロゴクリック時、topページに遷移
    document.getElementById("logo-img").addEventListener( 'click', () => {
        routing('');
    }, false );

    // ハンバーガーメニュー表示切り替え
    const { show, hide, clickButton } = await import('../view/commonView');
    document.getElementById("menu-button-on-img").addEventListener( 'click', () => {
        show();
    }, false );
    document.getElementById("menu-button-off-img").addEventListener( 'click', () => {
        hide();
    }, false );

    // ハンバーガーメニューリンク設定
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