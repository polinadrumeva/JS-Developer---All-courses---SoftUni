function sumNumbers (input) {
    let fistNum = Number(input[0]);
    let sum = 0;
    let index = 1;

     while (sum < fistNum) {
        let secondNum = Number(input[index]);
        index++;
        sum += secondNum;
    }
           
    console.log(sum);
}

sumNumbers();
