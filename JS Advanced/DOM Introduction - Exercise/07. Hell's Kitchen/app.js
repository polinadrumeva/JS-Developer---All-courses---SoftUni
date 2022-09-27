// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick () {
//       let inputElement = JSON.parse(document.getElementById("inputs").children[1].value);
//       let result = [];
      
//       for (let data of inputElement) {
//          let[name, workersList] = data.split(" - ");
//          if(!result.find(x=> x.name === name)) {
//             result.push({
//                name, 
//                averageSalary: 0,
//                bestSalary:0, 
//                sumSalary: 0,
//                workersList: []
//             });
//          }
//             let currentRestaurant = result.find(x=> x.name === name);
//             workersList = workersList && workersList.split(", ");
//             for (let worker of workersList) {
//                updateRestaurant(currentRestaurant, worker);
//             }
         
//       }

//       let best = result.sort((a,b) => b.averageSalary - a.averageSalary)[0];
//       let bestResEl = document.querySelector("#bestRestaurant p");
//       bestResEl.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
//       let workersRestEl = document.querySelector("#workers p");
//       let sortedWorkers = best.workersList.sort((a,b) => b.salary - a.salary);
//       let buff = "";
//       for (let worker of sortedWorkers) {
//          buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
//       }

//       workersRestEl.textContent += buff;
//    }

//    function updateRestaurant(obj, worker) {
//       let [name, salary] = worker.split(" ");
//       salary = Number(salary);
//       obj.sumSalary += salary;
//       if(obj.bestSalary < salary) {
//          obj.bestSalary = salary;
//       }

//       obj.workersList.push({name, salary});
//       obj.averageSalary = obj.sumSalary / obj.workersList.length;
//    }

  
// }

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
 
   function onClick() {
 
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let allRestaurants = {};
      let bestAverageSalary = 0;
      let bestRestaurantName = '';
 
      for (let line of input) {
 
         let [restaurantName, workers] = line.split(' - ');
         let individualWorkers = workers.split(', ');
 
         for (let worker of individualWorkers) {
            let [workerName, salary] = worker.split(' ');
 
            if (!allRestaurants.hasOwnProperty(restaurantName)) {
               allRestaurants[restaurantName] = {};
            }
            allRestaurants[restaurantName][workerName] = Number(salary);
         }
 
         let entries = Object.entries(allRestaurants);
 
         for (let [name, workers] of entries) {
            let salaries = Object.values(workers);
            let totalSalariesPaid = 0;
 
            for (const salary of salaries) {
               totalSalariesPaid += salary;
            }
 
            let averageSalary = totalSalariesPaid / salaries.length;
 
            if (averageSalary > bestAverageSalary) {
               bestAverageSalary = averageSalary;
               bestRestaurantName = name;
            }
         }
      }
 
      let workersOrdered = Object.entries(allRestaurants[bestRestaurantName]).sort((a, b) => b[1] - a[1]);
      let workersAsString = '';
      workersOrdered.forEach(w => workersAsString += `Name: ${w[0]} With Salary: ${w[1]} `);
 
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${workersOrdered[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = workersAsString;
   }
}