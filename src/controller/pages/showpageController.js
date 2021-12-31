//閲覧ページ
export const showShowpage = () => {
    const path = location.pathname.toString();
    const uid = path.substring(6);

    // ユーザーデータ取得
    const getUser = new Promise(async (resolve) => {
        const { getUserData } = await import('../../model/userModel');
        resolve(getUserData(uid));
    });

    // リストデータ取得
    const getLists = new Promise(async (resolve) => {
        const { getLists } = await import('../../model/listModel');
        resolve(getLists(uid));
    });

    // ajaxでHTML挿入
    const getHTML = new Promise((resolve) => {
        const request = new XMLHttpRequest();
        request.open('GET', '/template/show.html', true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                const restxt=request.responseText;
                document.getElementById('main').innerHTML = restxt;
                resolve();
            }
        };
        request.send();
    });

    // ユーザーデータ取得、リストデータ取得、HTML取得を非同期実行。全て完了後thenを実行。
    Promise.all([getUser, getLists, getHTML]).then( async (result) => {
        const { setUserData } = await import('../../view/pages/showpageView');
        setUserData(result[0]);
        setLists(result[1], uid, result[0].twitter_sys_id)
    })
}

// リストデータをHTMLに反映
const setLists = async (list, uid, twitterID) => {
    document.getElementById('show-yet-list-container').innerHTML = '';
    document.getElementById('show-done-list-container').innerHTML = '';
    
    let yetList = list.filter(item => !item.check);
    yetList.sort((a, b) => a.order - b.order);
    yetList.forEach(item => {
        addList(item.iid, item.name, item.check, uid, twitterID);
    });

    let doneList = list.filter(item => item.check);
    doneList.sort((a, b) => a.check_date - b.check_date);
    doneList.forEach(item => {
        addList(item.iid, item.name, item.check);
    });
}

const addList = async (iid, name, check, uid, twitterID) => {
    const listParent = document.createElement('div');
    listParent.setAttribute('class', 'list-parent');
    listParent.setAttribute('id', 'id-' + iid);

    const listDelete = document.createElement('div');
    listDelete.setAttribute('class', 'list-delete-button');
    listParent.appendChild(listDelete);

    const listWrapper = document.createElement('div');
    listWrapper.setAttribute('class', 'list-wrapper');
    listParent.appendChild(listWrapper);

    const checkBox = document.createElement('img');
    if (check) {
        checkBox.setAttribute('src', '/data/done.svg');
        checkBox.setAttribute('class', 'list-check-box-done');
    } else {
        checkBox.setAttribute('src', '/data/yet.svg');
        checkBox.setAttribute('class', 'list-check-box-yet');
    }
    
    listWrapper.appendChild(checkBox);

    const textBox = document.createElement('div');
    textBox.setAttribute('class', 'list-text-box');
    
    const listText = document.createTextNode(name);
    textBox.appendChild(listText);

    // チェック有無で表示切り替え
    if (check) {
        textBox.style.color = '#C3C3C3';
    } else {
        textBox.style.color = '#000';
    }
    listWrapper.appendChild(textBox);

    // 行きたいボタン
    if (!check) {
        const inviteLink = document.createElement('a');
        let shareLink = 'https://twitter.com/messages/compose?';
        shareLink += 'recipient_id=' + twitterID;
        shareLink += '&text=' + 'https://campa-room.web.app/show/' + uid + "%0A";
        shareLink += '行きたいとこリストからの送信%0A' + name + 'に一緒に行きませんか?'
        inviteLink.setAttribute('href', shareLink);

        const inviteButton = document.createElement('img');
        inviteButton.setAttribute('src', '/data/invite.svg');
        inviteButton.setAttribute('class', 'show-invite-button-img');
        inviteLink.appendChild(inviteButton);
        listWrapper.appendChild(inviteLink);
    }

    listWrapper.ontouchstart = () => {
        listWrapper.style.background = '#EEEEEE';
    };
    listWrapper.ontouchend = () => {
        listWrapper.style.background = '#FFFFFF';
    };

    if (check) {
        const listContainer = document.getElementById('show-done-list-container');
        listContainer.insertBefore(listParent, listContainer.firstChild);
    } else {
        const listContainer = document.getElementById('show-yet-list-container');
        listContainer.insertBefore(listParent, listContainer.firstChild);
    }
}