function solve(input) {
   
    let number = input.toString();
    let isItSame = true;
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    for(let k = 0; k < number.length; k++) {
        for(let j = 1; j < number.length; j++) {
            if(Number(number[k]) !== Number(number[j])) {
                isItSame = false;
            }
        }
       
    }

    console.log(isItSame);
    console.log(sum);
}

solve(1234);