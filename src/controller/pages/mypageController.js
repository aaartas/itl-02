import userEnv from 'userEnv';

// マイページ
export const showMypage = () => {
    // ajaxでHTMLを挿入
    const request = new XMLHttpRequest();
    request.open('GET', '/template/mypage.html', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const restxt=request.responseText;
			document.getElementById('main').innerHTML = restxt;

            loadMypage();
        }
    };
    request.send();
}

export let mode;
let userData = [];
let preUserData = [];
let list = [];
let preList = [];
let yetList = [];
let doneList = [];

const loadMypage = async () => {
    setMode('view');

    const { getAuth, onAuthStateChanged, signInAnonymously } = await import('firebase/auth');
    const { setNotice } = await import('../commonController');
    const auth = getAuth();
    // ---------- マイページアクセス時 ----------
    // ログイン状態の確認
    onAuthStateChanged(auth, (user) => {
        const makelistButton = document.getElementById('makelist-button');
        makelistButton.style.display = 'none';
        if (user){
            if (user.isAnonymous) {
                // フッターメッセージ挿入
                const array = [
                    {
                        message: 'Twitterで行きたいとこリストを共有しよう',
                        isError: false
                    }
                ];
                setNotice(array);

                // プロフィールの取得
                (async () => {
                    const { setUserData } = await import('../../view/pages/mypageView');
                    setUserData();
                })();

                // 登録リストの取得
                (async () => {
                    const { getLists } = await import('../../model/listModel');
                    list = await getLists(user.uid);
                    setLists();

                    if (list.length == 0) {
                        document.getElementById('my-list-unregistered').style.display = 'block';
                    } else {
                        document.getElementById('my-list-unregistered').style.display = 'none';
                    }

                    preList = JSON.stringify(list);
                    preList = JSON.parse(preList);
                })();

                setEvents(user.uid, user.isAnonymous);
            } else {
                
                setNotice();
                // プロフィールの取得
                (async () => {
                    const { getUserData } = await import('../../model/userModel');
                    userData = await getUserData(user.uid);
                    preUserData = JSON.stringify(userData);
                    preUserData = JSON.parse(preUserData);

                    const providerData = user.reloadUserInfo.providerUserInfo[0];
                    userData.user_name = providerData.displayName;
                    userData.user_icon = providerData.photoUrl;
                    userData.twitter_disp_id = providerData.screenName;

                    const { setUserData } = await import('../../view/pages/mypageView');
                    setUserData(userData);
                })();

                // 登録リストの取得
                (async () => {
                    const { getLists } = await import('../../model/listModel');
                    list = await getLists(user.uid);
                    setLists();

                    if (list == undefined) {
                        document.getElementById('my-list-unregistered').style.display = 'block';
                    } else {
                        if (list.length == 0) {
                            document.getElementById('my-list-unregistered').style.display = 'block';
                        } else {
                            document.getElementById('my-list-unregistered').style.display = 'none';
                        }
                    }

                    preList = JSON.stringify(list);
                    preList = JSON.parse(preList);
                })();

                setEvents(user.uid, user.isAnonymous);
            }
        } else {
            signInAnonymously(auth);
        }
    });
}

// 表示モード切り替え処理
const setMode = async (_mode) => {
    const { setView } = await import('../../view/pages/mypageView');
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

// イベント処理設定
const setEvents = async (uid, isAnonymous) => {
    // ---------- 共有ボタン押下時 ----------
    document.getElementById('my-share-button-img').onclick = async () => {
        if (isAnonymous) {
            document.getElementById('my-popup-login').style.display = 'flex';
        } else {
            document.getElementById('my-popup').style.display = 'flex';
        }
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
            document.querySelector('#iid-' + newname.name + ' .list-text-box').innerHTML = newname.value;
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
        // order書き換え
        const yetListNodes = document.getElementById('yet-list-container').children;
        const nodesNum = yetListNodes.length;
        for (let i = 0; i < nodesNum; i++) {
            const find = yetList.find(({iid}) => iid === yetListNodes[i].id.substr(4));
            find.order = nodesNum - i - 1;
        }
        
        // リストデータ保存
        const { saveData } = await import('../../model/listModel');
        await saveData(uid, yetList, doneList, preList);
        list = yetList.concat(doneList);
        preList = list;

        if (isAnonymous) {
            document.getElementById('my-popup-login').style.display = 'flex';
        } else {
            // ユーザーデータ保存
            const { checkUserData, updateUserData} = await import('../../model/userModel');
            if (checkUserData(preUserData, userData)) {
                updateUserData(userData);
            }
            document.getElementById('my-popup').style.display = 'flex';
        }
        
        if (list.length == 0) {
            document.getElementById('my-list-unregistered').style.display = 'block';
        } else {
            document.getElementById('my-list-unregistered').style.display = 'none';
        }

        setLists();
        setMode('view');
    };

    // ---------- twitterシェアボタン押下時 ----------
    document.getElementById('my-popup-twitter').onclick = async () => {
        document.getElementById('my-popup').style.display = 'none';
        const url = 'https://' + userEnv.domain + '/show/' + uid;
        const hashtag = '行きたいとこリスト';
        const text = '行きたいとこリストを更新しました!%0A%20%23' + hashtag + '%20';
        location.href = 'http://twitter.com/share?url=' + url + '&text=' + text;
    };

    // ---------- リンクコピーボタン押下時 ----------
    document.getElementById('my-popup-copylink').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
        navigator.clipboard.writeText("https://" + userEnv.domain + "/show/" + uid);
    };

    // ---------- ポップアップ閉じるボタン押下時 ----------
    document.getElementById('my-popup-close').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
    };

    // ---------- 新規ログインボタン押下時 ----------
    document.getElementById('my-popup-new-login').onclick = async () => {
        const { linkAccount } = await import('../../model/authModel');
        linkAccount();
    };

    // ---------- 既存ログインボタン押下時 ----------
    document.getElementById('my-popup-old-login').onclick = async () => {
        const { login } = await import('../../model/authModel');
        login();
    };

    // ---------- ポップアップ閉じるボタン押下時 ----------
    document.getElementById('my-popup-login-close').onclick = () => {
        document.getElementById('my-popup-login').style.display = 'none';
    };
}

const addList = async (iid, name, check) => {
    const yetListContainer = document.getElementById('yet-list-container');
    const doneListContainer = document.getElementById('done-list-container');

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

    // ---------- チェックボックス ----------
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

    let sortPermit;

    // ---------- 並べ替えボタン ----------
    const sortButton = document.createElement('img');
    if (!check) {
        sortButton.setAttribute('src', '/data/sort.svg');
        sortButton.setAttribute('class', 'list-sort-button my-edit-mode');
        listWrapper.appendChild(sortButton);

        let touchY, moveY, sortY, timer;
        sortButton.ontouchstart = (e) => {
            touchY = e.touches[0].pageY;
            moveY = 0;
            sortY = 0;
            sortPermit = false;
            timer = setTimeout(() => {
                sortPermit = true;
                listParent.style.boxShadow = '0 3px 30px #aaa';
                listParent.style.zIndex = 1;
                if(window.navigator.vibrate){
                    window.navigator.vibrate([60]);
                }else if (window.navigator.mozVibrate){
                    window.navigator.mozVibrate([60]);
                }else if (window.navigator.webkitVibrate){
                    window.navigator.webkitVibrate([60]);
                }
            }, 300);
        }

        sortButton.ontouchmove = (e) => {
            clearTimeout(timer);
            if (sortPermit) {
                moveY = e.touches[0].pageY - touchY + sortY;
                if (listParent == yetListContainer.firstChild && moveY < 0) {
                    moveY = 0;
                } else
                if (listParent == yetListContainer.lastChild && 0 < moveY) {
                    moveY = 0;
                } else
                if (moveY < -60) {
                    sortY += 60;
                    const prevList = listParent.previousElementSibling;
                    let topDist = -60;
                    prevList.style.top = topDist + 'px';
                    const sortAnim = () => {
                        if (-10 < topDist) {
                            topDist = 0;
                        } else {
                            requestAnimationFrame(sortAnim);
                            topDist += 10;
                        }
                        prevList.style.top = topDist + 'px';
                    }
                    sortAnim();
                    yetListContainer.insertBefore(listParent, prevList);
                    if(window.navigator.vibrate){
                        window.navigator.vibrate([30]);
                    }else if (window.navigator.mozVibrate){
                        window.navigator.mozVibrate([30]);
                    }else if (window.navigator.webkitVibrate){
                        window.navigator.webkitVibrate([30]);
                    }
                } else
                if (60 < moveY) {
                    sortY -= 60;
                    const nextList = listParent.nextElementSibling;
                    let topDist = 60;
                    nextList.style.top = topDist + 'px';
                    const sortAnim = () => {
                        if (topDist < 10) {
                            topDist = 0;
                        } else {
                            requestAnimationFrame(sortAnim);
                            topDist -= 10;
                        }
                        nextList.style.top = topDist + 'px';
                    }
                    sortAnim();
                    yetListContainer.insertBefore(listParent, nextList.nextSibling);
                    if(window.navigator.vibrate){
                        window.navigator.vibrate([30]);
                    }else if (window.navigator.mozVibrate){
                        window.navigator.mozVibrate([30]);
                    }else if (window.navigator.webkitVibrate){
                        window.navigator.webkitVibrate([30]);
                    }
                }
                moveY = e.touches[0].pageY - touchY + sortY;
                if (listParent == yetListContainer.firstChild && moveY < 0) {
                    moveY = 0;
                } else
                if (listParent == yetListContainer.lastChild && 0 < moveY) {
                    moveY = 0;
                }
                listParent.style.top = moveY + 'px';
            }
            
        }

        sortButton.ontouchend = () => {
            clearTimeout(timer);
            if (sortPermit) {
                listParent.style.top = 0;
                listParent.style.zIndex = 0;
                listParent.style.boxShadow = 'none';
                sortPermit = false;
            }
            
        }
    }


    
    let detailShow = false;
    textBox.onclick = () => {
        if (mode === 'view') {
            // ---------- テキスト省略切り替え ----------
            if (textBox.offsetWidth < textBox.scrollWidth) {
                detailShow = true;
            } else {
                detailShow = false;
            }
            if (detailShow) {
                textBox.style.whiteSpace = 'normal';
                listWrapper.style.height = 'auto';
            } else {
                textBox.style.whiteSpace = 'nowrap';
                listWrapper.style.height = '60px';
            }
        } else
        if (!check && mode === 'edit') {
            // ---------- 場所の名前変更 ----------
            const find = yetList.find(item => item.iid === iid);
            document.getElementById('my-text-edit-area').value = find.name;
            document.getElementById('my-text-edit-area').name = iid;
            setMode('rename');
        }
    }
    

    // ---------- 削除ボタン表示 ----------
    let prePosX, touchX;
    listWrapper.ontouchstart = (e) => {
        listWrapper.style.background = '#EEE';
        if (mode === 'edit') {
            prePosX = listWrapper.offsetLeft;
            touchX = e.touches[0].clientX;
        }
    };

    listWrapper.ontouchmove = (e) => {
        if (mode === 'edit') {
            if (sortPermit) {
                listWrapper.style.left = '0px';
            } else {
                let moveX = prePosX + e.touches[0].clientX - touchX;
                if (e.cancelable && moveX < 0) {
                    e.preventDefault();
                    if ( -100 < moveX) {
                        listWrapper.style.left = moveX + 'px';
                    }
                }
            }
        }
    };

    
    listWrapper.ontouchend = () => {
        listWrapper.style.background = '#FFF';
        if (mode === 'edit') {
            if (listWrapper.offsetLeft < 0) {
                const slideAnim = () => {
                    if (-3 < listWrapper.offsetLeft) {
                        listWrapper.style.left = '0px';
                    } else 
                    if (-50 < listWrapper.offsetLeft) {
                        requestAnimationFrame(slideAnim);
                        listWrapper.style.left = listWrapper.offsetLeft + 5 + 'px';
                    } else 
                    if (-100 < listWrapper.offsetLeft) {
                        requestAnimationFrame(slideAnim);
                        listWrapper.style.left = listWrapper.offsetLeft - 5 + 'px';
                    } else {
                        listWrapper.style.left = -100 + 'px';
                    }
                }
                slideAnim();
            }
        }
    };


    // ---------- 削除ボタン押下 ----------
    listDelete.onclick = () => {
        const find1 = yetList.find(item => item.iid === listParent.id.substr(4));
        if (find1 !== undefined) {
            find1.remove = true;
        } else {
            const find2 = doneList.find(item => item.iid === listParent.id.substr(4));
            find2.remove = true;
        }

        let height = 60;
        let left = listWrapper.offsetLeft;
        const deleteAnim = () => {
            if (0 < height) {
                requestAnimationFrame(deleteAnim);
            } else {
                listParent.style.display = 'none';
            }

            left -= 20;
            listWrapper.style.left = left + 'px';
            height -= 5;
            listParent.style.height = height + 'px';
        }
        deleteAnim();
    }


    // ---------- 削除ボタンを隠す ----------
    document.addEventListener('touchstart', (e) => {
        if (mode === 'edit' && e.target !== listDelete && e.target !== listWrapper && e.target !== textBox && e.target !== sortButton && listWrapper.offsetLeft < 0) {
            const fadeAnim = () => {
                if (-3 < listWrapper.offsetLeft) {
                    listWrapper.style.left = '0px';
                } else {
                    requestAnimationFrame(fadeAnim);
                    listWrapper.style.left = listWrapper.offsetLeft + 10 + 'px';
                }
            }
            fadeAnim();
        }
    });

    // リストテキスト詳細表示を戻す
    document.addEventListener('click', (e) => {
        if (mode === 'view' && e.target !== listParent && e.target !== listDelete && e.target !== listWrapper && e.target !== textBox) {
            detailShow = false;
            textBox.style.whiteSpace = 'nowrap';
            listWrapper.style.height = '60px';
        }
    });

    if (check) {
        doneListContainer.insertBefore(listParent, doneListContainer.firstChild);
    } else {
        yetListContainer.insertBefore(listParent, yetListContainer.firstChild);
    }
}