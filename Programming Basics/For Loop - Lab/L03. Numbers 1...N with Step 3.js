function nSteps (input) {
    let number = Number(input[0]);
    for (i = 1; i<= number; i += 3) {
        console.log(i);
    }
}

nSteps();