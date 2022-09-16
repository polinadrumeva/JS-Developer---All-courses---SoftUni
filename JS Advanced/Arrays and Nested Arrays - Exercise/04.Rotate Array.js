function rotate(input, numRotation) {
    for(let i = 0; i < numRotation; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2
);

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);