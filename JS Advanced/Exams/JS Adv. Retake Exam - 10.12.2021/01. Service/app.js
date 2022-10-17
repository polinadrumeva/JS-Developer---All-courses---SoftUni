window.addEventListener('load', solve);

function solve() {
   let productElement = document.getElementById('type-product');
   let descriptionElement = document.getElementById('description');
   let clientElement = document.getElementById('client-name');
   let phoneElement = document.getElementById('client-phone');
   let receivedOrdersElement = document.getElementById('received-orders');
   let completedOrdersElement = document.getElementById('completed-orders');
   document.getElementsByClassName('clear-btn')[0].addEventListener('click', clearAll);
    document.getElementsByTagName('button')[0].addEventListener('click', submitClick);

   function submitClick(event) {
    event.preventDefault();
    if(productElement.value && descriptionElement.value && clientElement.value && phoneElement.value) {
        receivedOrders(productElement.value, descriptionElement.value, clientElement.value, phoneElement.value);
        clear();
    }}

   function receivedOrders(product, description, client, phone) {
        let divElement = creatingElements('div', '', receivedOrdersElement);
        divElement.setAttribute('class', 'container');
        creatingElements('h2', `Product type for repair: ${product}`, divElement);
        creatingElements('h3', `Client information: ${client}, ${phone}`, divElement);
        creatingElements('h4', `Description of the problem: ${description}`, divElement);

        let startBtn = creatingElements('button', 'Start repair', divElement);
        startBtn.setAttribute('class', 'start-btn');
        startBtn.addEventListener('click', startRepairing);
        function startRepairing(event) {
            startBtn.setAttribute('disabled', 'disabled');
        }
        let finishBtn = creatingElements('button', 'Finish repair', divElement);
        finishBtn.setAttribute('class', 'finish-btn');
        finishBtn.setAttribute('disabled', 'disabled');
        finishBtn.addEventListener('click', finished);

        function startRepairing(event) {
            startBtn.setAttribute('disabled', 'disabled');
            finishBtn.removeAttribute('disabled');
        }
    
        function finished(event) {
            event.target.parentNode.remove();
    
            let divEl = creatingElements('div', '', completedOrdersElement);
            divEl.setAttribute('class', 'container');
            creatingElements('h2', `Product type for repair: ${product}`, divEl);
            creatingElements('h3', `Client information: ${client}, ${phone}`, divEl);
             creatingElements('h4', `Description of the problem: ${description}`, divEl);
        }
        
   }

    function clearAll(e) {
        let allDivElement = document.querySelectorAll('.container');
        for (let div of allDivElement) {
            div.remove();
        }
    }

   function creatingElements(tagName, content, parent) {
        let element = document.createElement(tagName);
         element.textContent = content;
        if (parent) {
        parent.appendChild(element);
        }
        return element;
    }

    function clear() {
        productElement.value = '';
        descriptionElement.value = '';
        clientElement.value = '';
        phoneElement.value = '';
    }

}


// function resultsolve() {
   
//     function allHits(e, genre, name, author, date) {
//         e.preventDefault();

//         let divHitsInfo = htmlGenerator('div', '', div);
//         divHitsInfo.setAttribute('class', 'hits-info');
//         let img = htmlGenerator('img', '', divHitsInfo);
//         img.setAttribute('src', './static/img/img.png');
//         htmlGenerator('h2', `Genre: ${genre}`, divHitsInfo);
//         htmlGenerator('h2', `Name: ${name}`, divHitsInfo);
//         htmlGenerator('h2', `Author: ${author}`, divHitsInfo);
//         htmlGenerator('h3', `Date: ${date}`, divHitsInfo);

//         let saveSongBtn = htmlGenerator('button', 'Save song', divHitsInfo);
//         saveSongBtn.setAttribute('class', 'save-btn');
//         saveSongBtn.addEventListener('click', (e) => {
//             e.target.parentNode.remove();
//             divHitsInfo.removeChild(saveSongBtn);
//             divHitsInfo.removeChild(likeSongBtn);
//             divSavedSongs.appendChild(divHitsInfo);
//         })

//         let likeSongBtn = htmlGenerator('button', 'Like song', divHitsInfo);
//         likeSongBtn.setAttribute('class', 'like-btn');
//         likeSongBtn.addEventListener('click', (e) => {
//             let likes = Number(totalLikes.textContent.split('Total Likes: ')[1]);
//             totalLikes.textContent = `Total Likes: ${Number(likes) + 1}`;
//             likeSongBtn.setAttribute('disabled', 'disabled');
//         });

//         let deleteBtn = htmlGenerator('button', 'Delete', divHitsInfo);
//         deleteBtn.setAttribute('class', 'delete-btn');
//         deleteBtn.addEventListener('click', (e) => {
//             e.target.parentNode.remove();
//         })
//     }

// }