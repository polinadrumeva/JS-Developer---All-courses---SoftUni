class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        var departmentsArray = [];
        if(name === "" || name === undefined || name === null || salary === "" || salary === undefined || salary === null || Number(salary) < 0 ||
         position === "" || position === undefined || position === null || department === "" || department === undefined
         || department === null) {
         throw new Error("Invalid input!");
         }

         if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            departmentsArray.push(department);
         }

         this.departments[department].push({name, salary, position});
         return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let best = '';
        let bestSalary = 0;

        for (let i = 0; i < departmentsArray.length; i++) {
            let sum = 0;
            let averageSalary = 0;
            for (let el of this.departments[departmentsArray[i]]) {
                sum += el.salary;
            }
            averageSalary = sum / departmentsArray[i].length;
            if(bestSalary < averageSalary) {
                best = depart;
                bestSalary = averageSalary;
            }
            
        }
        let result = '';
        for (let el of this.departments[best].sort((a,b) => a.salary - b.salary).sort((a,b) => a.name.localeCompare(b.name))) {
            result += `${el.name} ${el.salary} ${el.position}\n`;
        }

        return `Best Department is: ${best}\n Average salary: ${bestSalary} \n ${result}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
