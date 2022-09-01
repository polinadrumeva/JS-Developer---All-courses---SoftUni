function solve(start, end) {
    let startNumber = Number(start);
    let endNumber = Number(end);

    let result = 0;
    for(let i = startNumber; i <= endNumber; i++) {
        result += i;
    }

    console.log(result);
}

solve('-8', '20');