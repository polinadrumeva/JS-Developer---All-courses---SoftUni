function notation(input) {
    let result = [];
    let numbers = [];
    let operators = [];

    let operationEnum = {
        "+": (a,b) => a + b,
        "-": (a, b) => a - b,
        "*":(a, b) => a * b,
        "/": (a,b) => a / b
    }

    for (let el of input) {
        if(typeof(el) === 'number') {
            numbers.push(el);
        } else {
            operators.push(el);
        }
    }

    if(operators.length < numbers.length - 1) {
        console.log("Error: too many operands!");
        return;
    } else if (numbers.length === 0 || numbers.length === operators.length) {
        console.log("Error: not enough operands!");
        return;
    }

    for (let el of input) {
        if(typeof(el) === 'number') {
            result.push(el);
              continue;
        }
        
            let numA = result.pop();
            let numB = result.pop();
            let total = operationEnum[el](numB, numA);
            result.push(total);
    }

    console.log(result);

}

notation([3,
    4,
    '+']
   );

   notation([5,
    3,
    4,
    '*',
    '-']
   );

   notation([7,
    33,
    8,
    '-']
   );

   notation([15,
    '/']
   );