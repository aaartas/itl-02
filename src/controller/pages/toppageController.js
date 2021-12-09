
export const showToppage = async () => {
    document.getElementById("top-page").style.display = 'block';
    document.getElementById("my-page").style.display = 'none';
    document.getElementById("show-page").style.display = 'none';
    document.getElementById("how-page").style.display = 'none';
    const { login } = await import('../../model/auth');
    document.getElementById("top-login-button").addEventListener( 'click', () => {
        login();
    }, false );
}

