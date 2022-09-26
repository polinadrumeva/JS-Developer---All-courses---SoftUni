function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedInput = document.getElementById("searchField").value;

      let tableData = document.getElementsByTagName("tbody");

      for (const row of tableData) {
         let currentRow = row.textContent;
         if (searchedInput && currentRow.indexOf(searchedInput) >= 0) {
            row.style.background = 'yellow';
         }
      }
   

   }
}