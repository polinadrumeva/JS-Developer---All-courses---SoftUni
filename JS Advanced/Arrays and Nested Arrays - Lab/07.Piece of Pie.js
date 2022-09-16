function solve(input, first, second) {
    let array = [];
    for(let i = 0; i < input.length; i++) {
        array[i] = input[i];
    }

    let firstIndex = array.indexOf(first);
    let secondIndex = array.indexOf(second);
    let newArr = array.slice(firstIndex, secondIndex + 1);

    return newArr;
    
}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
