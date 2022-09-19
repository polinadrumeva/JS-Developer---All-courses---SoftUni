function solve(input) {
    let towns = {};
    for (const info of input) {
        let infoArray = info.split(' <-> ');
        let town = infoArray[0];
        let population = Number(infoArray[1]);

        if(!towns[town]){
            towns[town] = 0;
        }
        towns[town] += population;
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);