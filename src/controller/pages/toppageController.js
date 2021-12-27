
export const showToppage = async () => {
    // const request = new XMLHttpRequest();
    // request.open('GET', './template/top.html', true);

    // request.onload = () => {
    //     if (request.status >= 200 && request.status < 400) {
    //         // Success!
    //         console.log("成功")
            
    //         const restxt=request.responseText;//String型で取得
    //         console.log(restxt)
	// 		document.getElementById('main').innerHTML = restxt;
    //     } else {
    //         console.log("失敗")
    //     }
    // };

    // request.onerror = function() {
    //     console.log("失敗")
    // };

    // request.send();

    document.getElementById('top-page').style.display = 'block';
    document.getElementById('my-page').style.display = 'none';
    document.getElementById('show-page').style.display = 'none';
    document.getElementById('how-page').style.display = 'none';
    const { login } = await import('../../model/authModel');
    document.getElementById('top-login-button').onclick = () => {
        login();
        console.log("成功")
    };
}

