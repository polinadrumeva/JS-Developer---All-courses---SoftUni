function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0, 
        flavour: 0
    }

    let recepesEnum = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function inner(input) {
        let action = commandFunc();
        let [command, microelement, quantity] = input.split(' ');
        return action[command](microelement, quantity); 
    }

    function commandFunc() {
        return {
            restock: (microelement, quantity) => {
                store[microelement] += Number(quantity);
                return 'Success';
            } , 
            prepare: (recipe, quantity) => {
                let missing = "";
                let isDone = true;
                let copyStore = JSON.parse(JSON.stringify(store));
                for (let [k,v] of Object.entries(recepesEnum[recipe])) {
                    let neededValue = Number(quantity) * v;
                    
                    if(store[k] < neededValue) {
                        isDone = false;
                        missing = `Error: not enough ${k} in stock`;
                        break;
                    }
                    copyStore[k] -= neededValue;
                }
                if(!isDone) {
                    return missing;
                }
                store = copyStore;
                return 'Success';
            }, 
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }
        }
    }
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 
