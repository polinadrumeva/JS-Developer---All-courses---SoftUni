class Person {
    constructor(firstname, lastname, age, email) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(p.toString());