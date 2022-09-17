function sorting(input) {
    let array = input.sort((a,b) => a-b);
    let result = [];
    for(let i = 0; i < array.length / 2; i++) {
        result.push(array[i]);
        result.push(array[array.length - (i+ 1)]);
    }
   
    return result;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);