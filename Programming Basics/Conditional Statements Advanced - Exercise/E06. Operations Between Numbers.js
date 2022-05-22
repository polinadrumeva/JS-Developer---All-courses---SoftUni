function operationsNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sign = input[2];
    let type = "";
    let result = 0;

    switch(sign) {
        case"+":
        result = firstNumber + secondNumber;
        if(result % 2 == 0) {
            type = "even";
        } else {
            type = "odd";
        }
        console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${type}`);
        break;
        case"-":
        result = firstNumber - secondNumber;
        if(result % 2 == 0) {
            type = "even";
        } else {
            type = "odd";
        }
        console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${type}`);
        break;
        case"*":
        result = firstNumber * secondNumber;
        if(result % 2 == 0) {
            type = "even";
        } else {
            type = "odd";
        }
        console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${type}`);
        break;
        case"/":
        if (secondNumber === 0 ) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            result = firstNumber / secondNumber;
            console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
        }
        break;
        case"%":
        if (secondNumber === 0 ) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            result = firstNumber % secondNumber;
            console.log(`${firstNumber} % ${secondNumber} = ${result}`);
        }
        break;
    }
}

operationsNumbers();

