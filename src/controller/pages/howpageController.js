//使い方ページ
export const showHowpage = async () => {
    const request = new XMLHttpRequest();
    const { setNotice } = await import('../commonController');
    request.open('GET', '/template/how.html', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const restxt=request.responseText;
			document.getElementById('main').innerHTML = restxt;
            setNotice();
        }
    };
    request.send();
}