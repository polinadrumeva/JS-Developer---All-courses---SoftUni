function create(words) {
   
   for (let word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', function() {
         pElement.style.display = 'block';
      });

      let divContentElement = document.getElementById('content');
      divContentElement.appendChild(divElement);

   }

}