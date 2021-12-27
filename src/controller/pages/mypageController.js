// マイページ
let mode;
let uid;
let userData = [];
let preUserData = [];
let lists = [];
let preLists = [];
let yetLists = [];
let doneLists = [];

export const showMypage = async () => {
    mode = 'view';
    
    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    const { routing } = await import('../pageController');

    // ---------- マイページアクセス時 ----------
    // ログイン状態の確認
    onAuthStateChanged(getAuth(), async (user) => {
        if (user){
            uid = user.uid;

            // プロフィールの取得
            const { getUserData } = await import('../../model/userModel');
            userData = await getUserData(user.uid);
            
            document.getElementById('my-icon').src = userData.user_icon;
            document.getElementById('my-name').innerHTML = userData.user_name;
            document.getElementById('my-title').value = userData.user_title;
            document.getElementById('my-title').readOnly = true;
            const bio = document.getElementById('my-bio-textarea');
            bio.value = userData.user_bio;
            document.getElementById('my-popup').style.display = 'none';
            document.getElementById('how-page').style.display = 'none';
            document.getElementById('top-page').style.display = 'none';
            document.getElementById('my-page').style.display = 'block';
            document.getElementById('show-page').style.display = 'none';
            document.getElementById('how-page').style.display = 'none';
            setMode('view');
            if (bio.offsetHeight < bio.scrollHeight) {
                bio.style.height = bio.scrollHeight + 'px';
            }

            // 登録リストの取得
            const { getLists } = await import('../../model/listModel');
            lists = await getLists(user.uid);

            if (lists.length == 0) {
                document.getElementById('my-list-unregistered').style.display = 'block';
            } else {
                document.getElementById('my-list-unregistered').style.display = 'none';
            }

            preLists = JSON.stringify(lists);
            preLists = JSON.parse(preLists);
            preUserData = JSON.stringify(userData);
            preUserData = JSON.parse(preUserData);
            setLists();
            setEvents();
        } else {
            console.log('logouted');
            routing('');
        }
    });
}

// 表示モード切り替え処理
const setMode = async (_mode) => {
    const { setView } = await import('../../view/mypageView');
    mode = _mode;
    console.log('mode : ' + _mode);
    setView(_mode);
} 

// listsをHTMLに追加
const setLists = async () => {
    document.getElementById('yet-list-container').innerHTML = '';
    document.getElementById('done-list-container').innerHTML = '';

    yetLists = lists.filter(list => !list.check && !list.removed);
    yetLists.sort((a, b) => a.order - b.order);
    yetLists.forEach(list => {
        addList(list.id, list.name, list.check);
    });

    doneLists = lists.filter(list => list.check && !list.removed);
    doneLists.sort((a, b) => a.timestamp - b.timestamp);
    doneLists.forEach(list => {
        addList(list.id, list.name, list.check);
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
        userData.user_title = e.target.value;
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
    document.getElementById('my-add-submit-button').onclick = async () => {
        let newlist = document.getElementById('my-text-edit-area').value;
        if (newlist) {
            yetLists.push({
                id: 'aaa',
                name: newlist,
                check: false,
                removed: false,
                order: yetLists.length
            })
            addList('aaa', newlist, false);
        }
        setMode('edit');
    };

    // ---------- リネーム完了ボタン押下時 ----------
    document.getElementById('my-rename-submit-button').onclick = async () => {
        let newname = document.getElementById('my-text-edit-area');
        if (newname.value) {
            const find = yetLists.filter(list => list.id === newname.name);
            find[0].name = newname.value;
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
        lists = JSON.stringify(preLists);
        lists = JSON.parse(lists);
        setLists();
        setMode('view');
    };

    // ---------- 完了ボタン押下時 ----------
    document.getElementById('my-save-button-img').onclick = async () => {
        const { saveData } = await import('../../model/listModel');
        await saveData(uid, yetLists, doneLists);
        lists = yetLists.concat(doneLists);
        const { checkUserData, updateUserData} = await import('../../model/userModel');
        if (checkUserData(preUserData, userData)) {
            updateUserData(userData);
        }
        document.getElementById('my-popup').style.display = 'flex';

        if (lists.length == 0) {
            document.getElementById('my-list-unregistered').style.display = 'block';
        } else {
            document.getElementById('my-list-unregistered').style.display = 'none';
        }

        setLists();
        setMode('view');
    };

    document.getElementById('my-popup-twitter').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
        const url = "https://campa-room.web.app/show?id=" + uid;
        const text = "行きたいとこリストを更新しました!";
        const hashtag = "行きたいとこリスト";
        location.href = 'http://twitter.com/share?url=' + url + '&text=' + text + '&hashtags=' + hashtag;
    };

    document.getElementById('my-popup-copylink').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
        navigator.clipboard.writeText("https://campa-room.web.app/show?id=" + uid);
    };

    document.getElementById('my-popup-close').onclick = () => {
        document.getElementById('my-popup').style.display = 'none';
    };

}

const addList = async (id, name, check) => {
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
        checkBox.setAttribute('src', './data/done.svg');
        checkBox.setAttribute('class', 'list-check-box-done');
    } else {
        checkBox.setAttribute('src', './data/yet.svg');
        checkBox.setAttribute('class', 'list-check-box-yet');

        checkBox.onclick = () => {
            if (mode == 'edit') {
                const find = yetLists.filter(list => list.id === id);
                console.log(find[0])
                if (find[0].check) {
                    checkBox.setAttribute('src', './data/yet.svg');
                    find[0].check = false;
                } else {
                    checkBox.setAttribute('src', './data/done.svg');
                    find[0].check = true;
                }
            }
        };
    }
    
    listWrapper.appendChild(checkBox);

    let textBox = document.createElement('div');
    if (check) {
        textBox.setAttribute('class', 'list-text-box');
    } else {
        textBox.setAttribute('class', 'list-text-box my-editable');
    }
    
    
    let listText = document.createTextNode(name);
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
    //     sortButton.setAttribute('src', './data/sort.svg');
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
                const find = yetLists.filter(list => list.id === id);
                document.getElementById('my-text-edit-area').value = find[0].name;
                document.getElementById('my-text-edit-area').name = id;
                setMode('rename');
            }
        }
    }
    
    
    
    listWrapper.ontouchstart = (e) => {
        listWrapper.style.background = '#EEEEEE';
        
        let touchX = e.touches[0].clientX;
        let touchY = e.touches[0].clientY;
        let move = true;
        listWrapper.ontouchmove = (e) => {
            
            if (mode === 'edit') {
                if (50 < Math.abs(e.touches[0].clientY - touchY)) {
                    move = false;
                    
                }
                if (move) {
                    let moveX = e.touches[0].clientX - touchX;
                    if (moveX < 0) {
                        listWrapper.style.left = moveX + 'px';
                    }
                }
            }
            
        };
        listWrapper.ontouchend = () => {
            let height = 60;
            listWrapper.style.background = '#FFFFFF';
            if (mode === 'edit') {
                if (listWrapper.offsetLeft < 0) {
                    const loop = () => {
                        if (Math.abs(listWrapper.offsetLeft) < 3) {
                            listWrapper.style.left = '0px';
                        } else 
                        if (- document.body.clientWidth / 2 < listWrapper.offsetLeft) {
                            requestAnimationFrame(loop);
                            let returnX = listWrapper.offsetLeft + 5;
                            listWrapper.style.left = returnX + 'px';
                        } else 
                        if (- document.body.clientWidth < listWrapper.offsetLeft) {
                            requestAnimationFrame(loop);
                            let returnX = listWrapper.offsetLeft - 10;
                            listWrapper.style.left = returnX + 'px';
                        } else 
                        if (listWrapper.offsetLeft <= - document.body.clientWidth) {
                            if (0 < height) {
                                requestAnimationFrame(loop);
                            } else {
                                listDelete.parentElement.style.display = 'none';
                            }
                            
                            let find;
                            find = yetLists.filter(list => list.id === listDelete.parentElement.id.substr(3));
                            if (find.length == 0) {
                                find = doneLists.filter(list => list.id === listDelete.parentElement.id.substr(3));
                            }
                            find[0].removed = true;
                            
                            height -= 4;
                            listDelete.parentElement.style.height = height + 'px';
                        }
                        
                    }
                    loop();
                }
                
            }
        };
        
    };

    let listContainer;
    if (check) {
        listContainer = document.getElementById('done-list-container');
    } else {
        listContainer = document.getElementById('yet-list-container');
    }
    
    listContainer.prepend(listParent);
}