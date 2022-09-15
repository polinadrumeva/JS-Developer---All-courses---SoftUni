function solve(first, second){
    let n = Number(first);
    let k = Number(second);

    let numbers = [1];
    numbers.length = n;

    for(let i = 1; i < n; i++) {
        let currentK = k;
        let currentI = i-1;
        let sum = 0;
        while(currentK > 0) {
            if (currentI < 0) {
                break;
            }
            sum += numbers[currentI];
            currentK--;
            currentI--;
        }
        
        numbers[i] = sum;
    }

    console.log(numbers);
}

solve(8, 2);
solve(6, 3);