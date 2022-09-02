function solve(input) {
    let array = [];
    for (let i = 1; i < input.length; i+=2) {
        array.push(input[i]);
    }

    let newArr = array.map(x => x * 2).reverse();

    console.log(newArr.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);