// マイページ表示切り替え
export const setView = (mode) => {
    const bioArea = document.getElementById('my-bio-textarea');
    const title = document.getElementById('my-title');
    const editContents = document.getElementsByClassName('my-edit-mode');
    const editContentsNum = editContents.length;
    const viewContents = document.getElementsByClassName('my-view-mode');
    const viewContentsNum = viewContents.length;
    const addContents = document.getElementsByClassName('my-input-mode');
    const addContentsNum = addContents.length;
    const addButton = document.getElementById('my-add-submit-button');
    const renameButton = document.getElementById('my-rename-submit-button');
    const editableContents = document.getElementsByClassName('my-editable');
    const editableContentsNum = editableContents.length;
    
    if (mode === 'view') {
        for (let i = 0; i < editContentsNum; i++) {
            editContents[i].style.display = 'none';
        }
        for (let i = 0; i < viewContentsNum; i++) {
            viewContents[i].style.display = 'block';
        }
        for (let i = 0; i < addContentsNum; i++) {
            addContents[i].style.display = 'none';
        }
        for (let i = 0; i < editableContentsNum; i++) {
            editableContents[i].style.color = '#000';
        }
        document.body.style.backgroundColor = '#EEB706';
        document.getElementById('my-sticky-container').style.backgroundColor = '#EEB706';
        bioArea.readOnly = true;
        title.readOnly = true;
    } else if (mode === 'edit') {
        for (let i = 0; i < editContentsNum; i++) {
            editContents[i].style.display = 'block';
        }
        for (let i = 0; i < viewContentsNum; i++) {
            viewContents[i].style.display = 'none';
        }
        for (let i = 0; i < addContentsNum; i++) {
            addContents[i].style.display = 'none';
        }
        for (let i = 0; i < editableContentsNum; i++) {
            editableContents[i].style.color = '#F37504';
        }
        document.body.style.backgroundColor = '#F37504';
        document.getElementById('my-sticky-container').style.backgroundColor = '#F37504';
        bioArea.readOnly = false;
        title.readOnly = false;
    } else if (mode === 'add') {
        for (let i = 0; i < addContentsNum; i++) {
            addContents[i].style.display = 'block';
            addButton.style.display = 'block';
            renameButton.style.display = 'none';
        }
    } else if (mode === 'rename') {
        for (let i = 0; i < addContentsNum; i++) {
            addContents[i].style.display = 'block';
            addButton.style.display = 'none';
            renameButton.style.display = 'block';
        }
    }
}

// 1つのリストをHTMLに追加
export const addList = (id, name, check) => {
    let listParent = document.createElement('div');
    listParent.setAttribute('class', 'list-parent');
    listParent.setAttribute('id', id);

    let listDelete = document.createElement('div');
    listDelete.setAttribute('class', 'list-delete-button');
    listParent.appendChild(listDelete);

    let listWrapper = document.createElement('div');
    listWrapper.setAttribute('class', 'list-wrapper');
    listParent.appendChild(listWrapper);

    let checkBox = document.createElement('img');
    
    listWrapper.appendChild(checkBox);

    let textBox = document.createElement('div');
    textBox.setAttribute('class', 'list-text-box');
    listWrapper.appendChild(textBox);

    let listText = document.createTextNode(name);
    textBox.appendChild(listText);

    // チェック有無で表示切り替え
    if (check) {
        checkBox.setAttribute('src', './data/done.svg');
        checkBox.setAttribute('class', 'list-check-box-done');
        textBox.style.color = '#C3C3C3';
    } else {
        checkBox.setAttribute('src', './data/yet.svg');
        checkBox.setAttribute('class', 'list-check-box-yet');
        textBox.style.color = '#000';
    }

    // タッチで色変える
    listWrapper.ontouchstart = () => {
        listWrapper.style.background = '#EEEEEE';
    }
    listWrapper.ontouchend = () => {
        listWrapper.style.background = '#FFFFFF';
    }

    let listContainer;
    if (check) {
        listContainer = document.getElementById('done-list-container');
    } else {
        listContainer = document.getElementById('yet-list-container');
    }
    
    listContainer.prepend(listParent);
}

