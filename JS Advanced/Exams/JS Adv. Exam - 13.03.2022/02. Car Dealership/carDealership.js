class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$"`;
    }

    sellCar(model, desiredMileage) {
        let searched = this.availableCars.find(x=> x.model === model);
        if(!searched){
            throw new Error(`${model} was not found!`);
        }
            let diff = searched.mileage - desiredMileage;
        if(searched.mileage <= desiredMileage) {

        } else if(diff <= 40) {
            searched.price -= searched.price * 0.05;
        } else if (diff > 40) {
            searched.price -= searched.price * 0.1;
        } 

            this.availableCars.pop(searched);
            let mod = searched.model;
            let horsepower = searched.horsepower;
            let soldPrice = searched.price;
            this.soldCars.push({mod, horsepower, soldPrice});
            this.totalIncome += Math.round(soldPrice,2);
            return `${model} was sold for ${soldPrice,0}$`;
    }

    currentCar() {
        if(this.availableCars.length === 0) {
            return 'There are no available cars';
        } 
        let result = '';
        result += '-Available cars:\n';
        for (let element of this.availableCars) {
            result += `---${element.model} - ${element.horsepower} HP - ${element.mileage.toFixed(2)} km - ${element.price.toFixed(2)}$\n`;
        }

        return result.trimEnd();
    }

    salesReport(criteria) {
        let result = '';
        if(criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        let horsepowerSort = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        let modelSort = this.soldCars.sort((a,b) => a.mod.localeCompare(b.mod));

        if(criteria === 'horsepower') {
            result += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
            result += `-${this.soldCars.length} cars sold:\n`;
            for (let el of horsepowerSort) {
                result += `---${el.mod} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$\n`;
            }
        } else if (criteria === 'model') {
            result += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
            result += `-${this.soldCars.length} cars sold:\n`;
            for (let el of modelSort) {
                result += `---${el.mod} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$\n`;
            }
        }

        return result.trimEnd();
    }
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

