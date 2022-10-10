class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this._innerString = innerString;
        this.innerLength = innerLength;  
    }

    increase(length) {
        if(length < 0) {
            length = 0;
        }
    }

    decrease(length) {
        if(length < 0) {
            length = 0;
        }
        return this._innerString = this._innerString.slice(-Number(length - 1));
    }
    
    toString() {
        return this._innerString;
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
