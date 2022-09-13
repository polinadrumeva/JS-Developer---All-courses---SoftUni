function solve(input) {
   
    let number = input.toString();
    let isItSame = true;
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
        if(Number(number[i]) != Number(number[i + 1])) {
            isItSame = false;
        }
    }

    for(let k = 0; k < number.length - 1; k++) {
        
        if(Number(number[k]) != Number(number[i + 1])) {
            isItSame = false;
        }
    }

    console.log(isItSame);
    console.log(sum);
}

solve(2222222);