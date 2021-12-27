//閲覧ページ
export const showShowpage = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/template/show.html', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const restxt=request.responseText;
			document.getElementById('main').innerHTML = restxt;
            showShowpage__();
        }
    };
    request.send();
}

const showShowpage__ = async () => {
    // URLからユーザーIDを取得
    const path = location.pathname.toString();
    const uid = path.substring(6);

    // プロフィールの取得
    const { getUserData } = await import('../../model/userModel');
    const userData = await getUserData(uid);

    document.getElementById('show-icon').src = userData.user_icon;
    document.getElementById('show-name').innerHTML = userData.user_name;
    document.getElementById('show-title').innerHTML = userData.user_title;
    document.getElementById('show-bio-text').innerHTML = userData.user_bio;

    // 登録リストの取得
    const { getLists } = await import('../../model/listModel');
    let lists = await getLists(uid);
    
    if (lists.length == 0) {
        document.getElementById('show-list-unregistered').style.display = 'block';
    } else {
        document.getElementById('show-list-unregistered').style.display = 'none';
    }

    setEvents(userData.twitter_disp_id);
    setLists(lists, uid, userData.twitter_sys_id);
}

const setEvents = (id) => {
    // ---------- twitterボタン押下時 ----------
    document.getElementById('show-prof').onclick = () => {
        location.href = 'https://twitter.com/' + id;
    };
}

// listsをHTMLに追加
const setLists = async (lists, uid, twitterID) => {
    document.getElementById('show-yet-list-container').innerHTML = '';
    document.getElementById('show-done-list-container').innerHTML = '';
    
    let yetLists = lists.filter(list => !list.check && !list.removed);
    yetLists.sort((a, b) => a.order - b.order);
    yetLists.forEach(list => {
        addList(list.id, list.name, list.check, uid, twitterID);
    });

    let doneLists = lists.filter(list => list.check && !list.removed);
    doneLists.forEach(list => {
        addList(list.id, list.name, list.check);
    });
}

const addList = async (id, name, check, uid, twitterID) => {
    let listParent = document.createElement('div');
    listParent.setAttribute('class', 'list-parent');
    listParent.setAttribute('id', 'id-' + id);

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

    listWrapper.ontouchstart = (e) => {
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