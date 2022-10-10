function solve(input) {
 let map = new Map();
 let result = new Map();

 for(let i = 0; i < input.length; i++) {
    let arrArg = input[i].split(' => ');
    if(!map.has(arrArg[0])) {
        map.set(arrArg[0], Number(arrArg[1]));
    } else {
        map[arrArg[0]] += Number(arrArg[1]);
    }

    
    if (map.get(arrArg[0]) >= 1000) {
        result.set(arrArg[0], 0 + parseInt(arrArg[0] / 1000));
        let total = map.get(arrArg[0]);
        let rest = Math.floor(total / 1000);
        result[arrArg[0]] += rest;
        map[arrArg[0]] %= 1000;
    }

 }

for (let [k,v] of result) {
    console.log(`${k} => ${v}`);
}

}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);
console.log('---------------------------');
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);