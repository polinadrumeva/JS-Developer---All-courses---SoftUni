function extract(input) {
    let array = [];
    let biggestNum = input.shift();

    array.push(biggestNum);
    for (num of input) {
        if(num >= biggestNum) {
            array.push(num);
            biggestNum = num;
        }
    }

    return array;
}

extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );

extract([1, 
        2, 
        3,
        4]
     );

 extract([20, 
            3, 
            2, 
            15,
            6, 
            1]
);