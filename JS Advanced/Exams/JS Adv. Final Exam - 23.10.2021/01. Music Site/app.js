window.addEventListener('load', solve);

function solve() {
    let genreElement = document.querySelector('#genre');
    let nameElement = document.querySelector('#name');
    let authorElement = document.querySelector('#author');
    let dateElement = document.querySelector('#date');
    let songsListElement = document.getElementsByClassName('all-hits-container')[0];

    let addButtonElement =document.getElementById('add-btn');
    addButtonElement.addEventListener('click', addedSong);

    function addedSong(event) {
        event.preventDefault();
        if(genreElement.value !== '' && authorElement.value !== '' && nameElement.value !== '' && dateElement.value !== ''){
        let divElement =document.createElement('div');
        divElement.classList.add('hits-info');
        
        let h2Element = document.createElement('h2');
        h2Element.textContent = `Genre: ${genreElement.value}`;
        divElement.appendChild(h2Element);
        let h22Element = document.createElement('h2');
        h22Element.textContent = `Name: ${nameElement.value}`;
        divElement.appendChild(h22Element);
        let h222Element = document.createElement('h2');
        h222Element.textContent = `Author: ${authorElement.value}`;
        divElement.appendChild(h222Element);
        let h3Element = document.createElement('h3');
        h3Element.textContent = `Date: ${dateElement.value}`;
        divElement.appendChild(h3Element);
        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save song';
        divElement.appendChild(saveButton);
        let likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent = 'Like song';
        divElement.appendChild(likeButton);
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        divElement.appendChild(deleteButton);

        songsListElement.appendChild(divElement);
        clearInputs(genreElement, nameElement, authorElement, dateElement); 
        }
    }

    function clearInputs(genreElement, nameElement, authorElement, dateElement) {
        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';
    }
}