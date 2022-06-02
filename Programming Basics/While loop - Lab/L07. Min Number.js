function minNumber(input) {
    let command = input[0];
    let min = Number.MAX_SAFE_INTEGER;
    let num = Number(command);
    let index = 0;

    while (command != "Stop") {
        num = Number(command);
        index++;
        if (num < min){
            min = num;
        }
        command = input[index];
    }

    console.log(min);
}
minNumber();
