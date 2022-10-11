function solution() {
    class Employee {
        constructor (name, age) {
            this.name = name;
            this.age = age; 
            this.salary = 0;
            this._tasks = [];
    };
    work() {
        for(let i = 0; i < this._tasks.length; i++) {
        
            console.log(this._tasks[i]);
        }
    };
    collectSalary() {};
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age)
        }

        get tasks() {
            return this._task.push(`${this.name} is working on a simple task.`);
        }
        set tasks() {
            return this._task.push(`${this.name} is working on a simple task.`);
        }

    }
    class Senior extends Employee {}
    class Manager extends Employee {}

    return {
        Employee, 
        Junior, 
        Senior, 
        Manager
    }
}

const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
 junior.work();  
 //junior.work();  
 
// junior.salary = 5811; 
// junior.collectSalary();  
 
// const sinior = new classes.Senior('Alex', 31); 
 
// sinior.work();  
// sinior.work();  
// sinior.work();  
// sinior.work();  
 
// sinior.salary = 12050; 
// sinior.collectSalary();  
 
// const manager = new classes.Manager('Tom', 55); 
 
// manager.salary = 15000; 
// manager.collectSalary();  
// manager.dividend = 2500; 
// manager.collectSalary();  
