function solve(date, year) {
    return new Date(year, date, 0).getDate();

}
console.log(solve(2, 2021));