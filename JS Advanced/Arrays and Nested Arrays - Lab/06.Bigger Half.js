function solve(input) {
    let array = [];
    for(let i = 0; i < input.length; i++) {
        array[i] = input[i];
    }
    
    let orderArray = array.sort((a,b) => a-b);
    let biggerHalf = orderArray.slice(orderArray.length /2);
    console.log(biggerHalf);
    }
    
    solve([3, 19, 14, 7, 2, 19, 6]);
    solve([4, 7, 2, 5]);