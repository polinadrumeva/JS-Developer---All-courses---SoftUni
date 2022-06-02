function maxNumber (input) {
    let command = input[0];
    let max = Number.MIN_SAFE_INTEGER;
    let num = Number(command);
    let index = 0;

    while (command != "Stop") {
        num = Number(command);
        index++;
        if (num > max){
         max = num;
        }
        command = input[index];
    }

    console.log(max);
}

maxNumber();
