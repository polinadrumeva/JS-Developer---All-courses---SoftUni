function solve(...params) {
    let result = {};
    for (let el of params) {
        console.log(`${typeof(el)}: ${el}`);

        if(!result.hasOwnProperty(typeof(el))) {
            result[typeof(el)] = 0;
        }
        
        result[typeof(el)]++;
    }

    let buff = '';
    for (let [k,v] of Object.entries(result)) {
        buff += `${k} = ${v}\n`;
    }

    console.log(buff);
}

solve('cat', 42, function () { console.log('Hello world!'); });