class VegetableStore {
    constructor (owner, location) {
        this.owner = owner; 
        this.location = location; 
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let products = [];
        for(let i = 0; i < vegetables.length; i++) {
            let currentInfo = vegetables[i].split(' ');
            let typeProduct = currentInfo[0];
            let quantity = Number(currentInfo[1]);
            let price = Number(currentInfo[2]);

            let searcedProduct = this.availableProducts.find(x=> x.typeProduct === typeProduct);
            if(searcedProduct) {
                searcedProduct.quantity += quantity;
                if(searcedProduct.price < price) {
                    searcedProduct.price = price;
                }
            } else {
                this.availableProducts.push({typeProduct, quantity, price});
                products.push(typeProduct);
            }
        }

        return `Successfully added ${products.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for(let i = 0; i < selectedProducts.length; i++) {
            let selected = selectedProducts[i].split(' ');
            let type = selected[0];
            let quantity = selected[1];

            let searcedProduct = this.availableProducts.find(x=> x.typeProduct === type);
            if(!searcedProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if(searcedProduct.quantity <= quantity) {
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let priceForProduct = quantity * searcedProduct.price;
            totalPrice +=priceForProduct;
            searcedProduct.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let searcedProduct = this.availableProducts.find(x=> x.typeProduct === type);
        if(!searcedProduct) {
            throw new Error(`${type} is not available in the store.`);
        }
        if(searcedProduct.quantity < quantity) {
            searcedProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        searcedProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = '';
        result += "Available vegetables:\n";
        let allProducts = this.availableProducts.sort((a,b) => a.price - b.price);
        for (let element of allProducts) {
            result += `${element.typeProduct}-${element.quantity}-$${element.price}\n`;
        }

        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return result.trimEnd();
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));


//  let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//  console.log(vegStore.buyingVegetables(["Okra 1"]));
//  console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//  console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


