function getPersons() {
    class Person {
    constructor(firstname, lastname, age, email) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
        this.email = email;
        
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }}

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'), 
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')

    ]
}


console.log(getPersons())