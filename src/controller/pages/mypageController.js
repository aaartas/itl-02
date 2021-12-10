// マイページ
let mode;
let uid;
let lists = [];
let yetLists = [];
let doneLists = [];

export const showMypage = async () => {
    mode = 'view';
    let displayName, icon;
    
    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    const { routing } = await import('../pageController');

    // ---------- マイページアクセス時 ----------
    // ログイン状態の確認
    onAuthStateChanged(getAuth(), async (user) => {
        if (user){
            uid = user.uid;
            displayName = user.displayName;
            icon = user.photoURL;
            
            document.getElementById("my-icon").src = icon;
            document.getElementById("my-name").innerHTML = displayName;
            document.getElementById("top-page").style.display = 'none';
            document.getElementById("my-page").style.display = 'block';
            document.getElementById("show-page").style.display = 'none';
            document.getElementById("how-page").style.display = 'none';

            // 登録リストの取得
            const { getLists } = await import('../../model/list');
            lists = await getLists(uid);
            await setLists();
            setEvents();
        } else {
            console.log('logouted');
            routing('');
        }
    });
}

// listsをHTMLに追加
const setLists = async () => {
    document.getElementById("yet-list-container").innerHTML = "";
    document.getElementById("done-list-container").innerHTML = "";
    const { addList } = await import('../../view/mypageView');
    
    yetLists = lists.filter(list => !list.check);
    yetLists.forEach(list => {
        addList(list.id, list.name, list.check);
    });

    doneLists = lists.filter(list => list.check);
    doneLists.forEach(list => {
        addList(list.id, list.name, list.check);
    });
    console.log(lists)
    console.log(yetLists)
    console.log(doneLists)
8}

const setEvents = () => {
    // ---------- 編集ボタン押下時 ----------
    const editContents = document.getElementsByClassName('my-edit-mode');
    const editContentsNum = editContents.length;
    const viewContents = document.getElementsByClassName('my-view-mode');
    const viewContentsNum = viewContents.length;
    const addContents = document.getElementsByClassName('my-add-mode');
    const addContentsNum = addContents.length;
    document.getElementById('my-edit-button-img').addEventListener('click', () => {
        mode = 'edit';
        console.log('edit-mode');
        for (let i = 0; i < editContentsNum; i++) {
            editContents[i].style.display = 'block';
        }
        for (let i = 0; i < viewContentsNum; i++) {
            viewContents[i].style.display = 'none';
        }
    }, false);

    // ---------- +ボタン押下時 ----------
    document.getElementById('add-list-wrapper').addEventListener('click', () => {
        mode = 'add';
        console.log('add-mode');
        for (let i = 0; i < addContentsNum; i++) {
            addContents[i].style.display = 'block';
        }
    }, false);

    // ---------- 追加ボタン押下時 ----------
    document.getElementById('my-add-submit-button').addEventListener('click', async () => {
        mode = 'edit';
        console.log('edit-mode');
        for (let i = 0; i < addContentsNum; i++) {
            addContents[i].style.display = 'none';
        }

        let newlist = document.getElementById("my-add-input").value;
        if (newlist) {
            yetLists.push({
                id: 'aaa',
                name: newlist,
                check: false,
                removed: false
            })
            const { addList } = await import('../../view/mypageView');
            addList('aaa', newlist, false);
        }
        
    }, false);

    // ---------- チェックボタン押下時 ----------
    const checkBox = document.getElementsByClassName('list-check-box-yet');
    const checkBoxNum = checkBox.length;
    for (let i = 0; i < checkBoxNum; i++) {
        checkBox[i].addEventListener('click', () => {
            // 編集モードの時にチェックを有効にする
            if (mode === 'edit') {
                const find = yetLists.filter(list => list.id === checkBox[i].parentElement.id);
                if (find[0].check) {
                    find[0].check = false;
                    checkBox[i].setAttribute("src", "./data/yet.svg");
                } else {
                    find[0].check = true;
                    checkBox[i].setAttribute("src", "./data/done.svg");
                }
            }
        }, false);
    }


    // ---------- 完了ボタン押下時 ----------
    document.getElementById('my-save-button-img').addEventListener('click', async () => {
        mode = 'view';
        console.log('view-mode');
        for (let i = 0; i < editContentsNum; i++) {
            editContents[i].style.display = 'none';
        }
        for (let i = 0; i < viewContentsNum; i++) {
            viewContents[i].style.display = 'block';
        }
        const { saveData } = await import('../../model/list');
        await saveData(uid, yetLists, doneLists);
        lists = yetLists.concat(doneLists);
        setLists();
    }, false);
}