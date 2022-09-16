function print(input, steps) {
    let array = [];
    let step = Number(steps);
    for(let i = 0; i < input.length; i+= step) {
        array.push(input[i]);
    }

    return array;
}

print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

print(['dsa',
'asd', 
'test', 
'tset'], 
2
);

print(['1', 
'2',
'3', 
'4', 
'5'], 
6
);