// topページ
export const showToppage = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/template/top.html', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
			document.getElementById('main').innerHTML = request.responseText;
            setEvent();
        }
    };
    request.send();
}

const setEvent = async () => {
    const { login } = await import('../../model/authModel');
    document.getElementById('top-login-button').onclick = () => {
        login();
    };
}