function multiplyTable (input) {
    let number = Number(input[0]);
    let first = number % 10;
    number /= 10;
    let second = number % 10;
    number/= 10
    let third = number % 10;

    for (let i = 1; i <= first; i++) {
        
        for (let j = 1;j <= second; j++) {
            
            for (let k = 1;k <= third; k++) {
                let result = i * j * k;
                    console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }

}

multiplyTable();