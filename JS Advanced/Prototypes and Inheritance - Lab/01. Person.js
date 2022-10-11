function createPerson(firstName, lastName) {
    return {
        firstName, 
        lastName, 
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        set fullName(value) {
            let args = value.split(' ');
            if(args.length === 2) {
                this.firstName = args[0];
                this.lastName = args[1];
            }
        }
    }
}

// let person = createPerson("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

console.log('---------------------------');

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
