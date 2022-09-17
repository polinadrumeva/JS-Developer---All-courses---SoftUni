function magic(input) {
    let sum = 0;
    let rowSum = 0;
    let length = input.length;
    let isMagic = false;
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            sum += input[i][j];

        }
    }

    for(let k = 0; k < input[0].length; k++) {
        rowSum += input[0][k];

    }

    if (sum / length == rowSum) {
        isMagic = true;
    }

    console.log(isMagic);

}

magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

   magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

   magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );