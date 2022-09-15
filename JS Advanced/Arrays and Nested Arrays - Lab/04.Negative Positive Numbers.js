function solve(input) {
    let array = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            array.unshift(input[i]);
        } else {
            array.push(input[i]);
        }
    }

    array.forEach(element => {
        console.log(element);
    });
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);