function validate(first, second, third, fourth) {
    let x1 = Number(first);
    let y1 = Number(second);
    let x2 = Number(third);
    let y2 = Number(fourth);

    let firstCoordinates = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    if(Number.isInteger(firstCoordinates)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let secondCoordinates = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));
    if(Number.isInteger(secondCoordinates)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let coordinates = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if(Number.isInteger(coordinates)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validate(3, 0, 0, 4);
validate(2, 1, 1, 1);