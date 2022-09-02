function solve(input) {
    let array = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > array[0]) {
            array.push(input[i]);
        } else {
            array.unshift(input[i]);
        }
    }

    array.forEach(element => {
        console.log(element);
    });
}

solve([7, -2, 8, 9]);