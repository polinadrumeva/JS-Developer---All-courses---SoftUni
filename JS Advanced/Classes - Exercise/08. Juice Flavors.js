function solve(input) {
 let objInput = {};
 let result = {};

 for(let i = 0; i < input.length; i++) {
    let arrArg = input[i].split(' => ');
    if(!objInput.hasOwnProperty(arrArg[0])) {
        objInput[arrArg[0]] = Number(arrArg[1]);
    } else {
        objInput[arrArg[0]] += Number(arrArg[1]);
    }

    if (!result.hasOwnProperty(arrArg[0]) && objInput[arrArg[0]] >= 1000) {
        result[arrArg[0]] = parseInt(objInput[arrArg[0]] / 1000);
        objInput[arrArg[0]] %= 1000;
    } else if (result.hasOwnProperty(arrArg[0]) && objInput[arrArg[0]] >= 1000) {
        result[arrArg[0]] += parseInt(objInput[arrArg[0]] / 1000);
        objInput[arrArg[0]] %= 1000;
    }}

    for (let [k,v] of Object.entries(result)) {
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