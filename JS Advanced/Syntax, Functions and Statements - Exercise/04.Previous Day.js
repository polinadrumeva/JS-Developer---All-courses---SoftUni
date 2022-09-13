function solve(first, second, third) {

    let date = new Date(first, second, third);
    date.setDate(date.getDate() - 1);

    return date;
    
}

solve(2016, 9, 30);