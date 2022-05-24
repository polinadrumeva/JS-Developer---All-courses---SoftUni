function printEvenPower(input){
    let number = Number(input[0]);
    let n = 1;
    for (i = 0; i <= number; i += 2) {
        console.log(n);
        n = n * 2 * 2;
    }
}

printEvenPower();