// マイページ
export const showMypage = async () => {
    let uid, displayName, icon;
    
    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    const { routing } = await import('../pageController');

    // ---------- マイページアクセス時 ----------
    // ログイン状態の確認
    onAuthStateChanged(getAuth(), (user) => {
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
            setLists(user.uid);
        } else {
            console.log('logouted');
            routing('');
        }
    });


    // ---------- 編集ボタン押下時 ----------
    
    document.getElementById('my-edit-button-img').addEventListener('click', () => {
        console.log('edit-mode');
        const editContents = document.getElementsByClassName('edit-mode');
        const editContentsNum = editContents.length;
        for (let i = 0; i < editContentsNum; i++) {
            editContents[i].style.display = 'block';
        }
    }, false);
}





const setLists = async (uid) => {
    const { getLists } = await import('../../model/list');
    const lists = await getLists(uid);

    const yetList = lists.filter(list => !list.check);
    yetList.forEach(list => {
        //console.log(list.name);
        let listWrapper = document.createElement("div");
        listWrapper.setAttribute("class", "list-wrapper");
        listWrapper.setAttribute("id", list.id);

        let checkBox = document.createElement("img");
        checkBox.setAttribute("class", "list-check-box");
        if (list.check) {
            checkBox.setAttribute("src", "./data/done.svg");
        } else {
            checkBox.setAttribute("src", "./data/yet.svg");
        }
        
        listWrapper.appendChild(checkBox);

        let textBox = document.createElement("div");
        textBox.setAttribute("class", "list-text-box");
        listWrapper.appendChild(textBox);

        let listText = document.createTextNode(list.name);
        textBox.appendChild(listText);

        let listContainer = document.getElementById("yet-list-container");
        listContainer.appendChild(listWrapper);
    });

    const doneList = lists.filter(list => list.check);
    doneList.forEach(list => {
        //console.log(list.name);
        let listWrapper = document.createElement("div");
        listWrapper.setAttribute("class", "list-wrapper");
        listWrapper.setAttribute("id", list.id);

        let checkBox = document.createElement("img");
        checkBox.setAttribute("class", "list-check-box");
        if (list.check) {
            checkBox.setAttribute("src", "./data/done.svg");
        } else {
            checkBox.setAttribute("src", "./data/yet.svg");
        }
        
        listWrapper.appendChild(checkBox);

        let textBox = document.createElement("div");
        textBox.setAttribute("class", "list-text-box");
        listWrapper.appendChild(textBox);

        let listText = document.createTextNode(list.name);
        textBox.appendChild(listText);

        let listContainer = document.getElementById("done-list-container");
        listContainer.appendChild(listWrapper);
    });
}
