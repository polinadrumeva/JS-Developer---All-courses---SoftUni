class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(array) {
        let result = '';

        for(let i = 0; i < array.length; i++) {
            let currentStock = array[i].split(' ');
            let productName = currentStock[0];
            let productQuantity = currentStock[1];
            let productTotalPrice = currentStock[2];

            if(this.stockProducts.hasOwnProperty(productName) && productTotalPrice <= this.budgetMoney) {
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                result +=`Successfully loaded ${productQuantity} ${productName}\n`;
            } else if(productTotalPrice <= this.budgetMoney) {
                this.stockProducts[productName] = productQuantity;
                this.budgetMoney -= productTotalPrice;
                result +=`Successfully loaded ${productQuantity} ${productName}\n`;
            } else {
                result += `There was not enough money to load ${productQuantity} ${productName}\n`;
            }
        }

        return result.trimEnd();
    }

    addToMenu(meal, neededProducts, price) {
        if(!this.menu.hasOwnProperty(meal)) {
           for(let i = 0; i < neededProducts.length; i+=2) {
            let currentProduct = neededProducts[i].split(' ');
            let productToMeal = currentProduct[0];
            let quantity = currentProduct[1];
            this.menu[meal] = {productToMeal: quantity, price};
           }
          
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        let meals = Object.getOwnPropertyNames(this.menu);
        if(meals.length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${meals.length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        let meals = Object.getOwnPropertyNames(this.menu);
        let result = '';
        if (meals.length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            for (let meal of Object.keys(this.menu)) {
                let currentPrice = this.menu[meal].price;
                result += `${meal} - $${currentPrice}\n`;
            }
        }

        return result.trimEnd();
    }

    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (let product of this.menu[meal].neededProducts) {
            if(!this.showTheMenu.hasOwnProperty(product)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (let product of this.menu[meal].neededProducts) {
            if(this.stockProducts.hasOwnProperty(product)) {
               this.stockProducts[product] -= product.productQuantity;
            }
        }

        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
