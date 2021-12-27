//使い方ページ
export const showHowpage = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/template/how.html', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const restxt=request.responseText;
			document.getElementById('main').innerHTML = restxt;
        }
    };
    request.send();
}