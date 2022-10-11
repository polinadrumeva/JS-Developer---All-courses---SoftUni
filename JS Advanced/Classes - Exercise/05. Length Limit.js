class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.initial = innerString;
        this.innerLength = innerLength;  
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    
    toString() {
        let result = this.innerString.slice(0, this.innerLength);
        if(this.innerLength < this.initial.length) {
            result += '...';
        }

        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
