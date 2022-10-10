class Hex {
   //  The constructor takes one parameter value, which is a number
    constructor(value) {
        this.value = Number(value);
    }

    //valueOf() This function should return the value property of the hex class.
    valueOf() {
        return this.value;
    }
    // toString() This function will show its hexadecimal value starting with "0x"
    toString() {
        return '0x' + `${this.value.toString(16).toUpperCase()}`;
    }
    // plus({number}) This function should add a number or Hex object and return a new Hex object.
    plus(number) {
        let plusResult = 0;
        if(typeof (number) === 'number') {
            plusResult = this.value + Number(number);
        } else {
            plusResult = this.value + Number(number.value);
        }
        return '0x' + `${plusResult.toString(16).toUpperCase()}`;
    }
    // minus({number}) This function should subtract a number or Hex object and return a new Hex object.
    minus(number) {
        let minusResult = 0;
        if(typeof (number) === 'number') {
            minusResult = this.value - Number(number);
        } else {
            minusResult = this.value - Number(number.value);
        }
        return '0x' + `${minusResult.toString(16).toUpperCase()}`;
    }

    // parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
    parse(valueString) {
        let result = parseInt(valueString, 16);
        return result;
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
