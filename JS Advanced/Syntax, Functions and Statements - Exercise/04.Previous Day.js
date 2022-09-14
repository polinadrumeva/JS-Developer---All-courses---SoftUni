function solve(year, month, date) {

    let resultDate = new Date(year, month -1, date);
    resultDate.setDate(resultDate.getDate() - 1);

    console.log(`${resultDate.getFullYear()}-${resultDate.getMonth()+1}-${resultDate.getDate()}`);
    
}

solve(2016, 9, 30);
solve(2016, 10, 1);