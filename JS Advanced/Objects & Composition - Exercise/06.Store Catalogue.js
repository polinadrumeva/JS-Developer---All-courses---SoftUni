function store(input) {
    input.sort();
 
    let lastLetter;
    while(input.length!=0){
        if(input[0][0]!=lastLetter){
            lastLetter = input[0][0];
            console.log(lastLetter);
        }
        let [product, price]= input.shift().split(" : ");
        console.log(`  ${product}: ${price}`);
    }
}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

