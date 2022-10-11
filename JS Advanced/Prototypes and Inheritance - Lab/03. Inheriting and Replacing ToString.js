function toStringExtension() {
    class Person {
        constructor (name, email) {
        this.name = name;
        this.email = email;
        }

        toString() {
            console.log(`Person (name: ${this.name}, email: ${this.email})`);
        }
    }
    
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject;
        }

        toString() {
           console.log(`Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`);
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course;
        }

        toString() {
            console.log(`Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`);
        }
    }


    return {
        Person,
        Teacher,
        Student
    }
}

console.log(toStringExtension());
