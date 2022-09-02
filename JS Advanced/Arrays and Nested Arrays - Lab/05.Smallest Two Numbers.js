function solve(input) {
let array = [];
for(let i = 0; i < input.length; i++) {
    array[i] = input[i];
}

let orderArray = array.sort((a,b) => a-b);
let smallestNumber = orderArray.slice(0,2);
console.log(smallestNumber.join(' '));
}

solve([30, 15, 50, 5]);