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
    Promise.all([getUser, getLists, getHTML]).then((result) => {
        setUserData(result[0]);
        setLists(result[1], uid, result[0].twitter_sys_id)
    })
}

// ユーザーデータをHTMLに反映
const setUserData = async (userData) => {
    document.getElementById('show-icon').src = userData.user_icon;
    document.getElementById('show-name').innerHTML = userData.user_name;
    document.getElementById('show-title').innerHTML = userData.list_title;
    document.getElementById('show-bio-text').innerHTML = userData.user_bio;

    // 登録リストの取得
    const { getLists } = await import('../../model/listModel');
    let list = await getLists(userData.uid);
    
    if (list.length == 0) {
        document.getElementById('show-list-unregistered').style.display = 'block';
    } else {
        document.getElementById('show-list-unregistered').style.display = 'none';
    }

    document.getElementById('show-prof').onclick = () => {
        location.href = 'https://twitter.com/' + userData.twitter_disp_id;
    };
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
    let listParent = document.createElement('div');
    listParent.setAttribute('class', 'list-parent');
    listParent.setAttribute('id', 'id-' + iid);

    let listDelete = document.createElement('div');
    listDelete.setAttribute('class', 'list-delete-button');
    listParent.appendChild(listDelete);

    let listWrapper = document.createElement('div');
    listWrapper.setAttribute('class', 'list-wrapper');
    listParent.appendChild(listWrapper);

    let checkBox = document.createElement('img');
    if (check) {
        checkBox.setAttribute('src', '/data/done.svg');
        checkBox.setAttribute('class', 'list-check-box-done');
    } else {
        checkBox.setAttribute('src', '/data/yet.svg');
        checkBox.setAttribute('class', 'list-check-box-yet');
    }
    
    listWrapper.appendChild(checkBox);

    let textBox = document.createElement('div');
    textBox.setAttribute('class', 'list-text-box');
    
    let listText = document.createTextNode(name);
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
        let inviteLink = document.createElement('a');
        let shareLink = 'https://twitter.com/messages/compose?';
        shareLink += 'recipient_id=' + twitterID;
        shareLink += '&text=' + 'https://campa-room.web.app/show/' + uid + "%0A";
        shareLink += '行きたいとこリストからの送信%0A' + name + 'に一緒に行きませんか?'
        inviteLink.setAttribute('href', shareLink);

        let inviteButton = document.createElement('img');
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

    let listContainer;
    if (check) {
        listContainer = document.getElementById('show-done-list-container');
    } else {
        listContainer = document.getElementById('show-yet-list-container');
    }
    
    listContainer.prepend(listParent);
}