class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if(name === "" || name === undefined || name === null || salary === "" || salary === undefined || salary === null || Number(salary) < 0 ||
         position === "" || position === undefined || position === null || department === "" || department === undefined
         || department === null) {
         throw new Error("Invalid input!");
         }

         if(!this.departments[department]) {
            this.departments[department] = {
                averageSalary: 0,
                sumSalary: 0,
                employees: []
            };
         }

         this.departments[department].sumSalary += Number(salary);
         this.departments[department].employees.push({name, salary, position});
         this.departments[department].averageSalary = this.departments[department].sumSalary / this.departments[department].employees.length;

         return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let best = Object.entries(this.departments).sort(([nameOne, infoOne], [nameTwo, infoTwo]) => {
            return infoTwo.averageSalary - infoOne.averageSalary;
        })[0];

        best[1].employees = best[1].employees.sort((a,b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let buffer = `Best Department is: ${best[0]}\n`;
        buffer += `Average salary: ${best[1].averageSalary.toFixed(2)}\n`;
        
        for (let i = 0; i < best[1].employees.length; i++) {
            let el = best[1].employees[i];
            buffer += `${el.name} ${el.salary} ${el.position}`;
            buffer += i === best[1].employees.length -1 ? "" : '\n'; 
        }

        return buffer;
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
