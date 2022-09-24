function lowest(input) {
    let result = [];
    for (let row of input) {
        let [townName, product, price] = row.split(' | ');
        price = Number(price);

        if(result.hasOwnProperty(product)) {
            let currentTown = result[product][townName];
            let currentPrice = result[product]["price"];
            if(currentPrice > price) {
                result[product] = {townName, price};
            }
           
        } else  {
            result[product] = {townName, price};
        }
    }

    for (let [product, value] of Object.entries(result)) {
            console.log(`${product} -> ${value.price} (${value.townName})`);
        
    }
   
}

lowest(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);

