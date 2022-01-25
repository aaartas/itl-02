// ユーザーデータセット
export const setUserData = (userData) => {
    const titleInput = document.getElementById('my-title');
    const titleText = document.getElementById('my-title-text');
    const bioTextarea = document.getElementById('my-bio-textarea');
    const bioText = document.getElementById('my-bio-text');

    if (userData != undefined) {
        document.getElementById('my-name').innerHTML = userData.user_name;
        titleInput.value = userData.list_title;
        titleInput.readOnly = true;
        document.getElementById('my-icon').src = userData.user_icon;
        
        bioText.style.display = 'none';
            bioTextarea.style.display = 'block';
            bioTextarea.value = userData.user_bio;
            if (bioTextarea.offsetHeight < bioTextarea.scrollHeight) {
                bioTextarea.style.height = bioTextarea.scrollHeight + 'px';
            }
    } else {
        titleText.style.display = 'block';
        titleInput.style.display = 'none';
        bioTextarea.style.display = 'none';
        bioText.style.display = 'block';
    }
    
}

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
    const listWrapper = document.getElementsByClassName('list-wrapper');
    const listWrapperNum = listWrapper.length;
    const deleteButton = document.getElementsByClassName('list-delete-button');
    const deleteButtonNum = deleteButton.length;
    
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
        for (let i = 0; i < deleteButtonNum; i++) {
            deleteButton[i].style.display = 'none';
        }
        for (let i = 0; i < listWrapperNum; i++) {
            listWrapper[i].style.position = 'static';
        }
        document.getElementById('my-page').style.backgroundColor = '#EEB706';
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
        for (let i = 0; i < deleteButtonNum; i++) {
            deleteButton[i].style.display = 'block';
        }
        for (let i = 0; i < listWrapperNum; i++) {
            listWrapper[i].style.position = 'absolute';
        }
        document.getElementById('my-page').style.backgroundColor = '#F37504';
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