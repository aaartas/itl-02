//開発用メニュー

export const dev = async () => {
    const { login, logout } = await import('../model/auth');
    const { routing } = await import('./pageController');
    document.getElementById("dev-button-login").addEventListener( 'click', () => {
        login();
    }, false );

    document.getElementById("dev-button-logout").addEventListener( 'click', () => {
        logout;
    }, false );

    document.getElementById("dev-button-top").addEventListener( 'click', () => {
        routing('');
    }, false );

    document.getElementById("dev-button-my").addEventListener( 'click', () => {
        routing('mypage');
    }, false );

    document.getElementById("dev-button-show").addEventListener( 'click', () => {
        routing('show');
    }, false );

    document.getElementById("dev-button-how").addEventListener( 'click', () => {
        routing('how');
    }, false );

}