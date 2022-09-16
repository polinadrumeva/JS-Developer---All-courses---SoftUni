function addRemove(input) {
    let numbers = [];
    let count = 1;
    for(let i = 0; i < input.length; i++) {
        if(input[i] === 'add') {
            numbers.push(count++);
        } else if (input[i] === 'remove') {
            numbers.pop(count++);
        }
    }

    if(numbers.length == 0) {
        console.log('Empty');
    } else {
        console.log(numbers.join("\r\n"));
    }
}

addRemove(['add', 
'add', 
'add', 
'add']
);

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);

addRemove(['remove', 
'remove', 
'remove']
);