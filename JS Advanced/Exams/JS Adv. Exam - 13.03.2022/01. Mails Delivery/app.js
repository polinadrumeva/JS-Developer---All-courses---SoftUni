function solve() {
    let recipientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');
    let listsElement = document.getElementById('list');
    let sendMailsElement = document.getElementsByClassName('sent-list')[0];
    let deletedMailsElement = document.getElementsByClassName('delete-list')[0];
     document.getElementById('add').addEventListener('click', submitClick);
 
    function submitClick(event) {
        event.preventDefault();
        if(recipientElement.value && titleElement.value && messageElement.value) {
         listMails(recipientElement.value, titleElement.value, messageElement.value);
         clear();
        }
        
    }
 
    function listMails(recipient, title, message) {
         let liElement = creatingElements('li', '', listsElement);
         creatingElements('h4', `Title: ${title}`, liElement);
         creatingElements('h4', `Recipient name: ${recipient}`, liElement);
         creatingElements('span', `${message}`, liElement);
         let divElement = creatingElements('div', '', liElement);
         
         divElement.setAttribute('id', 'list-action');
         let sendBtn = creatingElements('button', 'Send', divElement);
         sendBtn.setAttribute('type', 'submit');
         sendBtn.setAttribute('id', 'send');
         sendBtn.addEventListener('click', sendingMails);
         
         function sendingMails(event) {
            event.target.parentNode.parentNode.remove();

            let linElement = creatingElements('li', '', sendMailsElement);
            creatingElements('span', `To: ${recipient}`, linElement);
            creatingElements('span', `Title: ${title}`, linElement);
            let divnElement = creatingElements('div', '', linElement);
            divnElement.setAttribute('class', 'btn');
            let deletenBtn = creatingElements('button', 'Delete', divnElement);
            deletenBtn.setAttribute('type', 'submit');
            deletenBtn.setAttribute('class', 'delete');
            deletenBtn.addEventListener('click', deleted);
            
         }

         let deleteBtn = creatingElements('button', 'Delete', divElement);
         deleteBtn.setAttribute('type', 'submit');
         deleteBtn.setAttribute('id', 'delete');
         deleteBtn.addEventListener('click', deleted);
 
         function deleted(event) {
             event.target.parentNode.parentNode.remove();
     
             let liEl = creatingElements('li', '', deletedMailsElement);
             creatingElements('span', `To: ${recipient}`, liEl);
             creatingElements('span', `Title: ${message}`, liEl);
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
         recipientElement.value = '';
         titleElement.value = '';
         messageElement.value = '';
    }
 
}
solve()