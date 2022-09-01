function solve(input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    let sumInverse = 0;
    for(let i = 0; i < input.length; i++) {
        sumInverse += 1 / Number(input[i]);
    }

    let sumConcat = '';
    for(let i = 0; i < input.length; i++) {
        sumConcat += input[i];
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(sumConcat)
}

solve([1, 2, 3]);