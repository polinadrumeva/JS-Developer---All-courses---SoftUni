window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let storyTitleElement = document.getElementById('story-title');
  let genreElement = document.getElementById('genre');
  let storyElement = document.getElementById('story');
  let previewListElement = document.getElementById('preview-list');
  let divElement = document.getElementById('main');
  let bodyClassElement = document.getElementsByClassName('body')[0];
 
  let publishButton = document.getElementById('form-btn');
  publishButton.addEventListener('click', publishStory);
  
  function publishStory() {
      if(!firstNameElement.value && !lastNameElement.value && !ageElement.value && !storyElement.value && !genreElement.value && !storyTitleElement.value) {
        return;
      }

      if(firstNameElement.value && lastNameElement.value && ageElement.value && storyElement.value && genreElement.value && storyTitleElement.value) {
        publishButton.setAttribute('disabled', 'disabled');
        
        let liElement = createElement('li', '');
        liElement.setAttribute('class', 'story-info');
        let articleElement = createElement('article', '');
        let name = createElement('h4', `Name: ${firstNameElement.value} ${lastNameElement.value}`);
        let age = createElement('p', `Age: ${ageElement.value}`);
        let title = createElement('p', `Title: ${storyTitleElement.value}`);
        let genre = createElement('p', `Genre: ${genreElement.value}`);
        let story = createElement('p', `${storyElement.value}`);
        let saveStoryButton = createElement('button', `Save Story`);
        saveStoryButton.setAttribute('class', 'save-btn');
        saveStoryButton.addEventListener('click', savedStory);
       
        let editStoryButton = createElement('button', `Edit Story`);
        editStoryButton.setAttribute('class', 'edit-btn');
        editStoryButton.addEventListener('click', editStory);
        
        function editStory(event) {

        firstNameElement.value = name.textContent.split(' ')[1];
        lastNameElement.value = name.textContent.split(' ')[2];
        ageElement.value = age.textContent.split(' ')[1];
        storyTitleElement.value = title.textContent.split(' ')[1];
        genreElement.value = genre.textContent.split(' ')[1];
        storyElement.value = story.textContent;
        publishButton.removeAttribute('disabled');
      
    }
        
        let deleteStoryButton = createElement('button', `Delete Story`);
        deleteStoryButton.setAttribute('class', 'delete-btn');
        deleteStoryButton.addEventListener('click', deleteStory);
        
        articleElement.appendChild(name);
        articleElement.appendChild(age);
        articleElement.appendChild(title);
        articleElement.appendChild(genre);
        articleElement.appendChild(story);
       
        liElement.appendChild(articleElement);
        liElement.appendChild(saveStoryButton);
        liElement.appendChild(editStoryButton);
        liElement.appendChild(deleteStoryButton);

        previewListElement.appendChild(liElement);

        clear();
      }
 
      function savedStory(event) {
        event.preventDefault();
        divElement.remove();
        let divNewElement = createElement('div', '');
        divNewElement.setAttribute('id', 'main');
        let h1Element = createElement('h1', 'Your scary story is saved!');
        divNewElement.appendChild(h1Element);
        bodyClassElement.appendChild(divNewElement);
    }


    function deleteStory(event) {
      event.target.parentNode.remove();
      publishButton.removeAttribute('disabled');
    }

    function createElement(tag, content) {
        let element = document.createElement(tag);
        if (content) {
          element.textContent = content;
        }
        return element;
    }

    function clear() {
        firstNameElement.value = '';
        lastNameElement.value = '';
        ageElement.value = '';
        storyTitleElement.value = '';
        genreElement.value = '';
        storyElement.value = '';
    }

  }
}
