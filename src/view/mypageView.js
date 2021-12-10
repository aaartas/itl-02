// 1つのリストをHTMLに追加
export const addList = (id, name, check) => {
    let listWrapper = document.createElement("div");
    listWrapper.setAttribute("class", "list-wrapper");
    listWrapper.setAttribute("id", id);

    let checkBox = document.createElement("img");
    
    if (check) {
        checkBox.setAttribute("src", "./data/done.svg");
        checkBox.setAttribute("class", "list-check-box-done");
    } else {
        checkBox.setAttribute("src", "./data/yet.svg");
        checkBox.setAttribute("class", "list-check-box-yet");
    }
    
    listWrapper.appendChild(checkBox);

    let textBox = document.createElement("div");
    textBox.setAttribute("class", "list-text-box");
    listWrapper.appendChild(textBox);
console.log(name)
    let listText = document.createTextNode(name);
    textBox.appendChild(listText);


    let listContainer;
    if (check) {
        listContainer = document.getElementById("done-list-container");
    } else {
        listContainer = document.getElementById("yet-list-container");
    }
    
    listContainer.prepend(listWrapper);
}