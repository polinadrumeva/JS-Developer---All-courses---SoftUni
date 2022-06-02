function graduation (input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let index = 1;

     while (grades <= 12) {
        let evalution = Number(input[index]);
        if (evalution < 4.00){
            evalution = Number(input[index]);
            console.log(`${name} has been excluded at ${grades} grade`);
                    return;
        } else {
        sum += evalution;
        grades++;
        }
        index++;
    }
    
    let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}
graduation();
