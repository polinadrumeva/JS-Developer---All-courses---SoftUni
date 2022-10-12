function solve (input) {
    let cars = new Map();
    for(let i = 0; i < input.length; i++) {
        let args = input[i].split(' | ');
        let brand = args[0];
        let model = args[1];
        let producedCars = Number(args[2]);

        if(!cars.has(brand)) {
            cars.set(brand, new Map());
        } 
        let maps = cars.get(brand);
        if (!maps.has(model)) {
            maps.set(model, 0);
        }
        
        maps.set(model, maps.get(model) + producedCars);
        
    }

    for (let key of cars.keys()) {
        console.log(key);
        let maps = cars.get(key);
        for (let model of maps.keys()) {
            console.log(`###${model} -> ${maps.get(model)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q7 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);