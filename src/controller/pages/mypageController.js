// マイページ
export const showMypage = () => {
    // ajaxでHTMLを挿入
    const request = new XMLHttpRequest();
    request.open('GET', '/template/mypage.html', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const restxt=request.responseText;
			document.getElementById('main').innerHTML = restxt;

            showMypage__();
        }
    };
    request.send();
}

let mode;
let uid;
let userData = [];
let preUserData = [];
let list = [];
let preList = [];
let yetList = [];
let doneList = [];

const showMypage__ = async () => {
    mode = 'view';
    
    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    const { routing } = await import('../pageController');

    // ---------- マイページアクセス時 ----------
    // ログイン状態の確認
    onAuthStateChanged(getAuth(), async (user) => {
        if (user && location.pathname === '/mypage'){
            uid = user.uid;

            // プロフィールの取得
            const { getUserData } = await import('../../model/userModel');
            userData = await getUserData(user.uid);
            document.getElementById('my-icon').src = userData.user_icon;
            document.getElementById('my-name').innerHTML = userData.user_name;
            document.getElementById('my-title').value = userData.list_title;
            document.getElementById('my-title').readOnly = true;
            const bio = document.getElementById('my-bio-textarea');
            bio.value = userData.user_bio;

            setMode('view');
            if (bio.offsetHeight < bio.scrollHeight) {
                bio.style.height = bio.scrollHeight + 'px';
            }

            // 登録リストの取得
            const { getLists } = await import('../../model/listModel');
            list = await getLists(user.uid);

            if (list.length == 0) {
                document.getElementById('my-list-unregistered').style.display = 'block';
            } else {
                document.getElementById('my-list-unregistered').style.display = 'none';
            }

            preList = JSON.stringify(list);
            preList = JSON.parse(preList);
            preUserData = JSON.stringify(userData);
            preUserData = JSON.parse(preUserData);
            setLists();
            setEvents();
        } else {
            routing('');
        }
    });
}

// 表示モード切り替え処理
const setMode = async (_mode) => {
    const { setView } = await import('../../view/mypageView');
    mode = _mode;
    setView(_mode);
} 

// listをHTMLに追加
const setLists = async () => {
    document.getElementById('yet-list-container').innerHTML = '';
    document.getElementById('done-list-container').innerHTML = '';

    yetList = list.filter(item => !item.check && !item.remove);
    yetList.sort((a, b) => a.order - b.order);
    yetList.forEach((item, index) => {
        item.order = index;
        addList(item.iid, item.name, item.check);
    });

    doneList = list.filter(item => item.check && !item.remove);
    const { Timestamp } = await import('firebase/firestore');
    // チェック日がnullの時は現在の日時を仮に代入
    doneList = doneList.map(item => {
        if (item.check_date == null) {
            item.check_date = Timestamp.now();
            return item;
        } else {
            return item;
        }
    })
    doneList.sort((a, b) => a.check_date - b.check_date);
    doneList.forEach(item => {
        addList(item.iid, item.name, item.check);
    });
}

const setEvents = async () => {
    // ---------- 共有ボタン押下時 ----------
    document.getElementById('my-share-button-img').onclick = async () => {
        document.getElementById('my-popup').style.display = 'flex';
    };

    // ---------- 編集ボタン押下時 ----------
    document.getElementById('my-edit-button-img').onclick = () => {
        setMode('edit');
    };

    // タイトル編集時
    const title = document.getElementById('my-title');
    document.getElementById('my-title').oninput = (e) => {
        userData.list_title = e.target.value;
    }
    
    // bio編集時
    const text = document.getElementById('my-bio-text');
    document.getElementById('my-bio-textarea').oninput = (e) => {
        if (e.target.offsetHeight < e.target.scrollHeight) {
            e.target.style.height = e.target.scrollHeight + 'px';
        }
        userData.user_bio = e.target.value;
    }

    // ---------- +ボタン押下時 ----------
    document.getElementById('add-list-wrapper').onclick = () => {
        document.getElementById('my-text-edit-area').value = "";
        setMode('add');
    };

    // ---------- 追加ボタン押下時 ----------
    let tmp_id = 0;
    document.getElementById('my-add-submit-button').onclick = async () => {
        let newlist = document.getElementById('my-text-edit-area').value;
        if (newlist) {
            yetList.push({
                iid: tmp_id.toString(),
                name: newlist,
                check: false,
                remove: false,
                order: yetList.length
            })
            addList(tmp_id.toString(), newlist, false);
            tmp_id++;
        }
        setMode('edit');
    };

    // ---------- リネーム完了ボタン押下時 ----------
    document.getElementById('my-rename-submit-button').onclick = async () => {
        let newname = document.getElementById('my-text-edit-area');
        if (newname.value) {
            const find = yetList.find(item => item.iid === newname.name);
            find.name = newname.value;
            document.querySelector('#id-' + newname.name + ' .list-text-box').innerHTML = newname.value;
        }
        setMode('edit');
    };

    // ---------- キャンセルボタン押下時 ----------
    document.getElementById('my-input-cancel').onclick = async () => {
        setMode('edit');
    };

    // ---------- 編集キャンセルボタン押下時 ----------
    document.getElementById('my-edit-cancel-button-img').onclick = async () => {
        list = JSON.stringify(preList);
        list = JSON.parse(list);
        setLists();
        setMode('view');
    };

    // ---------- 完了ボタン押下時 ----------
    document.getElementById('my-save-button-img').onclick = async () => {
        const { saveData } = await import('../../model/listModel');
        await saveData(uid, yetList, doneList);
        list = yetList.concat(doneList);
        const { checkUserData, updateUserData} = await import('../../model/userModel');
        if (checkUserData(preUserData, userData)) {
            updateUserData(userData);
        }
        document.getElementById('my-popup').style.display = 'flex';

        if (list.length == 0) {
            document.getElementById('my-list-unregistered').style.display = 'block';
        } else {
            document.getElementById('my-list-unregistered').style.display = 'none';
        }

        setLists();
        setMode('view');

        // 登録リストの取得
        setTimeout( async () => {
            const { getLists } = await import('../../model/listModel');
            list = await getLists(uid);
            yetList = list.filter(item => !item.check && !item.remove);
        }, 1000);
    };

    document.getElementById('my-popup-twitter').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
        const url = "https://campa-room.web.app/show/" + uid;
        const text = "行きたいとこリストを更新しました!";
        const hashtag = "行きたいとこリスト";
        location.href = 'http://twitter.com/share?url=' + url + '&text=' + text + '&hashtags=' + hashtag;
    };

    document.getElementById('my-popup-copylink').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
        navigator.clipboard.writeText("https://campa-room.web.app/show/" + uid);
    };

    document.getElementById('my-popup-close').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
    };
}

const addList = async (iid, name, check) => {
    const listParent = document.createElement('div');
    listParent.setAttribute('class', 'list-parent');
    listParent.setAttribute('id', 'iid-' + iid);

    const listDelete = document.createElement('div');
    listDelete.setAttribute('class', 'list-delete-button');
    listParent.appendChild(listDelete);

    const deleteText = document.createTextNode('削除');
    listDelete.appendChild(deleteText);

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

        checkBox.onclick = () => {
            if (mode == 'edit') {
                const find = yetList.find(item => item.iid === iid);
                if (find.check) {
                    checkBox.setAttribute('src', '/data/yet.svg');
                    find.check = false;
                } else {
                    checkBox.setAttribute('src', '/data/done.svg');
                    find.check = true;
                }
            }
        };
    }

    listWrapper.appendChild(checkBox);

    const textBox = document.createElement('div');
    if (check) {
        textBox.setAttribute('class', 'list-text-box');
    } else {
        textBox.setAttribute('class', 'list-text-box my-editable');
    }

    const listText = document.createTextNode(name);
    textBox.appendChild(listText);

    // チェック有無で表示切り替え
    if (check) {
        textBox.style.color = '#C3C3C3';
    } else {
        textBox.style.color = '#000';
    }
    listWrapper.appendChild(textBox);

    // 並べ替えボタン
    // if (!check) {
    //     let sortButton = document.createElement('img');
    //     sortButton.setAttribute('src', '/data/sort.svg');
    //     sortButton.setAttribute('class', 'list-sort-button my-edit-mode');
    //     listWrapper.appendChild(sortButton);

    //     sortButton.ontouchstart = (e) => {
    //         let touchX = e.touches[0].clientX;
    //         let touchY = e.touches[0].clientY;
    //         let move = true;
    //         document.body.style.overflow = 'hidden';
    //         sortButton.ontouchmove = (e) => {
    //             if (mode === 'edit') {
    //                 if (50 < Math.abs(e.touches[0].clientX - touchX)) {
    //                     move = false;
    //                 }
    //                 if (move) {
    //                     let moveY = e.touches[0].clientY - touchY;
    //                     listParent.style.top = moveY + 'px';
    //                     listParent.style.zIndex = 1;
    //                 }
    //             }
    //         }
    //         sortButton.ontouchend = () => {
    //             document.body.style.overflow = 'auto';
    //             listParent.style.top = 0;
    //             listParent.style.zIndex = 0;
    //         }
    //     }
    // }

    // 場所の名前変更
    if (!check) {
        textBox.onclick = () => {
            if (mode === 'edit') {
                const find = yetList.find(item => item.iid === iid);
                document.getElementById('my-text-edit-area').value = find.name;
                document.getElementById('my-text-edit-area').name = iid;
                setMode('rename');
            }
        }
    }

    // リストをスライドで削除ボタン表示
    listWrapper.ontouchstart = (e) => {
        listWrapper.style.background = '#EEEEEE';

        const prePosX = listWrapper.offsetLeft;
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        let move = true;
        listWrapper.ontouchmove = (e) => {

            if (mode === 'edit') {
                if (50 < Math.abs(e.touches[0].clientY - touchY)) {
                    move = false;
                }
                if (move) {
                    let moveX = prePosX + e.touches[0].clientX - touchX;
                    if (-100 < moveX && moveX < 0) {
                        listWrapper.style.left = moveX + 'px';
                    }
                }
            }
        };

        listWrapper.ontouchend = () => {
            listWrapper.style.background = '#FFFFFF';
            if (mode === 'edit') {
                if (listWrapper.offsetLeft < 0) {
                    const slideLoop = () => {
                        if (-3 < listWrapper.offsetLeft) {
                            listWrapper.style.left = '0px';
                        } else 
                        if (-50 < listWrapper.offsetLeft) {
                            requestAnimationFrame(slideLoop);
                            listWrapper.style.left = listWrapper.offsetLeft + 5 + 'px';
                        } else 
                        if (-100 < listWrapper.offsetLeft) {
                            requestAnimationFrame(slideLoop);
                            listWrapper.style.left = listWrapper.offsetLeft - 5 + 'px';
                        } else {
                            listWrapper.style.left = -100 + 'px';
                        }
                    }
                    slideLoop();
                }
            }
        };
    };

    // リスト削除ボタン押下時
    listDelete.onclick = () => {
        const find1 = yetList.find(item => item.iid === listDelete.parentElement.id.substr(4));
        if (find1 !== undefined) {
            find1.remove = true;
        } else {
            const find2 = doneList.find(item => item.iid === listDelete.parentElement.id.substr(4));
            find2.remove = true;
        }

        let height = 60;
        const deleteLoop = () => {
            if (0 < height) {
                requestAnimationFrame(deleteLoop);
            } else {
                listDelete.parentElement.style.display = 'none';
            }

            listWrapper.style.left = listWrapper.offsetLeft - 20 + 'px';
            height -= 5;
            listDelete.parentElement.style.height = height + 'px';
        }
        deleteLoop();
    }

    // 別の場所をタップされたら削除ボタンを隠す
    document.addEventListener('touchstart', (e) => {
        if (e.target !== listDelete) {
            const fadeLoop = () => {
                if (-3 < listWrapper.offsetLeft) {
                    listWrapper.style.left = '0px';
                } else {
                    requestAnimationFrame(fadeLoop);
                    listWrapper.style.left = listWrapper.offsetLeft + 10 + 'px';
                }
            }
            fadeLoop();
        } 
    });

    if (check) {
        const listContainer = document.getElementById('done-list-container');
        listContainer.insertBefore(listParent, listContainer.firstChild);
    } else {
        const listContainer = document.getElementById('yet-list-container');
        listContainer.insertBefore(listParent, listContainer.firstChild);
    }
}