function search() {
   let townElements = document.getElementsByTagName('li');
   let seachedElement = document.getElementById('searchText').value;
   let numbersOfFound = 0;
   let resultElement = document.getElementById('result');

   for (const town of townElements) {
      let townName = town.textContent;
      if (seachedElement && townName.indexOf(seachedElement) >= 0) {
         town.innerHTML = `<bold><u>${townName}</u></bold>`;
         numbersOfFound++;
      }
   }

   resultElement.textContent = `${numbersOfFound} matches found`;
  
}
