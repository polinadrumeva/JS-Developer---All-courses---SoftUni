function solve() {
   let firstNameElement = document.getElementById('fname');
   let lastNameElement = document.getElementById('lname');
   let emailElement = document.getElementById('email');
   let birthElement = document.getElementById('birth');
   let positionElement = document.getElementById('position');
   let salaryElement = document.getElementById('salary');
   let tableElement = document.getElementById('tbody');
   document.getElementById('add-worker').addEventListener('click', addedWorker);

   function addedWorker(event) {
        event.preventDefault();
        if(!firstNameElement.value || !lastNameElement.value || !emailElement.value || !birthElement.value || !positionElement.value || !salaryElement.value) {
           
            tableElement.innerHTML += `
            <tr>
                <td>${firstNameElement.value}</td>
                <td>${lastNameElement.value}</td>
                <td>${emailElement.value}</td>
                <td>${birthElement.value}</td>
                <td>${positionElement.value}</td>
                <td>${salaryElement.value}</td>
                <td>
                    <button class='fired'>Fired</button> 
                    <button class='edit'>Edit</button>
                </td>
            </tr>`;

            clear(); 
        }
   }

   function clear() {
    firstNameElement.value = '';
    lastNameElement.value = '';
    emailElement.value = '';
    birthElement.value = '';
    positionElement.value = '';
    salaryElement.value = '';
   }
}
solve()