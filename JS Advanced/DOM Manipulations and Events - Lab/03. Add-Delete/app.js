function addItem() {
    let newElement = document.getElementById("newItemText").value;
    let listElement = document.getElementById("items");

    if(newElement.length === 0) {
        return;
    }

    let listItemsElement = document.createElement("li");
    listItemsElement.textContent = newElement;

    let removeElement = document.createElement("a");
    let linkTextElement = document.createTextNode("[Delete]");
    removeElement.appendChild(linkTextElement);
    removeElement.href = "#";
    removeElement.addEventListener("click", deleteItem);

    listItemsElement.appendChild(removeElement);
    listElement.appendChild(listItemsElement);

    function deleteItem() {
        listItemsElement.remove();
    }

}